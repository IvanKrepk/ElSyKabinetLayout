'use strict';

document.addEventListener("DOMContentLoaded", () => {

    //#region "dropdown" class

    let listDropdowns = document.querySelectorAll(".dropdown");
    listDropdowns.forEach(dropdown => {

        let scrollView = dropdown.querySelector(".dropdown-scroll-view");
        let currentValueItem = dropdown.querySelector(".dropdown-current-value");
        let title = dropdown.querySelector(".dropdown-title");
        let list = dropdown.querySelector(".dropdown-scroll");
        let listItems = dropdown.querySelectorAll(".dropdown-scroll li");

        //#region mouse hover

        title.addEventListener("mousemove", () => {
            if (document.activeElement != title) {
                title.style.borderColor = "var(--color-border-hover)";
                list.style.borderColor = "var(--color-border-hover)";
            }
        });

        title.addEventListener("mouseleave", () => {
            if (document.activeElement != title) {
                title.style.borderColor = "var(--color-border)";
                list.style.borderColor = "var(--color-border)";
            }
        });

        //#endregion

        //#region focus

        title.addEventListener("focus", () => {
            title.style.borderColor = "var(--color-border-focus)";
            list.style.borderColor = "var(--color-border-focus)";
        });

        title.addEventListener("blur", () => {
            title.style.borderColor = "var(--color-border)";
            list.style.borderColor = "var(--color-border)";

            setTimeout(() => { 
                if (!dropdown.classList.contains("dropdown-closed")) {
                    dropdown.classList.add("dropdown-closed");
                }
            }, 200);
        });

        //#endregion

        title.addEventListener("click", () => {
            dropdown.classList.toggle("dropdown-closed");
            scrollView.style.width = `${list.scrollWidth}px`;
        });

        //#region select item

        listItems.forEach(item => {

            let itemValue = item.querySelector(".dropdown-item-value");
            
            if (itemValue.textContent == currentValueItem.textContent) {
                item.classList.add("current-item");
            } 

            item.addEventListener("click", () => {
                listItems.forEach(listItem => {
                    listItem.classList.remove("current-item");
                });
                item.classList.add("current-item");
                currentValueItem.textContent = itemValue.textContent;
            });
        });

        //#endregion
    });

    //#endregion

});