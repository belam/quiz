define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/text!./templates/App.html"
], function(
    declare, lang, BorderContainer, ContentPane, TemplatedMixin, WidgetBase, template
){
    return declare("quiz.app", [WidgetBase, TemplatedMixin], {
        
        baseClass : "quiz",
        templateString : template,
        
        postCreate : function(){
            this._buildLayout();
            this.inherited(arguments);
        },
        
        _buildLayout : function(){
            this.bc = new BorderContainer({
                style : "height:100%; width:100%;"
            }, this.contentNode);
            
            this.top = new ContentPane({
                region : "top",
                content : "Top Pane"
            });
            
            this.left = new ContentPane({
                region : "left",
                style : "width:30%;"
            }, this.leftNode);
            
            this.center = new ContentPane({
                region : "center",
                content : "Center",
                style : "width:70%;"
            }, this.centerNode);
            
            this.bc.addChild(this.top);
            this.bc.addChild(this.left);
            this.bc.addChild(this.center);
            this.foo.innerHTML = "Left by attach point";
            
            this.bc.startup();
            this.inherited(arguments);
        }
        
    });
});

