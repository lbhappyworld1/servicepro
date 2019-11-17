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
    //查询当前用户创建的班级列表信息
    var createuser = this.req.session.userId ;
    sails.log.info('view classroom manager...enter user id:'+createuser);
    var classrooms = await ClassRoom.find({
      createByuserId: createuser,
    });
    return {
      result:classrooms
    };

  }


};
