n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(481060),
    s = n(749210),
    u = n(703656),
    d = n(430824),
    _ = n(914010),
    E = n(900849),
    I = n(981631),
    O = n(388032),
    T = n(793088),
    p = n(373185);
let N = () => {
    let e = (0, a.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, a.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let N = async () => {
        l(!0);
        try {
            E.mT(t.id), await s.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR });
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(T.notice, p.notice),
        children: [
            (0, r.jsxs)(c.zxk, {
                look: c.zxk.Looks.OUTLINED,
                color: c.zxk.Colors.WHITE,
                size: c.zxk.Sizes.NONE,
                className: o()(T.button, T.back),
                innerClassName: T.iconButton,
                onClick: () => {
                    (0, u.s1)().goBack();
                },
                children: [
                    (0, r.jsx)(c.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: T.arrow
                    }),
                    O.intl.string(O.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(c.Text, {
                className: T.header,
                variant: 'text-sm/normal',
                children: O.intl.string(O.t['N/y2WF'])
            }),
            (0, r.jsx)(c.zxk, {
                className: T.button,
                look: c.zxk.Looks.OUTLINED,
                color: c.zxk.Colors.WHITE,
                size: c.zxk.Sizes.NONE,
                submitting: n,
                onClick: N,
                children: O.intl.format(O.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
