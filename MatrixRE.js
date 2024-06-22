// MATRIX RAIN

// Initialising the canvas
var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(canvas.height)

// Setting up the letters
var letters = 'LOHITMAJUMDERARIJEETPRAMANIKKOMALJAINHEENAMATLANI';
letters = letters.split('');

// Setting up the columns
var fontSize = 13,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    //var text = letters[i];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .99) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 80);


//------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------

//PROPERTY CARDS

var properties = [
  {
    house_number: 'A-15',
    Pincode: 700029,
    Street: 'Gariahat Road',
    City: 'Kolkata',
    Locality: 'Gariahat',
    Area: 1000,
    Bedrooms: 2,
    year_of_construction: 2015,
    Rent: 'yes',
    amount_per_month: 15000
  }, {
    house_number: 'A-2',
    Pincode: 110018,
    Street: 'Vikaspuri Road',
    City: 'South Delhi',
    Locality: 'South Delhi',
    Area: 1000,
    Bedrooms: 1,
    year_of_construction: 2021,
    Sale: 'yes',
    selling_price: 10000000
  }, {
    house_number: 'A-3',
    Pincode: 700019,
    Street: 'Ballygunge Circular Road',
    City: 'Kolkata',
    Locality: 'Ballygunge',
    Area: 950,
    Bedrooms: 2,
    year_of_construction: 2021,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 17000,
    selling_price: 20000000
  }, {
    house_number: 'A-7',
    Pincode: 781005,
    Street: 'Sundarpur Main Road',
    City: 'Guwahati',
    Locality: 'Sundarpur',
    Area: 900,
    Bedrooms: 1,
    year_of_construction: 2023,
    Sale: 'yes',
    selling_price: 8000000
  }, {
    house_number: 'B-303',
    Pincode: 600040,
    Street: 'Kolathur Road',
    City: 'Chennai',
    Locality: 'Anna Nagar',
    Area: 1000,
    Bedrooms: 2,
    year_of_construction: 2015,
    Sale: 'yes',
    selling_price: 9000000
  }, {
    house_number: 'B-501',
    Pincode: 781005,
    Street: 'Dispur Road',
    City: 'Guwahati',
    Locality: 'Dispur',
    Area: 1600,
    Bedrooms: 3,
    year_of_construction: 2016,
    Sale: 'yes',
    selling_price: 12000000
  }, {
    house_number: 'B-601',
    Pincode: 110017,
    Street: 'Rani Laxmi Bai Marg',
    City: 'Delhi',
    Locality: 'Malviya Nagar',
    Area: 1300,
    Bedrooms: 3,
    year_of_construction: 2018,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 25000,
    selling_price: 25000000
  }, {
    house_number: 'B-701',
    Pincode: 781001,
    Street: 'G.S. Road',
    City: 'Guwahati',
    Locality: 'Paltan Bazar',
    Area: 1800,
    Bedrooms: 4,
    year_of_construction: 2017,
    Rent: 'yes',
    amount_per_month: 25000
  }, {
    house_number: 'B-902',
    Pincode: 700019,
    Street: 'Golpark Road',
    City: 'Kolkata',
    Locality: 'Ballygunge',
    Area: 1700,
    Bedrooms: 4,
    year_of_construction: 2020,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 30000,
    selling_price: 30000000
  }, {
    house_number: 'C-101',
    Pincode: 110024,
    Street: 'Nehru Road',
    City: 'Delhi',
    Locality: 'Lajpat Nagar',
    Area: 1200,
    Bedrooms: 2,
    year_of_construction: 2019,
    Sale: 'yes',
    selling_price: 15000000
  }, {
    house_number: 'C-203',
    Pincode: 700032,
    Street: 'Sukanta Sarani',
    City: 'Kolkata',
    Locality: 'Jadavpur',
    Area: 950,
    Bedrooms: 2,
    year_of_construction: 2022,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 15000,
    selling_price: 18000000
  }, {
    house_number: 'C-401',
    Pincode: 700016,
    Street: 'Park Street',
    City: 'Kolkata',
    Locality: 'Park Street',
    Area: 1200,
    Bedrooms: 2,
    year_of_construction: 2019,
    Rent: 'yes',
    amount_per_month: 20000
  }, {
    house_number: 'C-401',
    Pincode: 781008,
    Street: 'Paltan Bazar Road',
    City: 'Guwahati',
    Locality: 'Paltan Bazar',
    Area: 1200,
    Bedrooms: 3,
    year_of_construction: 2018,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 22000,
    selling_price: 25000000
  }, {
    house_number: 'C-702',
    Pincode: 110016,
    Street: 'Hauz Khas Road',
    City: 'South Delhi',
    Locality: 'South Delhi',
    Area: 1500,
    Bedrooms: 3,
    year_of_construction: 2022,
    Rent: 'yes',
    amount_per_month: 28000
  }, {
    house_number: 'D-102',
    Pincode: 700041,
    Street: 'Kavi Subhash Road',
    City: 'Kolkata',
    Locality: 'Tollygunge',
    Area: 800,
    Bedrooms: 1,
    year_of_construction: 2023,
    Rent: 'yes',
    amount_per_month: 16000
  }, {
    house_number: 'D-205',
    Pincode: 700053,
    Street: 'Sahapur Main Road',
    City: 'Kolkata',
    Locality: 'Tollygunge',
    Area: 1150,
    Bedrooms: 2,
    year_of_construction: 2017,
    Sale: 'yes',
    selling_price: 11000000
  }, {
    house_number: 'D-304',
    Pincode: 110007,
    Street: 'Kamla Nagar Road',
    City: 'Delhi',
    Locality: 'Kamla Nagar',
    Area: 1100,
    Bedrooms: 2,
    year_of_construction: 2020,
    Rent: 'yes',
    amount_per_month: 18000
  }, {
    house_number: 'D-402',
    Pincode: 700107,
    Street: 'Rajdanga Main Road',
    City: 'Kolkata',
    Locality: 'Tollygunge',
    Area: 1400,
    Bedrooms: 3,
    year_of_construction: 2016,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 20000,
    selling_price: 20000000
  }, {
    house_number: 'E-5',
    Pincode: 700029,
    Street: 'Ganesh Chandra Avenue',
    City: 'Kolkata',
    Locality: 'Malviya Nagar',
    Area: 1600,
    Bedrooms: 3,
    year_of_construction: 2016,
    Sale: 'yes',
    Rent: 'yes',
    amount_per_month: 25000,
    selling_price: 30000000
  }, {
    house_number: 'Q-17',
    Pincode: 781005,
    Street: 'Shillong Road',
    City: 'Guwahati',
    Locality: 'Dispur',
    Area: 1000,
    Bedrooms: 2,
    year_of_construction: 2019,
    Sale: 'yes',
    selling_price: 12000000
  }];

