t.d(n, { Z: () => f }), t(953529), t(997841);
var l = t(200651);
t(192379);
var r = t(597312),
    i = t(442837),
    o = t(481060),
    s = t(860719),
    u = t(621853),
    a = t(388032),
    c = t(989421);
function d(e) {
    let { icon: n, title: t, description: r } = e;
    return (0, l.jsxs)('div', {
        className: c.row,
        children: [
            (0, l.jsx)('div', {
                className: c.rowIcon,
                children: (0, l.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, l.jsxs)('div', {
                className: c.rowText,
                children: [
                    (0, l.jsx)(o.X6q, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: r
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { user: n } = e,
        t = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: g } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(r.zJ, {
        fade: !0,
        className: c.scroller,
        children: [
            f &&
                (0, l.jsx)(d, {
                    icon: o.kBi,
                    title: a.intl.string(a.t['7Tmhfn']),
                    description: a.intl.string(a.t['eu5x7+'])
                }),
            p &&
                (0, l.jsx)(d, {
                    icon: o.iWm,
                    title: a.intl.string(a.t.awYSsL),
                    description: a.intl.string(a.t.TpsXoK)
                }),
            g &&
                (0, l.jsx)(d, {
                    icon: o.BFJ,
                    title: a.intl.string(a.t.WuKeSE),
                    description: a.intl.string(a.t.wOBmtb)
                }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: a.intl.format(a.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
