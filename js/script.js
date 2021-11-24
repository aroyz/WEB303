$(document).ready(function () {
    const $searchInput = $("#search-input");
    const $characterTable = $("#character-table");
    const $buttonsDiv = $("#sort-buttons");
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
            $characterTable.append(this);
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

    $.ajax({
        url: 'includes/characters.json',
        type: 'GET',
        dataType: 'json',
        cache: 'false',
        error: function(xhr) {
            $characterTable.append(
                `<tr><td>Data failed to load from server.</td></tr>`
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

    }
});