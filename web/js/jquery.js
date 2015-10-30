
function makeRow(person) {
    var row = "<tr id='" + person.id + "'><td>" + person.id + "</td><td>" + person.name + "</td><td>" + person.age + "</td><td>" + person.email + "</td><td>" + person.eyeColor + "</td>";
    return row;
}


function getData() {
    $("#error").html("").hide();
    $("#tbody").html("");
    $.ajax({
        url: "api/member/"
    }).done(function (result) {
        result.forEach(function (person) {
            $("#tbody").append(makeRow(person));
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        $("#error").html(textStatus + ", " + errorThrown).show();
    });
}
$(document).ready(function () {
    getData();
}
);