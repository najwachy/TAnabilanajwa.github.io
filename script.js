document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    document.body.classList[
      window.pageYOffset > (prevScrollpos || 0) ? "add" : "remove"
    ]("scrolled");
    prevScrollpos = window.pageYOffset;
  };

  const searchForm = document.getElementById("searchForm");
  const resultContainer = document.getElementById("result");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cityName = document.getElementById("cityInput").value;
    const resultMessage = `Maaf, terjadi error saat memproses permintaan ${cityName}.`;

    resultContainer.innerHTML = resultMessage;
  });

  const categorySearch = document.getElementById("category-search");
  categorySearch.addEventListener("input", function () {
    const searchKeyword = categorySearch.value.toLowerCase();
    searchFunction(searchKeyword);
  });
});

function searchFunction(keyword) {
  console.log("Pencarian:", keyword);

  // Implementasikan logika pencarian sesuai kebutuhan
  // Misalnya, Anda dapat menampilkan hasil pencarian di dalam elemen dengan id 'result'
  const resultContainer = document.getElementById("result");
  const searchResults = performSearch(keyword); // Gantilah dengan logika pencarian sesuai kebutuhan
  displaySearchResults(searchResults);
}

function performSearch(keyword) {
  // Implementasikan logika pencarian sesuai kebutuhan
  // Misalnya, Anda dapat melakukan pencarian data di dalam array atau mengambil data dari API
  // Return hasil pencarian
  return ["Hasil 1", "Hasil 2", "Hasil 3"];
}

function displaySearchResults(results) {
  // Implementasikan logika untuk menampilkan hasil pencarian
  // Misalnya, menambahkan hasil pencarian ke dalam elemen dengan id 'result'
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  if (results.length === 0) {
    resultContainer.innerHTML = "Tidak ada hasil ditemukan.";
  } else {
    const ul = document.createElement("ul");
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      ul.appendChild(li);
    });
    resultContainer.appendChild(ul);
  }
}
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("searchInput").value;
    const searchResults = performSearch(searchTerm);

    displaySearchResults(searchResults);
  });

function performSearch(keyword) {
  // Lakukan logika pencarian Anda di sini
  // Contoh sederhana: return daftar hasil pencarian
  return ["Hasil 1", "Hasil 2", "Hasil 3"];
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "Tidak ada hasil ditemukan.";
  } else {
    const ul = document.createElement("ul");
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
  }
}
