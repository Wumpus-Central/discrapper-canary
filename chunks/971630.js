"use strict";
n.d(t, { T4: () => r, TP: () => l });
var i = n(989349),
    s = n.n(i);
function l(e, t) {
    let n = "",
        i = e >= 0;
    return i && (n += "+"), t ? (n += `${Math.floor(100 * e)}%`) : (n += e), { formattedValue: n, isPositive: i };
}
function r(e, t) {
    return null != e ? s()(e).format(t) : "-";
}
