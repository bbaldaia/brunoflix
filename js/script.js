



function adicionar() {

    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const title = document.createElement("figcaption")
    const listBanners = document.querySelector(".list-banners")
    const inputUrl = document.querySelector("#url")
    const inputTitle = document.querySelector("#name")

    const movie = {
        title: inputTitle.value,
        url: inputUrl.value
    };

    figure.classList.add("wrapper-banner")

    img.src = movie.url
    img.alt = "Banner do filme"
    img.classList.add("main-banner")

    title.textContent = movie.title
    title.classList.add("main-caption")

    figure.insertAdjacentElement("beforeend", img)
    figure.insertAdjacentElement("beforeend", title)

    listBanners.insertAdjacentElement("beforeend", figure)

    inputTitle.value = " "
    inputUrl.value = " "
    
    inputTitle.focus()

}