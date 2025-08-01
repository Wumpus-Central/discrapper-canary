(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(703656),
    _ = n(430824),
    E = n(914010),
    p = n(900849),
    I = n(981631),
    O = n(388032),
    S = n(8940),
    f = n(240211);
let h = () => {
    let e = (0, o.e7)([E.Z], () => E.Z.getGuildId(), []),
        t = (0, o.e7)([_.Z], () => _.Z.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let h = async () => {
        l(!0);
        try {
            (p.mT(t.id), await u.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR }));
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: a()(S.notice, f.notice),
        children: [
            (0, r.jsxs)(s.zx, {
                look: s.zx.Looks.OUTLINED,
                color: s.zx.Colors.WHITE,
                size: s.zx.Sizes.NONE,
                className: a()(S.button, S.back),
                innerClassName: S.iconButton,
                onClick: () => {
                    (0, d.s1)().goBack();
                },
                children: [
                    (0, r.jsx)(c.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: S.arrow
                    }),
                    O.intl.string(O.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(c.Text, {
                className: S.header,
                variant: 'text-sm/normal',
                children: O.intl.string(O.t['N/y2WF'])
            }),
            (0, r.jsx)(s.zx, {
                className: S.button,
                look: s.zx.Looks.OUTLINED,
                color: s.zx.Colors.WHITE,
                size: s.zx.Sizes.NONE,
                submitting: n,
                onClick: h,
                children: O.intl.format(O.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
