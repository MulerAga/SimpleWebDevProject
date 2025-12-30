const searchicon1 = document.querySelector("#searchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function () {
  search1.style.display = "flex";
  searchicon1.style.display = "none";
  mibile_nav.style.display = "none";
});

const mibile_nav = document.querySelector(".headerbar .nav");
const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const headerbar = document.querySelector(".headerbar");
bar.addEventListener("click", function () {
  setTimeout(() => {
    cross.style.display = "block";
  }, 200);
  headerbar.style.right = "0%";
  bar.style.display = "none";
  mibile_nav.style.display = "block";
});
cross.addEventListener("click", function () {
  cross.style.display = "none";
  headerbar.style.right = "-100%";
  bar.style.display = "block";
  search1.style.display = "none";
  searchicon1.style.display = "block";
  searchicon1.style.marginTop = "10px";
});

const mobileNav = document.querySelectorAll(".headerbar .mobile-nav li");
mobileNav.forEach((element) => {
  element.addEventListener("click", function () {
    cross.style.display = "none";
    headerbar.style.right = "-100%";
    bar.style.display = "block";
  });
});

let menuDetail = document.querySelector(".menu-detail");
let menuDetail1 = document.querySelector(".menu-detail1");

let menuDetail1Btn = document.querySelector(".menu-detail1 .white-btn");
menuDetail1Btn.addEventListener("click", function () {
  menuDetail.style.display = "block";
  menuDetail1.style.display = "none";
});

menuDetail.addEventListener("click", function () {
  menuDetail.style.display = "none";
  menuDetail1.style.display = "block";
});

let menuDetail_2 = document.querySelector(".menu-detail-2");
let menuDetail2 = document.querySelector(".menu-detail2");
let menuDetail2Btn = document.querySelector(".menu-detail2 .white-btn");
menuDetail2Btn.addEventListener("click", function () {
  menuDetail_2.style.display = "block";
  menuDetail2.style.display = "none";
});
menuDetail_2.addEventListener("click", function () {
  menuDetail_2.style.display = "none";
  menuDetail2.style.display = "block";
});

let menuDetail_3 = document.querySelector(".menu-detail-3");
let menuDetail3 = document.querySelector(".menu-detail3");
let menuDetail3Btn = document.querySelector(".menu-detail3 .white-btn");
menuDetail3Btn.addEventListener("click", function () {
  menuDetail_3.style.display = "block";
  menuDetail3.style.display = "none";
});
menuDetail_3.addEventListener("click", function () {
  menuDetail_3.style.display = "none";
  menuDetail3.style.display = "block";
});

let menuDetail_4 = document.querySelector(".menu-detail-4");
let menuDetail4 = document.querySelector(".menu-detail4");
let menuDetail4Btn = document.querySelector(".menu-detail4 .white-btn");
menuDetail4Btn.addEventListener("click", function () {
  menuDetail_4.style.display = "block";
  menuDetail4.style.display = "none";
});
menuDetail_4.addEventListener("click", function () {
  menuDetail_4.style.display = "none";
  menuDetail4.style.display = "block";
});

let menuDetail_5 = document.querySelector(".menu-detail-5");
let menuDetail5 = document.querySelector(".menu-detail5");
let menuDetail5Btn = document.querySelector(".menu-detail5 .white-btn");
menuDetail5Btn.addEventListener("click", function () {
  menuDetail_5.style.display = "block";
  menuDetail5.style.display = "none";
});
menuDetail_5.addEventListener("click", function () {
  menuDetail_5.style.display = "none";
  menuDetail5.style.display = "block";
});

let menuDetail_6 = document.querySelector(".menu-detail-6");
let menuDetail6 = document.querySelector(".menu-detail6");
let menuDetail6Btn = document.querySelector(".menu-detail6 .white-btn");
menuDetail6Btn.addEventListener("click", function () {
  menuDetail_6.style.display = "block";
  menuDetail6.style.display = "none";
});
menuDetail_6.addEventListener("click", function () {
  menuDetail_6.style.display = "none";
  menuDetail6.style.display = "block";
});

