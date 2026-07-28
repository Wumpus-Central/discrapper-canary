"use strict";
n.d(t, { A: () => I, f: () => h });
var i = n(477900);
n(582128);
var r = n(451394),
    a = n(687966),
    s = n(323384),
    l = n(432017),
    o = n(748562),
    d = n(765379),
    c = n(82149),
    u = n(566903),
    _ = n(864436),
    E = n(200041),
    A = n(652215);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.Cy)(e)
        ? r.q
        : (0, d.A)(e)
          ? t
              ? a._
              : s.k
          : e.type === A.$pd.PLAYING
            ? a._
            : e.type === A.$pd.LISTENING
              ? l.T
              : e.type === A.$pd.WATCHING || e.type === A.$pd.STREAMING
                ? o.U
                : e.type === A.$pd.COMPETING
                  ? a._
                  : null;
}
function I(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: r,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: l = !1,
            hideTooltip: o = !1,
            canTruncate: d = !0,
        } = e,
        { text: c, tooltip: A } = (0, u.A)(t, !0),
        I = h(t),
        f = null != I && !s;
    return (0, i.jsx)(E.A, {
        icon: f ? (0, i.jsx)(_.A, { icon: I, className: a }) : void 0,
        text: c ?? "",
        textVariant: n,
        textClassName: r,
        hideTooltip: o,
        canTruncate: d,
        "aria-label": A ?? "",
        hideText: l,
    });
}
