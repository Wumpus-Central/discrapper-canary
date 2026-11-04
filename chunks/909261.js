var i = n(477900),
    r = n(582128),
    s = n(855986),
    t = n(331322),
    a = n(346411),
    c = n(834730),
    o = n(821609),
    d = n(287809),
    u = n(538064),
    h = n(333421),
    p = n(614367);
function m(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
n.d(
    l,
    {},
    {
        DevToolsLinkEmbed: function (e) {
            let { url: l } = e,
                n = r.useMemo(() => (0, h.AG)(l), [l]),
                x = r.useMemo(() => (0, h.uJ)(l), [l]),
                f = (0, s.bG)([d.default], () => {
                    let e = d.default.getCurrentUser();
                    return e?.isStaff() || e?.isStaffPersonal();
                }),
                v = r.useCallback(() => {
                    null != n && (0, u.Ft)(n, x ?? void 0);
                }, [n, x]);
            if (!f || null == n) return null;
            let j = m(n),
                b = null != x ? m(x) : null,
                k = null != b ? `${j} > ${b}` : j;
            return (0, i.jsxs)("div", {
                className: p.z,
                children: [
                    (0, i.jsx)("div", {
                        className: p.w,
                        children: (0, i.jsxs)(t.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 8,
                            children: [
                                (0, i.jsx)(a.WrenchIcon, { size: "lg" }),
                                (0, i.jsxs)(t.B, {
                                    direction: "vertical",
                                    gap: 0,
                                    children: [
                                        (0, i.jsx)(c.E, { variant: "body-md/semibold", children: k }),
                                        (0, i.jsx)(c.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "DevTools",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(o.$, { fullWidth: !0, variant: "primary", text: `Open ${k}`, onClick: v }),
                ],
            });
        },
    },
);
