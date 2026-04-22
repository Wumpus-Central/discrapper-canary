l.d(t, { A: () => h });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(835245),
    a = l(884362),
    d = l(837381),
    c = l(834730),
    u = l(417454),
    E = l(7864),
    _ = l(652215),
    S = l(985018),
    C = l(556603);
function h(e) {
    let { guild: t, roles: l, className: i } = e,
        h = r.useMemo(() => `invite-roles-${(0, o.A)()}`, []),
        f = (0, a.Ay)({ id: h, isEnabled: !0, scrollToStart: _.js$, scrollToEnd: _.js$, wrap: !0 }),
        A = r.useMemo(
            () => (null == t || null == l || 0 === l.length ? [] : [...l].sort(E.d6).map((e) => (0, E.ZW)(t.id, e))),
            [t, l],
        );
    if (null == t || 0 === A.length) return null;
    let g = A.length,
        p = S.intl.formatToPlainString(S.t.PCs0oo, { numRoles: g });
    return (0, n.jsx)(d.hD, {
        navigator: f,
        children: (0, n.jsx)(d.PR, {
            children: (e) => {
                let { ref: l, ...r } = e;
                return (0, n.jsxs)("div", {
                    className: s()(C.zr, i),
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: C.Ed,
                            children: S.intl.string(S.t.stcSfI),
                        }),
                        (0, n.jsx)("div", {
                            className: C.Ei,
                            "aria-label": p,
                            ref: l,
                            ...r,
                            children: A.map((e) =>
                                (0, n.jsx)(
                                    u.b_,
                                    {
                                        className: C.Yq,
                                        role: e,
                                        canRemove: !1,
                                        onRemove: () => {},
                                        guildId: t.id,
                                        guild: t,
                                        disableBorderColor: !1,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                });
            },
        }),
    });
}
