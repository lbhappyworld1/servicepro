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

    unionid: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200,
      example: 'o6_bmasdasdsad6_2sgVt7hMZOPfL'
    },

    openid: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M'
    },

    nickname: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'test name'
    },

    classroomid: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'test name'
    },

    issignin: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'Y'
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

  },


};
