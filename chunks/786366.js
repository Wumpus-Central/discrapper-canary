t.d(n, { Z: () => m }), t(789020);
var i = t(200651);
t(192379);
var l = t(597312),
    o = t(442837),
    s = t(481060),
    r = t(860719),
    a = t(621853),
    d = t(388032),
    c = t(220613);
function u(e) {
    let { icon: n, title: t, description: l } = e;
    return (0, i.jsxs)('div', {
        className: c.row,
        children: [
            (0, i.jsx)('div', {
                className: c.rowIcon,
                children: (0, i.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: c.rowText,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, i.jsx)(s.Text, {
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
        t = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: m, hasGuildPresences: x, hasGuildMembers: p } = (0, r.w)({ flags: null == t ? void 0 : t.flags });
    return (0, i.jsxs)(l.zJ, {
        fade: !0,
        className: c.scroller,
        children: [
            m &&
                (0, i.jsx)(u, {
                    icon: s.kBi,
                    title: d.intl.string(d.t['7Tmhfn']),
                    description: d.intl.string(d.t['eu5x7+'])
                }),
            x &&
                (0, i.jsx)(u, {
                    icon: s.iWm,
                    title: d.intl.string(d.t.awYSsL),
                    description: d.intl.string(d.t.TpsXoK)
                }),
            p &&
                (0, i.jsx)(u, {
                    icon: s.BFJ,
                    title: d.intl.string(d.t.WuKeSE),
                    description: d.intl.string(d.t.wOBmtb)
                }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/normal',
                children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
