"use strict";
n.r(t), n.d(t, { default: () => d });
var r = n(492462),
    i = n(652215);
let a = "_",
    s = /(-|%20)/g,
    o = "AND",
    l = /%26/g;
function u(e) {
    return null == e ? "" : e.toUpperCase().replace(s, a).replace(l, o);
}
function c(e) {
    return i.nc_.hasOwnProperty(e);
}
function d(e, t) {
    let [, , n, a] = e.split("/"),
        s = u(n),
        o = u(a),
        l = c(s),
        d = "" === o || c(o);
    return l && d ? { params: (0, r.parse)(t ?? location.search), section: i.nc_[s], subsection: o } : null;
}
