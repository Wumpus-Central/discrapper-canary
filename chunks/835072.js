r.d(t, { A: () => T, f: () => S });
var n = r(627968);
r(64700);
var l = r(451394),
    i = r(687966),
    o = r(323384),
    a = r(432017),
    s = r(748562),
    u = r(765379),
    E = r(82149),
    d = r(566903),
    I = r(864436),
    _ = r(200041),
    c = r(652215);
let S = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, E.Cy)(e)
        ? l.q
        : (0, u.A)(e)
          ? t
              ? i._
              : o.k
          : e.type === c.$pd.PLAYING
            ? i._
            : e.type === c.$pd.LISTENING
              ? a.T
              : e.type === c.$pd.WATCHING || e.type === c.$pd.STREAMING
                ? s.U
                : e.type === c.$pd.COMPETING
                  ? i._
                  : null;
};
function T(e) {
    let {
            activity: t,
            textVariant: r,
            textClassName: l,
            iconClassName: i,
            hideIcon: o = !1,
            hideText: a = !1,
            hideTooltip: s = !1,
            canTruncate: u = !0,
        } = e,
        { text: E, tooltip: c } = (0, d.A)(t, !0),
        T = S(t),
        A = null != T && !o;
    return (0, n.jsx)(_.A, {
        icon: A ? (0, n.jsx)(I.A, { icon: T, className: i }) : void 0,
        text: E ?? "",
        textVariant: r,
        textClassName: l,
        hideTooltip: s,
        canTruncate: u,
        "aria-label": c ?? "",
        hideText: a,
    });
}
