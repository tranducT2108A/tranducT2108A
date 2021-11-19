function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone (e) {
    //remove item from the list
    var target, elParent, elGrandparent;
    target = getTarget(e);

    if ( target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }

    //Prevent the link from taking you elsewhere
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
}

//Set up event listeners to call itemDone () on click
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });
}