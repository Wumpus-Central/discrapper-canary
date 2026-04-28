a.d(t, { A: () => _, f: () => f });
var n = a(627968);
a(64700);
var l = a(451394),
    r = a(687966),
    i = a(323384),
    s = a(432017),
    o = a(526181),
    c = a(765379),
    d = a(82149),
    u = a(566903),
    h = a(864436),
    p = a(200041),
    m = a(652215);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? l.q
        : (0, c.A)(e)
          ? t
              ? r._
              : i.k
          : e.type === m.$pd.PLAYING
            ? r._
            : e.type === m.$pd.LISTENING
              ? s.T
              : e.type === m.$pd.WATCHING || e.type === m.$pd.STREAMING
                ? o.U
                : e.type === m.$pd.COMPETING
                  ? r._
                  : null;
};
function _(e) {
    let {
            activity: t,
            textVariant: a,
            textClassName: l,
            iconClassName: r,
            hideIcon: i = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: m } = (0, u.A)(t, !0),
        _ = f(t),
        b = null != _ && !i;
    return (0, n.jsx)(p.A, {
        icon: b ? (0, n.jsx)(h.A, { icon: _, className: r }) : void 0,
        text: d ?? "",
        textVariant: a,
        textClassName: l,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": m ?? "",
        hideText: s,
    });
}
