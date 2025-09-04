n.d(t, { Z: () => c });
var l = n(951288);
n(647438);
var i = n(533800),
    r = n(481060),
    s = n(630388),
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
            onSelectMaxAge: x,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: j,
            onSetInviteFlags: N,
        } = e,
        _ = a.ZP.getMaxAgeOptionByValue(g),
        E = d.find((e) => e.value === h);
    return (0, l.jsx)("div", {
        className: u.settingsContent,
        children: (0, l.jsxs)("form", {
            onSubmit: p,
            className: u.settingsForm,
            children: [
                (0, l.jsx)(r.xJW, {
                    title: o.intl.string(o.t["60qw29"]),
                    children: (0, l.jsx)(r.VcW, {
                        options: c,
                        value: null != (t = null == _ ? void 0 : _.value) ? t : c[0].value,
                        onChange: x,
                    }),
                }),
                (0, l.jsx)(r.xJW, {
                    title: o.intl.string(o.t.jDqWHR),
                    children: (0, l.jsx)(r.VcW, {
                        options: d,
                        value: null == E ? void 0 : E.value,
                        onChange: I,
                    }),
                }),
                !n &&
                    (0, l.jsx)(r.xJW, {
                        children: (0, l.jsx)(r.j7V, {
                            className: u.switch,
                            value: m,
                            onChange: (e) => v(e),
                            note: o.intl.string(o.t.UN5IRU),
                            hideBorder: !0,
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: o.intl.string(o.t["wE+9dn"]),
                            }),
                        }),
                    }),
                f &&
                    (0, l.jsx)(r.xJW, {
                        children: (0, l.jsx)(r.j7V, {
                            className: u.switch,
                            value: (0, s.yE)(j, i.$.IS_GUEST_INVITE),
                            onChange: (e) => N((0, s.mB)(j, i.$.IS_GUEST_INVITE, e)),
                            note: o.intl.string(o.t["/FeTKy"]),
                            hideBorder: !0,
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: o.intl.string(o.t.siexRU),
                            }),
                        }),
                    }),
            ],
        }),
    });
}
