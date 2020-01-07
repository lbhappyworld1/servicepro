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
    const axios = require('axios')
    
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
        //openid
        var fuser  = ismessage.fromusername;
        //微信号
        var touser = ismessage.tousername;
        var ticket = ismessage.ticket;
        var tkey = ismessage.eventkey;
        var ttype;
        var tkeyall = ismessage.eventkey;
        sails.log.info('ticket:' + JSON.stringify(ismessage));
        if(tkey && tkey.toString().indexOf("_")!=-1){
          tkey = tkey.toString().split("_")[1];
          ttype = tkey.toString().split("_")[0];
        }
        
        sails.log.info('tkey:' + tkey );
        sails.log.info('tkey:' + tkey.toString().indexOf("qrscene") );
        sails.log.info('tkey:' + tkeyall.toString().indexOf("CLICK_ABOUT_PZ") );
        //按钮事件点击
        if(tkeyall.toString().indexOf("CLICK_ABOUT_PZ")!=-1){
          var createtime = new Date().getTime();
          var pzkeys = await KeyrelationT.find({
            keyword: "pzabout",
          }).limit(1);

          var pzcontent = {
            title:'璞展学习',
            tdescription:'璞展学习',
            tpicurl:'https://mmbiz.qpic.cn/sz_mmbiz_png/3Y5T7hYGhabBsyFia4UxKRVFic8IqiaS3Vnw2TduepsRAzUBgcBRNWHr7KeFJovHZ6ibEEMHvEt2CkxFWyeXeW8s2A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            turl:'https://mp.weixin.qq.com/s?__biz=MzI5NTY5MDAxMQ==&tempkey=MTA0Ml9sSURlemptOVRUQ3RncjBnbmg0U1pqSmZFcFo1Z0F4dXVwVmNEbkd0Q0dSSU9ya05zLTY0MGJfQ0dQRnBmemd4MHMyVkJvVjFwR0FFLXVnenVLZW5rd0xuWmFYS0xESTRsUE9icmZmQjZ5N0dITG9Pbkp6SmVtdUxmbEFKSmNrSWlqd3BDT0dVUlBTZ0RGN09qSzdvY2lBVkdydnVnOTdyX2ZXOG93fn4%3D&chksm=6c4e8b765b39026020d0c1f18785207f6226efa0930575a164370bea504e5f1550786982fe05#rd',
            btitle:'璞展学习',
            btdescription:'璞展学习',
            btpicurl:'https://mmbiz.qpic.cn/sz_mmbiz_png/3Y5T7hYGhabBsyFia4UxKRVFic8IqiaS3Vnw2TduepsRAzUBgcBRNWHr7KeFJovHZ6ibEEMHvEt2CkxFWyeXeW8s2A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            bturl:'https://mp.weixin.qq.com/s?__biz=MzI5NTY5MDAxMQ==&tempkey=MTA0Ml9sSURlemptOVRUQ3RncjBnbmg0U1pqSmZFcFo1Z0F4dXVwVmNEbkd0Q0dSSU9ya05zLTY0MGJfQ0dQRnBmemd4MHMyVkJvVjFwR0FFLXVnenVLZW5rd0xuWmFYS0xESTRsUE9icmZmQjZ5N0dITG9Pbkp6SmVtdUxmbEFKSmNrSWlqd3BDT0dVUlBTZ0RGN09qSzdvY2lBVkdydnVnOTdyX2ZXOG93fn4%3D&chksm=6c4e8b765b39026020d0c1f18785207f6226efa0930575a164370bea504e5f1550786982fe05#rd',
          }
          if (pzkeys.length==0){
            await KeyrelationT.create(_.extend({
              keyword: "pzabout",
              // emailAddress:"112@test.com",
              keyvalue: JSON.stringify(pzcontent),
              description: "璞展学习文章"
            }))
          }else{
            sails.log.info('pzcontent:' + JSON.stringify(pzkeys[0]));
            pzcontent = JSON.parse(pzkeys[0].keyvalue)
          }

          sails.log.info('pzcontent2:' + typeof(pzcontent));
          var mesg2 = `
            <xml>
              <ToUserName><![CDATA[${fuser}]]></ToUserName>
              <FromUserName><![CDATA[${touser}]]></FromUserName>
              <CreateTime>${createtime}</CreateTime>
              <MsgType><![CDATA[news]]></MsgType>
              <ArticleCount>2</ArticleCount>
              <Articles>
                <item>
                  <Title><![CDATA[${pzcontent.title}]]></Title>
                  <Description><![${pzcontent.tdescription}]]></Description>
                  <PicUrl><![CDATA[${pzcontent.tpicurl}]]></PicUrl>
                  <Url><![CDATA[${pzcontent.turl}]]></Url>
                </item>
                <item>
                  <Title><![CDATA[${pzcontent.btitle}]]></Title>
                  <Description><![CDATA[${pzcontent.btdescription}]]></Description>
                  <PicUrl><![CDATA[${pzcontent.btpicurl}]]></PicUrl>
                  <Url><![CDATA[${pzcontent.bturl}]]></Url>
                </item>
              </Articles>
            </xml>`
          sails.log.info('wxtokeninfo333:' + mesg2);
          return exits.success(mesg2)
        }
        var classrooms = await ClassRoom.find({
          id: tkey,
        }).limit(1);
       if(classrooms.length==0){
        //关注 和 已关注
        if(eventme=="subscribe" || eventme == "SCAN"){

          var toptitleps = await KeyrelationT.find({
            keyword: "pztoptitle",
          }).limit(1);
          var msgtxt;
          if(toptitleps.length==0){
            msgtxt = ` hi~这里是璞展学习
            我们为各大学校和企业提供专业心理服务，解答他们心里的问题。
            而在这里，我们也会用心理学为你解决你在工作中、生活中所遇到的问题。
            从今天开始，广州润心将成为你心灵成长的伴侣，成为为你解决问题的朋友。
            实用简单小测试，了解自己内心的真实想法。
            点进来，看看这里有没有你需要的线下业务。
            如果你有什么想了解的，想聊聊的，欢迎给我们留言`
            await KeyrelationT.create(_.extend({
              keyword: "pztoptitle",
              // emailAddress:"112@test.com",
              keyvalue: msgtxt,
              description: "璞展学习注册回答语句"
            }))
          }else{
            sails.log.info('pzcontent:' + JSON.stringify(toptitleps[0]));
            msgtxt = toptitleps[0].keyvalue
          }
          
          var mesg3 = `<xml>
          <ToUserName><![CDATA[${fuser}]]></ToUserName>
          <FromUserName><![CDATA[${touser}]]></FromUserName>
          <CreateTime>12345678</CreateTime>
          <MsgType><![CDATA[text]]></MsgType>
          <Content><![CDATA[${msgtxt}]]></Content>
        </xml>`
        sails.log.info('wxtokeninfo333:' + mesg3);
        return exits.success(mesg3)
        }
       }
       sails.log.info('classrooms:' + JSON.stringify(classrooms));
        var classroomsid = classrooms[0].id;
        // sails.log.info('classrooms:' + JSON.stringify(classrooms));
        // sails.log.info('id:' + classrooms[0].id);
        sails.log.info('classromName:' + classrooms[0].classromName);
        
        var msg = "你好 欢迎加入班级 "+ classrooms[0].classromName+"\n<a href='http://www.911sc.cn/classroom/registeruser?classromId="+classroomsid+"'>进入班级</a>";
        sails.log.info('ttype:' + ttype);
        sails.log.info('tkey:' + tkeyall.toString().indexOf("signin") );
        if( tkeyall.toString().indexOf("signin")!=-1){
           //获取用户信息https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
           var wxtokent = await axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd01fdc34cb1cce99&secret=4625eb509f588c33e5f6c080a60c577b')
           sails.log.info('userinfo:' + fuser+" "+wxtokent.data.access_token+" "+touser);
           var userinfo = await axios.get('https://api.weixin.qq.com/cgi-bin/user/info?access_token='+wxtokent.data.access_token+'&openid='+fuser+'&lang=zh_CN')
           sails.log.info('userinfo:' + userinfo.toString());
           var userisin = await SigninUser.find(
             {
              openid:userinfo.data.openid,
              classroomid:classroomsid
             }
           )
           if(userisin.length!=0){
            msg = "您好，您已经签过到."
           }else{
            sails.log.info('userinfo:' + userinfo.data.openid);
            sails.log.info('userinfo:' + userinfo.data.unionid);
            sails.log.info('userinfo:' + userinfo.data.nickname);
            sails.log.info('userinfo:' + userinfo.data.errmsg);
            var unionidstr = userinfo.data.unionid
            if(!unionidstr){
              unionidstr = "";
            }
            var suser = await SigninUser.create(_.extend({
              unionid:unionidstr,
              // emailAddress:"112@test.com",
              openid: userinfo.data.openid,//touser[0],
              nickname: userinfo.data.nickname,
              classroomid: classroomsid,
              // personLiable:inputs.personLiable,
              // classstate:inputs.classstate,
              issignin:"Y",
            }))
            msg = "您好,"+userinfo.data.nickname+" "+classrooms[0].classromName+" 签到成功."
           }
           
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
