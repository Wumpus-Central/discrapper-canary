l.d(t, { DevToolsLinkEmbed: () => x });
var n = l(477900),
    i = l(582128),
    s = l(331322),
    a = l(346411),
    r = l(834730),
    o = l(821609),
    c = l(17928),
    d = l(287809),
    u = l(538064),
    p = l(333421),
    h = l(614367);
function f(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
function x(e) {
    let { url: t } = e,
        l = i.useMemo(() => (0, p.AG)(t), [t]),
        x = i.useMemo(() => (0, p.uJ)(t), [t]),
        T = (0, c.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        m = i.useCallback(() => {
            null != l && (0, u.Ft)(l, x ?? void 0);
        }, [l, x]);
    if (!T || null == l) return null;
    let v = f(l),
        b = null != x ? f(x) : null,
        j = null != b ? `${v} > ${b}` : v;
    return (0, n.jsxs)("div", {
        className: h.z,
        children: [
            (0, n.jsx)("div", {
                className: h.w,
                children: (0, n.jsxs)(s.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, n.jsx)(a.WrenchIcon, { size: "lg" }),
                        (0, n.jsxs)(s.B, {
                            direction: "vertical",
                            gap: 0,
                            children: [
                                (0, n.jsx)(r.E, { variant: "text-md/semibold", children: j }),
                                (0, n.jsx)(r.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: "DevTools",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(o.$, { fullWidth: !0, variant: "primary", text: `Open ${j}`, onClick: m }),
        ],
    });
}
