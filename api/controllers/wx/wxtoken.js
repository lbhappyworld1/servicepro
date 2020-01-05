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
    sails.log.info('wxtokeninfo enter2:' + JSON.stringify(this.req.body));
    // var buffer = [];
    // this.req.on('data', function (data) {
    //   buffer.push(data);
    //   sails.log.info('wxtokeninfo enter3:' + buffer);
    // });

    // this.req.on('end', function (data) {
    //   sails.log.info('wxtokeninfo enterend:' + data);
    // });
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
    sails.log.info('shasum:' + shasum);
    sails.log.info('signature:' + signature);
    sails.log.info('signature:' + signature);
    sails.log.info('wxtokeninfo:' + result);
    if(shasum === signature){
      var ismessage = this.req.body.xml;
      if(ismessage){
        var eventme  = ismessage.event;
        var fuser  = ismessage.fromusername;
        var touser = ismessage.tousername;
        var ticket = ismessage.ticket;
        var tkey = ismessage.eventkey;
        var ttype;
        sails.log.info('ticket:' + JSON.stringify(ismessage));
        if(tkey && tkey.toString().indexOf("_")!=-1){
          tkey = tkey.toString().split("_")[1];
          ttype = tkey.toString().split("_")[0];
        }
        
        sails.log.info('tkey:' + tkey );
        sails.log.info('tkey:' + tkey.toString().indexOf("qrscene") );

        var classrooms = await ClassRoom.find({
          id: tkey,
        }).limit(1);
       sails.log.info('classrooms:' + JSON.stringify(classrooms));
        var classroomsid = classrooms[0].id;
        // sails.log.info('classrooms:' + JSON.stringify(classrooms));
        // sails.log.info('id:' + classrooms[0].id);
        sails.log.info('classromName:' + classrooms[0].classromName);
        
        var msg = "你好 欢迎加入班级 "+ classrooms[0].classromName+"\n<a href='http://www.911sc.cn/classroom/registeruser?classromId="+classroomsid+"'>进入班级</a>";
        sails.log.info('ttype:' + ttype);
        if(ttype && ttype=="signin"){
           msg = "您好,"+classrooms[0].classromName+" 签到成功."
        }
        //关注 和 已关注
        if(eventme=="subscribe" || eventme == "SCAN"){
            var mesg = `<xml>
            <ToUserName><![CDATA[${fuser}]]></ToUserName>
            <FromUserName><![CDATA[${touser}]]></FromUserName>
            <CreateTime>12345678</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[${msg}]]></Content>
          </xml>`
          sails.log.info('wxtokeninfo333:' + mesg);



            return exits.success(mesg)
        }
      }
    }
    sails.log.info('wxtokeninfo end:' + JSON.stringify(inputs));
    return exits.success(result);
  }


};
