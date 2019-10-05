$(document).ready(function () {

    function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("searchbox");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("p");
        for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    $(".dropdown-content").hide();

    $("input").keydown(filterFunction);

    $(".search__button").click(function () {
        $(".dropdown, .search__button").hide();
        $("#searchbox").val("");
        $("#searchbox").attr("placeholder", "Search hotels");
    });

    $("input").click(function () {
        $(".dropdown, .dropdown-content, .search__button").show();
    });

});
