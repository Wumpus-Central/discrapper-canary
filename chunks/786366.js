i.d(n, { Z: () => m }), i(789020);
var t = i(200651);
i(192379);
var l = i(597312),
    o = i(442837),
    s = i(481060),
    r = i(860719),
    a = i(621853),
    d = i(388032),
    c = i(220613);
function u(e) {
    let { icon: n, title: i, description: l } = e;
    return (0, t.jsxs)('div', {
        className: c.row,
        children: [
            (0, t.jsx)('div', {
                className: c.rowIcon,
                children: (0, t.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, t.jsxs)('div', {
                className: c.rowText,
                children: [
                    (0, t.jsx)(s.X6q, {
                        variant: 'text-xs/semibold',
                        children: i
                    }),
                    (0, t.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { user: n } = e,
        i = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: m, hasGuildPresences: x, hasGuildMembers: p } = (0, r.w)({ flags: null == i ? void 0 : i.flags });
    return (0, t.jsxs)(l.zJ, {
        fade: !0,
        className: c.scroller,
        children: [
            m &&
                (0, t.jsx)(u, {
                    icon: s.kBi,
                    title: d.intl.string(d.t['7Tmhfn']),
                    description: d.intl.string(d.t['eu5x7+'])
                }),
            x &&
                (0, t.jsx)(u, {
                    icon: s.iWm,
                    title: d.intl.string(d.t.awYSsL),
                    description: d.intl.string(d.t.TpsXoK)
                }),
            p &&
                (0, t.jsx)(u, {
                    icon: s.BFJ,
                    title: d.intl.string(d.t.WuKeSE),
                    description: d.intl.string(d.t.wOBmtb)
                }),
            (0, t.jsx)(s.Text, {
                variant: 'text-xs/normal',
                children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
