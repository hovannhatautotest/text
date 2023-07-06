/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {
    TestCases,
    data_create_user_invalid,
    expected_create_user,
} from '../../../support/create_user_version_vietnamese';

describe('Verify validation text', () => {
    beforeEach(() => {
        cy.cruduser_version_vietnamese();
    });
    //TEST CASE 01 - BỎ TRỐNG TẤT CẢ
    it(TestCases[1], () => {
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#name_help > .ant-form-item-explain-error').should('have.text', expected_create_user.fullname);
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_create_user.email);
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text', expected_create_user.password);
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should(
            'have.text',
            expected_create_user.retype_password,
        );
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text', expected_create_user.sdt);
        cy.get('#dob_help > .ant-form-item-explain-error').should('have.text', expected_create_user.date_off_birth);
        cy.get('#positionCode_help > .ant-form-item-explain-error').should('have.text', expected_create_user.position);
        cy.get('#startDate_help > .ant-form-item-explain-error').should('have.text', expected_create_user.start_date);
        cy.get('#roleCode_help > .ant-form-item-explain-error').should('have.text', expected_create_user.role);
        cy.wait(5000);
    });

    //TEST CASE 02 - BỎ TRỐNG HỌ VÀ TÊN
    it(TestCases[2], () => {
        cy.get('#name').click();
        cy.get('#email').click();
        cy.get('#name_help > .ant-form-item-explain-error').should('have.text', expected_create_user.fullname);
        cy.wait(2000);
    });

    //TEST CASE 03 - BỎ TRỐNG EMAIL
    it(TestCases[3], () => {
        cy.get('#email').click();
        cy.get('#password').click();
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_create_user.email);
        cy.wait(2000);
    });

    // TEST CASE 04 - NHẬP SAI ĐỊNH DẠNG EMAIL VÀ NHỎ HƠN 6 KÝ TỰ
    it(TestCases[4], () => {
        cy.get('#email').type(data_create_user_invalid.email1);
        cy.get('#password').click();
        cy.get('#email_help > :nth-child(1)').should('have.text', expected_create_user.email1);
        cy.get('#email_help > :nth-child(2)').should('have.text', expected_create_user.email2);
        cy.wait(2000);
    });

    //TEST CASE 05 - NHẬP SAI ĐỊNH DẠNG EMAIL
    it(TestCases[5], () => {
        cy.get('#email').type(data_create_user_invalid.email2);
        cy.get('#password').type(password);
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text', expected_create_user.email);
        cy.wait(2000);
    });

    //TEST CASE 06 - BỎ TRỐNG MẬT KHẨU
    it(TestCases[6], () => {
        cy.get('#password').click();
        cy.get('#retypedPassword').click();
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text', expected_create_user.password);
        cy.wait(2000);
    });

    //TEST CASE 07 - MẬT KHẨU KHÔNG ĐỦ 6 KÝ TỰ
    it(TestCases[7], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type('12345');
        cy.get('#retypedPassword').click();
        cy.get('#password_help > :nth-child(1)').should('have.text', 'Xin vui lòng nhập tối thiểu 6 ký tự!');
        cy.get('#password_help > :nth-child(2)').should('have.text', 'Xin vui lòng nhập tối thiểu 6 ký tự số!');
        cy.wait(2000);
    });

    //TEST CASE 08 - MẬT KHẨU KHÔNG ĐỦ ĐỘ BẢO MẬT
    it(TestCases[8], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type('text_user');
        cy.get('#retypedPassword').click();
        cy.get('#password_help > .ant-form-item-explain-error').should(
            'have.text',
            'Mật khẩu yêu cầu có 8 ký tự trở lên, có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 kí tự đặc biệt',
        );
        cy.wait(2000);
    });

    //TEST CASE 09 - BỎ TRỐNG NHẬP LẠI MẬT KHẨU
    it(TestCases[9], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').click();
        cy.get('#phoneNumber').click();
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should(
            'have.text',
            expected_create_user.retype_password,
        );
        cy.wait(2000);
    });

    //TEST CASE 10 - MẬT KHẨU NHẬP LẠI KHÔNG TRÙNG KHỚP
    it(TestCases[10], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type('Nhat@01101999a');
        cy.get('#phoneNumber').click();
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should(
            'have.text',
            'Hai mật khẩu bạn nhập không nhất quán!',
        );
        cy.wait(2000);
    });

    //TEST CASE 11 - BỎ TRỐNG SỐ ĐIỆN THOẠI
    it(TestCases[11], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').click();
        cy.get('#dob').click();
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text', expected_create_user.sdt);
        cy.wait(2000);
    });

    //TEST CASE 12 - SAI ĐỊNH DẠNG SỐ ĐIỆN THOẠI
    it(TestCases[12], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type('text_user123');
        cy.get('#dob').click();
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text', 'Xin vui lòng chỉ nhập số');
        cy.wait(2000);
    });

    //TEST CASE 13 - NHẬP SỐ ĐIỆN THOẠI > 12 SỐ
    it(TestCases[13], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type('1234567891011');
        cy.get('#dob').click();
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should(
            'have.text',
            'Xin vui lòng nhập tối đa phải có 12 ký tự số!',
        );
        cy.wait(2000);
    });

    //TEST CASE 14 - BỎ TRỐNG NGÀY SINH
    it(TestCases[14], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click();
        cy.get('#positionCode').click();
        cy.get('#dob_help > .ant-form-item-explain-error').should('have.text', expected_create_user.date_off_birth);
        cy.wait(2000);
    });

    //TEST CASE 15 - BỎ TRỐNG VỊ TRÍ
    it(TestCases[15], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        cy.get('#startDate').click().type(start_date).type('{enter}');
        // CHON NGẪU NHIÊN VAI TRÒ
        cy.get('#roleCode').click({ force: true }).wait(5000);
        cy.get('.rc-virtual-list-holder-inner').within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
        cy.get('#idSubmit').click();
        cy.get('#positionCode_help > .ant-form-item-explain-error').should('have.text', expected_create_user.position);
        cy.wait(2000);
    });

    //TEST CASE 16 - BỎ TRỐNG NGÀY BẮT ĐẦU ĐI LÀM
    it(TestCases[16], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        //CHỌN NGẪU NHIÊN VỊ TRÍ
        cy.get('#positionCode').click({ force: true });
        cy.wait(5000);
        cy.get('.rc-virtual-list-holder-inner').within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
        cy.get('#startDate').click();
        cy.get('#roleCode').click();
        cy.get('#startDate_help > .ant-form-item-explain-error').should('have.text', expected_create_user.start_date);
        cy.wait(2000);
    });

    //TEST CASE 17 - BỎ TRỐNG VAI TRÒ
    it(TestCases[17], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        //CHỌN NGẪU NHIÊN VỊ TRÍ
        cy.get('#positionCode').click({ force: true });
        cy.wait(5000);
        cy.get('.rc-virtual-list-holder-inner').within(() => {
            cy.get('.ant-select-item-option-content').then(($list, index) => {
                const randomIndex = Math.floor(Math.random() * $list.length);
                cy.wrap($list[randomIndex]).click({ force: true });
                cy.log(randomIndex);
            });
        });
        cy.get('#startDate').click().type(start_date).type('{Enter}');
        cy.get('#idSubmit').click();
        cy.get('#roleCode_help > .ant-form-item-explain-error').should('have.text', expected_create_user.role);
        cy.wait(2000);
    });
});

