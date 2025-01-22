n.d(t, {
    Z: function () {
        return j;
    }
});
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
    f = n(233608),
    p = n(71080),
    b = n(182682),
    g = n(941469);
function v(e) {
    let { title: t, can: n } = e,
        r = n ? s.CheckmarkLargeIcon : s.XSmallIcon,
        i = (0, a.jsx)('div', {
            className: l()(b.iconOuter, n ? b.iconCheck : b.iconCross),
            children: (0, a.jsx)(r, { className: b.icon })
        });
    return (0, a.jsxs)('div', {
        className: b.scope,
        children: [
            i,
            (0, a.jsx)('div', {
                className: b.scopeInner,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function j() {
    let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        j = (0, o.e7)([h.Z], () => h.Z.computePermissions(n)),
        C = (0, o.e7)([h.Z], () => h.Z.computePermissions(r)),
        _ = (0, c.ZP)(n, !0),
        T = null != n ? (0, p.IG)(n, !1, !0) : null,
        S = null != r ? f.Z.getGuildPermissionSpecMap(r) : null,
        N = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(j, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: r
                },
                t
            );
        }),
        y = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(C, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: r
                },
                t
            );
        });
    return (0, a.jsx)('div', {
        className: l()(g.panel, b.panel),
        children: (0, a.jsxs)('div', {
            className: b.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: b.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: null != _ ? 'Permissions in '.concat(_) : 'No channel selected'
                        }),
                        N
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: b.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: null != r ? 'Permissions in '.concat(r.name) : 'No guild selected'
                        }),
                        y
                    ]
                })
            ]
        })
    });
}
