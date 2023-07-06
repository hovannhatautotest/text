export const data_login = {
    username_admin: 'admin@admin.com',
    password_admin: 'Password1!',
    username_manager: 'hodutali_manager@husc.edu.vn',
    password_manager: 'Nhat@01101999',
    username_staff: 'hovannhat@gmail.com',
    password_staff: 'Nhat@01101999',
};
export const data_login_invalid = {
    username1: 'text_user',
    username2: 'text_user@gmail.com',
    password1: 'text',
    password2: 'text_pass',
};
export const expected_login = {
    1: 'Xin vui lòng nhập tên đăng nhập',
    2: 'Xin vui lòng nhập mật khẩu',
    4: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
    8: 'password must be longer than or equal to 6 characters',
    13: 'Xin vui lòng nhập email',
    14: 'Xin vui lòng nhập tối thiểu 6 ký tự!',
};
export const TestCases = {
    1: "Test case 01: Verify that validation text of 'Tên đăng nhập' field display when logging in with 'Tên đăng nhập' field empty",
    2: "Test case 02: Verify that validation text of 'Mật khẩu' field display when logging in with 'Mật khẩu' field empty",
    3: "Test case 03: Verify that validation text of 'Tên đăng nhập' field and 'Mật khẩu' field display when logging in with 'Tên đăng nhập' field and 'Mật khẩu' empty",
    4: "Test case 04: Verify that validation text of 'Tên đăng nhập' field display when logging in with invalid email format.",
    5: "Test case 05: Verify that error message display when logging in with incorrect 'Tên đăng nhập' and correct 'Mật khẩu'",
    6: "Test case 06: Verify that error message display when logging in with correct 'Tên đăng nhập' and incorrect 'Mật khẩu'",
    7: "Test case 07: Verify that error message display when logging in with incorrect 'Tên đăng nhập' and incorrect 'Mật khẩu'",
    8: 'Test case 08: Verify that the error message displays when logging with a Mật khẩu less than 6 characters.',
    9: 'Test case 09: Verify that Admin can successfully login with correct Tên đăng nhập and Mật khẩu',
    10: 'Test case 10: Verify that Manager can successfully login with correct Tên đăng nhập and Mật khẩu',
    11: 'Test case 11: Verify that Staff can successfully login with correct Tên đăng nhập and Mật khẩu',
    12: "Test case 12: Verify that CAN navigate to the 'Quên mật khẩu' page from the link on the Đăng nhập page",
    13: "Test case 13: Verify that validation text of 'Email' field display when Quên mật khẩu with 'Email' field empty",
    14: "Test case 14: Verify that validation text of 'Email' field display when Quên mật khẩu with 'Email' field invalid email format and less than 6 characters.",
    15: "Test case 15: Verify that validation text of 'Email' field display when Quên mật khẩu with 'Email' field invalid email format and greater than 6 characters.",
    16: "Test case 16: Verify that the Quên mật khẩu can be cancel using the 'Hủy' button",
    17: "Test case 17: Verify that the Mật khẩu can be displayed in text format when clicking on the 'Eye' icon.",
    18: 'Test case 18: Verify entered data not showing when Refresh button is clicked',
};
