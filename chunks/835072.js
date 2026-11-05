var e = n(477900);
n(582128);
var a = n(350835),
    i = n(451394),
    o = n(687966),
    r = n(323384),
    s = n(432017),
    u = n(748562),
    c = n(765379),
    p = n(189117),
    d = n(82149),
    A = n(566903),
    m = n(864436),
    x = n(200041);
function I(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, d.Cy)(t)
        ? i.StageIcon
        : (0, c.A)(t) || (0, p.$_)(t)
          ? l
              ? o.GameControllerIcon
              : r.AppsIcon
          : t.type === a.$.PLAYING
            ? o.GameControllerIcon
            : t.type === a.$.LISTENING
              ? s.MusicIcon
              : t.type === a.$.WATCHING || t.type === a.$.STREAMING
                ? u.TvIcon
                : t.type === a.$.COMPETING
                  ? o.GameControllerIcon
                  : null;
}
n.d(
    l,
    {},
    {
        A: function (t) {
            let {
                    activity: l,
                    textVariant: n,
                    textClassName: a,
                    iconClassName: i,
                    hideIcon: o = !1,
                    hideText: r = !1,
                    hideTooltip: s = !1,
                    canTruncate: u = !0,
                } = t,
                { text: c, tooltip: p } = (0, A.A)(l, !0),
                d = I(l),
                T = null != d && !o;
            return (0, e.jsx)(x.A, {
                icon: T ? (0, e.jsx)(m.A, { icon: d, className: i }) : void 0,
                text: c ?? "",
                textVariant: n,
                textClassName: a,
                hideTooltip: s,
                canTruncate: u,
                "aria-label": p ?? "",
                hideText: r,
            });
        },
        f: I,
    },
);
