t.d(n, { Z: () => f }), t(953529), t(997841);
var l = t(255367);
t(73800);
var r = t(597312),
    i = t(442837),
    o = t(481060),
    s = t(860719),
    a = t(621853),
    c = t(388032),
    u = t(137861);
function d(e) {
    let { icon: n, title: t, description: r } = e;
    return (0, l.jsxs)('div', {
        className: u.row,
        children: [
            (0, l.jsx)('div', {
                className: u.rowIcon,
                children: (0, l.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, l.jsxs)('div', {
                className: u.rowText,
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
        t = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: g } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(r.zJ, {
        fade: !0,
        className: u.scroller,
        children: [
            f &&
                (0, l.jsx)(d, {
                    icon: o.kBi,
                    title: c.intl.string(c.t['7Tmhfn']),
                    description: c.intl.string(c.t['eu5x7+'])
                }),
            p &&
                (0, l.jsx)(d, {
                    icon: o.iWm,
                    title: c.intl.string(c.t.awYSsL),
                    description: c.intl.string(c.t.TpsXoK)
                }),
            g &&
                (0, l.jsx)(d, {
                    icon: o.BFJ,
                    title: c.intl.string(c.t.WuKeSE),
                    description: c.intl.string(c.t.wOBmtb)
                }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: c.intl.format(c.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
