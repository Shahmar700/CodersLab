let langBtn = document.querySelector(".has-dropdown");
let dropdown = document.querySelector(".dropdown");
let aze = document.querySelector(".aze");
let eng = document.querySelector(".eng");
let az = document.querySelector("#az");
let en = document.querySelector("#en");
langBtn.addEventListener("click", () => {
  dropdown.classList.toggle("showDropdown");
});
aze.addEventListener("click", (e) => {
  e.preventDefault();
  en.classList.add("hide");
  az.classList.remove("hide");
});
eng.addEventListener("click", (e) => {
  e.preventDefault();
  en.classList.remove("hide");
  az.classList.add("hide");
});
// Language for Mobile
let mobilelangBtn = document.querySelector(".mobilehas-dropdown");
let mobiledropdown = document.querySelector(".mobiledropdown");
let mobileaze = document.querySelector(".mobileaze");
let mobileeng = document.querySelector(".mobileeng");
let mobileaz = document.querySelector("#mobileaz");
let mobileen = document.querySelector("#mobileen");
mobilelangBtn.addEventListener("click", () => {
  mobiledropdown.classList.toggle("mobileshowDropdown");
});
mobileaze.addEventListener("click", (e) => {
  e.preventDefault();
  mobileen.classList.add("hide");
  mobileaz.classList.remove("hide");
});
mobileeng.addEventListener("click", (e) => {
  e.preventDefault();
  mobileen.classList.remove("hide");
  mobileaz.classList.add("hide");
});

let navBtn = document.querySelector(".navBtn");
let mobileNav = document.querySelector(".mobileNav");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("barActive");
  mobileNav.classList.toggle("navActive");
});

// ---------------------------
let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  // btn.textContent == "Read More"
  //   ? (btn.textContent = "Show Less")
  //   : (btn.textContent = "Read More");
}

let loadMoreBtn = document.querySelector("#addBlogs");
let currentItem = 3;

loadMoreBtn.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".blogPage .blogs .blogBox");
  for (let i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
});

let projectMoreBnt = document.querySelector(".projectMoreBnt");
let currentProject = 4;
let projects = document.querySelectorAll(".proContInner .projectDisplay");
projects.length <= 4 ? (projectMoreBnt.style.display = "none") : projectMoreBnt;
projectMoreBnt.addEventListener("click", () => {
  for (let i = currentProject; i < currentProject + 2; i++) {
    projects[i].style.display = "inline-block";
    projects[i].style.display = "flex";
  }
  currentProject += 2;
  if (currentProject >= projects.length) {
    projectMoreBnt.style.display = "none";
  }
});
