const API_URL = "https://your-deployed-api-url.com"; // change after deploy

async function searchCountry() {
  const name = document.getElementById("countryInput").value;
  if (!name) return alert("Please enter a country name");

  const res = await fetch(`${API_URL}/countries/${name}`);
  const data = await res.json();

  const container = document.getElementById("countryContainer");
  if (data.status === 404) {
    container.innerHTML = "<p>Country not found.</p>";
    return;
  }

  const country = data[0];
  container.innerHTML = `
    <div class="country-card">
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
    </div>
  `;
}
