"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    await strapi.admin.services.permission.conditionProvider.register({
      displayName: "Role Matches Country",
      name: "role-matches-country",
      async handler(user) {
        const validCountries = user.roles.map(
          (role) => role.name.split("-")[1]
        );
        console.log(validCountries);
        return {
          country: { $in: validCountries },
        };
      },
    });
  },
};
