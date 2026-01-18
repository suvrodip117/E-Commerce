import React, { useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import useGetRequestsFromDB from "../helpers/useGetRequestsFromDB";
import findGameBySlug from "./getGamePropsBySlug";
import axios from "axios";
import SuccessMessage from "../components/msg-components/SuccessMessage";
import Invoice from "../components/sub-components/Invoice";

const CartDataTable = () => {
  const [rmvBtnHoveredRow, setRmvBtnHoveredRow] = useState(null);
  const removeBtnCSS = (isHovered) => ({
    marginRight: "30px",
    height: "30px",
    width: "100px",
    border: "0px",
    borderRadius: "8px",
    backgroundColor: isHovered ? "#db4439" : "#c4382d",
    color: "#ffffff",
    boxShadow: isHovered ? "0px 5px 0px #c4382d" : "0px 5px 0px #6e1f19",
    cursor: "pointer",
    transition: "background-color 0.3s ease, boxShadow 0.3s ease",
  });

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Product Image",
      cell: (row) => (
        <img
          src={getProductImgBySlug(row.slug)}
          style={{ width: "100px", height: "auto" }}
        />
      ),
    },
    {
      name: "Product Name",
      selector: (row) => getProductNameBySlug(row.slug),
      sortable: true,
      width: "300px",
    },
    {
      name: "Quantity",
      selector: (row) => row.prod_quant,
      sortable: true,
    },
    {
      name: "Per Unit Price",
      selector: (row) => row.product_price,
      sortable: true,
    },
    {
      name: "Total Price",
      cell: (row) => <strong>{row.prod_quant * row.product_price}</strong>,
    },
    {
      cell: (row, index) => (
        <button
          style={removeBtnCSS(rmvBtnHoveredRow === index)}
          onMouseEnter={() => setRmvBtnHoveredRow(index)}
          onMouseLeave={() => setRmvBtnHoveredRow(null)}
          onClick={() => handleRemoveClick(row, index + 1)}
        >
          Remove
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const [success, setSuccess] = useState(null);
  const handleRemoveClick = async (row, index) => {
    //console.log(row.slug);
    var username = sessionStorage.getItem("userName");
    const response = await axios
      .delete("http://localhost:5000/api/v1/paymentDetails", {
        data: { slug: row.slug, username },
      })
      .catch((err) => {
        if (err && err.response) {
          console.log("Error: ", err);
        }
      });
    if (response && response.data) {
      setSuccess(response.data.message);
      sessionStorage.removeItem("CartItems");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };

  const getProductNameBySlug = (slug) => {
    const gameInfo = findGameBySlug(slug, "GameInfo").name;
    return gameInfo;
  };

  const getProductImgBySlug = (slug) => {
    const gameInfo = findGameBySlug(slug, "LeftPaneImgComp");
    //console.log(gameInfo);
    return gameInfo[0];
  };

  const { data, error } = useGetRequestsFromDB(
    "http://localhost:5000/api/v1/paymentDetails"
  );

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data || !data.records) {
    return <div>Wow so empty...</div>;
  }

  if (data.records) {
    console.log(data.records);
    sessionStorage.setItem("CartItems", JSON.stringify(data.records));
  }
  return (
    <div className="cart-data-table-cont">
      {success ? <SuccessMessage success={success} /> : ""}
      <DataTable
        title={
          <h1
            style={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              fontVariant: "small-caps",
              color: "#10afb3",
              paddingLeft: "30px",
            }}
          >
            Shopping Cart
          </h1>
        }
        columns={columns}
        data={data.records}
        pagination
        highlightOnHover
        pointerOnHover
        actions={<Invoice />}
        selectableRows
        responsive
        paginationPerPage={3}
        paginationRowsPerPageOptions={[3, 6, 12]}
      />
    </div>
  );
};

export default CartDataTable;
