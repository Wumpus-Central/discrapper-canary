n.d(t, { A: () => T, f: () => I });
var i = n(627968);
n(64700);
var a = n(451394),
    r = n(687966),
    s = n(323384),
    l = n(432017),
    o = n(526181),
    d = n(765379),
    c = n(82149),
    _ = n(566903),
    E = n(864436),
    u = n(200041),
    A = n(652215);
let I = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.Cy)(e)
        ? a.q
        : (0, d.A)(e)
          ? t
              ? r._
              : s.k
          : e.type === A.$pd.PLAYING
            ? r._
            : e.type === A.$pd.LISTENING
              ? l.T
              : e.type === A.$pd.WATCHING || e.type === A.$pd.STREAMING
                ? o.U
                : e.type === A.$pd.COMPETING
                  ? r._
                  : null;
};
function T(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: a,
            iconClassName: r,
            hideIcon: s = !1,
            hideText: l = !1,
            hideTooltip: o = !1,
            canTruncate: d = !0,
        } = e,
        { text: c, tooltip: A } = (0, _.A)(t, !0),
        T = I(t),
        h = null != T && !s;
    return (0, i.jsx)(u.A, {
        icon: h ? (0, i.jsx)(E.A, { icon: T, className: r }) : void 0,
        text: c ?? "",
        textVariant: n,
        textClassName: a,
        hideTooltip: o,
        canTruncate: d,
        "aria-label": A ?? "",
        hideText: l,
    });
}
