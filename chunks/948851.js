n.d(t, { Z: () => c });
var l = n(951288);
n(647438);
var i = n(533800),
    r = n(481060),
    a = n(630388),
    s = n(971130),
    o = n(388032),
    u = n(633297);
let d = s.ZP.getMaxUsesOptions;
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
            onSelectMaxAge: x,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: j,
            onSetInviteFlags: N,
        } = e,
        _ = s.ZP.getMaxAgeOptionByValue(g),
        b = d.find((e) => e.value === h);
    return (0, l.jsx)("div", {
        className: u.settingsContent,
        children: (0, l.jsxs)("form", {
            onSubmit: p,
            className: u.settingsForm,
            children: [
                (0, l.jsx)(r.VcW, {
                    label: o.intl.string(o.t["60qw29"]),
                    options: c,
                    value: null != (t = null == _ ? void 0 : _.value) ? t : c[0].value,
                    onChange: x,
                }),
                (0, l.jsx)(r.VcW, {
                    label: o.intl.string(o.t.jDqWHR),
                    options: d,
                    value: null == b ? void 0 : b.value,
                    onChange: I,
                }),
                !n &&
                    (0, l.jsx)(r.rsf, {
                        checked: m,
                        onChange: (e) => v(e),
                        description: o.intl.string(o.t.UN5IRU),
                        label: o.intl.string(o.t["wE+9dn"]),
                    }),
                f &&
                    (0, l.jsx)(r.rsf, {
                        checked: (0, a.yE)(j, i.$.IS_GUEST_INVITE),
                        onChange: (e) => N((0, a.mB)(j, i.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTKy"]),
                        label: o.intl.string(o.t.siexRU),
                    }),
            ],
        }),
    });
}
