n.d(t, {
    cD: () => i,
    qR: () => r
});
var o = n(810119);
function r(e) {
    var t = (0, o.Ei)(e);
    return function (n, o, r, i) {
        for (var a = '', s = 0; s < t; s++) a += e[s](n, o, r, i) || '';
        return a;
    };
}
function i(e) {
    return function (t) {
        !t.root && (t = t.return) && e(t);
    };
}
