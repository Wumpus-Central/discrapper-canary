"use strict";
r.d(t, { A: () => h, f: () => m });
var n = r(627968);
r(64700);
var i = r(451394),
    a = r(687966),
    s = r(323384),
    l = r(432017),
    o = r(526181),
    c = r(765379),
    d = r(82149),
    u = r(566903),
    _ = r(864436),
    p = r(200041),
    f = r(652215);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? i.q
        : (0, c.A)(e)
          ? t
              ? a._
              : s.k
          : e.type === f.$pd.PLAYING
            ? a._
            : e.type === f.$pd.LISTENING
              ? l.T
              : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING
                ? o.U
                : e.type === f.$pd.COMPETING
                  ? a._
                  : null;
};
function h(e) {
    let {
            activity: t,
            textVariant: r,
            textClassName: i,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: l = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: f } = (0, u.A)(t, !0),
        h = m(t),
        g = null != h && !s;
    return (0, n.jsx)(p.A, {
        icon: g ? (0, n.jsx)(_.A, { icon: h, className: a }) : void 0,
        text: d ?? "",
        textVariant: r,
        textClassName: i,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": f ?? "",
        hideText: l,
    });
}
