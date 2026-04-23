l.d(t, { DevToolsLinkEmbed: () => v });
var s = l(627968),
    i = l(64700),
    r = l(331322),
    a = l(346411),
    n = l(834730),
    c = l(821609),
    o = l(17928),
    d = l(287809),
    h = l(538064),
    u = l(333421),
    p = l(507230);
function x(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
function v(e) {
    let { url: t } = e,
        l = i.useMemo(() => (0, u.AG)(t), [t]),
        v = i.useMemo(() => (0, u.uJ)(t), [t]),
        m = (0, o.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        f = i.useCallback(() => {
            null != l && (0, h.Ft)(l, v ?? void 0);
        }, [l, v]);
    if (!m || null == l) return null;
    let g = x(l),
        j = null != v ? x(v) : null,
        w = null != j ? `${g} > ${j}` : g;
    return (0, s.jsxs)("div", {
        className: p.z,
        children: [
            (0, s.jsx)("div", {
                className: p.w,
                children: (0, s.jsxs)(r.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, s.jsx)(a.P, { size: "lg" }),
                        (0, s.jsxs)(r.B, {
                            direction: "vertical",
                            gap: 0,
                            children: [
                                (0, s.jsx)(n.E, { variant: "text-md/semibold", children: w }),
                                (0, s.jsx)(n.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: "DevTools",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(c.$, { fullWidth: !0, variant: "primary", text: `Open ${w}`, onClick: f }),
        ],
    });
}
