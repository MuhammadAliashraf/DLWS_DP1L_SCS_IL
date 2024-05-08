const circleCor = [];

function circleIntersect(x0, y0, r0, x1, y1, r1) {
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

const intersectionOdTwoCircle = (circleRadius) => {
  const firstCircle = circleCor[0];
  const secondCircle = circleCor[1];
  const x1 = firstCircle.x;
  const y1 = firstCircle.y;
  const x2 = secondCircle?.x;
  const y2 = secondCircle?.y;

  return circleIntersect(x1, y1, circleRadius, x2, y2, circleRadius);
};

document.addEventListener("click", (e) => {
  var circleRadius = Math.floor(Math.random() * (200 - 50) + 50);
  const x = e.clientX;
  const y = e.clientY;
  circleCor.push({ x, y });

  const totalCircle = document.querySelectorAll(".circle");
  if (totalCircle.length === 2) {
    totalCircle.forEach((e) => {
      document.body.removeChild(e);
      circleCor.shift();
    });
  }
  const circleOne = document.createElement("div");
  circleOne.classList.add("circle");
  circleOne.style.top = y - circleRadius + "px";
  circleOne.style.left = x - circleRadius + "px";
  circleOne.style.width = circleRadius * 2 + "px";
  circleOne.style.height = circleRadius * 2 + "px";
  document.body.appendChild(circleOne);

  const res = intersectionOdTwoCircle(circleRadius);
  console.log("Intersection :",res);
});
