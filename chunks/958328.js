n.d(t, { Z: () => g });
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
    m = n(496675),
    x = n(944486),
    h = n(914010),
    p = n(233608),
    b = n(71080),
    f = n(390094),
    v = n(616257);
function j(e) {
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
function g() {
    let e = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
        t = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        g = (0, o.e7)([m.Z], () => m.Z.computePermissions(n)),
        _ = (0, o.e7)([m.Z], () => m.Z.computePermissions(r)),
        y = (0, c.ZP)(n, !0),
        C = null != n ? (0, b.IG)(n, !1, !0) : null,
        O = null != r ? p.Z.getGuildPermissionSpecMap(r) : null,
        E = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(g, n);
            return (0, a.jsx)(
                j,
                {
                    title: t,
                    can: r
                },
                t
            );
        }),
        N = Object.values(null != O ? O : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(_, n);
            return (0, a.jsx)(
                j,
                {
                    title: t,
                    can: r
                },
                t
            );
        });
    return (0, a.jsx)('div', {
        className: l()(v.panel, f.panel),
        children: (0, a.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != y ? 'Permissions in '.concat(y) : 'No channel selected'
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
                        N
                    ]
                })
            ]
        })
    });
}
