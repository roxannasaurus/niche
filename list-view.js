/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var options = [['Education', 'KHP', 'Orange Juice'], ['Cafe', 'Excercise Lads'], ['Big One', 'Appalachian Romp Brigade'], ['Viewbook', 'Magazine']];
    function makeUL(array) {
    // Create the list element:
        var list = document.createElement('ul'), i, item;
        for (i = 0; i < array.length; i += 1) {
            // Create the list item:
            item = document.createElement('li');
            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));
            // Add it to the list:
            list.appendChild(item);
        }
        // Finally, return the constructed list:
        return list;
    }
    
    function makeList(list, id) {
        var i, text, link, space;
        for (i = 0; i < list.length; i += 1) {
            text = document.createTextNode(list[i]);
            link = document.createElement("a");
            space = document.createElement("br");
            link.appendChild(text);
            //  link.href = links[i];
            link.href = "/detail.html";
            document.getElementById(id).appendChild(link);
            document.getElementById(id).appendChild(space);
        }
    }
    
    (function () {
        function clickListener(arrow) {
            arrow.addEventListener("click", function () {
                var c = this.classList;
                if (c.contains("flipped") === true) {
                    c.remove("flipped");
                    if (arrow.id === "major-arrow") {
                        document.getElementById("major-list").innerHTML = "";
                    }
                    if (arrow.id === "llp-arrow") {
                        document.getElementById("llp-list").innerHTML = "";
                    }
                    if (arrow.id === "scholarship-arrow") {
                        document.getElementById("scholarship-list").innerHTML = "";
                    }
                    if (arrow.id === "publication-arrow") {
                        document.getElementById("publication-list").innerHTML = "";
                    }
                } else {
                    c.add("flipped");
                    if (arrow.id === "major-arrow") {
                        //document.getElementById('major-list').appendChild(makeUL(options[0]));
                        makeList(options[0], 'major-list');
                    }
                    if (arrow.id === "llp-arrow") {
                       // document.getElementById('llp-list').appendChild(makeUL(options[1]));
                        makeList(options[1], 'llp-list');
                    }
                    if (arrow.id === "scholarship-arrow") {
                        //document.getElementById('scholarship-list').appendChild(makeUL(options[2]));
                        makeList(options[2], 'scholarship-list');
                    }
                    if (arrow.id === "publication-arrow") {
                        //document.getElementById('publication-list').appendChild(makeUL(options[3]));
                        makeList(options[3], 'publication-list');
                    }
                }
            });
        }
        var arrows = document.querySelectorAll(".list-view-arrow.effect__click"), i, arrow, len;
        for (i = 0, len = arrows.length; i < len; i += 1) {
            arrow = arrows[i];
            clickListener(arrow);
        }

    }());
});
     