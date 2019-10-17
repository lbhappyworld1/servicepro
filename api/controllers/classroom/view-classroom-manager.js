module.exports = {


  friendlyName: 'View Classroom Manager',


  description: 'Manager Classroom page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/classroom/manager-classroom',
    }

  },


  fn: async function () {
    //var greeting = await sails.helpers.openDatepicker();
    var createuser = this.req.session.userId ;
    sails.log.info('create class room...enter user id:'+createuser);
    var classrooms = await ClassRoom.find({
      createByuserId: createuser,
    });


    return {
      result:classrooms
    };

  }


};
