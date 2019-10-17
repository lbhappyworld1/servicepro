module.exports = {


  friendlyName: 'View signup',


  description: 'Display "Signup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/signup',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },

  privacy: function (req, res) {
    res.view('pages/entrance/signup', {layout: 'layouts/layout_onbh'})
  },


  fn: async function () {

    if (this.req.me) {
      throw {redirect: '/'};
    }
    // this.res.view('pages/entrance/signup', {layout: 'layouts/layout_onbh'})
    return {};

  }


};
