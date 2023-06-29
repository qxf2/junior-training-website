class ApplyForm {
    getApply() {
        return cy.get("#apply");
    }
    getName() {
        return cy.get("#name");
    }
    getEmail() {
        return cy.get("#email");
    }
    getPhone() {
        return cy.get("#phone");
    }
    getDetails() {
        return cy.get("#education");
    }
    clickButton() {
        return cy.get("#submit_btn");
    }
}
export default ApplyForm
