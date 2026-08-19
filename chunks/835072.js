l.d(t, { A: () => T, f: () => _ });
var n = l(477900);
l(582128);
var i = l(451394),
    r = l(687966),
    a = l(323384),
    s = l(432017),
    o = l(748562),
    c = l(765379),
    d = l(82149),
    u = l(566903),
    h = l(864436),
    E = l(200041),
    I = l(652215);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? i.q
        : (0, c.A)(e)
          ? t
              ? r.GameControllerIcon
              : a.k
          : e.type === I.$pd.PLAYING
            ? r.GameControllerIcon
            : e.type === I.$pd.LISTENING
              ? s.T
              : e.type === I.$pd.WATCHING || e.type === I.$pd.STREAMING
                ? o.U
                : e.type === I.$pd.COMPETING
                  ? r.GameControllerIcon
                  : null;
}
function T(e) {
    let {
            activity: t,
            textVariant: l,
            textClassName: i,
            iconClassName: r,
            hideIcon: a = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: I } = (0, u.A)(t, !0),
        T = _(t),
        f = null != T && !a;
    return (0, n.jsx)(E.A, {
        icon: f ? (0, n.jsx)(h.A, { icon: T, className: r }) : void 0,
        text: d ?? "",
        textVariant: l,
        textClassName: i,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": I ?? "",
        hideText: s,
    });
}
