const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});

describe('A add function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.add()).toThrowError();
    expect(() => MathBasic.add(1)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    expect(() => MathBasic.add('1', '2')).toThrowError();
    expect(() => MathBasic.add(true, {})).toThrowError();
    expect(() => MathBasic.add(null, false)).toThrowError();
  });

  it('should return a + b when given two numbers parameters', () => {
    expect(MathBasic.add(2, 2)).toEqual(4);
    expect(MathBasic.add(16, 8)).toEqual(24);
    expect(MathBasic.add(3, 7)).toEqual(10);
  });
});

describe('A subtract function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.subtract()).toThrowError();
    expect(() => MathBasic.subtract(2)).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    expect(() => MathBasic.subtract('1', '3')).toThrowError();
    expect(() => MathBasic.subtract(false, {})).toThrowError();
    expect(() => MathBasic.subtract(true, null)).toThrowError();
  });

  it('should return a - b when given two number parameters', () => {
    expect(MathBasic.subtract(2, 1)).toEqual(1);
    expect(MathBasic.subtract(10, 5)).toEqual(5);
    expect(MathBasic.subtract(25, 10)).toEqual(15);
  });
});

describe('A multiply function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.multiply()).toThrowError();
    expect(() => MathBasic.multiply(2)).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    expect(() => MathBasic.multiply('5', '3')).toThrowError();
    expect(() => MathBasic.multiply(false, 2)).toThrowError();
    expect(() => MathBasic.multiply(1, null)).toThrowError();
  });

  it('should return a * b when given two number parameters', () => {
    expect(MathBasic.multiply(5, 2)).toEqual(10);
    expect(MathBasic.multiply(2, 6)).toEqual(12);
    expect(MathBasic.multiply(20, 4)).toEqual(80);
  });
});

describe('A divide function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.divide()).toThrowError();
    expect(() => MathBasic.divide(2)).toThrowError();
    expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
    expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    expect(() => MathBasic.divide('5', '3')).toThrowError();
    expect(() => MathBasic.divide(true, 5)).toThrowError();
    expect(() => MathBasic.divide(true, {})).toThrowError();
  });

  it('should return a / b when given two number parameters', () => {
    expect(MathBasic.divide(10, 5)).toEqual(2);
    expect(MathBasic.divide(6, 2)).toEqual(3);
    expect(MathBasic.divide(100, 20)).toEqual(5);
  });
});
