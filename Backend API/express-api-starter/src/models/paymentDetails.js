module.exports = (sequelize, DataTypes) => {
    const GamePaymentDetails = sequelize.define(
      "GamePaymentDetails",
      {
          signup_username: DataTypes.STRING,
          deliveryAddress: DataTypes.STRING,
          slug: DataTypes.STRING,
          payment_method: DataTypes.STRING,
          prod_quant: DataTypes.STRING,
          product_price: DataTypes.STRING,
      },
  
      {
        freezeTableName: true,
      }
    );
  
    return GamePaymentDetails;
  };
  