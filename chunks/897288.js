s.d(l, { A: () => g });
var n = s(627968),
    r = s(64700),
    i = s(503698),
    t = s.n(i),
    o = s(132500),
    a = s(887129),
    d = s(837381),
    c = s(834730),
    u = s(417454),
    m = s(7864),
    x = s(652215),
    f = s(985018),
    h = s(556603);
function g(e) {
    let { guild: l, roles: s, className: i } = e,
        g = r.useMemo(() => `invite-roles-${(0, o.A)()}`, []),
        j = (0, a.Ay)({ id: g, isEnabled: !0, scrollToStart: x.js$, scrollToEnd: x.js$, wrap: !0 }),
        b = r.useMemo(
            () => (null == l || null == s || 0 === s.length ? [] : [...s].sort(m.d6).map((e) => (0, m.ZW)(l.id, e))),
            [l, s],
        );
    if (null == l || 0 === b.length) return null;
    let A = b.length,
        v = f.intl.formatToPlainString(f.t.PCs0oo, { numRoles: A });
    return (0, n.jsx)(d.hD, {
        navigator: j,
        children: (0, n.jsx)(d.PR, {
            children: (e) => {
                let { ref: s, ...r } = e;
                return (0, n.jsxs)("div", {
                    className: t()(h.zr, i),
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: h.Ed,
                            children: f.intl.string(f.t.stcSfI),
                        }),
                        (0, n.jsx)("div", {
                            className: h.Ei,
                            "aria-label": v,
                            ref: s,
                            ...r,
                            children: b.map((e) =>
                                (0, n.jsx)(
                                    u.b_,
                                    {
                                        className: h.Yq,
                                        role: e,
                                        canRemove: !1,
                                        onRemove: () => {},
                                        guildId: l.id,
                                        guild: l,
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
