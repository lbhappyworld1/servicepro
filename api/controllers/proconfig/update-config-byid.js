module.exports = {


  friendlyName: 'update config by id ',


  description: 'update config .',

  //创建班级并同步到数据库
  extendedDescription: `create class room and sync to db.`,

  inputs: {
    keyid: {
      required: true,
      type: 'string',
      example: 'coifnig obj id ',
      description: 'config obj id.',
    },
    itemvalue:{
      required: true,
      type: 'string',
      example: 'config obj vaule',
      description: 'config obj vaule.',
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
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },
  fn: async function (inputs) {
 // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    sails.log.info('update class rooms:....'+JSON.stringify(inputs));
    // var createuser = this.req.session.userId ;
    // sails.log.info('create class room...enter user id:'+createuser);
    // var newClassroom = await ClassRoom.create(_.extend({
    //   classromName: inputs.classromName,
    //   // emailAddress:"112@test.com",
    //   priceName: inputs.priceName,
    //   signupStart: inputs.signupStart,
    //   signupEnd: inputs.signupEnd,
    //   personLiable:inputs.personLiable,
    //   classstate:inputs.classstate,
    //   createByuserId:createuser,
    // }))
    // .intercept('E_UNIQUE', 'emailAlreadyInUse')
    // .intercept({name: 'UsageError'}, 'invalid')
    // .fetch();

    await ConfigItem.updateOne({id: inputs.keyid})
      .set({
        itemval:inputs.itemvalue
      });

  }


}