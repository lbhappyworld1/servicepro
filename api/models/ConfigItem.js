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
    itemtype:{
      type: 'string',
      unique: false,
      example: 'env,cus'
    },
    itembyuserid:{
      type: 'string',
      unique: false,
      example: 'env,cus'
    },
    itemkey: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'Person_liable'
    },
    itemval: {
      type: 'string',
      required: false,
      description: 'json obj or string'
    },

    itemdes: {
      type: 'string',
      required: false,
      description: 'config descrption',
      example: 'descrption for this key'
    }
  },


};
