n.d(t, { t: () => r });
var i = n(240248);
function r(e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
    let s = r.reduce((e, t) => e + (0, i.$G)(t), ""),
        l = e[`${t}${s}`];
    return null == l ? void 0 : l;
}
