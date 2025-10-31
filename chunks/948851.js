n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var l = n(533800),
    s = n(481060),
    r = n(630388),
    a = n(971130),
    o = n(388032),
    u = n(337709);
let d = a.ZP.getMaxUsesOptions;
function c(e) {
    var t;
    let {
            shouldHideTemporaryInviteToggle: n,
            maxAgeOptions: c,
            maxAge: g,
            maxUses: h,
            temporary: v,
            onGenerateNewLink: p,
            onToggleTemporary: I,
            onSelectMaxAge: m,
            onSelectMaxUses: S,
            isGuestInviteCreationToggleEnabled: x,
            inviteFlags: f,
            onSetInviteFlags: E,
        } = e,
        y = a.ZP.getMaxAgeOptionByValue(g),
        C = d.find((e) => e.value === h);
    return (0, i.jsx)("div", {
        className: u.settingsContent,
        children: (0, i.jsxs)("form", {
            onSubmit: p,
            className: u.settingsForm,
            children: [
                (0, i.jsx)(s.VcW, {
                    label: o.intl.string(o.t["60qw2x"]),
                    options: c,
                    value: null != (t = null == y ? void 0 : y.value) ? t : c[0].value,
                    onChange: m,
                }),
                (0, i.jsx)(s.VcW, {
                    label: o.intl.string(o.t.jDqWHW),
                    options: d,
                    value: null == C ? void 0 : C.value,
                    onChange: S,
                }),
                !n &&
                    (0, i.jsx)(s.rsf, {
                        checked: v,
                        onChange: (e) => I(e),
                        description: o.intl.string(o.t.UN5IRX),
                        label: o.intl.string(o.t["wE+9dr"]),
                    }),
                x &&
                    (0, i.jsx)(s.rsf, {
                        checked: (0, r.yE)(f, l.$.IS_GUEST_INVITE),
                        onChange: (e) => E((0, r.mB)(f, l.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTK6"]),
                        label: o.intl.string(o.t.siexRS),
                    }),
            ],
        }),
    });
}
