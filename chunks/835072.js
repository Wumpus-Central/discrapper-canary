"use strict";
n.d(t, { A: () => f, f: () => _ });
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(765379),
    s = n(82149),
    o = n(412242),
    l = n(566903),
    u = n(864436),
    c = n(200041),
    d = n(652215);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, s.Cy)(e)
        ? i.StageIcon
        : (0, a.A)(e)
          ? t
              ? i.GameControllerIcon
              : i.AppsIcon
          : e.type === d.$pd.PLAYING
            ? i.GameControllerIcon
            : e.type === d.$pd.LISTENING
              ? i.MusicIcon
              : e.type === d.$pd.WATCHING || e.type === d.$pd.STREAMING
                ? i.TvIcon
                : e.type === d.$pd.COMPETING
                  ? i.GameControllerIcon
                  : null;
};
function f(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: d = !1,
            hideTooltip: f = !1,
            canTruncate: p = !0,
        } = e,
        { descriptiveTextEnabled: h } = (0, o.n)({ location: "PresenceActivityStatusWithCombinedTooltip" }),
        { text: m, tooltip: g } = (0, l.A)(t, h),
        E = _(t),
        A = null != E && !s;
    return (0, r.jsx)(c.A, {
        icon: A ? (0, r.jsx)(u.A, { icon: E, className: a }) : void 0,
        text: m ?? "",
        textVariant: n,
        textClassName: i,
        hideTooltip: f,
        canTruncate: p,
        "aria-label": g ?? "",
        hideText: d,
    });
}
