module.exports = {


  friendlyName: 'View Classroom info',


  description: 'Classroom info.',

  inputs: {
    classromId: {
      required: false,
      type: 'string',
      example: 'sde415esfsseeds85Seefxd',
      description: 'The class Room id.',
    },
    openid: {
      required: false,
      type: 'string',
      example: 'sde415esfsseeds85Seefxd',
      description: 'The class Room id.',
    },
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/classroom/classroom-regester-user',
    }
  },

  fn: async function (input) {
    //window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd01fdc34cb1cce99&redirect_uri=http://www.911sc.cn/classroom/registeruser?classromId=5da6d770fc4a3855c8a49869&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    // http://localhost/classroom/registeruser?classromId=5da6d770fc4a3855c8a49869
    if(input.classromId){
      var classrooms = await ClassRoom.findOne({
        id: input.classromId,
      });
      sails.log.info('create class room...enter user id:'+JSON.stringify(classrooms));
      return {
        classroom:classrooms,
        openid:input.openid
      }
    }else{
      return {}
    }
    //var greeting = await sails.helpers.openDatepicker();
    //var createuser = this.req.session.userId ;
  }


};
