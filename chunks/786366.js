t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(789020);
var i = t(200651);
t(192379);
var l = t(597312),
    o = t(442837),
    r = t(481060),
    s = t(860719),
    c = t(621853),
    a = t(388032),
    d = t(220613);
function u(e) {
    let { icon: n, title: t, description: l } = e;
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
                    (0, i.jsx)(r.Heading, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { user: n } = e,
        t = (0, o.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: f, hasGuildPresences: m, hasGuildMembers: x } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, i.jsxs)(l.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, i.jsx)(u, {
                    icon: r.ChatIcon,
                    title: a.intl.string(a.t['7Tmhfn']),
                    description: a.intl.string(a.t['eu5x7+'])
                }),
            m &&
                (0, i.jsx)(u, {
                    icon: r.GameControllerIcon,
                    title: a.intl.string(a.t.awYSsL),
                    description: a.intl.string(a.t.TpsXoK)
                }),
            x &&
                (0, i.jsx)(u, {
                    icon: r.GroupIcon,
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
