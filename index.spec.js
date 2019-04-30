import { removeSpaces } from './';

describe('Remove Spaces', () => {
  it('Should remove the spaces from the given string', () => {
    const string1 = 'I am Ironman';
    expect(removeSpaces(string1).length).toBe(10);
  });
  it('Should return null if no parameters passed', () => {
    expect(removeSpaces()).toBe(null);
  });
});
