e.d(l, { A: () => T, f: () => m });
var n = e(477900);
e(582128);
var a = e(451394),
    i = e(687966),
    s = e(323384),
    o = e(432017),
    r = e(748562),
    u = e(765379),
    p = e(82149),
    d = e(566903),
    c = e(864436),
    A = e(200041),
    x = e(652215);
function m(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, p.Cy)(t)
        ? a.q
        : (0, u.A)(t)
          ? l
              ? i.GameControllerIcon
              : s.k
          : t.type === x.$pd.PLAYING
            ? i.GameControllerIcon
            : t.type === x.$pd.LISTENING
              ? o.T
              : t.type === x.$pd.WATCHING || t.type === x.$pd.STREAMING
                ? r.U
                : t.type === x.$pd.COMPETING
                  ? i.GameControllerIcon
                  : null;
}
function T(t) {
    let {
            activity: l,
            textVariant: e,
            textClassName: a,
            iconClassName: i,
            hideIcon: s = !1,
            hideText: o = !1,
            hideTooltip: r = !1,
            canTruncate: u = !0,
        } = t,
        { text: p, tooltip: x } = (0, d.A)(l, !0),
        T = m(l),
        h = null != T && !s;
    return (0, n.jsx)(A.A, {
        icon: h ? (0, n.jsx)(c.A, { icon: T, className: i }) : void 0,
        text: p ?? "",
        textVariant: e,
        textClassName: a,
        hideTooltip: r,
        canTruncate: u,
        "aria-label": x ?? "",
        hideText: o,
    });
}
