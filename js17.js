// Найти ближайшую точку в 2D

export const nearestPoint2D = (center, pointsArr) => {
  const getDistance = (x1, y1, x2, y2) => {
    const x = Math.abs(x2 - x1);
    const y = Math.abs(y2 - y1);
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  const res = [];

  pointsArr.forEach(point => {
    res.push(getDistance(center.x, center.y, point.x, point.y));
  });

  return Math.min.apply(null, res);
};

const points = [
  {x: 4, y: 2},
  {x: 1, y: 6},
  {x: -4, y: 3},
  {x: 1, y: -2},
  {x: 1, y: -1},
];

// console.log(nearestPoint2D({x: 0, y: 0}, points));
