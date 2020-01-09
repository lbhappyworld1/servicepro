/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    keyword:{
      type: 'string',
      unique: false,
      example: 'env,cus'
    },
    keyvalue:{
      type: 'string',
      columnType: 'varchar(3000)',
      unique: false,
      example: 'env,cus'
    },
    description: {
      type: 'string',
      required: false,
      unique: false,
      maxLength: 200,
      example: 'Person_liable'
    }
  },


};
