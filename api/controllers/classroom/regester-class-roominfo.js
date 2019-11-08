module.exports = {


  friendlyName: 'create class room',


  description: 'create a class room  for manager.',

  //创建班级并同步到数据库
  extendedDescription: `create class room and sync to db.`,

  inputs: {
    formdata: {
      required: false,
      type: 'string',
      example: 'formdata',
      description: 'The user\'s class room name.',
    },
    classroomid:{
      required: false,
      type: 'string',
      example: 'classroomid',
      description: 'The classroom\'s id.',
    }

  },
  exits: {

    success: {
      description: 'create class success.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.'
    },
    alreadyInUse: {
      statusCode: 200,
      description: 'The provided email address is already in use.',
      responseType: 'badRequest',
    },

  },
  fn: async function (inputs) {
 // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    sails.log.info('update class rooms:....'+JSON.stringify(inputs));
    // var createuser = this.req.session.userId ;
    // sails.log.info('create class room...enter user id:'+createuser);
    //ClassRoomRegesterUser
    var querydata = JSON.parse(inputs.formdata);
    var classroomid = inputs.classroomid;
    querydata.classroomid = classroomid

    var ruser = await ClassRoomRegesterUser.findOne({
      userCard: querydata.userCard,
    });
    if(!ruser){
      await ClassRoomRegesterUser.create(_.extend(querydata))
    }else{
      // throw 'alreadyInUse';
      return {error:2}
    }

    // .intercept('E_UNIQUE', 'emailAlreadyInUse')
    // .intercept({name: 'UsageError'}, 'invalid')
    // .fetch();

    // await ClassRoom.updateOne({id: inputs.classroomid})
    //   .set({
    //     classroominfo:inputs.classroominfo
    //   });

  }


}