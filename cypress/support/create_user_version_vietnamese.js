export const data_create_user = {
    fullname: 'Hồ Văn Nhật',
    email: 'autotest2@gmail.com',
    password: 'Nhat@01101999',
    retype_password: 'Nhat@01101999',
    sdt: '0941225408',
    date_of_birth: '02-10-1999',
    start_date: '05-06-2023',
};
export const data_create_user_invalid = {
    email1: 'text',
    email2: 'text_user',
    email3: 'text_user@gmail.com',
    email_invalid: 'hovannhat@gmail.com',

    password1: 'text',
    password2: 'text_pass',

    retype_password1: 'Nhat@01101999a',

    sdt1: 'text_user123',
    sdt2: '1234567891011',
};
export const expected_create_user = {
    fullname: 'Xin vui lòng nhập họ và tên',
    email: 'Xin vui lòng nhập email',
    password: 'Xin vui lòng nhập mật khẩu',
    retype_password: 'Xin vui lòng nhập nhập lại mật khẩu',
    sdt: 'Xin vui lòng nhập số điện thoại',
    date_off_birth: 'Xin vui lòng chọn ngày sinh',
    position: 'Xin vui lòng chọn vị trí',
    start_date: 'Xin vui lòng chọn ngày đầu đi làm',
    role: 'Xin vui lòng chọn vai trò',

    email1: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
    email2: 'Xin vui lòng nhập tối thiểu 6 ký tự!',

    password1: 'Xin vui lòng nhập tối thiểu 6 ký tự!',
    password2: 'Xin vui lòng nhập tối thiểu 6 ký tự số!',
    password3: 'Mật khẩu yêu cầu có 8 ký tự trở lên, có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 kí tự đặc biệt',

    retype_password1: 'Hai mật khẩu bạn nhập không nhất quán!',

    sdt1: 'Xin vui lòng chỉ nhập số',
    sdt2: 'Xin vui lòng nhập tối đa phải có 12 ký tự số!',

    error_message: 'Email đã được sử dụng',
    successfully_mesage: 'Cập nhật thành công',
};
export const TestCases = {
    1: 'Test case 01: Verify that validation text when create new user with all fields empty',
    2: "Test case 02: Verify that validation text of 'Họ và tên' field display when create new user with 'Họ và tên' field empty",
    3: "Test case 03: Verify that validation text of 'Email' field display when create new user  with 'Email' field empty",
    4: "Test case 04: Verify that the Email field's validation text is displayed when create new user with invalid email format and less than 6 characters long.",
    5: "Test case 05: Verify that the Email field's validation text is displayed when create new user with invalid email format and greater than 6 characters long.",
    6: "Test case 06: Verify that validation text of 'Mật khẩu' field display when create new user  with 'Mật khẩu' field empty",
    7: "Test case 07: Verify that validation text of 'Mật khẩu' field display when create new user  with 'Mật khẩu' field less than 6 characters",
    8: "Test case 08: Verify that validation text of 'Mật khẩu' field display when create new user with 'Mật khẩu' field not enough security",
    9: "Test case 09: Verify that validation text of 'Nhập lại mật khẩu' field display when create new user  with 'Nhập lại mật khẩu' field empty",
    10: "Test case 10: Verify that validation text of 'Nhập lại mật khẩu' field display when create new user  with 'Mật khẩu' and 'Nhập lại mật khẩu' fields is inconsistent",
    11: "Test case 11: Verify that validation text of 'Số điện thoại' field display when create new user  with 'Số điện thoại' field empty",
    12: "Test case 12: Verify that validation text of 'Số điện thoại' field display when create new user  with 'Số điện thoại' field invalid format",
    13: "Test case 13: Verify that validation text of 'Số điện thoại' field display when create new user  with 'Số điện thoại' field more than 12 numbers characters",
    14: "Test case 14: Verify that validation text of 'Ngày sinh' field display when create new user  with 'Ngày sinh' field empty",
    15: "Test case 15: Verify that validation text of 'Vị trí' field display when create new user  with 'Vị trí' field empty",
    16: "Test case 16: Verify that validation text of 'Ngày đầu đi làm' field display when create new user  with 'Ngày đầu đi làm' field empty",
    17: "Test case 17: Verify that validation text of 'Vai trò' field display when create new user  with 'Vai trò' field empty",
    18: 'Test case 18: Verify that error message display when create new user  with Email is already taken',
    19: 'Test case 19: Verify that create new user  is successful when Enter complete information with no already existing on the system',
    20: "Test case 20: Verify that the Mật khẩu can be displayed in text format when clicking on the 'Eye' icon at 'Mật khẩu' field.",
    21: "Test case 21: Verify that the Mật khẩu can be displayed in text format when clicking on the 'Eye' icon at 'Nhập lại mật khẩu' field.",
    22: 'Test case 22: Verify entered data not showing when Refresh with F5 key',
};
