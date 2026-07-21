l.d(t, { DevToolsLinkEmbed: () => x });
var i = l(627968),
    n = l(64700),
    s = l(331322),
    a = l(346411),
    r = l(834730),
    o = l(821609),
    d = l(17928),
    c = l(287809),
    u = l(538064),
    p = l(333421),
    h = l(89942);
function f(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
function x(e) {
    let { url: t } = e,
        l = n.useMemo(() => (0, p.AG)(t), [t]),
        x = n.useMemo(() => (0, p.uJ)(t), [t]),
        T = (0, d.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        m = n.useCallback(() => {
            null != l && (0, u.Ft)(l, x ?? void 0);
        }, [l, x]);
    if (!T || null == l) return null;
    let v = f(l),
        b = null != x ? f(x) : null,
        j = null != b ? `${v} > ${b}` : v;
    return (0, i.jsxs)("div", {
        className: h.z,
        children: [
            (0, i.jsx)("div", {
                className: h.w,
                children: (0, i.jsxs)(s.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, i.jsx)(a.P, { size: "lg" }),
                        (0, i.jsxs)(s.B, {
                            direction: "vertical",
                            gap: 0,
                            children: [
                                (0, i.jsx)(r.E, { variant: "text-md/semibold", children: j }),
                                (0, i.jsx)(r.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: "DevTools",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(o.$, { fullWidth: !0, variant: "primary", text: `Open ${j}`, onClick: m }),
        ],
    });
}
