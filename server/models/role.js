"use strict";
module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define(
        "role",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {}
    );
    role.associate = function(models) {
        // associations can be defined here
    };
    return role;
};