describe('Verify error message', () => {
    //TEST CASE 18
    beforeEach(() => {
        cy.cruduser_version_vietnamese();
    });
    it(TestCases[18], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type('staff@gmail.com');
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        //CHỌN NGẪU NHIÊN VỊ TRÍ
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

        cy.get('#startDate').click().type(start_date).type('{Enter}');

        // CHON NGẪU NHIÊN VAI TRÒ
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

        //CHỌN NGẪU NHIÊN NHÓM
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

        //CHỌN NGẪU NHIÊN QUẢN LÝ
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
        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Thất bại');
        cy.xpath('/html/body/div[2]/div/div[2]').should('have.text', 'Email đã được sử dụng');
        cy.wait(2000);
    });
});

describe('Verify create new user successfuly', () => {
    beforeEach(() => {
        cy.cruduser_version_vietnamese();
    });
    //TEST CASE 19
    it(TestCases[19], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        //CHỌN NGẪU NHIÊN VỊ TRÍ
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

        cy.get('#startDate').click().type(start_date).type('{Enter}');

        // CHON NGẪU NHIÊN VAI TRÒ
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

        //CHỌN NGẪU NHIÊN NHÓM
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

        //CHỌN NGẪU NHIÊN QUẢN LÝ
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

        cy.get('#idSubmit').click();
        cy.wait(2000);
        cy.get('#swal2-title').should('have.text', 'Thành công');
        cy.xpath('/html/body/div[2]/div/div[2]').should('have.text', 'Tạo thành công');
        cy.wait(5000);
        const date_off = Math.floor(Math.random() * 16);
        cy.get('#dateLeave').click().clear().type(date_off);
        cy.get('#idSubmit').click();
        cy.wait(6000);
        cy.get('#swal2-title').should('have.text', 'Thành công');
        cy.xpath('/html/body/div[2]/div/div[2]').should('have.text', 'Cập nhật thành công');
        cy.wait(5000);
        cy.get('span[class=""]').eq(0).should('have.text', 'Danh sách');
    });
});

describe('Verify displays the password', () => {
    beforeEach(() => {
        cy.cruduser_version_vietnamese();
    });
    //TEST CASE 20
    it(TestCases[20], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#password').should('have.attr', 'type', 'password');
        cy.get('svg[id="Layer_1"]').eq(6).click();
        cy.get('#password').should('have.attr', 'type', 'text');
    });

    //TEST CASE 21
    it(TestCases[21], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#retypedPassword').should('have.attr', 'type', 'password');
        cy.get('svg[id="Layer_1"]').eq(7).click();
        cy.get('#retypedPassword').should('have.attr', 'type', 'text');
    });
});
describe('Verify refresh page', () => {
    beforeEach(() => {
        cy.cruduser_version_vietnamese();
    });
    //TEST CASE 22
    it(TestCases[22], () => {
        cy.get('#name').type(fullname);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#retypedPassword').type(retype_password);
        cy.get('#phoneNumber').type(sdt);
        cy.get('#dob').click().type(date_of_birth).type('{Enter}');
        //CHỌN NGẪU NHIÊN VỊ TRÍ
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

        cy.get('#startDate').click().type(start_date).type('{Enter}');

        // CHON NGẪU NHIÊN VAI TRÒ
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

        //CHỌN NGẪU NHIÊN NHÓM
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

        //CHỌN NGẪU NHIÊN QUẢN LÝ
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
        cy.reload();
        cy.wait(1000);
        cy.get('#name').should('be.empty');
        cy.get('#email').should('be.empty');
        cy.get('#password').should('be.empty');
        cy.get('#retypedPassword').should('be.empty');
        cy.get('#phoneNumber').should('be.empty');
        cy.get('#dob').should('be.empty');
        cy.get('#positionCode').should('be.empty');
        cy.get('#startDate').should('be.empty');
        cy.get('#roleCode').should('be.empty');
        cy.xpath("//span[text()='Chọn nhóm']").should('have.text', 'Chọn nhóm');
        cy.get('#managerId').should('be.empty');
    });
});
