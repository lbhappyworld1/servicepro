

parasails.registerPage('config-manager', {
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

    result2: []

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
    console.log("create:" + JSON.stringify(this.result));

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
  //     case 'create':
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
    configadd: function () {
      console.log(JSON.stringify(this.result2))
      this.result2.push({ a: 1, b: 2 })
    },
    handleParsingForm: function () {
      // Clear out any pre-existing error messages.
      return { 'keyid': '', 'itemvalue': '' };
    },
    dataselected: function () {

      // $('#date').datetimepicker();
      console.log("click....")

    },
    changevalue: function (val) {
      console.log("change..." + val)
    },
    submittedForm: async function () {
      console.log("submittedForm enter...")
      if (this.isEmailVerificationRequired) {
        // If email confirmation is enabled, show the success message.
        this.cloudSuccess = true;
      }
      else {
        // Otherwise, redirect to the logged-in dashboard.
        // > (Note that we re-enable the syncing state here.  This is on purpose--
        // > to make sure the spinner stays there until the page navigation finishes.)
        // this.syncing = true;
        // window.location = '/classroom/manager';
      }
    },
    addconfig: function (index) {
      alert(JSON.stringify(index))
      $.ajax({
        type: "POST",
        url: "/api/v1/config-update",
        data: { keyid: '' },
        dataType: "json",
        success: function (data) {
          alert(data)
        },
        fail:function(error){
          alert(error)
        }
      });
    }
  }
});