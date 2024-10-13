const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Roses",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://cdn-image02.casetify.com/usr/13403/2893403/~v7214/4715683x2_iphone-16-pro-max__color_white-titanium_16007187.png.1000x1000-r.m80.webp",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "SKATER JOHN",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://cdn-image02.casetify.com/usr/9018/27699018/~v371/29895498x2_iphone-16-pro__color_white-titanium_16007268.png.1000x1000-r.m80.webp",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "CASETIFY",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://ctgimage1.s3.amazonaws.com/cms/image/4c3c68f70f302e944f1d1868bd33d604.jpg",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Roses",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://cdn-image02.casetify.com/usr/13403/2893403/~v7214/4715683x2_iphone-16-pro-max__color_white-titanium_16007187.png.1000x1000-r.m80.webp",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "rock phone cases",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://i.etsystatic.com/23588871/r/il/157b11/2454369659/il_570xN.2454369659_mps6.jpg",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
