viewCategory()
viewList(menu)


document.getElementById("btnCont").addEventListener("click", (e) => {

    if (e.target.getAttribute("data-id")) {
        console.log(e.target.getAttribute("data-id"))
        if (e.target.getAttribute("data-id") === "All") {
            viewList(menu)
        } else {
            state = menu.filter((s) => {
                return s.category == e.target.getAttribute("data-id")
            })

            viewList(state)

        }

      }



})


function viewList(state) {

    while (document.getElementById("singleItems").firstChild) {
        document.getElementById("singleItems").removeChild(document.getElementById("singleItems").firstChild)
    }


    state.map((s) => {
        let item = document.createElement("div")
        item.classList.add("menu-items", "col-lg-6", "col-sm-12")
        let pic = document.createElement("img")
        pic.src = s.img
        pic.classList.add("photo")
        item.appendChild(pic)
        /////////////////////////////////////////////////////////////////////
        let mInfo = document.createElement("div")
        mInfo.classList.add("menu-info")
        let mTitle = document.createElement("div")
        mTitle.classList.add("menu-title")
        let mName = document.createElement("h4")
        let mNameContent = document.createTextNode(s.title)
        mName.appendChild(mNameContent)
        let mPrice = document.createElement("h4")
        mPrice.classList.add("price")
        let priceContent = document.createTextNode(s.price)
        mPrice.appendChild(priceContent)
        let menuText = document.createElement("div")
        menuText.classList.add("menu-text")
        let mTextContent = document.createTextNode(s.desc)
        menuText.appendChild(mTextContent)

        mTitle.appendChild(mName)
        mTitle.appendChild(mPrice)
        mInfo.appendChild(mTitle)
        mInfo.appendChild(menuText)
        item.appendChild(mInfo)
        /////////////////////////////////////////////////////////////////////


        document.getElementById("singleItems").appendChild(item)

    })

}


function viewCategory() {

    var categoryList = ["All"]

    menu
        .map((m) => {

            if (!categoryList.some((c) => { return c == m.category })) {
                categoryList.push(m.category)
            }



        })


    writeCategory(categoryList)


}

function writeCategory(list) {

    var btnCont = document.getElementById("btnCont")

    list
        .map((l) => {
            let button = document.createElement("button")
            let butContent = document.createTextNode(l)
            button.appendChild(butContent)
            button.classList.add("btn", "btn-outline-dark", "btn-item")
            button.setAttribute("data-id", l)


            btnCont.appendChild(button)
        })


}

