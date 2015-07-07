define([
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/FlashCard.html"
], function(
    declare, attr, WidgetBase, TemplatedMixin, template
){
    return declare("quiz.FlashCard", [WidgetBase, TemplatedMixin], {
        
        baseClass : "flashCard",
        templateString : template,
        
        _setTopNumberAttr : {
            node : "topBoxNode",
            type : "innerHTML"
        },
        
        _setBottomNumberAttr : {
            node : "bottomBoxNode",
            type : "innerHTML"
        },
        
        _setOperatorAttr : {
            node : "operatorNode",
            type : "innerHTML"
        }
        
    });
});