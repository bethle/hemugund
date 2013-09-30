/*notification headerlist headerdetails*/
function toggle(e) {
    var elem = next(e);
    if (elem.style.maxHeight === '1000px') {
        slideUp(elem);
    }
    else {
        slideDown(elem);
    }
}
function slideDown(elem)
{
    if (elem !== null) {
        if (elem.className !== 'ui-list-arrow') {
            elem.style.maxHeight = '1000px';
            elem.style.borderBottom = '1px solid #c2c2c2';
        }
    }
}
function slideUp(elem)
{
    elem.style.maxHeight = '0';
    elem.style.borderBottom = '0';
}
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}
/*notification headerlist headerdetails*/

/*contact us*/
function clearForm(id) {
    var elem = document.getElementById(id);
    elem.reset();
}
/*contact us*/

/*header details*/
function closeActionHeader() {
    var elem = document.getElementById('ActionHeader');
    slideUp(elem);
}
/*header details*/

/*headerdetails start*/
function showAlert(id) {
    var elem = document.getElementById(id);
    elem.parentNode.parentNode.className = "popup-hide";
    elem.className = "popup-hide";
    elem.parentNode.parentNode.className = "ui-popup-show";
    elem.className = "ui-popup-show";
}
function closeAlert(elem) {
    var commentClear1 = document.getElementById('approve-comment');
    var commentClear2 = document.getElementById('reject-comment');
    commentClear1.value = "";
    commentClear2.value = "";
    elem.parentNode.parentNode.parentNode.className = "popup-hide";
    elem.parentNode.className = "popup-hide";
//    elem.parentNode.parentNode.parentNode.className = "popup-hide";
//    elem.parentNode.className = "popup-hide";
    if (document.getElementById('header-list') !== null) {
        document.getElementById('header-list').removeAttribute('style');
        document.getElementById('header-list').style.height = 'auto';
    }
}

/*headerdetails end*/
function tab(elem) {
    var index = $(elem).index();
    index = index + 1;
    $("#ui-tab-content>div").removeClass('show');
    $("#ui-tab-content>div:nth-child(" + index + ")").addClass('show');
}
/*All pages*/