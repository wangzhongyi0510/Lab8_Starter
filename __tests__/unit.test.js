// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//check phoneNumber
test('858-319-9828 is a correct phone number', () => {
    expect(functions.isPhoneNumber('858-319-9828')).toBe(true);
});

test('626-741-7721 is a correct phone number', () => {
    expect(functions.isPhoneNumber('626-741-7721')).toBe(true);
});

test('15388205510 is not a correct phone number', () => {
    expect(functions.isPhoneNumber('15388205510')).toBe(false);
});

test('110 is not a correct phone number', () => {
    expect(functions.isPhoneNumber('110')).toBe(false);
});

//check email
test('zhw039@ucsd.edu is a correct email', () => {
    expect(functions.isEmail('zhw039@ucsd.edu')).toBe(true);
});

test('664326306@qq.com is a correct email', () => {
    expect(functions.isEmail('664326306@qq.com')).toBe(true);
});

test('www.ucsd.edu is not a correct email', () => {
    expect(functions.isEmail('www.ucsd.edu')).toBe(false);
});

test('www.4399.com is a correct email', () => {
    expect(functions.isEmail('www.4399.com')).toBe(false);
});

//check strong password
test('a1234S is a strong password', () => {
    expect(functions.isStrongPassword('a1234S')).toBe(true);
});
test('asjsjsjd,. is a strong password', () => {
    expect(functions.isStrongPassword('asjsjsjd')).toBe(true);
});
test('12jsjsjsj is not a strong password', () => {
    expect(functions.isStrongPassword('12jsjsjsj')).toBe(false);
});
test('a1234556664332211223334 is not a strong password', () => {
    expect(functions.isStrongPassword('a1234556664332211223334')).toBe(false);
});

//check date
test('01/10/2000 is a date', () => {
    expect(functions.isDate('01/10/2000')).toBe(true);
});
test('05/22/2010 is a date', () => {
    expect(functions.isDate('05/22/2010')).toBe(true);
});
test('01/100/2000 is not a date', () => {
    expect(functions.isDate('01/100/2000')).toBe(false);
});
test('1/2/202 is not a date', () => {
    expect(functions.isDate('1/2/202')).toBe(false);
});

//check hex color

test('#90b7af is a hex color', () => {
    expect(functions.isHexColor('#90ba7f')).toBe(true);
});

test('#8f3d77 is a hex color', () => {
    expect(functions.isHexColor('#8f3d77')).toBe(true);
});

test('#90b7add is a not hex color', () => {
    expect(functions.isHexColor('#90b7add')).toBe(false);
});

test('#8f is a hex color', () => {
    expect(functions.isHexColor('#8f')).toBe(false);
});


















