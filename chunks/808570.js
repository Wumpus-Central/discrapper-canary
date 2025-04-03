var n = r(656566);
t.exports = function t(e, r) {
    if (!e || !r) return !1;
    if (e === r) return !0;
    if (n(e)) return !1;
    if (n(r)) return t(e, r.parentNode);
    if ('contains' in e) return e.contains(r);
    else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(r));
    else return !1;
};
