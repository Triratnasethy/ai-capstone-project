const test = require('node:test');
const assert = require('node:assert');
const { settingsSchema } = require('./settingsSchema');

test('Valid settings should pass validation', () => {
  const validData = {
    username: 'triratna',
    email: 'test@example.com',
    notifications: true,
  };
  const result = settingsSchema.safeParse(validData);
  assert.strictEqual(result.success, true);
});

test('Invalid email should fail validation', () => {
  const invalidData = {
    username: 'triratna',
    email: 'not-an-email',
    notifications: false,
  };
  const result = settingsSchema.safeParse(invalidData);
  assert.strictEqual(result.success, false);
  assert.strictEqual(result.error.issues[0].message, 'Invalid email address');
});

test('Short username should fail validation', () => {
  const invalidData = {
    username: 'ab',
    email: 'test@example.com',
    notifications: false,
  };
  const result = settingsSchema.safeParse(invalidData);
  assert.strictEqual(result.success, false);
  assert.strictEqual(result.error.issues[0].message, 'Username must be at least 3 characters');
});
