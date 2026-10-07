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

Promise.all(promises).then((results) => {
  output.innerHTML = "";

  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  const total = Math.max(...results);

  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
    <td>Total</td>
    <td>${total.toFixed(3)}</td>
  `;

  output.appendChild(totalRow);
});