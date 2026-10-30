e.d(l, { A: () => N, f: () => T });
var n = e(477900);
e(582128);
var a = e(350835),
    i = e(451394),
    o = e(687966),
    r = e(323384),
    s = e(432017),
    u = e(748562),
    p = e(765379),
    c = e(189117),
    d = e(82149),
    A = e(566903),
    m = e(864436),
    x = e(200041);
function T(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(t)
        ? i.q
        : (0, p.A)(t) || (0, c.$_)(t)
          ? l
              ? o.GameControllerIcon
              : r.k
          : t.type === a.$.PLAYING
            ? o.GameControllerIcon
            : t.type === a.$.LISTENING
              ? s.T
              : t.type === a.$.WATCHING || t.type === a.$.STREAMING
                ? u.U
                : t.type === a.$.COMPETING
                  ? o.GameControllerIcon
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
        { text: p, tooltip: c } = (0, A.A)(l, !0),
        d = T(l),
        N = null != d && !o;
    return (0, n.jsx)(x.A, {
        icon: N ? (0, n.jsx)(m.A, { icon: d, className: i }) : void 0,
        text: p ?? "",
        textVariant: e,
        textClassName: a,
        hideTooltip: s,
        canTruncate: u,
        "aria-label": c ?? "",
        hideText: r,
    });
}
