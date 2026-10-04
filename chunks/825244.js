n.d(t, { A: () => S, E: () => A.E });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(17928),
    c = n(297264),
    d = n(834730),
    u = n(444927),
    h = n(280450),
    m = n(71393),
    g = n(975571),
    p = n(314307),
    A = n(681026),
    f = n(413125),
    x = n(652215),
    C = n(375708),
    E = n(936820);
function S(e) {
    let t,
        n,
        s,
        { channel: S } = e,
        I = (0, o.bG)([m.A], () => (null != S ? m.A.getGuild(S.getGuildId()) : null), [S]),
        j = (0, o.bG)([h.default], () => I?.ownerId === h.default.getId(), [I]),
        { steps: y, shouldAnimate: v, isOldGuild: _ } = (0, f.c)(S, I),
        { titleAnimatedStyle: b, opacities: T } =
            ((t = (0, u.A)(() => new r.A.Value(0))),
            (n = (0, u.A)(() => new r.A.Value(0))),
            (s = (0, u.A)(() => [
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
            ])),
            i.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(n, { toValue: 1, duration: 450 }),
                        r.A.timing(t, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(
                        100,
                        s.map((e) => r.A.timing(e, { toValue: 1, duration: 300 })),
                    ),
                ]).start();
            }, [n, t, s]),
            {
                titleAnimatedStyle: v
                    ? {
                          transform: [
                              { translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: n,
                      }
                    : {},
                opacities: s,
            });
    if (null == I) return null;
    let N = y.map((e, t) =>
            (0, l.jsx)(
                r.A.div,
                {
                    className: E.cW,
                    style: v ? { opacity: T[t] } : {},
                    children: (0, l.jsx)(A.E, {
                        iconUrl: e.iconUrl,
                        header: e.title,
                        completed: e.completed,
                        onClick: e.onClick,
                    }),
                },
                e.key,
            ),
        ),
        M = j ? C.intl.string(C.t["1ach9C"]) : C.intl.string(C.t["ezm+/j"]);
    _ && (M = C.intl.string(C.t["gwyU/J"]));
    let R = `${g.A.getArticleURL(x.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(p.Ay, {
        channelId: S.id,
        children: (0, l.jsx)("div", {
            className: E.kL,
            children: (0, l.jsxs)("div", {
                className: E.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: b,
                        children: [
                            (0, l.jsx)(c.D, {
                                className: E.ud,
                                variant: "heading-xxl/medium",
                                children: C.intl.format(C.t.rkHVKf, { guildName: I.name }),
                            }),
                            (0, l.jsxs)(d.E, {
                                color: "text-default",
                                className: a()({ [E.VA]: !0, [E.lg]: 0 === N.length }),
                                variant: "text-sm/normal",
                                children: [M, " ", N.length > 0 ? C.intl.format(C.t.UOtD32, { guideURL: R }) : null],
                            }),
                        ],
                    }),
                    N,
                ],
            }),
        }),
    });
}
