module.exports = {


  friendlyName: 'View Classroom info',


  description: 'Classroom info.',

  inputs: {
    classromId: {
      required: true,
      type: 'string',
      example: 'sde415esfsseeds85Seefxd',
      description: 'The class Room id.',
    },
    isrefresh:{
      required: false,
      type: 'string',
      example: 'Y/N',
      description: 'Y.',
    }
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/classroom/classroom-signin',
    }

  },

  fn: async function (input) {
    const axios = require('axios')
    if (input.classromId) {
      var classrooms = await ClassRoom.findOne({
        id: input.classromId,
      });
      var qrcode;
      if(input.isrefresh=="Y"){
        var wxtokent = await axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd01fdc34cb1cce99&secret=4625eb509f588c33e5f6c080a60c577b')
        var qrcodecreateobj = await axios.post('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=' + wxtokent.data.access_token, { "expire_seconds": 3, "action_name": "QR_STR_SCENE", "action_info": { "scene": { "scene_str":"signin_"+input.classromId } } });
        //var qrcodecreateobj = await axios.post('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=' + wxtokent.data.access_token, { "action_name": "QR_LIMIT_STR_SCENE", "action_info": { "scene": { "scene_str":input.classromId } } });
        qrcode = await axios.get(' https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + qrcodecreateobj.data.ticket);
        
        // await ClassRoom.updateOne({ id: input.classromId })
        // .set({
        //     classroomqrcodeurl:qrcode.config.url,
        //     classroomqrcodeticket:qrcodecreateobj.data.ticket
        // });
        sails.log.info('qrcode:' + qrcode.config.url);
      }
      sails.log.info('qrcodedone:' + qrcode);
      if(qrcode){
        return {
          qrcode: qrcode.config.url
        }
      }else{
        return {}
      }
      
    } else {
      return {}
    }
    //var greeting = await sails.helpers.openDatepicker();
    //var createuser = this.req.session.userId ;
  }


};
