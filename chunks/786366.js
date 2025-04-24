t.d(n, { Z: () => f }), t(953529), t(997841);
var i = t(200651);
t(192379);
var o = t(597312),
    l = t(442837),
    r = t(481060),
    s = t(860719),
    c = t(621853),
    a = t(388032),
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
        t = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: m } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, i.jsxs)(o.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, i.jsx)(u, {
                    icon: r.kBi,
                    title: a.intl.string(a.t['7Tmhfn']),
                    description: a.intl.string(a.t['eu5x7+'])
                }),
            p &&
                (0, i.jsx)(u, {
                    icon: r.iWm,
                    title: a.intl.string(a.t.awYSsL),
                    description: a.intl.string(a.t.TpsXoK)
                }),
            m &&
                (0, i.jsx)(u, {
                    icon: r.BFJ,
                    title: a.intl.string(a.t.WuKeSE),
                    description: a.intl.string(a.t.wOBmtb)
                }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                children: a.intl.format(a.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
