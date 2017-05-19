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
         this.assert.containsText("#href","Login");
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
       //saveScreenshot of dashboard page
       .saveScreenshot('./reports/dashboard.png')
       //click on user profile
       .click('a[class="tm-profile dropdown-toggle"]')
    //click on logout button
   .click('span[translate-once="v2.accounts.logout"]')


       .pause(6000)
       .url(function(result) {
          this.assert.equal(result.value, 'https://devengers.com/', 'user logged');
        })
        //saveScreenshot og login page after logout
        .saveScreenshot('./reports/after_logout.png')
         //signUp user functionality
         //click on login button again
          .click('a[href="/users/sign_in"]')
         .pause(2000)
         //click on SignUp button
         .click('a[href="/users/sign_up"]')
         //saveScreenshot of signup page
         .saveScreenshot('./reports/signUp.png')
         //entering the values on signUp fields

         .setValue('input[id=user_name]',data.signup_name)
         .setValue('input[id=user_email]',data.signup_email)
         .setValue('input[id=user_password]',data.signup_user_password)
         .setValue('input[id= user_password_confirmation]',data.signup_user_password_confirmation)
         .click('div[class="iti-flag "]')
         .pause(2000)
         .click('li[data-country-code="in"]')
         .setValue('input[id="contact-no"]',data.signup_contact_no)
         .click('button[name="button"]')
         .url(function(result) {
              this.assert.equal(result.value, 'https://devengers.com/thank_you', 'signUp Successful');
                   })
         .saveScreenshot('./reports/thank_you.png')
         .pause(5000)
    client.end();
  }
};
