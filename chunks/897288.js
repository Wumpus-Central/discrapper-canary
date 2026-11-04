var i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(115560),
    o = n(116903),
    c = n(837381),
    u = n(834730),
    d = n(417454),
    E = n(7864),
    m = n(652215),
    f = n(792996),
    A = n(203120);
n.d(
    e,
    {},
    {
        A: function (t) {
            let { guild: e, roles: n, className: s } = t,
                g = r.useMemo(() => `invite-roles-${(0, l.A)()}`, []),
                I = (0, o.Ay)({ id: g, isEnabled: !0, scrollToStart: m.js$, scrollToEnd: m.js$, wrap: !0 }),
                M = r.useMemo(
                    () =>
                        null == e || null == n || 0 === n.length
                            ? []
                            : [...n].sort(E.d6).map((t) => (0, E.ZW)(e.id, t)),
                    [e, n],
                );
            if (null == e || 0 === M.length) return null;
            let N = M.length,
                h = f.intl.formatToPlainString(f.t.PCs0oo, { numRoles: N });
            return (0, i.jsx)(c.hD, {
                navigator: I,
                children: (0, i.jsx)(c.PR, {
                    children: (t) => {
                        let { ref: n, ...r } = t;
                        return (0, i.jsxs)("div", {
                            className: a()(A.zr, s),
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    className: A.Ed,
                                    children: f.intl.string(f.t.stcSfI),
                                }),
                                (0, i.jsx)("div", {
                                    className: A.Ei,
                                    "aria-label": h,
                                    ref: n,
                                    ...r,
                                    children: M.map((t) =>
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
        },
    },
);
