module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
        signup_fname: DataTypes.STRING,
        signup_lname: DataTypes.STRING,
        signup_username: DataTypes.STRING,
        signup_email: DataTypes.STRING,
        signup_password: DataTypes.STRING,
        signup_phn: DataTypes.STRING,
    },

    {
      freezeTableName: true,
    }
  );

  return User;
};
