"use strict";
n.d(t, { A: () => E, f: () => h });
var r = n(627968);
n(64700);
var i = n(451394),
    s = n(687966),
    a = n(323384),
    o = n(432017),
    l = n(526181),
    u = n(765379),
    c = n(82149),
    d = n(566903),
    _ = n(864436),
    f = n(200041),
    p = n(652215);
let h = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.Cy)(e)
        ? i.q
        : (0, u.A)(e)
          ? t
              ? s._
              : a.k
          : e.type === p.$pd.PLAYING
            ? s._
            : e.type === p.$pd.LISTENING
              ? o.T
              : e.type === p.$pd.WATCHING || e.type === p.$pd.STREAMING
                ? l.U
                : e.type === p.$pd.COMPETING
                  ? s._
                  : null;
};
function E(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: s,
            hideIcon: a = !1,
            hideText: o = !1,
            hideTooltip: l = !1,
            canTruncate: u = !0,
        } = e,
        { text: c, tooltip: p } = (0, d.A)(t, !0),
        E = h(t),
        m = null != E && !a;
    return (0, r.jsx)(f.A, {
        icon: m ? (0, r.jsx)(_.A, { icon: E, className: s }) : void 0,
        text: c ?? "",
        textVariant: n,
        textClassName: i,
        hideTooltip: l,
        canTruncate: u,
        "aria-label": p ?? "",
        hideText: o,
    });
}
