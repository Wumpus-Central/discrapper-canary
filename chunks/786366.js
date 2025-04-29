t.d(n, { Z: () => f }), t(953529), t(997841);
var l = t(200651);
t(192379);
var r = t(597312),
    i = t(442837),
    o = t(481060),
    s = t(860719),
    a = t(621853),
    d = t(388032),
    c = t(989421);
function u(e) {
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
        t = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: h, hasGuildMembers: p } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(r.zJ, {
        fade: !0,
        className: c.scroller,
        children: [
            f &&
                (0, l.jsx)(u, {
                    icon: o.kBi,
                    title: d.intl.string(d.t['7Tmhfn']),
                    description: d.intl.string(d.t['eu5x7+'])
                }),
            h &&
                (0, l.jsx)(u, {
                    icon: o.iWm,
                    title: d.intl.string(d.t.awYSsL),
                    description: d.intl.string(d.t.TpsXoK)
                }),
            p &&
                (0, l.jsx)(u, {
                    icon: o.BFJ,
                    title: d.intl.string(d.t.WuKeSE),
                    description: d.intl.string(d.t.wOBmtb)
                }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
