n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(200651);
n(192379);
var i = n(533800),
    s = n(481060),
    r = n(630388),
    a = n(971130),
    o = n(388032),
    d = n(24182);
let u = a.ZP.getMaxAgeOptions,
    c = a.ZP.getMaxUsesOptions;
function h(e) {
    var t;
    let { shouldHideTemporaryInviteToggle: n, maxAge: a, maxUses: h, temporary: g, onGenerateNewLink: m, onToggleTemporary: v, onSelectMaxAge: I, onSelectMaxUses: x, isGuestInviteCreationToggleEnabled: p, inviteFlags: S, onSetInviteFlags: N } = e,
        C = u.find((e) => e.value === a),
        E = c.find((e) => e.value === h);
    return (0, l.jsx)('div', {
        className: d.settingsContent,
        children: (0, l.jsxs)('form', {
            onSubmit: m,
            className: d.settingsForm,
            children: [
                (0, l.jsx)(s.FormItem, {
                    title: o.intl.string(o.t['60qw29']),
                    children: (0, l.jsx)(s.SingleSelect, {
                        value: null !== (t = null == C ? void 0 : C.value) && void 0 !== t ? t : u[0].value,
                        options: u,
                        onChange: I,
                        maxVisibleItems: 8
                    })
                }),
                (0, l.jsx)(s.FormItem, {
                    title: o.intl.string(o.t.jDqWHR),
                    children: (0, l.jsx)(s.SingleSelect, {
                        value: null == E ? void 0 : E.value,
                        options: c,
                        onChange: x
                    })
                }),
                !n &&
                    (0, l.jsx)(s.FormItem, {
                        children: (0, l.jsx)(s.FormSwitch, {
                            className: d.switch,
                            value: g,
                            onChange: (e) => v(e),
                            note: o.intl.string(o.t.UN5IRU),
                            hideBorder: !0,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t['wE+9dn'])
                            })
                        })
                    }),
                p &&
                    (0, l.jsx)(s.FormItem, {
                        children: (0, l.jsx)(s.FormSwitch, {
                            className: d.switch,
                            value: (0, r.yE)(S, i.$.IS_GUEST_INVITE),
                            onChange: (e) => N((0, r.mB)(S, i.$.IS_GUEST_INVITE, e)),
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
