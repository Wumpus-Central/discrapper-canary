n.d(l, { DevToolsLinkEmbed: () => T });
var t = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(331322),
    r = n(346411),
    o = n(834730),
    d = n(821609),
    c = n(287809),
    u = n(538064),
    p = n(333421),
    h = n(614367);
function f(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
function T(e) {
    let { url: l } = e,
        n = i.useMemo(() => (0, p.AG)(l), [l]),
        T = i.useMemo(() => (0, p.uJ)(l), [l]),
        b = (0, s.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        m = i.useCallback(() => {
            null != n && (0, u.Ft)(n, T ?? void 0);
        }, [n, T]);
    if (!b || null == n) return null;
    let v = f(n),
        x = null != T ? f(T) : null,
        j = null != x ? `${v} > ${x}` : v;
    return (0, t.jsxs)("div", {
        className: h.z,
        children: [
            (0, t.jsx)("div", {
                className: h.w,
                children: (0, t.jsxs)(a.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, t.jsx)(r.WrenchIcon, { size: "lg" }),
                        (0, t.jsxs)(a.B, {
                            direction: "vertical",
                            gap: 0,
                            children: [
                                (0, t.jsx)(o.E, { variant: "body-md/semibold", children: j }),
                                (0, t.jsx)(o.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: "DevTools",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, t.jsx)(d.$, { fullWidth: !0, variant: "primary", text: `Open ${j}`, onClick: m }),
        ],
    });
}
