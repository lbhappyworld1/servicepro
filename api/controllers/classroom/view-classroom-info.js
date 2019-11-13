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
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/classroom/classroom-info',
    }

  },

  fn: async function (input) {
    const axios = require('axios')
    // axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd01fdc34cb1cce99&secret=4625eb509f588c33e5f6c080a60c577b')
    // .then(function (response) {
    //   // handle success
    //   console.log("axios.get enter....");
    //   console.log(response.data);
    //   console.log(response.data.access_token);
    //   var token = response.data.access_token;
    //   // https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN
    //   axios.post('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='+token,{"expire_seconds": 1800,"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_str": "www.baidu.com"}}})
    //   .then(function(response2){
    //     console.log(response2);
    //     var ticket  = response2.data.ticket;
    //     axios.get(' https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+ticket)
    //     .then(function(result){
    //       console.log(result);
    //     })
    //   })
    // }).catch(function (error) {
    // // handle error
    // console.log(error);
    // }).then(function () {
    // // always executed
    // });
    if(input.classromId){
      var classrooms = await ClassRoom.findOne({
        id: input.classromId,
      });
      sails.log.info('create class room...enter user id:'+JSON.stringify(classrooms));
      return {
        classroom:classrooms
      }
    }else{
      return {}
    }
    //var greeting = await sails.helpers.openDatepicker();
    //var createuser = this.req.session.userId ;
  }


};
