e.exports = function (e, t) {
    if ((' ' + t.className + ' ').indexOf(' combokeys ') > -1) return !1;
    var n = t.tagName.toLowerCase();
    return 'input' === n || 'select' === n || 'textarea' === n || t.isContentEditable;
};
