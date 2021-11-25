$(document).ready(function () {
    const $searchInput = $("#search-input");
    const $characterTableBody = $("#character-table tbody");
    const $buttonsDiv = $("#sort-buttons");
    const $tableHeaders = $("#characters-table th");
    const $rows = [];

    const dataProcessingFunction = function (characters) {
        $.each(characters, function (index, character) {
            let $newRow = $(`<tr></tr>`);

            if (character["name"].charAt(0).match(/[A-Ma-m]/)) {
                $newRow.addClass('a-to-m');
            }
            else {
                $newRow.addClass('n-to-z');
            }

            $.each(character, function (index, data) {
                $newRow.append(`<td>${data}</td>`);
            });

            $rows.push($newRow);
        });
        insertRowsFunction();
        createButtons();
    }
    const insertRowsFunction = function () {
        $.each($rows, function () {
            $characterTableBody.append(this);
        });
    }
    const createButtons = function () {
        let $atomRows = $('.a-to-m');
        let $ntozRows = $('.n-to-z');
        let $atomButton = $(`<button id="atomButton">A - M (${$atomRows.length})</button>`);
        let $ntozButton = $(`<button id="ntozButton">N - Z (${$ntozRows.length})</button>`);
        $buttonsDiv.append($atomButton, $ntozButton);
        bindButtons($atomRows, $ntozRows);
    }
    const bindButtons = function ($atomRows, $ntozRows) {
        $('#atomButton').on('click', function () {
            $atomRows.show();
            $ntozRows.hide();
        });
        $('#ntozButton').on('click', function () {
            $ntozRows.show();
            $atomRows.hide();
        });
    }
    const filterFunction = function () {
        let query = this.value.trim().toLowerCase();
        if (query) {
            $('#character-table tr:not(:first-of-type)').each(function () {
                let name = this.innerHTML.substring(4, this.innerHTML.indexOf('</')).toLowerCase();
                let indexOf = name.indexOf(query);
                this.style.backgroundColor = (indexOf == -1) ? '' : 'yellow';
            });
        }
        else {
            $('#character-table tr:not(:first-of-type)').each(function () {
                this.style.backgroundColor = '';
            });
        }
    }
    const compareFunctions = {
        chars: function (a, b) {
            if (a < b) {
                return -1;
            }
            else {
                return (a > b) ? 1 : 0;
            }
        },
        dates: function (a, b) {
            a = new Date(a);
            b = new Date(b);

            return a - b;
        }
    }

    $.ajax({
        url: 'includes/characters.json',
        type: 'GET',
        dataType: 'json',
        cache: 'false',
        error: function(xhr) {
            $characterTableBody.append(
                `<tr><td colspan="5">Data failed to load from server.</td></tr>`
            );
            alert(`An error ocured while retrieving data. Error code ${xhr.status}: ${xhr.statusText}`);
        },
        success: function(characters) {
            console.log(characters);
            dataProcessingFunction(characters["characters"]);
        }
    });

    if ('oninput' in $searchInput[0]) {
        $searchInput.on('input', filterFunction);
    }
    else {
        $searchInput.on('keyup', filterFunction);
    }

    $tableHeaders.on('click', function () {
        let $header = $(this);
        let order = $header.data('sort');
        let column;

        if ($header.is('.ascending') || $header.is('.descending')) {
            
        }
        else {
            $header.addClass('ascending');
            $header.siblings().removeClass('ascending descending');
            if (compare.hasOwnProperty(order)) {
                column = $tableHeaders.index(this);

                $rows.sort(function (a, b) {
                });
            }
        }
    });
});