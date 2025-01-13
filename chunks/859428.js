n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(703656),
    u = n(430824),
    m = n(914010),
    h = n(900849),
    f = n(41776),
    p = n(981631),
    _ = n(388032),
    g = n(216594),
    E = n(532623);
t.Z = () => {
    let e = (0, o.e7)([m.Z], () => m.Z.getGuildId(), []),
        t = (0, o.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        n = (0, o.e7)([f.Z], () => f.Z.getHistorySnapshot(), []),
        [l, C] = r.useState(!1);
    if (null == t) return null;
    let I = async () => {
        C(!0);
        try {
            h.mT(t.id), await c.Z.joinGuild(t.id, { source: p.vtS.NOTICE_BAR });
        } catch {
            C(!1);
        }
    };
    return (0, i.jsxs)('div', {
        className: a()(g.notice, E.notice),
        children: [
            (0, i.jsxs)(s.Button, {
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                className: a()(g.button, g.back),
                innerClassName: g.iconButton,
                onClick: () => {
                    let e = (0, d.s1)();
                    null != n && null != n.location ? (0, d.dL)({ ...n.location }) : e.goBack();
                },
                children: [
                    (0, i.jsx)(s.ArrowSmallLeftIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: g.arrow
                    }),
                    _.intl.string(_.t['13/7kZ'])
                ]
            }),
            (0, i.jsx)(s.Text, {
                className: g.header,
                variant: 'text-sm/normal',
                children: _.intl.string(_.t['N/y2WF'])
            }),
            (0, i.jsx)(s.Button, {
                className: g.button,
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                submitting: l,
                onClick: I,
                children: _.intl.format(_.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