var cardsPerPage;

function setScreenSizeVariable() {

  if (canvas.width >= 1200) { // Adjust breakpoints as needed
    cardsPerPage = 8;
  } else if (canvas.width >= 768) {
    cardsPerPage = 6;
  }
}

setScreenSizeVariable();
window.addEventListener("resize", setScreenSizeVariable);

var card, img, title, area, bedrooms, year, mode, selling_price, amount_per_month;

let currentPage = 1;
let filteredProperties = [...properties];

// Function to display property cards
function displayCards(page = 1) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ''; // Clear existing cards

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const propertiesToShow = filteredProperties.slice(start, end);

  for (const property of propertiesToShow) {
    card = document.createElement('div');
    card.className = 'card';
    img = document.createElement('img');
    img.src = 'https://picsum.photos/300/200';
    card.appendChild(img);
    title = document.createElement('h2');
    title.className = 'title';
    title.innerHTML = `${property.house_number}, ${property.Street}, ${property.Locality}, ${property.City}, ${property.Pincode}`;
    card.appendChild(title);
    area = document.createElement('p');
    area.innerHTML = `<b>Area:</b> ${property.Area} sqft`;
    card.appendChild(area);
    bedrooms = document.createElement('p');
    bedrooms.innerHTML = `<b>Bedrooms:</b> ${property.Bedrooms}`;
    card.appendChild(bedrooms);
    year = document.createElement('p');
    year.innerHTML = `<b>Year of construction:</b> ${property.year_of_construction}`;
    card.appendChild(year);
    mode = document.createElement('p');
    if (property.Sale === 'yes') {
      selling_price = document.createElement('p');
      selling_price.innerHTML = `<b>Selling price:</b> ${property.selling_price}`;
      if (property.Rent === 'yes') {
        amount_per_month = document.createElement('p');
        mode.innerHTML = '<b>Available for Rent and Sale</b>';
        card.appendChild(mode);
        amount_per_month.innerHTML = `<b>Amount per month:</b> ${property.amount_per_month}`;
        card.appendChild(amount_per_month);
      } else {
        mode.innerHTML = '<b>Available Only for Sale</b>';
        card.appendChild(mode);
      }
      card.appendChild(selling_price);
    } else {
      amount_per_month = document.createElement('p');
      mode.innerHTML = '<b>Available Only for Rent</b>';
      card.appendChild(mode);
      amount_per_month.innerHTML = `<b>Amount per month:</b> ${property.amount_per_month}`;
      card.appendChild(amount_per_month);
    }
    const button = document.createElement('button');
    button.innerHTML = 'View Details';
    button.className = 'view_details';
    card.appendChild(button);
    cardContainer.appendChild(card);

    let collection = card.lastChild;
    collection.addEventListener('click', () => {
      document.querySelector(".slideshow-container").style = "display: flex;";
    });
  }

  updatePaginationControls();
}

