n.d(t, {
    t: () => i,
});
var r = n(240248);

function i(e, t) {
    for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
    let s = i.reduce((e, t) => e + (0, r.$G)(t), ""),
        o = e["".concat(t).concat(s)];
    return null == o ? void 0 : o;
}
