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
        role.belongsToMany(models.permission, { through: "roles_permissions" });
        role.hasMany(models.user);
        role.belongsToMany(models.venue, { through: "roles_venues" });
    };
    return role;
};
