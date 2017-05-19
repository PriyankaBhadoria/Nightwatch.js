/* jshint expr: true */
module.exports = {
  tags: ['mobilock'],
  'Demo test mobilock' : function (client) {
     var data = client.globals;
    client
      .url('https://devengers.com/')
      //.assert.containsText("#main", "Login");

      .url(function(result) {
         this.assert.equal(result.value, 'https://devengers.com/', 'user on home page');

	     })

       //home page saveScreenshot
       .saveScreenshot('./reports/home.png')

      .pause(1000)
      .useCss()
      //click on signIn button
      .click('a[href="/users/sign_in"]')
      .pause(2000)
      .url(function(result) {
         this.assert.equal(result.value, 'https://devengers.com/users/sign_in', 'user on login page');
       })
      //login page saveScreenshot
      .saveScreenshot('./reports/login.png')
       .pause(5000)
       // entering the values on email & password
      .setValue('input[id=user_email]',data.username)
      .setValue('input[id=user_password]',data.password)

       .pause(4000)

      //clickk on submit
      .click('button[name=button]')


      .pause(4000)
      .url(function(result) {
         //this.pause(4000)
         this.assert.equal(result.value, 'https://devengers.com/dashboard/devices', 'user on dashboard page');
       })
       //click on view details of device
       .pause(10000)
       .click('a[href="/dashboard/devices/11554"]')

    //  .pause(3000)
      //.click('div[class="chosen-container chosen-container-single"]')
        //click on drop down
      .pause(7000)
     .click('a[class="chosen-single"]')

       // selecting the drop down value
      .click('li[data-option-array-index="3"]')
      //now click on apply button

       .click('button[translate-once="common.apply"]')

      .pause(7000)
      .assert.containsText('#main','Braand 1')
      



      .pause(3000)



    client.end();
  }
};
