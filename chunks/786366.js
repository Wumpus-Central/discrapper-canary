t.d(n, { Z: () => f }), t(953529), t(997841);
var l = t(255367);
t(73800);
var r = t(597312),
    i = t(442837),
    o = t(481060),
    s = t(860719),
    c = t(621853),
    u = t(388032),
    a = t(391551);
function d(e) {
    let { icon: n, title: t, description: r } = e;
    return (0, l.jsxs)('div', {
        className: a.row,
        children: [
            (0, l.jsx)('div', {
                className: a.rowIcon,
                children: (0, l.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, l.jsxs)('div', {
                className: a.rowText,
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
        t = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: g } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(r.zJ, {
        fade: !0,
        className: a.scroller,
        children: [
            f &&
                (0, l.jsx)(d, {
                    icon: o.kBi,
                    title: u.intl.string(u.t['7Tmhfn']),
                    description: u.intl.string(u.t['eu5x7+'])
                }),
            p &&
                (0, l.jsx)(d, {
                    icon: o.iWm,
                    title: u.intl.string(u.t.awYSsL),
                    description: u.intl.string(u.t.TpsXoK)
                }),
            g &&
                (0, l.jsx)(d, {
                    icon: o.BFJ,
                    title: u.intl.string(u.t.WuKeSE),
                    description: u.intl.string(u.t.wOBmtb)
                }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: u.intl.format(u.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
