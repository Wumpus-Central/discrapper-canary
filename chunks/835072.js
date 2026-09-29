e.d(l, { A: () => T, f: () => x });
var n = e(477900);
e(582128);
var a = e(451394),
    i = e(687966),
    o = e(323384),
    r = e(432017),
    s = e(748562),
    u = e(765379),
    p = e(82149),
    d = e(566903),
    c = e(864436),
    A = e(200041),
    m = e(652215);
function x(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, p.Cy)(t)
        ? a.q
        : (0, u.A)(t)
          ? l
              ? i.GameControllerIcon
              : o.k
          : t.type === m.$pd.PLAYING
            ? i.GameControllerIcon
            : t.type === m.$pd.LISTENING
              ? r.T
              : t.type === m.$pd.WATCHING || t.type === m.$pd.STREAMING
                ? s.U
                : t.type === m.$pd.COMPETING
                  ? i.GameControllerIcon
                  : null;
}
function T(t) {
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
        { text: p, tooltip: m } = (0, d.A)(l, !0),
        T = x(l),
        N = null != T && !o;
    return (0, n.jsx)(A.A, {
        icon: N ? (0, n.jsx)(c.A, { icon: T, className: i }) : void 0,
        text: p ?? "",
        textVariant: e,
        textClassName: a,
        hideTooltip: s,
        canTruncate: u,
        "aria-label": m ?? "",
        hideText: r,
    });
}
