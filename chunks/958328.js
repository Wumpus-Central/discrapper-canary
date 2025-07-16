a.d(t, { Z: () => g });
var n = a(255367);
a(73800);
var r = a(120356),
    l = a.n(r),
    i = a(149765),
    s = a(442837),
    o = a(481060),
    c = a(933557),
    d = a(592125),
    u = a(430824),
    m = a(496675),
    x = a(944486),
    p = a(914010),
    h = a(233608),
    b = a(71080),
    f = a(390094),
    v = a(616257);
function j(e) {
    let { title: t, can: a } = e,
        r = a ? o.dz2 : o.Dio,
        i = (0, n.jsx)('div', {
            className: l()(f.iconOuter, a ? f.iconCheck : f.iconCross),
            children: (0, n.jsx)(r, { className: f.icon })
        });
    return (0, n.jsxs)('div', {
        className: f.scope,
        children: [
            i,
            (0, n.jsx)('div', {
                className: f.scopeInner,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function g() {
    let e = (0, s.e7)([x.Z], () => x.Z.getChannelId()),
        t = (0, s.e7)([p.Z], () => p.Z.getGuildId()),
        a = (0, s.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        g = (0, s.e7)([m.Z], () => m.Z.computePermissions(a)),
        _ = (0, s.e7)([m.Z], () => m.Z.computePermissions(r)),
        y = (0, c.ZP)(a, !0),
        C = null != a ? (0, b.IG)(a, !1, !0) : null,
        N = null != r ? h.Z.getGuildPermissionSpecMap(r) : null,
        O = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: a } = e,
                r = i.e$(g, a);
            return (0, n.jsx)(
                j,
                {
                    title: t,
                    can: r
                },
                t
            );
        }),
        T = Object.values(null != N ? N : {}).map((e) => {
            let { title: t, flag: a } = e,
                r = i.e$(_, a);
            return (0, n.jsx)(
                j,
                {
                    title: t,
                    can: r
                },
                t
            );
        });
    return (0, n.jsx)('div', {
        className: l()(v.panel, f.panel),
        children: (0, n.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, n.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != y ? 'Permissions in '.concat(y) : 'No channel selected'
                        }),
                        O
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != r ? 'Permissions in '.concat(r.name) : 'No guild selected'
                        }),
                        T
                    ]
                })
            ]
        })
    });
}
