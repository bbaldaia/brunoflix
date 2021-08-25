const movie = {
    title: "Harry Potter",
    url: "http://caminho.com/imagem",
};

const figure = document.createElement("figure")
const img = document.createElement("img") 
const title = document.createElement("figcaption")
const listBanners = document.querySelector(".list-banners")

figure.classList.add("wrapper-banner")

img.src = "img/banner1.jpg"
img.alt = "Banner do filme"
img.classList.add("main-banner")

title.textContent = "Nome do filme"
title.classList.add("main-caption")

figure.insertAdjacentElement("beforeend", img)
figure.insertAdjacentElement("beforeend", title)

listBanners.insertAdjacentElement("beforeend", figure)
