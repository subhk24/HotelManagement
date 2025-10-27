// const hotels = [
//   {
//     name: "The Leela Palace New Delhi",
//     image: "https://www.smallwood-us.com/assets/leela_palace_new_delhi_architecture_by_srss_2_h_l6471jKqr.jpg",
//     price: "₹12,000/night",
//     tags: ["Free Cancellation", "Top Rated", "Breakfast Included"],
//     location: "Chanakyapuri, New Delhi"
//   },
//   {
//     name: "Taj Palace, New Delhi",
//     image: "https://source.unsplash.com/400x300/?luxury,hotel,delhi",
//     price: "₹9,500/night",
//     tags: ["Couple Friendly", "Top Rated", "Breakfast Included"],
//     location: "Sardar Patel Marg, Delhi"
//   },
//   {
//     name: "ITC Maurya – A Luxury Collection Hotel",
//     image: "https://source.unsplash.com/400x300/?itc,maurya,delhi",
//     price: "₹8,200/night",
//     tags: ["Free Cancellation", "Near Metro", "Breakfast Included"],
//     location: "Diplomatic Enclave, Delhi"
//   },
//   {
//     name: "Hotel AeroCity Inn Plaza",
//     image: "https://source.unsplash.com/400x300/?airport,hotel,delhi",
//     price: "₹3,800/night",
//     tags: ["Couple Friendly", "Free Cancellation"],
//     location: "Mahipalpur, Delhi"
//   },
//   {
//     name: "Bloom Boutique – Connaught Place",
//     image: "https://source.unsplash.com/400x300/?boutique,hotel,delhi",
//     price: "₹5,500/night",
//     tags: ["Breakfast Included", "Near Metro"],
//     location: "Connaught Place, Delhi"
//   },
//   {
//     name: "Hotel Royal Plaza, Janpath",
//     image: "https://source.unsplash.com/400x300/?hotel,janpath,delhi",
//     price: "₹4,200/night",
//     tags: ["Budget Under ₹5000", "Free Cancellation"],
//     location: "Janpath, New Delhi"
//   },
//   {
//     name: "Comfort Stay – South Delhi",
//     image: "https://source.unsplash.com/400x300/?hotel,delhi,south",
//     price: "₹2,900/night",
//     tags: ["Budget Under ₹5000", "Near Metro"],
//     location: "Greater Kailash, Delhi"
//   },
//   {
//     name: "Hotel Elite Suites",
//     image: "https://source.unsplash.com/400x300/?hotel,delhi,elite",
//     price: "₹6,700/night",
//     tags: ["Top Rated", "Couple Friendly"],
//     location: "Karol Bagh, Delhi"
//   }
// ];




// const hotelList = document.getElementById("hotelList");
// const filters = document.querySelectorAll(".filter-section input[type='checkbox']");

// // Function to show hotel cards
// // function displayHotels(list) {
// //   hotelList.innerHTML = "";
// //   if (list.length === 0) {
// //     hotelList.innerHTML = "<p style='font-size:18px;color:#555;'>No hotels match your filters.</p>";
// //     return;
// //   }
// //   list.forEach(hotel => {
// //     const card = document.createElement("div");
// //     card.className = "hotel-card";
// //     card.innerHTML = `
// //       <img src="${hotel.image}" alt="${hotel.name}">
// //       <div class="hotel-info">
// //         <h4>${hotel.name}</h4>
// //         <p class="location">${hotel.location}</p>
// //         <div class="tags">${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
// //         <div class="price">${hotel.price}</div>
// //       </div>
// //     `;
// //     hotelList.appendChild(card);
// //   });
// // }



// function displayHotels(list) {
//   hotelList.innerHTML = "";
//   if (list.length === 0) {
//     hotelList.innerHTML = "<p style='font-size:18px;color:#555;'>No hotels match your filters.</p>";
//     return;
//   }

//   list.forEach(hotel => {
//     const card = document.createElement("div");
//     card.className = "hotel-card";
//     card.innerHTML = `
//       <div class="hotel-img">
//         <img src="${hotel.image}" alt="${hotel.name}">
//       </div>

//       <div class="hotel-details">
//         <div class="hotel-header">
//           <h3>${hotel.name}</h3>
//           <span class="rating">⭐ Top Rated</span>
//         </div>
//         <p class="location">📍 ${hotel.location}</p>

//         <div class="tags">${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>

//         <div class="hotel-bottom">
//           <div class="price-box">
//             <p class="price">${hotel.price}</p>
//             <p class="offer">Special Deal — Book Now!</p>
//           </div>
//           <button class="view-btn">View Details</button>
//         </div>
//       </div>
//     `;

