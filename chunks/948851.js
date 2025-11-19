n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var l = n(533800),
    s = n(481060),
    r = n(630388),
    a = n(971130),
    o = n(388032),
    u = n(633297);
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
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: S,
            inviteFlags: f,
            onSetInviteFlags: y,
        } = e,
        E = a.ZP.getMaxAgeOptionByValue(g),
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
                    value: null != (t = null == E ? void 0 : E.value) ? t : c[0].value,
                    onChange: m,
                }),
                (0, i.jsx)(s.VcW, {
                    label: o.intl.string(o.t.jDqWHW),
                    options: d,
                    value: null == C ? void 0 : C.value,
                    onChange: x,
                }),
                !n &&
                    (0, i.jsx)(s.rsf, {
                        checked: v,
                        onChange: (e) => I(e),
                        description: o.intl.string(o.t.UN5IRX),
                        label: o.intl.string(o.t["wE+9dr"]),
                    }),
                S &&
                    (0, i.jsx)(s.rsf, {
                        checked: (0, r.yE)(f, l.$.IS_GUEST_INVITE),
                        onChange: (e) => y((0, r.mB)(f, l.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTK6"]),
                        label: o.intl.string(o.t.siexRS),
                    }),
            ],
        }),
    });
}
