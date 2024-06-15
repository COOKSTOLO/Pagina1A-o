// Stacked Photo Carousel
let childElement = document.querySelectorAll(".image-container");
let imageUrls = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];
let zIndex = 1;

childElement.forEach((element, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageUrls[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);

    element.addEventListener("click", () => {
        zIndex++;
        element.style.right = "80em";
        element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)";
        element.style.transition = "right 0.3s ease";
        setTimeout(() => {
            zIndex -= 3;
            element.style.right = "";
            element.style.zIndex = zIndex.toString();
            element.style.transform = "";
            element.style.transition = "all 0.3s ease";

            setTimeout(() => {
                element.style.transition = "";
            }, 3000);
        }, 3000);
    });
});

// Image Accordion
const items = document.querySelectorAll(".item");
let imageURLs = [
    "dog-1.jpg",
    "dog-2.jpg",
    "dog-3.jpg",
    "dog-4.jpg",
    "dog-5.jpg",
];

let deviceType = "";
let events = {
    mouse: {
        start: "mouseover",
        end: "mouseout",
    },
    touch: {
        start: "touchstart",
        end: "touchend",
    },
};

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

items.forEach((item, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageURLs[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img);
    item.style.flex = "1";
    item.style.transition = "flex 0.8s ease";

    item.addEventListener(events[deviceType].start, () => {
        item.style.flex = "9";
    });
    item.addEventListener(events[deviceType].end, () => {
        item.style.flex = "1";
    });
});
