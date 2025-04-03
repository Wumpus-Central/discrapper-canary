n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(533800),
    s = n(481060),
    r = n(630388),
    a = n(971130),
    o = n(388032),
    d = n(842515);
let u = a.ZP.getMaxAgeOptions,
    c = a.ZP.getMaxUsesOptions;
function h(e) {
    var t;
    let { shouldHideTemporaryInviteToggle: n, maxAge: a, maxUses: h, temporary: g, onGenerateNewLink: m, onToggleTemporary: x, onSelectMaxAge: v, onSelectMaxUses: p, isGuestInviteCreationToggleEnabled: N, inviteFlags: I, onSetInviteFlags: f } = e,
        j = u.find((e) => e.value === a),
        S = c.find((e) => e.value === h);
    return (0, l.jsx)('div', {
        className: d.settingsContent,
        children: (0, l.jsxs)('form', {
            onSubmit: m,
            className: d.settingsForm,
            children: [
                (0, l.jsx)(s.xJW, {
                    title: o.NW.string(o.t['60qw29']),
                    children: (0, l.jsx)(s.VcW, {
                        options: u,
                        value: null != (t = null == j ? void 0 : j.value) ? t : u[0].value,
                        onChange: v
                    })
                }),
                (0, l.jsx)(s.xJW, {
                    title: o.NW.string(o.t.jDqWHR),
                    children: (0, l.jsx)(s.VcW, {
                        options: c,
                        value: null == S ? void 0 : S.value,
                        onChange: p
                    })
                }),
                !n &&
                    (0, l.jsx)(s.xJW, {
                        children: (0, l.jsx)(s.j7V, {
                            className: d.switch,
                            value: g,
                            onChange: (e) => x(e),
                            note: o.NW.string(o.t.UN5IRU),
                            hideBorder: !0,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: o.NW.string(o.t['wE+9dn'])
                            })
                        })
                    }),
                N &&
                    (0, l.jsx)(s.xJW, {
                        children: (0, l.jsx)(s.j7V, {
                            className: d.switch,
                            value: (0, r.yE)(I, i.$.IS_GUEST_INVITE),
                            onChange: (e) => f((0, r.mB)(I, i.$.IS_GUEST_INVITE, e)),
                            note: o.NW.string(o.t['/FeTKy']),
                            hideBorder: !0,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: o.NW.string(o.t.siexRU)
                            })
                        })
                    })
            ]
        })
    });
}
