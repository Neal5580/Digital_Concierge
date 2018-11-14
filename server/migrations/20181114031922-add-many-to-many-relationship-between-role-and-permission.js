"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("roles_permissions", {
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("NOW()")
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("NOW()")
            },
            permissionId: {
                type: Sequelize.INTEGER,
                primaryKey: true,

                /**
                 * ADD FK , But not sure its working or not
                 */
                references: {
                    model: "permissions",
                    key: "id"
                }
            },
            roleId: {
                type: Sequelize.INTEGER,
                primaryKey: true,

                /**
                 * ADD FK , But not sure its working or not
                 */
                references: {
                    model: "roles",
                    key: "id"
                }
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("roles_permissions");
    }
};
