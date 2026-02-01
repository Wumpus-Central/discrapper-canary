n.d(t, {
    A: () => p,
    f: () => f,
});
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(765379),
    o = n(82149),
    s = n(412242),
    l = n(566903),
    c = n(864436),
    u = n(200041),
    d = n(652215);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, o.Cy)(e)
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

function p(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideIcon: o = !1,
            hideText: d = !1,
            hideTooltip: p = !1,
            canTruncate: _ = !0,
        } = e,
        { descriptiveTextEnabled: h } = (0, s.n)({
            location: "PresenceActivityStatusWithCombinedTooltip",
        }),
        { text: m, tooltip: g } = (0, l.A)(t, h),
        E = f(t),
        y = null != E && !o;
    return (0, r.jsx)(u.A, {
        icon: y
            ? (0, r.jsx)(c.A, {
                  icon: E,
                  className: a,
              })
            : void 0,
        text: null != m ? m : "",
        textVariant: n,
        textClassName: i,
        hideTooltip: p,
        canTruncate: _,
        "aria-label": null != g ? g : "",
        hideText: d,
    });
}
