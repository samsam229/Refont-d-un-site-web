const wrapperauto = document.querySelector(".wrapperauto");
const carouselauto = document.querySelector(".carouselauto");
const firstCardWidth = carouselauto.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapperauto i");
const carouselautoChildrens = [...carouselauto.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carouselauto at once
let cardPerView = Math.round(carouselauto.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carouselauto for infinite scrolling
carouselautoChildrens.slice(-cardPerView).reverse().forEach(card => {
    carouselauto.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carouselauto for infinite scrolling
carouselautoChildrens.slice(0, cardPerView).forEach(card => {
    carouselauto.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carouselauto at appropriate postition to hide first few duplicate cards on Firefox
carouselauto.classList.add("no-transition");
carouselauto.scrollLeft = carouselauto.offsetWidth;
carouselauto.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carouselauto left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carouselauto.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carouselauto.classList.add("dragging");
    // Records the initial cursor and scroll position of the carouselauto
    startX = e.pageX;
    startScrollLeft = carouselauto.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carouselauto based on the cursor movement
    carouselauto.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carouselauto.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carouselauto is at the beginning, scroll to the end
    if(carouselauto.scrollLeft === 0) {
        carouselauto.classList.add("no-transition");
        carouselauto.scrollLeft = carouselauto.scrollWidth - (2 * carouselauto.offsetWidth);
        carouselauto.classList.remove("no-transition");
    }
    // If the carouselauto is at the end, scroll to the beginning
    else if(Math.ceil(carouselauto.scrollLeft) === carouselauto.scrollWidth - carouselauto.offsetWidth) {
        carouselauto.classList.add("no-transition");
        carouselauto.scrollLeft = carouselauto.offsetWidth;
        carouselauto.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carouselauto
    clearTimeout(timeoutId);
    if(!wrapperauto.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carouselauto after every 2500 ms
    timeoutId = setTimeout(() => carouselauto.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carouselauto.addEventListener("mousedown", dragStart);
carouselauto.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouselauto.addEventListener("scroll", infiniteScroll);
wrapperauto.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapperauto.addEventListener("mouseleave", autoPlay);