n.d(t, { Z: () => v });
var l = n(54381),
    i = n(473749),
    s = n(533800),
    r = n(95015),
    a = n(668339),
    o = n(333200),
    u = n(481060),
    d = n(971130),
    c = n(981631),
    g = n(388032),
    h = n(527540);
let p = d.ZP.getMaxUsesOptions;
function v(e) {
    var t;
    let {
            shouldHideTemporaryInviteToggle: n,
            maxAgeOptions: v,
            maxAge: I,
            maxUses: m,
            temporary: S,
            onToggleTemporary: f,
            onSelectMaxAge: x,
            onSelectMaxUses: y,
            isGuestInviteCreationToggleEnabled: E,
            inviteFlags: _,
            onSetInviteFlags: b,
            isRoleAssignmentEnabled: C,
            assignableRoles: T,
            selectedRoleIds: A,
            onToggleRole: N,
        } = e,
        M = d.ZP.getMaxAgeOptionByValue(I),
        P = p.find((e) => e.value === m),
        Z = i.useMemo(
            () =>
                T.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () => {
                        var t;
                        return (0, l.jsx)(u.FhE, {
                            color: null != (t = e.colorString) ? t : c.Pbq,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        });
                    },
                })),
            [T],
        ),
        j = i.useCallback(
            (e) => {
                let t = Array.from(A),
                    n = null != e ? e : [],
                    l = n.find((e) => !t.includes(e)),
                    i = t.find((e) => !n.includes(e));
                null != l ? N(l) : null != i && N(i);
            },
            [A, N],
        );
    return (0, l.jsxs)("div", {
        className: h.settingsContent,
        children: [
            (0, l.jsx)(a.d, {
                label: g.intl.string(g.t["60qw2x"]),
                options: v,
                value: null != (t = null == M ? void 0 : M.value) ? t : v[0].value,
                onChange: x,
            }),
            (0, l.jsx)(a.d, {
                label: g.intl.string(g.t.jDqWHW),
                options: p,
                value: null == P ? void 0 : P.value,
                onChange: y,
            }),
            C &&
                T.length > 0 &&
                (0, l.jsx)(o.V, {
                    label: g.intl.string(g.t.rPYJxL),
                    placeholder: g.intl.string(g.t["/djIh7"]),
                    options: Z,
                    value: Array.from(A),
                    onSelectionChange: j,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                }),
            !n &&
                (0, l.jsx)(u.rsf, {
                    checked: S,
                    onChange: (e) => f(e),
                    description: g.intl.string(g.t.UN5IRX),
                    label: g.intl.string(g.t["wE+9dr"]),
                }),
            E &&
                (0, l.jsx)(u.rsf, {
                    checked: (0, r.yE)(_, s.$.IS_GUEST_INVITE),
                    onChange: (e) => b((0, r.mB)(_, s.$.IS_GUEST_INVITE, e)),
                    description: g.intl.string(g.t["/FeTK6"]),
                    label: g.intl.string(g.t.siexRS),
                }),
        ],
    });
}
