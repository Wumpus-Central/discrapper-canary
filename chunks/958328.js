n.d(t, { Z: () => v });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(149765),
    o = n(442837),
    s = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    h = n(496675),
    m = n(944486),
    x = n(914010),
    _ = n(233608),
    p = n(71080),
    f = n(532054),
    b = n(617521);
function g(e) {
    let { title: t, can: n } = e,
        r = n ? s.dz2 : s.Dio,
        i = (0, a.jsx)('div', {
            className: l()(f.iconOuter, n ? f.iconCheck : f.iconCross),
            children: (0, a.jsx)(r, { className: f.icon })
        });
    return (0, a.jsxs)('div', {
        className: f.scope,
        children: [
            i,
            (0, a.jsx)('div', {
                className: f.scopeInner,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function v() {
    let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        v = (0, o.e7)([h.Z], () => h.Z.computePermissions(n)),
        j = (0, o.e7)([h.Z], () => h.Z.computePermissions(r)),
        C = (0, c.ZP)(n, !0),
        N = null != n ? (0, p.IG)(n, !1, !0) : null,
        T = null != r ? _.Z.getGuildPermissionSpecMap(r) : null,
        E = Object.values(null != N ? N : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(v, n);
            return (0, a.jsx)(
                g,
                {
                    title: t,
                    can: r
                },
                t
            );
        }),
        S = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(j, n);
            return (0, a.jsx)(
                g,
                {
                    title: t,
                    can: r
                },
                t
            );
        });
    return (0, a.jsx)('div', {
        className: l()(b.panel, f.panel),
        children: (0, a.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != C ? 'Permissions in '.concat(C) : 'No channel selected'
                        }),
                        E
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != r ? 'Permissions in '.concat(r.name) : 'No guild selected'
                        }),
                        S
                    ]
                })
            ]
        })
    });
}
