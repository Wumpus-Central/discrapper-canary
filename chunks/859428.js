(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(749210),
    d = n(703656),
    _ = n(430824),
    E = n(914010),
    O = n(900849),
    I = n(981631),
    T = n(388032),
    p = n(8940),
    S = n(240211);
let N = () => {
    let e = (0, a.e7)([E.Z], () => E.Z.getGuildId(), []),
        t = (0, a.e7)([_.Z], () => _.Z.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let N = async () => {
        l(!0);
        try {
            (O.mT(t.id), await u.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR }));
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(p.notice, S.notice),
        children: [
            (0, r.jsxs)(c.zx, {
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                className: o()(p.button, p.back),
                innerClassName: p.iconButton,
                onClick: () => {
                    (0, d.s1)().goBack();
                },
                children: [
                    (0, r.jsx)(s.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: p.arrow
                    }),
                    T.intl.string(T.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(s.Text, {
                className: p.header,
                variant: 'text-sm/normal',
                children: T.intl.string(T.t['N/y2WF'])
            }),
            (0, r.jsx)(c.zx, {
                className: p.button,
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                submitting: n,
                onClick: N,
                children: T.intl.format(T.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
