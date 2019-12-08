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

    email: {
      type: 'string',
      required: false,
      unique: false,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },
    workplace: {
      type: 'string',
      description: 'work place.'
    },

    userCard: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      example: '140203198502124714'
    },

    userName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    userphoto:{
      type:'number',
      description: 'persion photo',
      example:13823314165
    },

    classroomid:{
      type: 'string',
      required: true,
      description: 'classroom id.',
    },
    qqcode:{
      type: 'string',
      required: false,
      description: 'classroom id.',
    },
    reregion:{
      type: 'string',
      required: false,
      description: 'classroom id.',
    }

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