//     // Click to open details modal or alert (for now)
//     card.querySelector(".view-btn").addEventListener("click", () => {
//       alert(`🏨 ${hotel.name}\n📍 ${hotel.location}\n💰 ${hotel.price}\nTags: ${hotel.tags.join(", ")}`);
//     });

//     hotelList.appendChild(card);
//   });
// }

// // Initial load
// displayHotels(hotels);

// // Filter logic
// filters.forEach(cb => {
//   cb.addEventListener("change", () => {
//     const selected = Array.from(filters).filter(f => f.checked).map(f => f.value);
//     let filtered = hotels;
//     if (selected.length > 0) {
//       filtered = hotels.filter(hotel =>
//         selected.every(sel => hotel.tags.includes(sel))
//       );
//     }
//     displayHotels(filtered);
//   });
// });




// const guestBtn = document.getElementById('guest-btn');
// const guestPanel = document.getElementById('guest-panel');
// const doneBtn = document.getElementById('done-btn');

// const counts = {
//   rooms: 1,
//   adults: 2,
//   children: 0
// };

// guestBtn.addEventListener('click', () => {
//   guestPanel.style.display = guestPanel.style.display === 'block' ? 'none' : 'block';
// });

// document.querySelectorAll('.plus').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const type = btn.getAttribute('data-type');
//     counts[type]++;
//     document.getElementById(`${type}-count`).textContent = counts[type];
//   });
// });

// document.querySelectorAll('.minus').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const type = btn.getAttribute('data-type');
//     if (counts[type] > 0) counts[type]--;
//     document.getElementById(`${type}-count`).textContent = counts[type];
//   });
// });

// doneBtn.addEventListener('click', () => {
//   guestBtn.textContent = `${counts.adults} Adults · ${counts.rooms} Room${counts.rooms > 1 ? 's' : ''}`;
//   guestPanel.style.display = 'none';
// });

// window.addEventListener('click', (e) => {
//   if (!guestPanel.contains(e.target) && e.target !== guestBtn) {
//     guestPanel.style.display = 'none';
//   }
// });




// // ==================== POPULAR SEARCH DROPDOWN ====================
// const popularPlaces = ["Delhi", "Mumbai", "Bengaluru", "Goa", "Chennai", "Dubai", "Jaipur","hyderabad"];
// const locationInput = document.getElementById("location-input");
// const popularDropdown = document.getElementById("popular-dropdown");
// const popularList = document.getElementById("popular-list");

// function loadPopularPlaces(filter = "") {
//   popularList.innerHTML = "";
//   const filtered = popularPlaces.filter(place =>
//     place.toLowerCase().includes(filter.toLowerCase())
//   );

//   filtered.forEach(place => {
//     const li = document.createElement("li");
//     li.innerHTML = `<span class="icon">📍</span> ${place}`;
//     li.addEventListener("click", () => {
//       locationInput.value = place;
//       popularDropdown.style.display = "none";
//     });
//     popularList.appendChild(li);
//   });

//   if (filtered.length === 0) {
//     popularList.innerHTML = `<li style="padding:10px; color:#777;">No Results Found</li>`;
//   }
// }

// locationInput.addEventListener("focus", () => {
//   loadPopularPlaces();
//   popularDropdown.style.display = "block";
// });

// locationInput.addEventListener("input", () => {
//   loadPopularPlaces(locationInput.value);
// });

// window.addEventListener("click", (e) => {
//   if (!locationInput.contains(e.target) && !popularDropdown.contains(e.target)) {
//     popularDropdown.style.display = "none";
//   }
// });

// // ================= SORT & SEARCH =================
// const sortButtons = document.querySelectorAll(".sort-btn");
// const searchInput = document.getElementById("hotelSearch");

// sortButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     sortButtons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");

//     let sortedHotels = [...hotels];
//     const sortType = btn.dataset.sort;

//     if (sortType === "low") {
//       sortedHotels.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
//     } else if (sortType === "high") {
//       sortedHotels.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
//     } else if (sortType === "best") {
//       // simulate by combining low price + "Top Rated"
//       sortedHotels.sort((a, b) => {
//         const aVal = extractPrice(a.price) - (a.tags.includes("Top Rated") ? 1000 : 0);
//         const bVal = extractPrice(b.price) - (b.tags.includes("Top Rated") ? 1000 : 0);
//         return aVal - bVal;
//       });
//     } else if (sortType === "rating") {
//       sortedHotels.sort((a, b) => {
//         const aRating = a.tags.includes("Top Rated") ? 1 : 0;
//         const bRating = b.tags.includes("Top Rated") ? 1 : 0;
//         return bRating - aRating;
//       });
//     } else {
//       // default (most popular)
//       sortedHotels = hotels;
//     }

