

parasails.registerPage('manager-classroom', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    modal: '',
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
    // console.log("sdfsdfsdfsdf.....mounted....")
    // $(function () {
    //   console.log("local:" + moment.locale('zh-cn'))
    //   $('#datetimepicker2').datetimepicker({
    //     locale: moment.locale('zh-cn')
    //   });
    //   $("#datetimepicker2").on("change.datetimepicker", function (e) {
    //     console.log("change......");
    //   });
    // });
    
  },
  mounted: async function () {
    // console.log("sdfsdfsdfsdf.....mounted....")
    //   $('#datetimepicker2').datetimepicker({
    //     locale: moment.locale('zh-cn')
    //   });
    //   $("#datetimepicker2").on("change.datetimepicker", function (e) {
    //     console.log("change......");
    //   });
    //…
    // console.log("sdfsdfsdfsdf.....mounted....")
    // setTimeout(function () {
    //   $(function () {
    //     console.log("local:" + moment.locale('zh-cn'))
    //     $('#datetimepicker2').datetimepicker({
    //       locale: moment.locale('zh-cn')
    //     });
    //     $("#datetimepicker2").on("change.datetimepicker", function (e) {
    //       console.log("change......");
    //     });
    //   });
    // }, 3000);



    // this.$get()('#datetimepicker2').datetimepicker({
    //   locale: moment.locale('zh-cn')
    // });
    // $("#datetimepicker2").on("change.datetimepicker", function (e) {
    //   console.log("change......");
    // });
    // $( "#date" ).datepicker();

    // $('#date').datetimepicker({
    //   format: 'YYYY-MM-DD',
    //   locale: moment.locale('zh-cn'),
    //   defaultDate: "2018-1-1"
    // });


    // $('#date').datetimepicker({
    //     allowTimes:['12:00','13:00','15:00','17:00','17:05','17:20','19:00','20:00'],
    //     step:5
    // });
    console.log("create:");
  },
  //  ╦  ╦╦╦═╗╔╦╗╦ ╦╔═╗╦    ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ╚╗╔╝║╠╦╝ ║ ║ ║╠═╣║    ╠═╝╠═╣║ ╦║╣ ╚═╗
  //   ╚╝ ╩╩╚═ ╩ ╚═╝╩ ╩╩═╝  ╩  ╩ ╩╚═╝╚═╝╚═╝
  // Configure deep-linking (aka client-side routing)
  virtualPagesRegExp: /^\/classroom\/manager\/?([^\/]+)?\/?/,
  afterNavigate: async function (virtualPageSlug) {

    this.loaddatePicker()
    this.loadchoose()

    // `virtualPageSlug` is determined by the regular expression above, which
    // corresponds with `:unused?` in the server-side route for this page.
    console.log('virtualPageSlug：' + virtualPageSlug)
    switch (virtualPageSlug) {
      case 'create':
        this.modal = 'example';
        break;
      default:
        this.modal = '';
    }
  },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    gotoinfo(item){
      console.log()
      var classroomid = item.id;
      var classrelease = item.classroominfo;
      if(classrelease){
        window.location = "/classroom/manager/classroominforelease?classromId="+classroomid;
      }else{
        window.location = "/classroom/manager/classroominfo?classromId="+classroomid;
      }
    
    },
    loaddatePicker: async function () {
      let methis = this;
      $(function () {
        console.log("local:" + moment.locale('zh-cn'))
        var datepicker = $('#datetimepicker2');
        var datepicker_end = $('#datetimepicker3');
        var targetinput = $('#signup-start');
        var targetinput_end = $('#signup-end');
        datepicker.datetimepicker({
          locale: moment.locale('zh-cn')
        });
        datepicker.on("change.datetimepicker", function (e) {
          console.log("change......" + targetinput.val());
          methis.formData.signupStart = targetinput.val();
        });

        datepicker_end.datetimepicker({
          locale: moment.locale('zh-cn')
        });
        datepicker_end.on("change.datetimepicker", function (e) {
          console.log("change......" + targetinput_end.val());
          methis.formData.signupEnd = targetinput_end.val();
        });
      });
    },

    loadchoose: async function () {
      console.log("loadchoose enter.....")
      let methis = this
      $(function () {
        // setTimeout(function () {
        console.log("settimeout....");
        methis.selectList = [" ", "one", "two", "three", "four", "你好", "哈ha ha", "你还 哈"]
        console.log(JSON.stringify(methis.selectList))
        $(function () {
          $('.form-control-chosen').chosen();
          $('#single').change(function () {
            var p1 = $(this).children('option:selected').val();//这就是selected的值  
            methis.formData.personLiable = p1
            console.log("p1:" + p1)
            if (!p1 || p1.trim() == "") {
              methis.formErrors.personLiable = true;
            } else {
              methis.formErrors.personLiable = false;
            }
          })
          $('#single2').change(function () {
            var p1 = $(this).children('option:selected').val();//这就是selected的值  
            methis.formData.classstate = p1
            console.log("p1:" + p1)
            if (!p1 || p1.trim() == "") {
              methis.formErrors.classstate = true;
            } else {
              methis.formErrors.classstate = false;
            }
          })
        })


        // }, 5000);

      })


    },

    indexSelect: async function () {
      console.log("indexSelect enter...")
    },

    clickModalButton: async function () {
      // this.modal = 'example';
      this.goto('/classroom/manager/create');
      // Or, without deep links, instead do:
      // ```
      // this.modal = 'example';
      // ```
    },
    closeExampleModal: async function () {
      this.modal = '';
      this.goto('/classroom/manager');
      // Or, without deep links, instead do:
      // ```
      // this.modal = '';
      // ```
    },
    handleParsingForm: function () {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = this.formData;

      // Validate full name:
      if (!argins.classromName) {
        this.formErrors.classromName = true;
      }

      if (!argins.priceName) {
        this.formErrors.priceName = true;
      }

      console.log("val:" + $('#signup-start').val());
      if (!argins.signupStart) {
        this.formErrors.signupStart = true;
      } else {
        if (this.formErrors.signupStart) {
          this.formErrors.signupStart = false;
        }
      }

      if (!argins.signupEnd) {
        this.formErrors.signupEnd = true;
      } else {
        if (this.formErrors.signupEnd) {
          this.formErrors.signupEnd = false;
        }
      }


      // Validate email:
      // if (!argins.emailAddress || !parasails.util.isValidEmailAddress(argins.emailAddress)) {
      //   this.formErrors.emailAddress = true;
      // }

      // Validate password:
      // if (!argins.password) {
      //   this.formErrors.password = true;
      // }

      // Validate password confirmation:
      // if (argins.password && argins.password !== argins.confirmPassword) {
      //   this.formErrors.confirmPassword = true;
      // }

      // Validate ToS agreement:
      // if (!argins.agreed) {
      //   this.formErrors.agreed = true;
      // }
      if (this.formData.personLiable) {
        // this.formErrors.personLiable = false;
        delete this.formErrors['personLiable']
      } else {
        this.formErrors.personLiable = true;
      }

      if (this.formData.classstate) {
        // this.formErrors.classstate = false;
        delete this.formErrors['personLiable']
      } else {
        this.formErrors.classstate = true;
      }
      console.log("argins.priceName:" + argins.priceName);
      console.log("argins.priceName:" + JSON.stringify(this.formErrors));
      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },
    dataselected: function () {

      // $('#date').datetimepicker();
      console.log("click....")

    },
    changevalue: function (val) {
      console.log("change..." + val)
    },
    submittedForm: async function() {
      console.log("submittedForm enter...")
      if(this.isEmailVerificationRequired) {
        // If email confirmation is enabled, show the success message.
        this.cloudSuccess = true;
      }
      else {
        // Otherwise, redirect to the logged-in dashboard.
        // > (Note that we re-enable the syncing state here.  This is on purpose--
        // > to make sure the spinner stays there until the page navigation finishes.)
        this.syncing = true;
        window.location = '/classroom/manager';
      }
    },
  }
});