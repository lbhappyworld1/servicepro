/**
 * ClassRoom.js
 */


module.exports = {
    attributes: {
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
            required: false,
            type: 'string',
            example: '2019/10/16 13:36',
            description: '任务结束时间.',
          },
      
          classstate: {
            required: false,
            type: 'string',
            example: '2019/10/16 13:36',
            description: '任务结束时间.',
          },

          createByuserId: {
            required: true,
            type: 'string',
            example: 'user db id',
            description: '任务结束时间.',
          },

          classroominfo: {
            required: false,
            type: 'string',
            maxLength: 1000,
            example: '"{a:1}"',
            description: '班级详情json 数据 以key-value{"培训地点":"南头小学"}方式给出',
          },
          classroomqrcodeurl: {
            required: false,
            type: 'string',
            maxLength: 1000,
            example: 'www.xxxxxx.com',
            description: '班级详情json 数据 以key-value{"培训地点":"南头小学"}方式给出',
          },
          classroomqrcodeticket: {
            required: false,
            maxLength: 1000,
            type: 'string',
            example: 'XXXXXXXXX',
            description: 'gQHt8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyYW1jVjBaclpkTTQxMDAwMHcwM0kAAgTBfspdAwQAAAAA',
          }
    },
};