class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _validate2Args(args) {
    if (args.length !== 2) {
      throw new Error('Fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return args;
  }

  _validate3Args(args) {
    if (args.length !== 3) {
      throw new Error('Fungsi ini hanya menerima tiga parameter');
    }

    const [sideA, sideB, base] = args;
    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
      throw new Error('Fungi ini hanya menerima parameter number');
    }

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._validate2Args(args);

    // Formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._validate2Args(args);

    // Formula: (length + width)
    return (this._mathBasic.multiply(length, width));
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this._validate3Args(args);

    // Formula: ((sideA + sideB) + base)
    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._validate2Args(args);

    // Formula: ((base * height) / 2)
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
