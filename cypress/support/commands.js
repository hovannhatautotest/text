// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('login_version_english', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(0).click();
    cy.wait(1000);
});
Cypress.Commands.add('login_version_vietnamese', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(1).click();
    cy.wait(1000);
});
Cypress.Commands.add('cruduser_version_english', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(0).click();
    cy.wait(1000);
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('Password1!');
    cy.get('#idSubmit').click();
    cy.wait(10000);
    // cy.xpath('/html/body/div/main/div[2]/div[2]').click();
    // cy.wait(2000);
    cy.get('.ant-collapse-header').eq(0).click();
    //cy.wait(2000);
    cy.get('.ant-collapse-content-box > ul > :nth-child(2)').click();
});
Cypress.Commands.add('cruduser_version_vietnamese', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(1).click();
    cy.wait(1000);
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('Password1!');
    cy.get('#idSubmit').click();
    cy.wait(10000);
    cy.get('.ant-collapse-header').eq(0).click();
    cy.get('.ant-collapse-content-box > ul > :nth-child(2)').click();
});
Cypress.Commands.add('edit_user_version_vietnamese', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(1).click();
    cy.wait(1000);
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('Password1!');
    cy.get('#idSubmit').click();
    cy.wait(10000);
    cy.get('.ant-collapse-header').eq(0).click();
    cy.get('.sub-menu').eq(0).click();
    cy.wait(6000);
    cy.get('button[title="Sửa"]').then(($list, index) => {
        const randomIndex = Math.floor(Math.random() * $list.length);
        cy.wrap($list[randomIndex]).click({ force: true });
        cy.log(randomIndex);
    });
});
Cypress.Commands.add('edit_user_version_english', () => {
    cy.viewport(1280, 720);
    cy.visit('/auth/login');
    cy.wait(2000);
    cy.get('.ant-select-selection-item').click();
    cy.get('.ant-select-item-option-content').eq(0).click();
    cy.wait(1000);
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('Password1!');
    cy.get('#idSubmit').click();
    cy.wait(10000);
    cy.get('.ant-collapse-header').eq(0).click();
    cy.get('.sub-menu').eq(0).click();
    cy.wait(2000);
    cy.get('button[title="Edit"]').then(($list, index) => {
        const randomIndex = Math.floor(Math.random() * $list.length);
        cy.wrap($list[randomIndex]).click({ force: true });
        cy.log(randomIndex);
    });
});
Cypress.Commands.add('Random_Position', () => {
    cy.get('#positionCode').click({ force: true });
    cy.wait(5000);
    cy.get('.rc-virtual-list-holder-inner').within(() => {
        cy.get('.ant-select-item-option-content')
            .eq(0)
            .then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
    });
});
Cypress.Commands.add('Random_Role', () => {
    cy.get('#roleCode').click({ force: true }).wait(5000);
    cy.get('.rc-virtual-list-holder-inner')
        .eq(1)
        .within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
});
Cypress.Commands.add('Random_Team', () => {
    cy.get('.ant-select-selection-overflow').click({ force: true }).wait(5000);
    cy.get('.rc-virtual-list-holder-inner')
        .eq(2)
        .within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
});
Cypress.Commands.add('Random_Manager', () => {
    cy.get('#managerId').click().wait(5000);
    cy.get('.rc-virtual-list-holder-inner')
        .eq(3)
        .within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
});
Cypress.Commands.add('Random_DayOff', () => {
    const date_off = Math.floor(Math.random() * 16);
    cy.get('#dateLeave').click().clear().type(date_off);
});
