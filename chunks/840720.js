n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(305347),
    c = n(172751),
    u = n(131085),
    d = n(741666);
function f(e) {
    let { className: t, guildTag: n, guildBadge: a, guildId: f, guildName: p, guildIcon: _, guildIconSize: m } = e,
        h = i.useRef(null),
        [g, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = h.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, r.jsxs)("div", {
            className: o()(d.container, t),
            children: [
                (0, r.jsxs)("div", {
                    className: d.guildPrefixContainer,
                    children: [
                        (0, r.jsx)(l.Ft, {
                            guildId: f,
                            guildName: p,
                            guildIcon: _,
                            iconSize: m,
                            className: d.guildPrefixIcon,
                            animate: !1,
                        }),
                        (0, r.jsx)("div", {
                            className: d.details,
                            children: (0, r.jsx)(s.u, {
                                __unsupportedReactNodeAsText: p,
                                shouldShow: g,
                                children: (0, r.jsx)("span", {
                                    ref: h,
                                    className: d.guildName,
                                    children: p,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d.tagContainer,
                    children: (0, r.jsx)(c.m0, {
                        guildId: f,
                        className: d.tag,
                        guildTag: n,
                        guildBadge: a,
                        badgeSize: u.Gg.SIZE_16,
                        textColor: "interactive-text-default",
                        textVariant: "text-sm/semibold",
                        badgeClassName: d.badge,
                    }),
                }),
            ],
        })
    );
}
