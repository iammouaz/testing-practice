const {capitalize} = require('./capitalize');

describe('Capitalize Text', () =>{
    test('Change (moaz) to (Moaz)', () => 
    expect(capitalize('moaz')).toBe('Moaz'))
});