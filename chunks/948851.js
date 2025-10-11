n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var l = n(533800),
    s = n(481060),
    a = n(630388),
    r = n(971130),
    o = n(388032),
    d = n(337709);
let u = r.ZP.getMaxUsesOptions;
function c(e) {
    var t;
    let {
            shouldHideTemporaryInviteToggle: n,
            maxAgeOptions: c,
            maxAge: h,
            maxUses: g,
            temporary: m,
            onGenerateNewLink: p,
            onToggleTemporary: v,
            onSelectMaxAge: x,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: S,
            inviteFlags: y,
            onSetInviteFlags: j,
        } = e,
        C = r.ZP.getMaxAgeOptionByValue(h),
        N = u.find((e) => e.value === g);
    return (0, i.jsx)("div", {
        className: d.settingsContent,
        children: (0, i.jsxs)("form", {
            onSubmit: p,
            className: d.settingsForm,
            children: [
                (0, i.jsx)(s.VcW, {
                    label: o.intl.string(o.t["60qw29"]),
                    options: c,
                    value: null != (t = null == C ? void 0 : C.value) ? t : c[0].value,
                    onChange: x,
                }),
                (0, i.jsx)(s.VcW, {
                    label: o.intl.string(o.t.jDqWHR),
                    options: u,
                    value: null == N ? void 0 : N.value,
                    onChange: I,
                }),
                !n &&
                    (0, i.jsx)(s.rsf, {
                        checked: m,
                        onChange: (e) => v(e),
                        description: o.intl.string(o.t.UN5IRU),
                        label: o.intl.string(o.t["wE+9dn"]),
                    }),
                S &&
                    (0, i.jsx)(s.rsf, {
                        checked: (0, a.yE)(y, l.$.IS_GUEST_INVITE),
                        onChange: (e) => j((0, a.mB)(y, l.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTKy"]),
                        label: o.intl.string(o.t.siexRU),
                    }),
            ],
        }),
    });
}
