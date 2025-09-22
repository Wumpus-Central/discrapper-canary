n.d(t, { Z: () => c });
var l = n(951288);
n(647438);
var i = n(533800),
    r = n(481060),
    a = n(630388),
    s = n(971130),
    o = n(388032),
    u = n(337709);
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
            onSelectMaxAge: I,
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: N,
            onSetInviteFlags: j,
        } = e,
        _ = s.ZP.getMaxAgeOptionByValue(g),
        E = d.find((e) => e.value === h);
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
                    onChange: I,
                }),
                (0, l.jsx)(r.VcW, {
                    label: o.intl.string(o.t.jDqWHR),
                    options: d,
                    value: null == E ? void 0 : E.value,
                    onChange: x,
                }),
                !n &&
                    (0, l.jsx)(r.j7V, {
                        className: u.switch,
                        value: m,
                        onChange: (e) => v(e),
                        note: o.intl.string(o.t.UN5IRU),
                        hideBorder: !0,
                        children: o.intl.string(o.t["wE+9dn"]),
                    }),
                f &&
                    (0, l.jsx)(r.j7V, {
                        className: u.switch,
                        value: (0, a.yE)(N, i.$.IS_GUEST_INVITE),
                        onChange: (e) => j((0, a.mB)(N, i.$.IS_GUEST_INVITE, e)),
                        note: o.intl.string(o.t["/FeTKy"]),
                        hideBorder: !0,
                        children: o.intl.string(o.t.siexRU),
                    }),
            ],
        }),
    });
}
