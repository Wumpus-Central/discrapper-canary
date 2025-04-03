function t(e, t) {
    return e
        .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
}
e.exports = function (e, n) {
    e.classList ? e.classList.remove(n) : 'string' == typeof e.className ? (e.className = t(e.className, n)) : e.setAttribute('class', t((e.className && e.className.baseVal) || '', n));
};
