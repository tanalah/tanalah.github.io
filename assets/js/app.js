jQuery(document).ready(function () {
    var $=jQuery;
    
    /* Screen Management */
    var commonElements = [
        ['#screen-cache','#main-screen'],
        ['visible','push']
    ];
    var leftSide=[
        ['.screen#screen-left'],
        ['visible']
    ];
    var rightSide=[
        ['.screen#screen-right'],
        ['visible']
    ];
    var allCollapse = [
        mergeArray([
            commonElements[0], leftSide[0],
            rightSide[0]
        ]),
        mergeArray([
            commonElements[1], leftSide[1],
            rightSide[1]
        ])
    ];
    var leftCollapse = [
        mergeArray([commonElements[0],leftSide[0]]),
        mergeArray([commonElements[1],leftSide[1]])
    ];
    var rightCollapse = [
        mergeArray([commonElements[0],rightSide[0]]),
        mergeArray([commonElements[1],rightSide[1]])
    ];
    
    /* Screen Events */
   // removeClasses(allCollapse[0],allCollapse[1]);
    $('#collapse-screen-left').click(function(){
        addClasses(leftCollapse[0],leftCollapse[1]);
    });
    $('#collapse-screen-right').click(function (){
        addClasses(rightCollapse[0],rightCollapse[1]);
    });
    $('#close-collapse-left').click(function (){
        removeClasses(allCollapse[0],allCollapse[1]);
    });
    $('#close-collapse-right').click(function (){
        removeClasses(allCollapse[0],allCollapse[1]);
    });
    $('#screen-cache').click(function (){
        removeClasses(allCollapse[0],allCollapse[1]);
    });
    $(".menu li.submenu>.menu-toggle").click(function (){
       $(this).parent().toggleClass('visible'); 
    });
    /* All my custom Functions*/
    function addClasses (elements, classToAdd){
        if(elements.length!=classToAdd.length){
            return;
        }
        for(var i=0;i<elements.length;i++){
            $(elements[i]).addClass(classToAdd[i]);
        }
        return;
    }
    function removeClasses (elements, classToRemove){
        if(elements.length!=classToRemove.length){
            return;
        }
        for(var i=0;i<elements.length;i++){
            $(elements[i]).removeClass(classToRemove[i]);
        }
        return;
    }
    function mergeArray(Tabs){
        var T=[];
        for(var i=0;i<Tabs.length;i++){
            T = $.merge(T, Tabs[i]);
        }
        return T;
    }
});