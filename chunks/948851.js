n.d(t, { Z: () => c });
var l = n(951288);
n(647438);
var i = n(533800),
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
            temporary: m,
            onGenerateNewLink: p,
            onToggleTemporary: v,
            onSelectMaxAge: I,
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: N,
            onSetInviteFlags: S,
        } = e,
        _ = a.ZP.getMaxAgeOptionByValue(g),
        j = d.find((e) => e.value === h);
    return (0, l.jsx)("div", {
        className: u.settingsContent,
        children: (0, l.jsxs)("form", {
            onSubmit: p,
            className: u.settingsForm,
            children: [
                (0, l.jsx)(s.VcW, {
                    label: o.intl.string(o.t["60qw29"]),
                    options: c,
                    value: null != (t = null == _ ? void 0 : _.value) ? t : c[0].value,
                    onChange: I,
                }),
                (0, l.jsx)(s.VcW, {
                    label: o.intl.string(o.t.jDqWHR),
                    options: d,
                    value: null == j ? void 0 : j.value,
                    onChange: x,
                }),
                !n &&
                    (0, l.jsx)(s.rsf, {
                        checked: m,
                        onChange: (e) => v(e),
                        description: o.intl.string(o.t.UN5IRU),
                        label: o.intl.string(o.t["wE+9dn"]),
                    }),
                f &&
                    (0, l.jsx)(s.rsf, {
                        checked: (0, r.yE)(N, i.$.IS_GUEST_INVITE),
                        onChange: (e) => S((0, r.mB)(N, i.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTKy"]),
                        label: o.intl.string(o.t.siexRU),
                    }),
            ],
        }),
    });
}
