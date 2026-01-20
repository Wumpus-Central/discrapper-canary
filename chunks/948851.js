n.d(t, { Z: () => h });
var l = n(54381),
    i = n(473749),
    s = n(533800),
    r = n(95015),
    a = n(481060),
    o = n(971130),
    u = n(981631),
    d = n(388032),
    c = n(527540);
let g = o.ZP.getMaxUsesOptions;
function h(e) {
    var t;
    let {
            shouldHideTemporaryInviteToggle: n,
            maxAgeOptions: h,
            maxAge: p,
            maxUses: v,
            temporary: I,
            onToggleTemporary: m,
            onSelectMaxAge: x,
            onSelectMaxUses: S,
            isGuestInviteCreationToggleEnabled: f,
            inviteFlags: y,
            onSetInviteFlags: E,
            isRoleAssignmentEnabled: _,
            assignableRoles: b,
            selectedRoleIds: C,
            onToggleRole: T,
        } = e,
        A = o.ZP.getMaxAgeOptionByValue(p),
        N = g.find((e) => e.value === v),
        M = i.useMemo(
            () =>
                b.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () => {
                        var t;
                        return (0, l.jsx)(a.FhE, {
                            color: null != (t = e.colorString) ? t : u.Pbq,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        });
                    },
                })),
            [b],
        ),
        P = i.useCallback(
            (e) => {
                let t = Array.from(C),
                    n = null != e ? e : [],
                    l = n.find((e) => !t.includes(e)),
                    i = t.find((e) => !n.includes(e));
                null != l ? T(l) : null != i && T(i);
            },
            [C, T],
        );
    return (0, l.jsxs)("div", {
        className: c.settingsContent,
        children: [
            (0, l.jsx)(a.VcW, {
                label: d.intl.string(d.t["60qw2x"]),
                options: h,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                },
                value: null != (t = null == A ? void 0 : A.value) ? t : h[0].value,
                onSelectionChange: x,
                selectionMode: "single",
            }),
            (0, l.jsx)(a.VcW, {
                label: d.intl.string(d.t.jDqWHW),
                options: g,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                },
                value: null == N ? void 0 : N.value,
                onSelectionChange: S,
                selectionMode: "single",
            }),
            _ &&
                b.length > 0 &&
                (0, l.jsx)(a.VcW, {
                    label: d.intl.string(d.t.rPYJxL),
                    placeholder: d.intl.string(d.t["/djIh7"]),
                    options: M,
                    value: Array.from(C),
                    onSelectionChange: P,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                }),
            !n &&
                (0, l.jsx)(a.rsf, {
                    checked: I,
                    onChange: (e) => m(e),
                    description: d.intl.string(d.t.UN5IRX),
                    label: d.intl.string(d.t["wE+9dr"]),
                }),
            f &&
                (0, l.jsx)(a.rsf, {
                    checked: (0, r.yE)(y, s.$.IS_GUEST_INVITE),
                    onChange: (e) => E((0, r.mB)(y, s.$.IS_GUEST_INVITE, e)),
                    description: d.intl.string(d.t["/FeTK6"]),
                    label: d.intl.string(d.t.siexRS),
                }),
        ],
    });
}
