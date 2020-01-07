module.exports = {


  friendlyName: 'wxtoken',


  description: 'wxtoken this app.',


  extendedDescription:
    `This action deletes the \`req.session.userId\` key from the session of the requesting user agent.
Actual garbage collection of session data depends on this app's session store, and
potentially also on the [TTL configuration](https://sailsjs.com/docs/reference/configuration/sails-config-session)
you provided for it.

Note that this action does not check to see whether or not the requesting user was
actually logged in.  (If they weren't, then this action is just a no-op.)`,

  inputs: {

    menutxt: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },
  },
  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged out.',

    },

    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging out from a web browser, the user is redirected away.',
      responseType: 'redirect'
    },
    resultback: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'json'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }

  },


  fn: async function (inputs, exits) {
    sails.log.info('menutxt enter...');
    const axios = require('axios')
    
    sails.log.info('menutxt enter:' + JSON.stringify(inputs));

    var wxtokent = await axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd01fdc34cb1cce99&secret=4625eb509f588c33e5f6c080a60c577b')
    sails.log.info('menutxt enter:' + JSON.stringify(wxtokent.data));
    var userinfo = await axios.post('https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+wxtokent.data.access_token,{
      data:{body:inputs.menutxt}
    })
    
    sails.log.info('menutxt enter:' + JSON.stringify(userinfo.data));
    return exits.success({success:true});
  }


};
