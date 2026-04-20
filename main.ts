import { series } from "./data.js";

const tableBody = document.getElementById("series-table") as HTMLElement;
const averageElement = document.getElementById("average") as HTMLElement;
const detail = document.getElementById("serie-detail") as HTMLElement;

series.forEach(serie => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${serie.id}</td>
    <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;

  row.addEventListener("click", () => {
    document.querySelectorAll("tr").forEach(r => r.classList.remove("table-active"));
    row.classList.add("table-active");
    mostrarDetalle(serie);
  });

  tableBody.appendChild(row);
});

function mostrarDetalle(serie: any): void {
  detail.innerHTML = `
    <div class="card mt-2" style="width: 18rem;">
      <img src="${serie.image}" 
           class="card-img-top"
           style="height: 200px; object-fit: cover;"
           onerror="this.src='https://via.placeholder.com/300x200'">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank">${serie.link}</a>
      </div>
    </div>
  `;
}

mostrarDetalle(series[0]);

let total = 0;
series.forEach(s => total += s.seasons);

const promedio = total / series.length;

averageElement.innerHTML = `
  <strong>Seasons average: ${Math.round(promedio)}</strong>
`;