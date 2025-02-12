n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(533800),
    s = n(481060),
    a = n(630388),
    r = n(971130),
    o = n(388032),
    d = n(519585);
let u = r.ZP.getMaxAgeOptions,
    c = r.ZP.getMaxUsesOptions;
function h(e) {
    var t;
    let { shouldHideTemporaryInviteToggle: n, maxAge: r, maxUses: h, temporary: g, onGenerateNewLink: v, onToggleTemporary: m, onSelectMaxAge: x, onSelectMaxUses: I, isGuestInviteCreationToggleEnabled: p, inviteFlags: S, onSetInviteFlags: N } = e,
        E = u.find((e) => e.value === r),
        T = c.find((e) => e.value === h);
    return (0, l.jsx)('div', {
        className: d.settingsContent,
        children: (0, l.jsxs)('form', {
            onSubmit: v,
            className: d.settingsForm,
            children: [
                (0, l.jsx)(s.xJW, {
                    title: o.intl.string(o.t['60qw29']),
                    children: (0, l.jsx)(s.q4e, {
                        value: null !== (t = null == E ? void 0 : E.value) && void 0 !== t ? t : u[0].value,
                        options: u,
                        onChange: x,
                        maxVisibleItems: 8
                    })
                }),
                (0, l.jsx)(s.xJW, {
                    title: o.intl.string(o.t.jDqWHR),
                    children: (0, l.jsx)(s.q4e, {
                        value: null == T ? void 0 : T.value,
                        options: c,
                        onChange: I
                    })
                }),
                !n &&
                    (0, l.jsx)(s.xJW, {
                        children: (0, l.jsx)(s.j7V, {
                            className: d.switch,
                            value: g,
                            onChange: (e) => m(e),
                            note: o.intl.string(o.t.UN5IRU),
                            hideBorder: !0,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t['wE+9dn'])
                            })
                        })
                    }),
                p &&
                    (0, l.jsx)(s.xJW, {
                        children: (0, l.jsx)(s.j7V, {
                            className: d.switch,
                            value: (0, a.yE)(S, i.$.IS_GUEST_INVITE),
                            onChange: (e) => N((0, a.mB)(S, i.$.IS_GUEST_INVITE, e)),
                            note: o.intl.string(o.t['/FeTKy']),
                            hideBorder: !0,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t.siexRU)
                            })
                        })
                    })
            ]
        })
    });
}
