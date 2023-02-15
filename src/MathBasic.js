const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a + b;
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi subtract hanya menerima dua parameter');
    }

    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a - b;
  },
  multiply: () => {},
  divide: () => {},
};

module.exports = MathBasic;
