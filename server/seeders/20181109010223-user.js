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
                    has_tablet: true,
                    has_touchscreen: true,
                    avatar:
                        "https://s3-ap-southeast-2.amazonaws.com/digitalconcierge/cms_users/jbg_logo.png",
                    roleId: 1
                },
                {
                    name: "Holiday Inn",
                    email: "admin@holidayinn.com.au",
                    password: "holiday",
                    has_parent_category: true,
                    active: true,
                    has_tablet: true,
                    has_touchscreen: true,
                    avatar:
                        "https://s3-ap-southeast-2.amazonaws.com/digitalconcierge/cms_users/Holiday_Inn_Logo.png",
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
