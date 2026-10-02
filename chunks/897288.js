n.d(e, { A: () => g });
var i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(132500),
    o = n(887129),
    c = n(837381),
    u = n(834730),
    d = n(417454),
    E = n(7864),
    m = n(652215),
    f = n(375708),
    A = n(203120);
function g(t) {
    let { guild: e, roles: n, className: s } = t,
        g = r.useMemo(() => `invite-roles-${(0, l.A)()}`, []),
        M = (0, o.Ay)({ id: g, isEnabled: !0, scrollToStart: m.js$, scrollToEnd: m.js$, wrap: !0 }),
        p = r.useMemo(
            () => (null == e || null == n || 0 === n.length ? [] : [...n].sort(E.d6).map((t) => (0, E.ZW)(e.id, t))),
            [e, n],
        );
    if (null == e || 0 === p.length) return null;
    let I = p.length,
        h = f.intl.formatToPlainString(f.t.PCs0oo, { numRoles: I });
    return (0, i.jsx)(c.hD, {
        navigator: M,
        children: (0, i.jsx)(c.PR, {
            children: (t) => {
                let { ref: n, ...r } = t;
                return (0, i.jsxs)("div", {
                    className: a()(A.zr, s),
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: A.Ed,
                            children: f.intl.string(f.t.stcSfI),
                        }),
                        (0, i.jsx)("div", {
                            className: A.Ei,
                            "aria-label": h,
                            ref: n,
                            ...r,
                            children: p.map((t) =>
                                (0, i.jsx)(
                                    d.b_,
                                    {
                                        className: A.Yq,
                                        role: t,
                                        canRemove: !1,
                                        onRemove: () => {},
                                        guildId: e.id,
                                        guild: e,
                                        disableBorderColor: !1,
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                    ],
                });
            },
        }),
    });
}
