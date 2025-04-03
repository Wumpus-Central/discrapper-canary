n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
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
    _ = n(616257);
function g(e) {
    let { title: t, can: n } = e,
        a = n ? s.dz2 : s.Dio,
        i = (0, r.jsx)('div', {
            className: l()(f.iconOuter, n ? f.iconCheck : f.iconCross),
            children: (0, r.jsx)(a, { className: f.icon })
        });
    return (0, r.jsxs)('div', {
        className: f.scope,
        children: [
            i,
            (0, r.jsx)('div', {
                className: f.scopeInner,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function v() {
    let e = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
        t = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        v = (0, o.e7)([m.Z], () => m.Z.computePermissions(n)),
        j = (0, o.e7)([m.Z], () => m.Z.computePermissions(a)),
        y = (0, c.ZP)(n, !0),
        C = null != n ? (0, b.IG)(n, !1, !0) : null,
        T = null != a ? p.Z.getGuildPermissionSpecMap(a) : null,
        S = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                a = i.e$(v, n);
            return (0, r.jsx)(
                g,
                {
                    title: t,
                    can: a
                },
                t
            );
        }),
        N = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
                a = i.e$(j, n);
            return (0, r.jsx)(
                g,
                {
                    title: t,
                    can: a
                },
                t
            );
        });
    return (0, r.jsx)('div', {
        className: l()(_.panel, f.panel),
        children: (0, r.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != y ? 'Permissions in '.concat(y) : 'No channel selected'
                        }),
                        S
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: f.section,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            children: null != a ? 'Permissions in '.concat(a.name) : 'No guild selected'
                        }),
                        N
                    ]
                })
            ]
        })
    });
}
