"use strict";
a.d(t, { A: () => b, f: () => m });
var r = a(627968);
a(64700);
var l = a(451394),
    n = a(687966),
    i = a(323384),
    s = a(432017),
    o = a(526181),
    d = a(765379),
    c = a(82149),
    u = a(566903),
    h = a(864436),
    p = a(200041),
    _ = a(652215);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.Cy)(e)
        ? l.q
        : (0, d.A)(e)
          ? t
              ? n._
              : i.k
          : e.type === _.$pd.PLAYING
            ? n._
            : e.type === _.$pd.LISTENING
              ? s.T
              : e.type === _.$pd.WATCHING || e.type === _.$pd.STREAMING
                ? o.U
                : e.type === _.$pd.COMPETING
                  ? n._
                  : null;
};
function b(e) {
    let {
            activity: t,
            textVariant: a,
            textClassName: l,
            iconClassName: n,
            hideIcon: i = !1,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: d = !0,
        } = e,
        { text: c, tooltip: _ } = (0, u.A)(t, !0),
        b = m(t),
        g = null != b && !i;
    return (0, r.jsx)(p.A, {
        icon: g ? (0, r.jsx)(h.A, { icon: b, className: n }) : void 0,
        text: c ?? "",
        textVariant: a,
        textClassName: l,
        hideTooltip: o,
        canTruncate: d,
        "aria-label": _ ?? "",
        hideText: s,
    });
}
