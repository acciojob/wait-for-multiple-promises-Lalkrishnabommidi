//your JS code here. If required.
const output = document.getElementById("output");

function createPromise() {
  const delay = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

const promises = [
  createPromise(),
  createPromise(),
  createPromise()
];

const startTime = Date.now();

Promise.all(promises).then((results) => {
  const totalTime = (Date.now() - startTime) / 1000;

  output.innerHTML = "";

  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time}</td>
    `;

    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;

  output.appendChild(totalRow);
});