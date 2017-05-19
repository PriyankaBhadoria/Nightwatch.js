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
      //SIGNIN FUNCTIONALITY
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
      .url(function(result)
      {

         this.assert.equal(result.value, 'https://devengers.com/dashboard/devices', 'user on dashboard page');
       })
    //    //END SIGNIN FUNCTIONALITY
    //    //DEVICE FUNCTIONALITY
    //    //click on view details of device
    //    .pause(10000)
    //    .click('a[href="/dashboard/devices/11554"]')
    //
    //     //click on drop down
    //   .pause(7000)
    //  .click('a[class="chosen-single"]')
    //
    //    // selecting the drop down value
    //   .click('li[data-option-array-index="3"]')
    //
    //   //now click on apply button
    //   .click('button[translate-once="common.apply"]')
    //
    //   //Matching the brand after applying the brand from device
    //   .pause(7000)
    //   .assert.containsText('#main','Braand 1')
    //   .pause(3000)

      //DEVICE FUNCTIONALITY END
      //BRANDING FUNCTIONALITY
      //Click on BRANDING
      .click('a[href="/dashboard/branding"]')
      .pause(5000)
        //Matching the url,Is user on Branding page
      .url(function(result)
      {

         this.assert.equal(result.value, 'https://devengers.com/dashboard/branding', 'user on branding page');
       })
      .pause(5000)
      //click on Create New brand
      .click('a[href="/dashboard/branding/new"]')
      .pause(5000)
      //Matching the url,Is user on create Branding page
      .url(function(result)
      {

         this.assert.equal(result.value, 'https://devengers.com/dashboard/branding/new', 'user on create branding page');
       })
      .pause(5000)
      //Clearing the Brand name
      .clearValue('#brand-name')
      .pause(5000)

      //Enter the brand-name
      .setValue('input[id="brand-name"]',"testOne")
      .pause(7000)

      //click on image change
      .click('span[ng-if="!vm.colorPaneToggled"]')
      .pause(5000)
      //select the  color
      .click('span[style="background-color: rgb(255, 23, 68);"]')
      .pause(10000)
      //.assert.containsText('#main','PURPLE')

       //uploading image for "Brand Logo"
      // .setValue('small[translate-once="v2.brands.upload_logo"]', require('path').resolve('C:/project/image.png'))
       //.setValue('input[type="file"]', require('path').resolve('C:/project/image.png'))
      // .setValue('input#fileUpload', require('path').resolve(__dirname + 'C:/project/image.png')) // Works
      .setValue('div[ng-model="vm.logoFile"]', __dirname + 'C:/project/image.png')
       .pause(10000)

//



    client.end();
  }
};
