/* eslint-disable max-nested-callbacks */
import { init } from './main';

describe('main', () => {
  test('init exists', () => expect(init()).toEqual(true));
});
