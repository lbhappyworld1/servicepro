module.exports = {


  friendlyName: 'config Manager',


  description: 'project config.',

  inputs: {
    itemkey: {
      required: false,
      type: 'string',
      example: 'sde415esfsseeds85Seefxd',
      description: 'config item key.',
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/proconfig/config-manager',
    }

  },


  fn: async function (inputs) {
    //var greeting = await sails.helpers.openDatepicker();
    //查询当前用户创建的班级列表信息
    var userid = this.req.session.userId ;
    sails.log.info('config user id:'+userid);
    

    var isSuperAdmin = this.req.me.isSuperAdmin;
    var congiflists = [];
    if(isSuperAdmin){
       congiflists = await ConfigItem.find();
    }else{
      if(inputs.itemkey){
        congiflists = await ConfigItem.find({
          itembyuserid:userid,
          itemkey:inputs.itemkey
        });
      }else{
        congiflists = await ConfigItem.find({
          itembyuserid:userid,
        });
      }
    }
    sails.log.info('config user id:'+congiflists);
    return {
      result:congiflists
    };

  }


};