let menuDetail_7 = document.querySelector(".menu-detail-7");
let menuDetail7 = document.querySelector(".menu-detail7");
let menuDetail7Btn = document.querySelector(".menu-detail7 .white-btn");
menuDetail7Btn.addEventListener("click", function () {
  menuDetail_7.style.display = "block";
  menuDetail7.style.display = "none";
});
menuDetail_7.addEventListener("click", function () {
  menuDetail_7.style.display = "none";
  menuDetail7.style.display = "block";
});

let menuDetail_8 = document.querySelector(".menu-detail-8");
let menuDetail8 = document.querySelector(".menu-detail8");
let menuDetail8Btn = document.querySelector(".menu-detail8 .white-btn");
menuDetail8Btn.addEventListener("click", function () {
  menuDetail_8.style.display = "block";
  menuDetail8.style.display = "none";
});
menuDetail_8.addEventListener("click", function () {
  menuDetail_8.style.display = "none";
  menuDetail8.style.display = "block";
});

let menuDetail_9 = document.querySelector(".menu-detail-9");
let menuDetail9 = document.querySelector(".menu-detail9");
let menuDetail9Btn = document.querySelector(".menu-detail9 .white-btn");
menuDetail9Btn.addEventListener("click", function () {
  menuDetail_9.style.display = "block";
  menuDetail9.style.display = "none";
});
menuDetail_9.addEventListener("click", function () {
  menuDetail_9.style.display = "none";
  menuDetail9.style.display = "block";
});

let menuDetail_10 = document.querySelector(".menu-detail-10");
let menuDetail10 = document.querySelector(".menu-detail10");
let menuDetail10Btn = document.querySelector(".menu-detail10 .white-btn");
menuDetail10Btn.addEventListener("click", function () {
  menuDetail_10.style.display = "block";
  menuDetail10.style.display = "none";
});
menuDetail_10.addEventListener("click", function () {
  menuDetail_10.style.display = "none";
  menuDetail10.style.display = "block";
});

const pages = document.querySelectorAll(".pageContent");
const searchIconSearch = document.querySelector(".srchicon");
const searchInputs = document.querySelector(".search-input");
const items = document.querySelectorAll(".item");
const foodMenuSection = document.getElementById("food-menu");

const noResult = document.createElement("p");
noResult.textContent = "Please enter the correct food name, Sir!";
noResult.style.color = "red";
noResult.style.backgroundColor ="black";
noResult.style.fontSize = "32px";
noResult.style.textAlign = "center";
noResult.style.margin = "auto";
noResult.style.width = "60vw"
noResult.style.display = "none";
noResult.style.borderRadius ="10px"
const foodItems = document.querySelector(".food-items");
foodMenuSection.insertBefore(noResult, foodItems);

function searching() {
  const searchInputValue = searchInputs.value.toLowerCase();
  let found = false;
  items.forEach((item) => {
    const foodName = item.querySelector(".fo-name");
    if (!foodName) return;
    if (foodName.textContent.toLowerCase().includes(searchInputValue)) {
      item.style.display = "block";
      found = true;
    } else {
      item.style.display = "none";
    }
  });
  if (found) {
    noResult.style.display = "none";
    pages.forEach((pageContent) => {
      pageContent.classList.add("hidden");
    });
    foodMenuSection.classList.add("search-results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    noResult.style.display = "block";
  }
}

searchIconSearch.addEventListener("click", () => {
  if (searchInputs.value.trim() === "") {
    return;
  } else {
    searching();
    cross.style.display = "none";
    headerbar.style.right = "-100%";
    bar.style.display = "block";
    search1.style.display = "none";
    searchicon1.style.display = "block";
    searchicon1.style.marginTop = "10px";
    searchInputs.value = "";
  }
});

searchInputs.addEventListener("keyup", () => {
  if (searchInputs.value.trim() === "") {
    resetSearch();
  } else {
    searching();
  }
});
function resetSearch() {
  items.forEach((item) => (item.style.display = "block"));
  pages.forEach((pageContent) => {
    pageContent.classList.remove("hidden");
  });
  foodMenuSection.classList.remove("search-results");
  noResult.style.display = "none";
}
