n.d(t, { A: () => m, f: () => h });
var a = n(627968);
n(64700);
var i = n(451394),
    l = n(687966),
    r = n(323384),
    o = n(432017),
    s = n(526181),
    c = n(765379),
    d = n(82149),
    u = n(566903),
    _ = n(864436),
    p = n(200041),
    f = n(652215);
let h = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? i.q
        : (0, c.A)(e)
          ? t
              ? l._
              : r.k
          : e.type === f.$pd.PLAYING
            ? l._
            : e.type === f.$pd.LISTENING
              ? o.T
              : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING
                ? s.U
                : e.type === f.$pd.COMPETING
                  ? l._
                  : null;
};
function m(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: l,
            hideIcon: r = !1,
            hideText: o = !1,
            hideTooltip: s = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: f } = (0, u.A)(t, !0),
        m = h(t),
        g = null != m && !r;
    return (0, a.jsx)(p.A, {
        icon: g ? (0, a.jsx)(_.A, { icon: m, className: l }) : void 0,
        text: d ?? "",
        textVariant: n,
        textClassName: i,
        hideTooltip: s,
        canTruncate: c,
        "aria-label": f ?? "",
        hideText: o,
    });
}
