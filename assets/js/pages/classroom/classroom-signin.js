

parasails.registerPage('classroom-signin', {
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
        cloudError: '',

        // Success state when form has been submitted
        cloudSuccess: false,

        selectList: [],
        qrcode:""

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


    },
    mounted: async function () {
        console.log("mounted:");
        if(Object.keys(this.classroom).length > 0 ){
            var objects = this.classroom.classroominfo
            if(objects){
                this.classroominfoObj = JSON.parse(objects)
            }else{
                this.loaddefault()
            } 
        }
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
        loaddefault(){
            this.classroominfoObj.push({
                key: "培训形式",
                value: "课表11月10日，xxxxx日，xxxxxx日。缺课不超两个半天"
            })
            this.classroominfoObj.push({
                key: "适用人群",
                value: "符合其中一个条件即可1.本科及以上学历的班主任"
            })
            this.classroominfoObj.push({
                key: "师资团队",
                value: " "
            })
            this.classroominfoObj.push({
                key: "培训地点",
                value: "南头小学"
            })
            this.classroominfoObj.push({
                key: "结业方式",
                value: "报名系统如有问题请咨询xxx老师"
            })
        },
        addInfo: function () {
            console.log("add...");
            let addobj = { key: this.newobjkey, value: this.newobjvalue };

            this.classroominfoObj.push(addobj);
            this.newobjkey = "";
            this.newobjvalue = "";
        },
        opendialog() {
            // this.newobj.key = "";
            // this.newobj.value = "";
            console.log("sdfsdfsdfsdfsdf")
        },
        itemchange(item, obj) {
            console.log("change....")
            var valuestr = obj.event.target.value;
            item.value = valuestr;
        },
        reduceclick(item) {
            console.log("reduceclick...." + JSON.stringify(item));
            // var index = _.findIndex(this.classroominfoObj,item);
            // //var arry = _.dropWhile(this.classroominfoObj, item);
            // console.log("reduceclick...."+JSON.stringify(arry));
            // _.pullAt(this.classroominfoObj,index);
            var shallow = _.clone(this.classroominfoObj);

            _.remove(shallow, item);
            this.classroominfoObj = shallow;

            // this.classroominfoObj = arry;
        },
        handleParsingForm: function () {
            // Clear out any pre-existing error messages.
            console.log("handleParsingForm....enter");
            return {'classroominfo':JSON.stringify(this.classroominfoObj),'classroomid':this.classroom.id};
        },
        submittedForm: async function() {
            console.log("submittedForm enter...")
            // if(this.isEmailVerificationRequired) {
            //   // If email confirmation is enabled, show the success message.
            //   this.cloudSuccess = true;
            // }
            // else {
            //   // Otherwise, redirect to the logged-in dashboard.
            //   // > (Note that we re-enable the syncing state here.  This is on purpose--
            //   // > to make sure the spinner stays there until the page navigation finishes.)
            // //   this.syncing = true;
              window.location = '/classroom/manager';
            // }
        },
        qcsignin:async function(){
            console.log("签到")
        }
    }
});