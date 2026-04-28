n.d(t, { A: () => y, f: () => m });
var r = n(627968);
n(64700);
var l = n(451394),
    i = n(687966),
    a = n(323384),
    u = n(432017),
    o = n(526181),
    s = n(765379),
    d = n(82149),
    c = n(566903),
    A = n(864436),
    f = n(200041),
    p = n(652215);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(e)
        ? l.q
        : (0, s.A)(e)
          ? t
              ? i._
              : a.k
          : e.type === p.$pd.PLAYING
            ? i._
            : e.type === p.$pd.LISTENING
              ? u.T
              : e.type === p.$pd.WATCHING || e.type === p.$pd.STREAMING
                ? o.U
                : e.type === p.$pd.COMPETING
                  ? i._
                  : null;
};
function y(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: l,
            iconClassName: i,
            hideIcon: a = !1,
            hideText: u = !1,
            hideTooltip: o = !1,
            canTruncate: s = !0,
        } = e,
        { text: d, tooltip: p } = (0, c.A)(t, !0),
        y = m(t),
        I = null != y && !a;
    return (0, r.jsx)(f.A, {
        icon: I ? (0, r.jsx)(A.A, { icon: y, className: i }) : void 0,
        text: d ?? "",
        textVariant: n,
        textClassName: l,
        hideTooltip: o,
        canTruncate: s,
        "aria-label": p ?? "",
        hideText: u,
    });
}
