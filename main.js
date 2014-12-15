/**
 * Created by Jordan on 12/14/2014.
 */

var ide = function(ideObject) {
    this.div = ideObject;

    $(this.div).addClass("ideDiv");
    this.fileBrowser = $("<div id=\"fileBrowser\" class=\"fileBrowser\"></div>");
    $(this.fileBrowser).appendTo(this.div);
    this.editor = $("<div id=\"editor\" class=\"editor\"></div>");
    $(this.editor).appendTo(this.div);
    this.testing = $("<div id=\"testing\" class=\"testing\"></div>");
    $(this.testing).appendTo(this.div);
    
    //Done creating elements, now to fill them
    
    /*
    -------------------------------------------------------------------------
            jsTree creation
    -------------------------------------------------------------------------
    */
    $(this.fileBrowser).jstree({"core" : {
        "animation" : 0,
        "check_callback" : true,
        "themes" : { "stripes" : true },
        'data' : {
          'url' : function (node) {
            return node.id === '#' ?
              'ajax_demo_roots.json' : 'ajax_demo_children.json';
          },
          'data' : function (node) {
            return { 'id' : node.id };
          }
        }
      },
      "types" : {
        "#" : {
          "max_children" : 1, 
          "max_depth" : 4, 
          "valid_children" : ["root"]
        },
        "root" : {
          "icon" : "/static/3.0.8/assets/images/tree_icon.png",
          "valid_children" : ["default"]
        },
        "default" : {
          "valid_children" : ["default","file"]
        },
        "file" : {
          "icon" : "glyphicon glyphicon-file",
          "valid_children" : []
        }
      },
      "plugins" : [
        "contextmenu", "dnd", "search",
        "state", "types", "wholerow"
      ]
    });
    
    /*
    -------------------------------------------------------------------------
            Ace Editor creation
    -------------------------------------------------------------------------
    */
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
};