const { stringLength } = require('./stringLength');

describe('String length unit test', () => {
    test('String Length normal test', () => {
      expect(stringLength('123')).toBe(3);
      expect(stringLength('helloworld')).toBe(10);
      expect(stringLength(`Hello. How are you? I'm fine thanks!`)).toBe('String too long');
    });
  });
  
  describe('String length unit test - part 2', () => {
    test('String Length exceptions', () => {
      expect(stringLength('')).toBe('String too short');
    });
  });