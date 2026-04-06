n.d(e, { A: () => r });
function r(t, e) {
    if (null == t) return {};
    var n = {};
    for (var r in t)
        if ({}.hasOwnProperty.call(t, r)) {
            if (-1 !== e.indexOf(r)) continue;
            n[r] = t[r];
        }
    return n;
}
