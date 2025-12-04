n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var l = n(533800),
    s = n(95015),
    r = n(668339),
    a = n(481060),
    o = n(971130),
    u = n(388032),
    d = n(337709);
let c = o.ZP.getMaxUsesOptions;
function g(e) {
    var t;
    let {
            shouldHideTemporaryInviteToggle: n,
            maxAgeOptions: g,
            maxAge: h,
            maxUses: p,
            temporary: v,
            onGenerateNewLink: I,
            onToggleTemporary: m,
            onSelectMaxAge: S,
            onSelectMaxUses: x,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: y,
            onSetInviteFlags: E,
        } = e,
        _ = o.ZP.getMaxAgeOptionByValue(h),
        C = c.find((e) => e.value === p);
    return (0, i.jsx)("div", {
        className: d.settingsContent,
        children: (0, i.jsxs)("form", {
            onSubmit: I,
            className: d.settingsForm,
            children: [
                (0, i.jsx)(r.d, {
                    label: u.intl.string(u.t["60qw2x"]),
                    options: g,
                    value: null != (t = null == _ ? void 0 : _.value) ? t : g[0].value,
                    onChange: S,
                }),
                (0, i.jsx)(r.d, {
                    label: u.intl.string(u.t.jDqWHW),
                    options: c,
                    value: null == C ? void 0 : C.value,
                    onChange: x,
                }),
                !n &&
                    (0, i.jsx)(a.rsf, {
                        checked: v,
                        onChange: (e) => m(e),
                        description: u.intl.string(u.t.UN5IRX),
                        label: u.intl.string(u.t["wE+9dr"]),
                    }),
                f &&
                    (0, i.jsx)(a.rsf, {
                        checked: (0, s.yE)(y, l.$.IS_GUEST_INVITE),
                        onChange: (e) => E((0, s.mB)(y, l.$.IS_GUEST_INVITE, e)),
                        description: u.intl.string(u.t["/FeTK6"]),
                        label: u.intl.string(u.t.siexRS),
                    }),
            ],
        }),
    });
}
