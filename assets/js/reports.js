'use strict';

document.addEventListener("DOMContentLoaded", () => {
    
    //#region  "report-filter-dropdown" class

    let filterDropdowns = document.querySelectorAll(".reports-dropdown");
    filterDropdowns.forEach(filterDropdown => {
        let dropdownTitle = filterDropdown.querySelector(".dropdown-title");
        let currentValue = dropdownTitle.querySelector(".reports-dropdown-current-value");
        let dropdownArea = filterDropdown.querySelector(".dropdown-area");
        let dropdownItems = dropdownArea.querySelectorAll(".dropdown-item");
        let titleChangableItems = dropdownArea.querySelectorAll(".title-changable-item");
        let isDropdownAreaHover = false;

        dropdownArea.addEventListener("mouseenter", () => {
            isDropdownAreaHover = true;
        });
        dropdownArea.addEventListener("mouseleave", () => {
            isDropdownAreaHover = false;
        });
        
        dropdownTitle.addEventListener("blur", () => {
            if (!isDropdownAreaHover) {
                if (!filterDropdown.classList.contains("dropdown-closed")) {
                    filterDropdown.classList.add("dropdown-closed");
                }
            }
        });

        titleChangableItems.forEach(titleChangableItem => {
            titleChangableItem.addEventListener("click", () => {
                currentValue.textContent = titleChangableItem.textContent;
                
                dropdownItems.forEach(item => {
                    item.classList.remove("selected-item")
                });
                titleChangableItem.classList.add("selected-item");
                titleChangableItem.scrollIntoView();
            });    
        });

        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener("click", () => {
                if (!filterDropdown.classList.contains("dropdown-closed")) {
                    filterDropdown.classList.add("dropdown-closed");
                }
                dropdownTitle.focus();
            });
        });
    });

    //#endregion
});