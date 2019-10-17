module.exports = {


  friendlyName: 'open datepicker',


  description: 'open datepicker.',


  extendedDescription: 'To ease testing and development, if the provided "to" email address ends in "@example.com", '+
    'then the email message will be written to the terminal instead of actually being sent.'+
    '(Thanks [@simonratner](https://github.com/simonratner)!)',



  exits: {

    success: {
      outputFriendlyName: 'Email delivery report',
      outputDescription: 'A dictionary of information about what went down.',
      outputType: {
        loggedInsteadOfSending: 'boolean'
      }
    }

  },


  fn: async function (inputs, exits) {
    var datetime = require('jquery-datetimepicker');
    console.log("enter.l......")
    datetime.datetimepicker.setLocale('en');
    return exits.success;
  }

};
