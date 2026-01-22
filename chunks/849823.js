n.r(t),
    n.d(t, {
        default: () => d,
    }),
    n(747238),
    n(812715),
    n(896048);
var r = n(492462),
    i = n(652215);
let a = "_",
    s = /(-|%20)/g,
    o = "AND",
    l = /%26/g;

function c(e) {
    return null == e ? "" : e.toUpperCase().replace(s, a).replace(l, o);
}

function u(e) {
    return i.nc_.hasOwnProperty(e);
}

function d(e, t) {
    let [, , n, a] = e.split("/"),
        s = c(n),
        o = c(a),
        l = u(s),
        d = "" === o || u(o);
    return l && d
        ? {
              params: (0, r.parse)(null != t ? t : location.search),
              section: i.nc_[s],
              subsection: o,
          }
        : null;
}
