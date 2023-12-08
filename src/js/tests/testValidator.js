import Validator from '../validator';

describe('Validator', () => {
  const validator = new Validator();

  test.each([
    ['user111_use-r', true],
    ['user1234user', false],
    ['123user', false],
    ['user123', false],
    ['-user', false],
    ['user-', false],
    ['_user', false],
    ['user_', false],
    ['u$er', false],
  ])('testing validateUsername function', (username, expected) => {
    const result = validator.validateUsername(username);
    expect(result).toBe(expected);
  });
});