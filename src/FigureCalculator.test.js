const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator();

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
});

describe('A calculateRectanglePerimeter function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
  });

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(null, 2)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
  });

  it('should return correct value based on rectangle perimeter formula', () => {
    // Arrange
    const length = 20;
    const width = 10;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const spyMulitply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectanglePerimeter(length, width);

    // Assert
    expect(result).toEqual(60); // 2 x (length + width)
    expect(spyAdd).toHaveBeenCalledWith(length, width);
    expect(spyMulitply).toHaveBeenCalledWith(2, 30); // (length + width)
  });
});

describe('A calculateRectangleArea function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(4)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1, 5, 7)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectangleArea(2, false)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea({}, null)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea({}, true)).toThrowError();
  });

  it('should return correct value based on rectangle area formula', () => {
    // Arrange
    const length = 10;
    const width = 5;
    const spyMulitply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectangleArea(length, width);

    // Assert
    expect(result).toEqual(50);
    expect(spyMulitply).toHaveBeenCalledWith(10, 5);
  });
});

describe('A calculateTrianglePerimeter function', () => {
  it('should throw error when not given 3 number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(2)).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(5, 4)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, []));
    expect(() => figureCalculator.calculateTrianglePerimeter(null, false, []));
    expect(() => figureCalculator.calculateTrianglePerimeter(5, 2, {}));
  });

  it('should return correct value based on triangle perimeter formula', () => {
    // Arrange
    const sideA = 5;
    const sideB = 8;
    const base = 10;
    const spyAdd1 = jest.spyOn(MathBasic, 'add');
    const spyAdd2 = jest.spyOn(MathBasic, 'add');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

    // Assert
    expect(result).toEqual(23);
    expect(spyAdd1).toHaveBeenCalledWith(5, 8);
    expect(spyAdd2).toHaveBeenCalledWith(13, 10);
  });
});

describe('A calculateTriangleArea function', () => {
  it('should throw error when not given 2 number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(3)).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(2, 4, 6)).toThrowError();
  });

  it('should throw error when given non-number parameters', () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateTriangleArea(2, true)).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(null, false)).toThrowError();
  });

  it('should return correct value based on triangle area formula', () => {
    // Arrange
    const base = 4;
    const height = 5;
    const spyMulitply = jest.spyOn(MathBasic, 'multiply');
    const spyDivide = jest.spyOn(MathBasic, 'divide');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateTriangleArea(base, height);

    // Assert
    expect(result).toEqual(10);
    expect(spyMulitply).toHaveBeenCalledWith(4, 5);
    expect(spyDivide).toHaveBeenCalledWith(20, 2);
  });
});