//     displayHotels(sortedHotels);
//   });
// });

// function extractPrice(priceStr) {
//   return parseInt(priceStr.replace(/[₹,\/night]/g, ""));
// }

// // Live search filter by hotel name or location
// searchInput.addEventListener("input", () => {
//   const term = searchInput.value.toLowerCase();
//   const filtered = hotels.filter(h =>
//     h.name.toLowerCase().includes(term) || h.location.toLowerCase().includes(term)
//   );
//   displayHotels(filtered);
// });








//NEW ONE 

const hotels = [
  {
    name: "The Leela Palace New Delhi",
    image: "https://r1imghtlak.mmtcdn.com/c886a8ce183e11eb8ec20242ac110003.jpg",
    price: "₹12,000/night",
    tags: ["Free Cancellation", "Top Rated", "Breakfast Included"],
    location: "Chanakyapuri, New Delhi"
  },
  {
    name: "Taj Palace, New Delhi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6K50Z87aU1wPHyuUl9ezfs3e7Bl9pOTMNTg&s",
    price: "₹9,500/night",
    tags: ["Couple Friendly", "Top Rated", "Breakfast Included"],
    location: "Sardar Patel Marg, Delhi"
  },
  {
    name: "ITC Maurya – A Luxury Collection Hotel",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/04/4d/0b/itc-maurya-a-luxury-collection.jpg?w=900&h=500&s=1",
    price: "₹8,200/night",
    tags: ["Free Cancellation", "Near Metro", "Breakfast Included"],
    location: "Diplomatic Enclave, Delhi"
  },
  {
    name: "Hotel AeroCity Inn Plaza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeWydPyUqNzjgOxT8hvVuWha6EC4UzARgRQ&s",
    price: "₹3,800/night",
    tags: ["Couple Friendly", "Free Cancellation"],
    location: "Mahipalpur, Delhi"
  },
  {
    name: "Bloom Boutique – Connaught Place",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDix00MQjOaFwcfu5u4vwQEl1sTNpd0qzE4w&s",
    price: "₹5,500/night",
    tags: ["Breakfast Included", "Near Metro"],
    location: "Connaught Place, Delhi"
  },
  {
    name: "Hotel Royal Plaza, Janpath",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493232041.jpg?k=02ddf34a1c89629a404d6acb90475c880471f2981c5844323bce718ff507327d&o=&hp=1",
    price: "₹4,200/night",
    tags: ["Budget Under ₹5000", "Free Cancellation"],
    location: "Janpath, New Delhi"
  },
  {
    name: "Comfort Stay – South Delhi",
    image: "https://images.trvl-media.com/lodging/103000000/102740000/102733900/102733820/w3983h2659x8y0-4d5796f8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    price: "₹2,900/night",
    tags: ["Budget Under ₹5000", "Near Metro"],
    location: "Greater Kailash, Delhi"
  },
  {
    name: "Hotel Elite Suites",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/96510957.jpg?k=b5b33005d836511650837c97dcc56a3d63b481c8d711f42374dd289a725898ab&o=",
    price: "₹6,700/night",
    tags: ["Top Rated", "Couple Friendly"],
    location: "Karol Bagh, Delhi"
  }
];

const hotelList = document.getElementById("hotelList");
const filters = document.querySelectorAll(".filter-section input[type='checkbox']");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

// ✅ Updated LaLiT-style Card
function displayHotels(list) {
  hotelList.innerHTML = "";
  if (list.length === 0) {
    hotelList.innerHTML = "<p style='font-size:18px;color:#555;'>No hotels match your filters.</p>";
    return;
  }

  list.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML = `
      <div class="hotel-img">
        <img src="${hotel.image}" alt="${hotel.name}">
      </div>

      <div class="hotel-details">
        <div class="hotel-header">
          <h3>${hotel.name}</h3>
          <span class="rating">⭐ Top Rated</span>
        </div>
        <p class="location">📍 ${hotel.location}</p>

        <div class="tags">${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>

        <div class="hotel-bottom">
          <div class="price-box">
            <p class="price">${hotel.price}</p>
            <p class="offer">Special Deal — Book Now!</p>
          </div>
          <button class="view-btn">View Details</button>
        </div>
      </div>
    `;

    // ✅ View Details alert (later can be replaced with modal)
    card.querySelector(".view-btn").addEventListener("click", () => {
      alert(`🏨 ${hotel.name}\n📍 ${hotel.location}\n💰 ${hotel.price}\nTags: ${hotel.tags.join(", ")}`);
    });

    hotelList.appendChild(card);
  });
}



