t.d(n, { Z: () => f }), t(953529), t(997841);
var i = t(200651);
t(192379);
var o = t(597312),
    l = t(442837),
    r = t(481060),
    s = t(860719),
    a = t(621853),
    c = t(388032),
    d = t(989421);
function u(e) {
    let { icon: n, title: t, description: o } = e;
    return (0, i.jsxs)('div', {
        className: d.row,
        children: [
            (0, i.jsx)('div', {
                className: d.rowIcon,
                children: (0, i.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: o
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { user: n } = e,
        t = (0, l.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: m } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, i.jsxs)(o.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, i.jsx)(u, {
                    icon: r.kBi,
                    title: c.intl.string(c.t['7Tmhfn']),
                    description: c.intl.string(c.t['eu5x7+'])
                }),
            p &&
                (0, i.jsx)(u, {
                    icon: r.iWm,
                    title: c.intl.string(c.t.awYSsL),
                    description: c.intl.string(c.t.TpsXoK)
                }),
            m &&
                (0, i.jsx)(u, {
                    icon: r.BFJ,
                    title: c.intl.string(c.t.WuKeSE),
                    description: c.intl.string(c.t.wOBmtb)
                }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                children: c.intl.format(c.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
