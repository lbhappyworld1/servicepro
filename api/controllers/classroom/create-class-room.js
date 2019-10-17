module.exports = {


  friendlyName: 'create class room',


  description: 'create a class room  for manager.',


  extendedDescription: `创建班级并同步到数据库`,

  inputs: {
    classromName: {
      required: true,
      type: 'string',
      example: 'classroomTest',
      description: 'The user\'s class room name.',
    },

    priceName: {
      required: true,
      type: 'string',
      example: 'passwordlol',
      description: 'class room price.'
    },

    signupStart: {
      required: true,
      type: 'string',
      example: '2019/10/16 13:36',
      description: '任务开始时间.',
    },

    signupEnd: {
      required: true,
      type: 'string',
      example: '2019/10/16 13:36',
      description: '任务结束时间.',
    },

    personLiable: {
      required: true,
      type: 'string',
      example: '2019/10/16 13:36',
      description: '任务结束时间.',
    },

    classstate: {
      required: true,
      type: 'string',
      example: '2019/10/16 13:36',
      description: '任务结束时间.',
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
    
    var createuser = this.req.session.userId ;
    sails.log.info('create class room...enter user id:'+createuser);
    var newClassroom = await ClassRoom.create(_.extend({
      classromName: inputs.classromName,
      // emailAddress:"112@test.com",
      priceName: inputs.priceName,
      signupStart: inputs.signupStart,
      signupEnd: inputs.signupEnd,
      personLiable:inputs.personLiable,
      classstate:inputs.classstate,
      createByuserId:createuser,
    }))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();

  }


}