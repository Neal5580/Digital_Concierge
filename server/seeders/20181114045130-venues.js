"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "venues",
            [
                {
                    name: "Holiday Inn",
                    number_of_users: 5,
                    active: true,
                    has_tablet: true,
                    has_touchscren: true,
                    has_parent_category: false
                },
                {
                    name: "John Batman Group",
                    number_of_users: 5,
                    active: true,
                    has_tablet: true,
                    has_touchscren: true,
                    has_parent_category: true
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("venues", null, {});
    }
};
