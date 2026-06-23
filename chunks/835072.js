"use strict";
n.d(t, { A: () => E, f: () => p });
var i = n(627968);
n(64700);
var r = n(451394),
    s = n(687966),
    a = n(323384),
    o = n(432017),
    l = n(748562),
    u = n(765379),
    c = n(82149),
    d = n(566903),
    _ = n(864436),
    h = n(200041),
    f = n(652215);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.Cy)(e)
        ? r.q
        : (0, u.A)(e)
          ? t
              ? s._
              : a.k
          : e.type === f.$pd.PLAYING
            ? s._
            : e.type === f.$pd.LISTENING
              ? o.T
              : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING
                ? l.U
                : e.type === f.$pd.COMPETING
                  ? s._
                  : null;
}
function E(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: r,
            iconClassName: s,
            hideIcon: a = !1,
            hideText: o = !1,
            hideTooltip: l = !1,
            canTruncate: u = !0,
        } = e,
        { text: c, tooltip: f } = (0, d.A)(t, !0),
        E = p(t),
        m = null != E && !a;
    return (0, i.jsx)(h.A, {
        icon: m ? (0, i.jsx)(_.A, { icon: E, className: s }) : void 0,
        text: c ?? "",
        textVariant: n,
        textClassName: r,
        hideTooltip: l,
        canTruncate: u,
        "aria-label": f ?? "",
        hideText: o,
    });
}
