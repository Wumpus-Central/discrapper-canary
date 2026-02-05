l.d(t, { A: () => S });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(835245),
    a = l(884362),
    d = l(837381),
    c = l(397927),
    u = l(417454),
    E = l(7864),
    _ = l(652215),
    C = l(985018),
    f = l(420206);
function S(e) {
    let { guild: t, roles: l, className: i } = e,
        S = r.useMemo(() => `invite-roles-${(0, o.A)()}`, []),
        h = (0, a.Ay)({ id: S, isEnabled: !0, scrollToStart: _.js$, scrollToEnd: _.js$, wrap: !0 }),
        A = r.useMemo(
            () => (null == t || null == l || 0 === l.length ? [] : [...l].sort(E.d6).map((e) => (0, E.ZW)(t.id, e))),
            [t, l],
        );
    if (null == t || 0 === A.length) return null;
    let p = A.length,
        g = C.intl.formatToPlainString(C.t.PCs0oo, { numRoles: p });
    return (0, n.jsx)(d.hD, {
        navigator: h,
        children: (0, n.jsx)(d.PR, {
            children: (e) => {
                let { ref: l, ...r } = e;
                return (0, n.jsxs)("div", {
                    className: s()(f.zr, i),
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: f.Ed,
                            children: C.intl.string(C.t.stcSfI),
                        }),
                        (0, n.jsx)("div", {
                            className: f.Ei,
                            "aria-label": g,
                            ref: l,
                            ...r,
                            children: A.map((e) =>
                                (0, n.jsx)(
                                    u.b_,
                                    {
                                        className: f.Yq,
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
