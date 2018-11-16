"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
    up: (queryInterface, Sequelize) => {
        var hash = bcrypt.hashSync("neal1234", saltRounds);
        console.log(hash);

        return queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Yijie SHEN",
                    email: "nealshen@johnbatman.com.au",
                    password: hash,
                    active: true,
                    roleId: 1,
                    venueId: 2
                },
                {
                    name: "Holiday Inn",
                    email: "admin@holidayinn.com.au",
                    password: hash,
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
