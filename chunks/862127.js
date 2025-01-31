function i(e, t) {
    return e
        .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
}
function r(e, t) {
    e.classList ? e.classList.remove(t) : 'string' == typeof e.className ? (e.className = i(e.className, t)) : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t));
}
n.d(t, { Z: () => r });
