import React,{useState, useEffect} from "react";
import jsPDF from "jspdf";
import useUserDetailsGetRequest from "../../helpers/useUserDetailsGetRequest";
import "../../styles/subcomponent-style/Invoice.css";
import findGameBySlug from "../../helpers/getGamePropsBySlug";

const Invoice = () => {
  const { data, error } = useUserDetailsGetRequest(
    "http://localhost:5000/api/v1/login"
  );
  if (!error) {
    sessionStorage.setItem("Username Details", JSON.stringify(data));
  }
  const logoBase64 =
    "data:image/png;base64,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";

  const [isInvBtnEnabled, setIsInvBtnEnabled] = useState(false);  
  useEffect(() => {
    // Function to check the sessionStorage value
    const checkPaymentFlag = () => {
      const paymentFlag = sessionStorage.getItem('PaymentFlag');
      setIsInvBtnEnabled(paymentFlag === 'true'); // Check if the value is 'true'
    };

    // Check the flag initially
    checkPaymentFlag();

    // Optional: Add an event listener if you want to listen for changes in sessionStorage
    const handleStorageChange = () => {
      checkPaymentFlag();
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const generatePDF = () => {
    const usernameDetails = JSON.parse(
      sessionStorage.getItem("Username Details")
    );

    const doc = new jsPDF();
    //logo
    doc.addImage(logoBase64, "PNG", 20, 15, 25, 25);
    // Add title
    doc.setFontSize(30);
    doc.text("INVOICE", 140, 30);

    // Add invoice top details 1
    doc.setFontSize(10);
    doc.setFont("Times", "bold");
    doc.text("BILLED TO:", 20, 60);
    doc.setFont("Times", "normal");
    doc.text(
      `${usernameDetails.records[0].signup_fname} ${usernameDetails.records[0].signup_lname}`,
      20,
      67
    );
    doc.text(`+91${usernameDetails.records[0].signup_phn}`, 20, 73);

    // Add invoice top details 2
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    doc.text(
      `Invoice No. ${Math.floor(Math.random() * 90000) + 10000}`,
      155,
      65
    );
    doc.text(`${formattedDate}`, 155, 71);

    // Add table headers
    let yTableDataOffset = 100;
    doc.line(8, yTableDataOffset - 15, 205, yTableDataOffset - 15);
    doc.setFont("Times", "bold");
    doc.setFontSize(10);
    doc.text("Item", 8, 90);
    doc.text("Delivery Address", 70, 90);
    doc.text("Quantity", 145, 90);
    doc.text("Unit Price", 161, 90);
    doc.text("Total", 190, 90);
    doc.setFont("Times", "normal");

    const CartItems = sessionStorage.getItem("CartItems");
    console.log(CartItems);
    let items = [];
    items = JSON.parse(CartItems);

    doc.line(8, yTableDataOffset - 5, 205, yTableDataOffset - 5); //adding horizontal line after table headers

    let totalAmount = 0;
    items.forEach((item, index) => {
      const itemTotal = item.prod_quant * item.product_price;
      totalAmount += itemTotal;
      const gameInfo = findGameBySlug(item.slug, "GameInfo");
      const textArray = doc.splitTextToSize(gameInfo.name, 50);
      console.log(textArray);
      textArray.forEach((line, index) => {
        doc.text(line, 8, yTableDataOffset + index * 4); // Adjust y position based on line index
      });
      doc.text(item.deliveryAddress, 66, yTableDataOffset);
      doc.text(item.prod_quant.toString(), 150, yTableDataOffset);
      doc.text(
        `Rs. ${parseFloat(item.product_price).toFixed(2)}`,
        161,
        yTableDataOffset
      );
      doc.text(`Rs. ${itemTotal.toFixed(2)}`, 185, yTableDataOffset);
      doc.line(8, yTableDataOffset + 6, 205, yTableDataOffset + 6);
      yTableDataOffset += 10;
    });

    // Total Amount Payable
    doc.setFont("Times", "bold");
    doc.setFontSize(16);
    doc.text(`Total: Rs. ${totalAmount}`, 150, yTableDataOffset + 10);
    doc.setFont("Times", "normal");

    //Footer
    doc.setFontSize(14);
    doc.setFont("Times", "italic");
    doc.text("Suvrodip Mukhopadhyay", 150, yTableDataOffset + 140);
    doc.setFont("Times", "normal");
    doc.setFontSize(10);
    doc.text("19A, Uttar Kashtodanga Road", 150, yTableDataOffset + 146);
    doc.text("Kolkata - 700064", 150, yTableDataOffset + 151);

    // Save the PDF
    doc.save("invoice.pdf");
  };
  return (
    <button
      className="btn-proceed-to-payment submitBtn btnDownloadPDF"
      id="btn_invoice_id"
      onClick={generatePDF}
      disabled={!isInvBtnEnabled}
    >
      Download Invoice
    </button>
  );
};

export default Invoice;
