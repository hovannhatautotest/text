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
    1: 'Please enter username',
    2: 'Please enter password',
    4: 'Please enter a valid email address!',
    8: 'password must be longer than or equal to 6 characters',
    13: 'Please enter email',
    14: 'Please enter at least 6 characters!',
};
export const TestCases = {
    1: "Test case 01: Verify that validation text of 'Username' field display when logging in with 'Username' field empty",
    2: "Test case 02: Verify that validation text of 'Password' field display when logging in with 'Password' field empty",
    3: "Test case 03: Verify that validation text of 'Username' field and 'Password' field display when logging in with 'Username' field and 'Password' empty",
    4: "Test case 04: Verify that validation text of 'Username' field display when logging in with invalid email format.",
    5: "Test case 05: Verify that error message display when logging in with incorrect 'Username' and correct 'Password'",
    6: "Test case 06: Verify that error message display when logging in with correct 'Username' and incorrect 'Password'",
    7: "Test case 07: Verify that error message display when logging in with incorrect 'Username' and incorrect 'Password'",
    8: 'Test case 08: Verify that the error message displays when logging with a Password less than 6 characters.',
    9: 'Test case 09: Verify that Admin can successfully login with correct Username and Password',
    10: 'Test case 10: Verify that Manager can successfully login with correct Username and Password',
    11: 'Test case 11: Verify that Staff can successfully login with correct Username and Password',
    12: "Test case 12: Verify that CAN navigate to the 'Forgot Password' page from the link on the Login page",
    13: "Test case 13: Verify that validation text of 'Email' field display when Forgot Password with 'Email' field empty",
    14: "Test case 14: Verify that validation text of 'Email' field display when Forgot Password with 'Email' field invalid email format and less than 6 characters.",
    15: "Test case 15: Verify that validation text of 'Email' field display when Forgot Password with 'Email' field invalid email format and greater than 6 characters.",
    16: "Test case 16: Verify that the Forgot Password can be cancel using the 'Hủy' button",
    17: "Test case 17: Verify that the Password can be displayed in text format when clicking on the 'Eye' icon.",
    18: 'Test case 18: Verify entered data not showing when Refresh button is clicked',
};
