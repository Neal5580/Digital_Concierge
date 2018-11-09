"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Yijie SHEN",
                    email: "nealshen@johnbatman.com.au",
                    password: "neal1234",
                    has_parent_category: true,
                    active: true,
                    roleId: 1
                },
                {
                    name: "Holiday Inn",
                    email: "admin@holidayinn.com.au",
                    password: "holiday",
                    has_parent_category: true,
                    active: true,
                    roleId: 2
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};
