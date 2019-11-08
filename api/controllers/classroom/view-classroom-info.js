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
    axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd01fdc34cb1cce99&secret=4625eb509f588c33e5f6c080a60c577b')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
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
