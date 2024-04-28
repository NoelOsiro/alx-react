import getImmutableObject from '../0-fromjs';

const testObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

describe('getImmutableObject', () => {
  it('converts the object to an immutable Map', () => {
    const immutableMap = getImmutableObject(testObject);
    expect(immutableMap.get('fear')).toBe(true);
    expect(immutableMap.get('smell')).toBe(-1033575916.9145899);
    expect(immutableMap.get('wall')).toBe(false);
    expect(immutableMap.get('thing')).toBe(-914767132);
  });

  it('does not modify the original object', () => {
    const originalObject = { ...testObject };
    getImmutableObject(testObject);
    expect(originalObject).toEqual(testObject);
  });

  // Add more test cases as needed
});
