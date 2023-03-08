/**
 * @jest-environment jsdom
 */

import testAddTask from './listTest.js';

describe('Add and Remove <li> inside <ul>', () => {
  test('Add <li>', () => {
    expect(testAddTask('Buy Ferrary')).toBe('<ul><li>Buy Ferrary</li></ul>');
  });
});
