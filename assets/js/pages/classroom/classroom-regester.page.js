

parasails.registerPage('classroom-regester', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        newobjkey: "",
        newobjvalue: "",
        classroominfoObj: [

        ],
        pageLoadedAt: Date.now(),
        // Form data
        formData: { /* … */ },

        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        formErrors: { /* … */ },

        // Syncing / loading state
        syncing: false,

        // Server error state
        // cloudError: '',

        // Success state when form has been submitted
        cloudSuccess: false,

        selectList: []

    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {
        // Attach any initial data from the server.
        _.extend(this, SAILS_LOCALS);

        // this.$find("#datetimepicker2").datetimepicker({
        //     locale: moment.locale('zh-cn')
        //   });

    },
    created: function () {
        console.log(window.location.href);
        // alert(window.location.href)
        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd01fdc34cb1cce99&redirect_uri=http://www.911sc.cn/classroom/registeruser?classromId=5da6d770fc4a3855c8a49869&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    },
    mounted: async function () {
        
    },
    //  ╦  ╦╦╦═╗╔╦╗╦ ╦╔═╗╦    ╔═╗╔═╗╔═╗╔═╗╔═╗
    //  ╚╗╔╝║╠╦╝ ║ ║ ║╠═╣║    ╠═╝╠═╣║ ╦║╣ ╚═╗
    //   ╚╝ ╩╩╚═ ╩ ╚═╝╩ ╩╩═╝  ╩  ╩ ╩╚═╝╚═╝╚═╝
    // Configure deep-linking (aka client-side routing)
    // virtualPagesRegExp: /^\/classroom\/manager\/?([^\/]+)?\/?/,
    // afterNavigate: async function (virtualPageSlug) {

    //   this.loaddatePicker()
    //   this.loadchoose()

    //   // `virtualPageSlug` is determined by the regular expression above, which
    //   // corresponds with `:unused?` in the server-side route for this page.
    //   console.log('virtualPageSlug：' + virtualPageSlug)
    //   switch (virtualPageSlug) {
    //     case 'hello':
    //       this.modal = 'example';
    //       break;
    //     default:
    //       this.modal = '';
    //   }
    // },
    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
        
        handleParsingForm: function () {
            // Clear out any pre-existing error messages.
            console.log("handleParsingForm....enter_regester");
            return {'formdata':JSON.stringify(this.formData),'classroomid':this.classroom.id};
        },
        cloudError: async function(){
            console.log("ddddd")
        },
        submittedForm: async function(result) {
            console.log("submittedForm enter...regester"+this.result);
            if(result.error){
                alert("已经注册")
            }else{
                alert("注册成功!可以加入QQ群XXXXXXXXX")
            }
            // if(this.isEmailVerificationRequired) {
            //   // If email confirmation is enabled, show the success message.
            //   this.cloudSuccess = true;
            // }
            // else {
            //   // Otherwise, redirect to the logged-in dashboard.
            //   // > (Note that we re-enable the syncing state here.  This is on purpose--
            //   // > to make sure the spinner stays there until the page navigation finishes.)
            // //   this.syncing = true;
            //   window.location = '/classroom/manager';
            // }
          }
    }
});