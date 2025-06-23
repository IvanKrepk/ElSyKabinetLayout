document.addEventListener("DOMContentLoaded", () => {
    
    //#region  "report-filter-dropdown" class

    let filterDropdowns = document.querySelectorAll(".reports-filter-dropdown");
    filterDropdowns.forEach(filterDropdown => {
        dropdownTitle = filterDropdown.querySelector(".dropdown-title");
        currentValue = dropdownTitle.querySelector(".reports-filter-dropdown-current-value");
        dropdownArea = filterDropdown.querySelector(".dropdown-area");
        dropdownItems = dropdownArea.querySelectorAll(".dropdown-item");

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

        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener("click", () => {
                currentValue.textContent = dropdownItem.textContent;
                
                dropdownItems.forEach(item => {
                    item.classList.remove("selected-item")
                });
                dropdownItem.classList.add("selected-item");
                dropdownItem.scrollIntoView();

                if (!filterDropdown.classList.contains("dropdown-closed")) {
                    filterDropdown.classList.add("dropdown-closed");
                }
                dropdownTitle.focus();
            });
        });
    });

    //#endregion
});