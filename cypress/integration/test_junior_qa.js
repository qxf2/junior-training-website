import ApplyForm from '../support/PageObjects/locators'

describe("Junior QA training Apply", ()=>{
    let userData;
    const applyform = new ApplyForm();
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            userData = data;
            return userData;
        })
    })
    it("Apply form",()=>{
        cy.visit("https://junior-qa-training.qxf2.com")
        applyform.getApply().click();
        applyform.getName().type(userData.name);
        applyform.getEmail().type(userData.email);
        applyform.getPhone().type(userData.phone);
        applyform.getDetails().type(userData.education);
        applyform.clickButton().click()
        cy.rp_screenshot("ClickButton.png")

    })
    it("Look for an email with specific subject ", function () {
        cy.task("gmail:check", {
          options: {
            from: "no-reply@qxf2.com",
            to:"annapoorani@qxf2.com",
            subject: "A candidate showed interest in the junior QA training program",
            include_body:true

          }
        }).then(emails => {
          assert.isAtLeast(
            emails.length,
            1,
            "Expected to find at least one email, but none were found!"
          );
          const emailBodyHtml = emails[0].body.html; //get body
          assert.isTrue(
            emailBodyHtml.indexOf(
              "Name","Email","Phone","Education"
            ) >= 0,
            "Found the email body"
          );
        });
      });
})