/* eslint-disable max-nested-callbacks */
import { init } from './main';

describe('main', () => {
  test('init exists', () => expect(init()).toEqual(true));
});
function expect(arg0: boolean) {
  throw new Error('Function not implemented.');
}

