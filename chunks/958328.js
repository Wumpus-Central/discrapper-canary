n.d(t, { Z: () => v });
var a = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    i = n(149765),
    o = n(442837),
    s = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    m = n(496675),
    h = n(944486),
    x = n(914010),
    p = n(233608),
    f = n(71080),
    _ = n(182682),
    b = n(941469);
function g(e) {
    let { title: t, can: n } = e,
        l = n ? s.dz2 : s.Dio,
        i = (0, a.jsx)('div', {
            className: r()(_.iconOuter, n ? _.iconCheck : _.iconCross),
            children: (0, a.jsx)(l, { className: _.icon })
        });
    return (0, a.jsxs)('div', {
        className: _.scope,
        children: [
            i,
            (0, a.jsx)('div', {
                className: _.scopeInner,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function v() {
    let e = (0, o.e7)([h.Z], () => h.Z.getChannelId()),
        t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        l = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        v = (0, o.e7)([m.Z], () => m.Z.computePermissions(n)),
        j = (0, o.e7)([m.Z], () => m.Z.computePermissions(l)),
        C = (0, c.ZP)(n, !0),
        N = null != n ? (0, f.IG)(n, !1, !0) : null,
        T = null != l ? p.Z.getGuildPermissionSpecMap(l) : null,
        E = Object.values(null != N ? N : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = i.e$(v, n);
            return (0, a.jsx)(
                g,
                {
                    title: t,
                    can: l
                },
                t
            );
        }),
        y = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = i.e$(j, n);
            return (0, a.jsx)(
                g,
                {
                    title: t,
                    can: l
                },
                t
            );
        });
    return (0, a.jsx)('div', {
        className: r()(b.panel, _.panel),
        children: (0, a.jsxs)('div', {
            className: _.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != C ? 'Permissions in '.concat(C) : 'No channel selected'
                        }),
                        E
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != l ? 'Permissions in '.concat(l.name) : 'No guild selected'
                        }),
                        y
                    ]
                })
            ]
        })
    });
}
