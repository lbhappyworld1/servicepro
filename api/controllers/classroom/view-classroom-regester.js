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
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/classroom/classroom-regester-user',
    }
  },

  fn: async function (input) {
    
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
