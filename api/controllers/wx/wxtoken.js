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

    signature: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: false
    },

    timestamp: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: false
    },

    nonce: {
      description: 'Whether to extend the lifetime of the user\'s session.',
      extendedDescription:
        `Note that this is NOT SUPPORTED when using virtual requests (e.g. sending
requests over WebSockets instead of HTTP).`,
      type: 'string',
      required: false
    },

    echostr: {
      description: 'Whether to extend the lifetime of the user\'s session.',
      extendedDescription:
        `Note that this is NOT SUPPORTED when using virtual requests (e.g. sending
requests over WebSockets instead of HTTP).`,
      type: 'string',
      required: false
    },
    body:{
      description: 'Whether to extend the lifetime of the user\'s session.',
      extendedDescription:
        `Note that this is NOT SUPPORTED when using virtual requests (e.g. sending
requests over WebSockets instead of HTTP).`,
      type: 'string',
      required: false
    }

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
    sails.log.info('wxtokeninfo enter:' + JSON.stringify(inputs));
    sails.log.info('wxtokeninfo enter2:' + this.req);
    var buffer = [];
    this.req.on('data', function (data) {
      buffer.push(data);
      sails.log.info('wxtokeninfo enter3:' + buffer);
    });
    const crypto = require('crypto')
    const { signature, timestamp, nonce, echostr } = inputs
    const token = "metoken"
    let hash = crypto.createHash('sha1')
    const arr = [token, timestamp, nonce].sort()
    hash.update(arr.join(''))
    const shasum = hash.digest('hex')
    let result = false;
    if (shasum === signature) {
      result = inputs.body = echostr
    }
    sails.log.info('wxtokeninfo:' + JSON.stringify(inputs));
    return exits.success(result);
  }


};
