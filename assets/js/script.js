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
            title.style.boxShadow = "0px 0px 4px 1px rgba(34, 60, 80, 0.15)";
            title.style.borderColor = "var(--color-border-focus)";
            list.style.borderColor = "var(--color-border-focus)";
        });

        title.addEventListener("blur", () => {
            title.style.boxShadow = "none";
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
            listItems.forEach(item => {
                if (item.classList.contains('current-item')) {
                    item.scrollIntoView();
                }
            });
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


    //#region "date-period" class

    let datePeriods = document.querySelectorAll('.date-period');
    datePeriods.forEach(datePeriod => {

        let datePeriodInput = datePeriod.querySelector('.date-period-input');

        $(datePeriodInput).daterangepicker({
            startDate: moment().subtract(20, 'days'),
            endDate: moment(),
            autoUpdateInput: false,
            showCustomRangeLabel: false,
            startOfWeek: "monday",
            locale: {
                "format": "DD.MM.YYYY",
                "separator": " - ",
                "applyLabel": "Ок",
                "cancelLabel": "Назад",
                "daysOfWeek": [
                    "Вс",
                    "Пн",
                    "Вт",
                    "Ср",
                    "Чт",
                    "Пт",
                    "Сб"
                ],
                "monthNames": [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"
                ]
            }
        });

        let valueDateRange = datePeriodInput.querySelector(".date-period-value");
        let dateRangePicker = $(datePeriodInput).data('daterangepicker');
        let btnRefresh = datePeriod.querySelector('.date-period-refresh');

        dateRangePicker.callback = function() {
            let startDate = dateRangePicker.startDate.format("YYYY/MM/DD");
            let endDate = dateRangePicker.endDate.format("YYYY/MM/DD");
            valueDateRange.textContent = `${startDate}-${endDate}`;
            valueDateRange.style.color = "var(--color-secondary)";
            btnRefresh.style.fill = "var(--color-secondary)";
        }

        btnRefresh.addEventListener('click', () => {
            valueDateRange.textContent = "Введите период...";
            valueDateRange.style.color = "var(--color-inactive)";
            btnRefresh.style.fill = "var(--color-inactive)";
        });

    });

    //#endregion
});