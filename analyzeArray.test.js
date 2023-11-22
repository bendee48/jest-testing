import analyzeArray from './analyzeArray';

describe("testing public properties", () => {
  const array = [1,2,3,4,5];
  
  it("returns an object with an average property of 3", () => {
    expect(analyzeArray(array)).toHaveProperty('average', 3);
  });
  
  it("returns an object with a min property of 1", () => {
    expect(analyzeArray(array)).toHaveProperty('min', 1);
  });
  
  it("returns an object with a max property 5", () => {
    expect(analyzeArray(array)).toHaveProperty('max', 5);
  });
  
  it("returns an object with a length property of 5", () => {
    expect(analyzeArray(array)).toHaveProperty('length', 5);
  });
});

describe("testing public properties with a differing array set", () => {
  const array2 = [6,7,8,9,10,11];
  
  it("has a correct average property", () => {
    expect(analyzeArray(array2).average).toBe(8.5);
  })
  
  it("has a correct min property", () => {
    expect(analyzeArray(array2).min).toBe(6);
  })
  
  it("has a correct max property", () => {
    expect(analyzeArray(array2).max).toBe(11);
  })
  
  it("has a correct length property", () => {
    expect(analyzeArray(array2).length).toBe(6);
  })
});

describe("testing decimals", () => {
  const array3 = [1.2, 3.3, 4.5, 6.7];
  
  it("has a correct average property for decimals", () => {
    expect(analyzeArray(array3).average).toBe(3.925)
  });
});

describe("testing for non number inputs", () => {
  const array4 = ['hello', 2, 3];
  
  it('throws error if not all array contents are numbers', () => {
    expect(() => { analyzeArray(array4) }).toThrow(Error);
  });
  
  it('throws helpful error message if not all array contents are numbers', () => {
    expect(() => { analyzeArray(array4) }).toThrow('All array items must be numbers.');
  });
});