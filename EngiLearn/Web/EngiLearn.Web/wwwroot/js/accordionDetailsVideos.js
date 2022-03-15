var accordItem = document.getElementsByClassName('accordionItem');
var accordHD = document.getElementsByClassName('accordionItemHeading');

for (i = 0; i < accordHD.length; i++) {
    accordHD[i].addEventListener('click', toggleAccordItem, false);
}

function toggleAccordItem() {
    var itemAccordClass = this.parentNode.className;

    for (i = 0; i < accordItem.length; i++) {
        accordItem[i].className = 'accordionItem close';
    }

    if (itemAccordClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}