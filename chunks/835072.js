n.d(t, { A: () => T, f: () => A });
var i = n(627968);
n(64700);
var r = n(451394),
    a = n(687966),
    s = n(323384),
    _ = n(432017),
    l = n(526181),
    o = n(765379),
    E = n(82149),
    d = n(566903),
    c = n(864436),
    u = n(200041),
    I = n(652215);
let A = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, E.Cy)(e)
        ? r.q
        : (0, o.A)(e)
          ? t
              ? a._
              : s.k
          : e.type === I.$pd.PLAYING
            ? a._
            : e.type === I.$pd.LISTENING
              ? _.T
              : e.type === I.$pd.WATCHING || e.type === I.$pd.STREAMING
                ? l.U
                : e.type === I.$pd.COMPETING
                  ? a._
                  : null;
};
function T(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: r,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: _ = !1,
            hideTooltip: l = !1,
            canTruncate: o = !0,
        } = e,
        { text: E, tooltip: I } = (0, d.A)(t, !0),
        T = A(t),
        S = null != T && !s;
    return (0, i.jsx)(u.A, {
        icon: S ? (0, i.jsx)(c.A, { icon: T, className: a }) : void 0,
        text: E ?? "",
        textVariant: n,
        textClassName: r,
        hideTooltip: l,
        canTruncate: o,
        "aria-label": I ?? "",
        hideText: _,
    });
}
