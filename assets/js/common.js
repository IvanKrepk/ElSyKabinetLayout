'use strict';

document.addEventListener("DOMContentLoaded", () => {

    //#region "dropdown" class

    let listDropdowns = document.querySelectorAll(".dropdown");
    listDropdowns.forEach(dropdown => {
        let dropdownTitle = dropdown.querySelector(".dropdown-title");
        let dropdownArea = dropdown.querySelector(".dropdown-area");

        dropdownTitle.addEventListener("click", () => {
            dropdown.classList.toggle("dropdown-closed");
        });
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

        $(datePeriodInput).on('show.daterangepicker', function(ev, picker) {  
            datePeriod.style.boxShadow = "0px 0px 4px 1px var(--color-box-shadow)";
            datePeriod.style.borderColor = "var(--color-border-focus)";
        });
        
        $(datePeriodInput).on('hide.daterangepicker', function(ev, picker) {  
            datePeriod.style.boxShadow = "";
            datePeriod.style.borderColor = "";
        });

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