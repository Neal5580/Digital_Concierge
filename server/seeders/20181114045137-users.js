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
                    active: true,
                    roleId: 1,
                    venueId: 2
                },
                {
                    name: "Holiday Inn",
                    email: "admin@holidayinn.com.au",
                    password: "holiday",
                    active: true,
                    roleId: 1,
                    venueId: 1
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};