// Function to update pagination controls
function updatePaginationControls() {
  const pageInfo = document.getElementById('page-info');
  const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');

  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
}

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayCards(currentPage);
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayCards(currentPage);
  }
});

// Call the function to display property cards
displayCards();

// SEARCH BAR
document.getElementById("search-bar").addEventListener('mouseover', () => {
  document.getElementById("search-bar").style = "opacity: 1;";
});

document.getElementById("Filter-bar").addEventListener('mouseover', () => {
  document.getElementById("Filter-bar").style = "opacity: 1;";
});

function liveSearch() {
  var search_query = document.getElementById("searchbox").value.toString().split(" ");
  document.getElementById("Filter-bar").style = "opacity: 0.5;";
  filteredProperties = properties.filter(property => {
    return search_query.every(q => Object.values(property).some(val => val.toString().toLowerCase().includes(q.toLowerCase())));
  });
  currentPage = 1;
  displayCards();
}

// Delay
let typingTimer;
let typeInterval = 200;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});

document.getElementById("search-btn").addEventListener('click', liveSearch);

// FILTER BAR
function FilterSearch() {
  document.getElementById("search-bar").style = "opacity: 0.5;";
  filteredProperties = properties.filter(property => {
    let matches = true;
    let cardChild = document.createElement('div').appendChild(document.createElement('div'));
    cardChild.innerHTML = `${property.house_number}, ${property.Street}, ${property.Locality}, ${property.City}, ${property.Pincode} ${property.Area} ${property.Bedrooms} ${property.year_of_construction} ${property.amount_per_month} ${property.selling_price}`;
    let mode = document.getElementById("a2").value.split(" ");

    for (let j = 0; j < mode.length; j++) {
      if (!cardChild.textContent.toLowerCase().includes(mode[j].toLowerCase())) {
        matches = false;
        break;
      }
    }

    return matches &&
      property.Area.toString().includes(document.getElementById("a1").value) &&
      property.Bedrooms.toString().includes(document.getElementById("a3").value) &&
      property.City.toLowerCase().includes(document.getElementById("a4").value.toLowerCase()) &&
      property.year_of_construction.toString().includes(document.getElementById("a5").value) &&
      (!document.getElementById("a6").value || cardChild.textContent.toLowerCase().includes("sale") &&
        parseInt(property.selling_price) <= parseInt(document.getElementById("a6").value)) &&
      (!document.getElementById("a7").value || cardChild.textContent.toLowerCase().includes("rent") &&
        parseInt(property.amount_per_month) <= parseInt(document.getElementById("a7").value));
  });

  currentPage = 1;
  displayCards();
}

// document.getElementById("filter-btn").addEventListener('click', FilterSearch);

//------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const exitButton = document.querySelector('.exit-button');
exitButton.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide the slideshow container
  document.querySelector(".slideshow-container").style.display = 'none';
});


//------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------

// SELLER BUTTON

var button = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

button.addEventListener("click", function () {
  dropdownContent.classList.add("show");
});

document.querySelector('.exit-btn').addEventListener("click", function () {
  dropdownContent.classList.remove("show");
});
