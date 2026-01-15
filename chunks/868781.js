n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(657707),
    a = n(841784),
    o = n(482798),
    s = n(750154),
    l = n(802529),
    c = n(11133),
    u = n(473919),
    d = n(532657),
    f = n(981631);
let p = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, s.dS)(e)
        ? i.StageIcon
        : (0, a.Z)(e)
          ? t
              ? i.GameControllerIcon
              : i.AppsIcon
          : e.type === f.IIU.PLAYING
            ? i.GameControllerIcon
            : e.type === f.IIU.LISTENING
              ? i.MusicIcon
              : e.type === f.IIU.WATCHING || e.type === f.IIU.STREAMING
                ? i.TvIcon
                : e.type === f.IIU.COMPETING
                  ? i.GameControllerIcon
                  : null;
};
function _(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideIcon: s = !1,
            hideText: f = !1,
            hideTooltip: _ = !1,
            canTruncate: h = !0,
        } = e,
        { descriptiveTextEnabled: m } = (0, l.f)({ location: "PresenceActivityStatusWithCombinedTooltip" }),
        { enableTopNavButton: g } = (0, o.Cq)({ location: "PresenceActivityStatusWithCombinedTooltip" }),
        { text: E, tooltip: b } = (0, c.Z)(t, m || g),
        y = p(t),
        O = null != y && !s;
    return (0, r.jsx)(d.Z, {
        icon: O
            ? (0, r.jsx)(u.Z, {
                  icon: y,
                  className: a,
              })
            : void 0,
        text: null != E ? E : "",
        textVariant: n,
        textClassName: i,
        hideTooltip: _,
        canTruncate: h,
        "aria-label": null != b ? b : "",
        hideText: f,
    });
}
