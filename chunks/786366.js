t.d(n, { Z: () => f }), t(266796), t(789020);
var r = t(200651);
t(192379);
var o = t(597312),
    i = t(442837),
    l = t(481060),
    s = t(860719),
    c = t(621853),
    a = t(388032),
    d = t(989421);
function u(e) {
    let { icon: n, title: t, description: o } = e;
    return (0, r.jsxs)('div', {
        className: d.row,
        children: [
            (0, r.jsx)('div', {
                className: d.rowIcon,
                children: (0, r.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, r.jsx)(l.Text, {
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
        t = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: p, hasGuildMembers: b } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, r.jsxs)(o.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, r.jsx)(u, {
                    icon: l.kBi,
                    title: a.NW.string(a.t['7Tmhfn']),
                    description: a.NW.string(a.t['eu5x7+'])
                }),
            p &&
                (0, r.jsx)(u, {
                    icon: l.iWm,
                    title: a.NW.string(a.t.awYSsL),
                    description: a.NW.string(a.t.TpsXoK)
                }),
            b &&
                (0, r.jsx)(u, {
                    icon: l.BFJ,
                    title: a.NW.string(a.t.WuKeSE),
                    description: a.NW.string(a.t.wOBmtb)
                }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: a.NW.format(a.t.b6nqk5, { helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
