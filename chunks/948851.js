n.d(t, { Z: () => h });
var l = n(255367);
n(73800);
var i = n(533800),
    r = n(481060),
    s = n(630388),
    a = n(971130),
    o = n(388032),
    u = n(842515);
let d = a.ZP.getMaxAgeOptions,
    c = a.ZP.getMaxUsesOptions;
function h(e) {
    var t;
    let { shouldHideTemporaryInviteToggle: n, maxAge: a, maxUses: h, temporary: g, onGenerateNewLink: m, onToggleTemporary: p, onSelectMaxAge: v, onSelectMaxUses: I, isGuestInviteCreationToggleEnabled: x, inviteFlags: f, onSetInviteFlags: j } = e,
        N = d.find((e) => e.value === a),
        _ = c.find((e) => e.value === h);
    return (0, l.jsx)('div', {
        className: u.settingsContent,
        children: (0, l.jsxs)('form', {
            onSubmit: m,
            className: u.settingsForm,
            children: [
                (0, l.jsx)(r.xJW, {
                    title: o.intl.string(o.t['60qw29']),
                    children: (0, l.jsx)(r.VcW, {
                        options: d,
                        value: null != (t = null == N ? void 0 : N.value) ? t : d[0].value,
                        onChange: v
                    })
                }),
                (0, l.jsx)(r.xJW, {
                    title: o.intl.string(o.t.jDqWHR),
                    children: (0, l.jsx)(r.VcW, {
                        options: c,
                        value: null == _ ? void 0 : _.value,
                        onChange: I
                    })
                }),
                !n &&
                    (0, l.jsx)(r.xJW, {
                        children: (0, l.jsx)(r.j7V, {
                            className: u.switch,
                            value: g,
                            onChange: (e) => p(e),
                            note: o.intl.string(o.t.UN5IRU),
                            hideBorder: !0,
                            children: (0, l.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t['wE+9dn'])
                            })
                        })
                    }),
                x &&
                    (0, l.jsx)(r.xJW, {
                        children: (0, l.jsx)(r.j7V, {
                            className: u.switch,
                            value: (0, s.yE)(f, i.$.IS_GUEST_INVITE),
                            onChange: (e) => j((0, s.mB)(f, i.$.IS_GUEST_INVITE, e)),
                            note: o.intl.string(o.t['/FeTKy']),
                            hideBorder: !0,
                            children: (0, l.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t.siexRU)
                            })
                        })
                    })
            ]
        })
    });
}