// ======== Initial Load ========
displayHotels(hotels);

// ======== Filter Logic ========
filters.forEach(cb => {
  cb.addEventListener("change", () => {
    const selected = Array.from(filters).filter(f => f.checked).map(f => f.value);
    let filtered = hotels;
    if (selected.length > 0) {
      filtered = hotels.filter(hotel =>
        selected.every(sel => hotel.tags.includes(sel))
      );
    }
    displayHotels(filtered);
  });
});


// ======== Accordion (Dropdown Filters) ========
document.querySelectorAll(".filter-header").forEach(header => {
  header.addEventListener("click", () => {
    const target = document.getElementById(header.dataset.toggle);
    const isOpen = target.style.display === "block";
    document.querySelectorAll(".filter-body").forEach(b => (b.style.display = "none"));
    document.querySelectorAll(".filter-header").forEach(h => (h.textContent = h.textContent.replace("▲", "▼")));
    if (!isOpen) {
      target.style.display = "block";
      header.textContent = header.textContent.replace("▼", "▲");
    }
  });
});




// ======== Guests Count Section ========
const guestBtn = document.getElementById('guest-btn');
const guestPanel = document.getElementById('guest-panel');
const doneBtn = document.getElementById('done-btn');

const counts = { rooms: 1, adults: 2, children: 0 };

guestBtn.addEventListener('click', () => {
  guestPanel.style.display = guestPanel.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    counts[type]++;
    document.getElementById(`${type}-count`).textContent = counts[type];
  });
});

document.querySelectorAll('.minus').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    if (counts[type] > 0) counts[type]--;
    document.getElementById(`${type}-count`).textContent = counts[type];
  });
});

doneBtn.addEventListener('click', () => {
  guestBtn.textContent = `${counts.adults} Adults · ${counts.rooms} Room${counts.rooms > 1 ? 's' : ''}`;
  guestPanel.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (!guestPanel.contains(e.target) && e.target !== guestBtn) {
    guestPanel.style.display = 'none';
  }
});

// ======== Popular Places Dropdown ========
const popularPlaces = ["Delhi", "Mumbai", "Bengaluru", "Goa", "Chennai", "Dubai", "Jaipur", "Hyderabad"];
const locationInput = document.getElementById("location-input");
const popularDropdown = document.getElementById("popular-dropdown");
const popularList = document.getElementById("popular-list");

function loadPopularPlaces(filter = "") {
  popularList.innerHTML = "";
  const filtered = popularPlaces.filter(place =>
    place.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(place => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="icon">📍</span> ${place}`;
    li.addEventListener("click", () => {
      locationInput.value = place;
      popularDropdown.style.display = "none";
    });
    popularList.appendChild(li);
  });

  if (filtered.length === 0) {
    popularList.innerHTML = `<li style="padding:10px; color:#777;">No Results Found</li>`;
  }
}

locationInput.addEventListener("focus", () => {
  loadPopularPlaces();
  popularDropdown.style.display = "block";
});

locationInput.addEventListener("input", () => {
  loadPopularPlaces(locationInput.value);
});

window.addEventListener("click", (e) => {
  if (!locationInput.contains(e.target) && !popularDropdown.contains(e.target)) {
    popularDropdown.style.display = "none";
  }
});

// ======== Sort & Search ========
const sortButtons = document.querySelectorAll(".sort-btn");
const searchInput = document.getElementById("hotelSearch");

sortButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sortButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let sortedHotels = [...hotels];
    const sortType = btn.dataset.sort;

    if (sortType === "low") {
      sortedHotels.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
    } else if (sortType === "high") {
      sortedHotels.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
    } else if (sortType === "best") {
      sortedHotels.sort((a, b) => {
        const aVal = extractPrice(a.price) - (a.tags.includes("Top Rated") ? 1000 : 0);
        const bVal = extractPrice(b.price) - (b.tags.includes("Top Rated") ? 1000 : 0);
        return aVal - bVal;
      });
    } else if (sortType === "rating") {
      sortedHotels.sort((a, b) => {
        const aRating = a.tags.includes("Top Rated") ? 1 : 0;
        const bRating = b.tags.includes("Top Rated") ? 1 : 0;
        return bRating - aRating;
      });
    }

    displayHotels(sortedHotels);
  });
});

function extractPrice(priceStr) {
  return parseInt(priceStr.replace(/[₹,\/night]/g, ""));
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = hotels.filter(h =>
    h.name.toLowerCase().includes(term) || h.location.toLowerCase().includes(term)
  );
  displayHotels(filtered);
});
