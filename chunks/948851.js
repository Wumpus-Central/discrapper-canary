n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var l = n(533800),
    s = n(95015),
    r = n(481060),
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
            temporary: p,
            onGenerateNewLink: v,
            onToggleTemporary: I,
            onSelectMaxAge: m,
            onSelectMaxUses: S,
            isGuestInviteCreationToggleEnabled: x,
            inviteFlags: f,
            onSetInviteFlags: y,
        } = e,
        E = a.ZP.getMaxAgeOptionByValue(g),
        _ = d.find((e) => e.value === h);
    return (0, i.jsx)("div", {
        className: u.settingsContent,
        children: (0, i.jsxs)("form", {
            onSubmit: v,
            className: u.settingsForm,
            children: [
                (0, i.jsx)(r.VcW, {
                    label: o.intl.string(o.t["60qw2x"]),
                    options: c,
                    value: null != (t = null == E ? void 0 : E.value) ? t : c[0].value,
                    onChange: m,
                }),
                (0, i.jsx)(r.VcW, {
                    label: o.intl.string(o.t.jDqWHW),
                    options: d,
                    value: null == _ ? void 0 : _.value,
                    onChange: S,
                }),
                !n &&
                    (0, i.jsx)(r.rsf, {
                        checked: p,
                        onChange: (e) => I(e),
                        description: o.intl.string(o.t.UN5IRX),
                        label: o.intl.string(o.t["wE+9dr"]),
                    }),
                x &&
                    (0, i.jsx)(r.rsf, {
                        checked: (0, s.yE)(f, l.$.IS_GUEST_INVITE),
                        onChange: (e) => y((0, s.mB)(f, l.$.IS_GUEST_INVITE, e)),
                        description: o.intl.string(o.t["/FeTK6"]),
                        label: o.intl.string(o.t.siexRS),
                    }),
            ],
        }),
    });
}
