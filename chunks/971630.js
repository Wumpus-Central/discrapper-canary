n.d(t, { T4: () => r, TP: () => s });
var i = n(989349),
    l = n.n(i);
function s(e, t) {
    let n = "",
        i = e >= 0;
    return i && (n += "+"), t ? (n += `${Math.floor(100 * e)}%`) : (n += e), { formattedValue: n, isPositive: i };
}
function r(e, t) {
    return null != e ? l()(e).format(t) : "-";
}
