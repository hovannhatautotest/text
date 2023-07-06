/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { TestCases, data_login, data_login_invalid, expected_login } from '../../../support/login_version_english';

describe('Verify validation text', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[1], () => {
        cy.get('#password').type(data_login_invalid.password2);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_login[1]);
    });

    it(TestCases[2], () => {
        cy.get('#email').type(data_login_invalid.username2);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text', expected_login[2]);
    });

    it(TestCases[3], () => {
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_login[1]);
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text', expected_login[2]);
    });

    it(TestCases[4], () => {
        cy.get('#email').type(data_login_invalid.username1);
        cy.get('#password').type(data_login_invalid.password2);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_login[4]);
    });
});

describe('Verify error message', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[5], () => {
        const error_message = 'User' + ' ' + data_login_invalid.username2 + ' ' + 'not found!';
        cy.get('#email').type(data_login_invalid.username2);
        cy.get('#password').type(data_login.password_admin);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Fail');
        cy.get('.swal2-html-container').should('have.text', error_message);
    });

    it(TestCases[6], () => {
        const error_message = 'Invalid credentials for user' + ' ' + data_login.username_admin;
        cy.get('#email').type(data_login.username_admin);
        cy.get('#password').type(data_login_invalid.password2);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Fail');
        cy.get('.swal2-html-container').should('have.text', error_message);
    });

    it(TestCases[7], () => {
        const error_message = 'User' + ' ' + data_login_invalid.username2 + ' ' + 'not found!';
        cy.get('#email').type(data_login_invalid.username2);
        cy.get('#password').type(data_login_invalid.password2);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Fail');
        cy.get('.swal2-html-container').should('have.text', error_message);
    });

    it(TestCases[8], () => {
        cy.get('#email').type(data_login_invalid.username2);
        cy.get('#password').type(data_login_invalid.password1);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Fail');
        cy.get('.swal2-html-container').should('have.text', expected_login[8]);
    });
});

describe('Verify Sign in successfuly', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[9], () => {
        const Notification = 'Success';
        cy.get('#email').type(data_login.username_admin);
        cy.get('#password').type(data_login.password_admin);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', Notification);
        cy.get('.swal2-html-container').should('have.text', Notification);
        cy.wait(2000);
        cy.xpath('/html/body/div[1]/main/div[2]').should('have.text', 'Admin');
        cy.xpath('/html/body/div/main/div[3]/ul/li[1]/div').should('have.text', 'User');
        cy.xpath('/html/body/div[1]/main/div[3]/ul/li[2]/div/div/div[1]').should('have.text', 'Day Off');
        cy.xpath('/html/body/div[1]/main/div[3]/ul/li[3]/div/div/div').should('have.text', 'Setting');
    });

    it(TestCases[10], () => {
        const Notification = 'Success';
        cy.get('#email').type(data_login.username_manager);
        cy.get('#password').type(data_login.password_manager);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', Notification);
        cy.get('.swal2-html-container').should('have.text', Notification);
        cy.wait(2000);
        cy.xpath('/html/body/div[1]/main/div[2]').should('have.text', 'Admin');
        cy.xpath('/html/body/div/main/div[3]/ul/li[1]/div').should('have.text', 'User');
        cy.xpath('/html/body/div[1]/main/div[3]/ul/li[2]/div/div/div[1]').should('have.text', 'Day Off');
        cy.xpath('/html/body/div[1]/main/div[3]/ul/li[3]/div/div/div').should('have.text', 'Setting');
    });

    it(TestCases[11], () => {
        const Notification = 'Success';
        cy.get('#email').type(data_login.username_staff);
        cy.get('#password').type(data_login.password_staff);
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', Notification);
        cy.get('.swal2-html-container').should('have.text', Notification);
        cy.wait(2000);
        cy.xpath('/html/body/div[1]/main/div[2]').should('have.text', 'Admin');
        cy.xpath("//span[text()='Day Off']").eq(1).should('have.text', 'Day Off');
        cy.xpath("//span[text()='Setting']").should('have.text', 'Setting');
        cy.wait(2000);
    });
});

describe('Verify navigate to Forgot password page', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[12], () => {
        cy.get('.text-blue-600').click();
        cy.wait(2000);
        cy.xpath("//h3[text()='Forgot Password']").should('have.text', 'Forgot Password');
    });

    it(TestCases[13], () => {
        cy.get('.text-blue-600').click();
        cy.wait(2000);
        cy.xpath("//button[text()='Send']").click();
        cy.wait(2000);
        cy.get('.ant-form-item-explain-error').should('have.text', expected_login[13]);
    });

    it(TestCases[14], () => {
        const email = 'text';
        cy.get('.text-blue-600').click();
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter email']").type(email);
        cy.xpath("//button[text()='Send']").click();
        cy.wait(2000);
        cy.get('#email_help > :nth-child(1)').should('have.text', expected_login[4]);
        cy.get('#email_help > :nth-child(2)').should('have.text', expected_login[14]);
    });

    it(TestCases[15], () => {
        cy.get('.text-blue-600').click();
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter email']").type(data_login_invalid.username1);
        cy.xpath("//button[text()='Send']").click();
        cy.wait(2000);
        cy.get('.ant-form-item-explain-error').should('have.text', expected_login[4]);
    });

    it(TestCases[16], () => {
        cy.get('.text-blue-600').click();
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter email']").type(data_login_invalid.username2);
        cy.get('.btn-cancel').click();
        cy.xpath("//h2[@class='-intro-x font-bold text-3xl text-white mb-3']").should(
            'have.text',
            'Welcome to Web Member Ari',
        );
        cy.xpath('//h1').should('have.text', 'Sign In');
    });
});

describe('Verify displays the password', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[17], () => {
        cy.get('#email').type(data_login.username_admin);
        cy.get('#password').type(data_login.password_admin);
        cy.get('#password').should('have.attr', 'type', 'password');
        cy.get('svg[id="Layer_1"]').eq(4).click();
        cy.wait(2000);
        cy.get('#password').should('have.attr', 'type', 'text');
        cy.get('svg[id="Layer_1"]').eq(4).click();
        cy.wait(2000);
        cy.get('#password').should('have.attr', 'type', 'password');
    });
});

describe('Verify refresh page', () => {
    beforeEach(() => {
        cy.login_version_english();
    });
    it(TestCases[18], () => {
        cy.get('#email').type(data_login.username_admin);
        cy.get('#password').type(data_login.password_admin);
        cy.reload();
        cy.wait(2000);
        cy.get('#email').should('be.empty');
        cy.get('#password').should('be.empty');
    });
});
