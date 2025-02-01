function t(e, t) {
    return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
    };
}
e.exports = t;
