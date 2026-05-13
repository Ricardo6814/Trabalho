const validaLogin = require('./funtion');

test('Teste LOGIN', () => {
    expect(validaLogin('admin' , '123')).toBe(true);
});