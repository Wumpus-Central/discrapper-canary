n.d(t, { Z: () => f }), n(953529), n(997841);
var l = n(255367);
n(73800);
var r = n(597312),
    i = n(442837),
    s = n(481060),
    o = n(860719),
    c = n(621853),
    a = n(388032),
    d = n(989421);
function u(e) {
    let { icon: t, title: n, description: r } = e;
    return (0, l.jsxs)('div', {
        className: d.row,
        children: [
            (0, l.jsx)('div', {
                className: d.rowIcon,
                children: (0, l.jsx)(t, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, l.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, l.jsx)(s.X6q, {
                        variant: 'text-xs/semibold',
                        children: n
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: r
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { user: t } = e,
        n = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: h } = (0, o.w)({ flags: null == n ? void 0 : n.flags });
    return (0, l.jsxs)(r.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, l.jsx)(u, {
                    icon: s.kBi,
                    title: a.intl.string(a.t['7Tmhfn']),
                    description: a.intl.string(a.t['eu5x7+'])
                }),
            p &&
                (0, l.jsx)(u, {
                    icon: s.iWm,
                    title: a.intl.string(a.t.awYSsL),
                    description: a.intl.string(a.t.TpsXoK)
                }),
            h &&
                (0, l.jsx)(u, {
                    icon: s.BFJ,
                    title: a.intl.string(a.t.WuKeSE),
                    description: a.intl.string(a.t.wOBmtb)
                }),
            (0, l.jsx)(s.Text, {
                variant: 'text-xs/normal',
                children: a.intl.format(a.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
