e.d(l, { A: () => N, f: () => T });
var n = e(477900);
e(582128);
var a = e(451394),
    i = e(687966),
    o = e(323384),
    r = e(432017),
    s = e(748562),
    u = e(765379),
    p = e(869843),
    d = e(82149),
    c = e(566903),
    A = e(864436),
    m = e(200041),
    x = e(652215);
function T(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(t)
        ? a.q
        : (0, u.A)(t) || (0, p.HL)(t)
          ? l
              ? i.GameControllerIcon
              : o.k
          : t.type === x.$pd.PLAYING
            ? i.GameControllerIcon
            : t.type === x.$pd.LISTENING
              ? r.T
              : t.type === x.$pd.WATCHING || t.type === x.$pd.STREAMING
                ? s.U
                : t.type === x.$pd.COMPETING
                  ? i.GameControllerIcon
                  : null;
}
function N(t) {
    let {
            activity: l,
            textVariant: e,
            textClassName: a,
            iconClassName: i,
            hideIcon: o = !1,
            hideText: r = !1,
            hideTooltip: s = !1,
            canTruncate: u = !0,
        } = t,
        { text: p, tooltip: d } = (0, c.A)(l, !0),
        x = T(l),
        N = null != x && !o;
    return (0, n.jsx)(m.A, {
        icon: N ? (0, n.jsx)(A.A, { icon: x, className: i }) : void 0,
        text: p ?? "",
        textVariant: e,
        textClassName: a,
        hideTooltip: s,
        canTruncate: u,
        "aria-label": d ?? "",
        hideText: r,
    });
}
