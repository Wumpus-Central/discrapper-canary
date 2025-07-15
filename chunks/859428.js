(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(749210),
    d = n(703656),
    _ = n(430824),
    E = n(914010),
    I = n(900849),
    O = n(981631),
    p = n(388032),
    T = n(8940),
    S = n(240211);
let N = () => {
    let e = (0, o.e7)([E.Z], () => E.Z.getGuildId(), []),
        t = (0, o.e7)([_.Z], () => _.Z.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let N = async () => {
        l(!0);
        try {
            (I.mT(t.id), await u.Z.joinGuild(t.id, { source: O.vtS.NOTICE_BAR }));
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: a()(T.notice, S.notice),
        children: [
            (0, r.jsxs)(c.zx, {
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                className: a()(T.button, T.back),
                innerClassName: T.iconButton,
                onClick: () => {
                    (0, d.s1)().goBack();
                },
                children: [
                    (0, r.jsx)(s.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: T.arrow
                    }),
                    p.intl.string(p.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(s.Text, {
                className: T.header,
                variant: 'text-sm/normal',
                children: p.intl.string(p.t['N/y2WF'])
            }),
            (0, r.jsx)(c.zx, {
                className: T.button,
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                submitting: n,
                onClick: N,
                children: p.intl.format(p.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
