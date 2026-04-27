a.d(t, { A: () => b, f: () => f });
var r = a(627968);
a(64700);
var n = a(451394),
    l = a(687966),
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
        ? n.q
        : (0, c.A)(e)
          ? t
              ? l._
              : i.k
          : e.type === m.$pd.PLAYING
            ? l._
            : e.type === m.$pd.LISTENING
              ? s.T
              : e.type === m.$pd.WATCHING || e.type === m.$pd.STREAMING
                ? o.U
                : e.type === m.$pd.COMPETING
                  ? l._
                  : null;
};
function b(e) {
    let {
            activity: t,
            textVariant: a,
            textClassName: n,
            iconClassName: l,
            hideIcon: i = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: m } = (0, u.A)(t, !0),
        b = f(t),
        _ = null != b && !i;
    return (0, r.jsx)(p.A, {
        icon: _ ? (0, r.jsx)(h.A, { icon: b, className: l }) : void 0,
        text: d ?? "",
        textVariant: a,
        textClassName: n,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": m ?? "",
        hideText: s,
    });
}
