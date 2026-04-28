"use strict";
n.d(t, { A: () => h, f: () => m });
var r = n(627968);
n(64700);
var a = n(451394),
    i = n(687966),
    l = n(323384),
    s = n(432017),
    o = n(526181),
    c = n(765379),
    d = n(82149),
    u = n(566903),
    _ = n(864436),
    p = n(200041),
    f = n(652215);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? a.q
        : (0, c.A)(e)
          ? t
              ? i._
              : l.k
          : e.type === f.$pd.PLAYING
            ? i._
            : e.type === f.$pd.LISTENING
              ? s.T
              : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING
                ? o.U
                : e.type === f.$pd.COMPETING
                  ? i._
                  : null;
};
function h(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: a,
            iconClassName: i,
            hideIcon: l = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: c = !0,
        } = e,
        { text: d, tooltip: f } = (0, u.A)(t, !0),
        h = m(t),
        g = null != h && !l;
    return (0, r.jsx)(p.A, {
        icon: g ? (0, r.jsx)(_.A, { icon: h, className: i }) : void 0,
        text: d ?? "",
        textVariant: n,
        textClassName: a,
        hideTooltip: o,
        canTruncate: c,
        "aria-label": f ?? "",
        hideText: s,
    });
}
