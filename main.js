/**
 * Created by Jordan on 12/14/2014.
 */

var ide = function(ideObject) {
    this.div = ideObject;

    $(this.div).addClass("ideDiv");
    this.fileBrowser = $("<div id=\"fileBrowser\" class=\"fileBrowser\"></div>");
    $(this.fileBrowser).appendTo(this.div);
};