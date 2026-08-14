e.d(l, { A: () => m, f: () => T });
var n = e(477900);
e(582128);
var i = e(451394),
    a = e(687966),
    s = e(323384),
    o = e(432017),
    r = e(748562),
    u = e(765379),
    p = e(82149),
    d = e(566903),
    c = e(864436),
    A = e(200041),
    x = e(652215);
function T(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, p.Cy)(t)
        ? i.q
        : (0, u.A)(t)
          ? l
              ? a._
              : s.k
          : t.type === x.$pd.PLAYING
            ? a._
            : t.type === x.$pd.LISTENING
              ? o.T
              : t.type === x.$pd.WATCHING || t.type === x.$pd.STREAMING
                ? r.U
                : t.type === x.$pd.COMPETING
                  ? a._
                  : null;
}
function m(t) {
    let {
            activity: l,
            textVariant: e,
            textClassName: i,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: o = !1,
            hideTooltip: r = !1,
            canTruncate: u = !0,
        } = t,
        { text: p, tooltip: x } = (0, d.A)(l, !0),
        m = T(l),
        h = null != m && !s;
    return (0, n.jsx)(A.A, {
        icon: h ? (0, n.jsx)(c.A, { icon: m, className: a }) : void 0,
        text: p ?? "",
        textVariant: e,
        textClassName: i,
        hideTooltip: r,
        canTruncate: u,
        "aria-label": x ?? "",
        hideText: o,
    });
}
