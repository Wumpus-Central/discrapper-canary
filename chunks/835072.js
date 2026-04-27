"use strict";
n.d(t, { A: () => f, f: () => h });
var a = n(627968);
n(64700);
var r = n(451394),
    i = n(687966),
    l = n(323384),
    s = n(432017),
    o = n(526181),
    c = n(765379),
    d = n(82149),
    u = n(566903),
    _ = n(864436),
    p = n(200041),
    m = n(652215);
let h = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? r.q
        : (0, c.A)(e)
          ? t
              ? i._
              : l.k
          : e.type === m.$pd.PLAYING
            ? i._
            : e.type === m.$pd.LISTENING
              ? s.T
              : e.type === m.$pd.WATCHING || e.type === m.$pd.STREAMING
                ? o.U
                : e.type === m.$pd.COMPETING
                  ? i._
                  : null;
};
function f(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: r,
            iconClassName: i,
            hideIcon: l = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: m } = (0, u.A)(t, !0),
        f = h(t),
        g = null != f && !l;
    return (0, a.jsx)(p.A, {
        icon: g ? (0, a.jsx)(_.A, { icon: f, className: i }) : void 0,
        text: d ?? "",
        textVariant: n,
        textClassName: r,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": m ?? "",
        hideText: s,
    });
}
