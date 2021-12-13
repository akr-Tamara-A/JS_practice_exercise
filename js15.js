// Найти заданное количество промежуточных цветов

export const gradientSteps = (color1, color2, steps) => {
  const sliceColor = (color) => {
    return {
      r: parseInt(color.slice(1, 3), 16),
      g: parseInt(color.slice(3, 5), 16),
      b: parseInt(color.slice(5), 16),
    };
  }
  const rgb1 = sliceColor(color1);
  const rgb2 = sliceColor(color2);

  let res = [];
  let currentR, currentG, currentB;

  for (let i = 0; i <= steps; i++) {
    currentR = Math.round(rgb1.r + i * (rgb2.r - rgb1.r) / steps);
    currentG = Math.round(rgb1.g + i * (rgb2.g - rgb1.g) / steps);
    currentB = Math.round(rgb1.b + i * (rgb2.b - rgb1.b) / steps);

    res.push(`rgb(${currentR},${currentG},${currentB})`);
  }

  return res;
};

// console.log(gradientSteps('#336699', '#89ef12', 5));
