l.d(t, { DevToolsLinkEmbed: () => p });
var r = l(627968),
    i = l(64700),
    n = l(158954),
    s = l(311907),
    a = l(287809),
    c = l(538064),
    o = l(333421),
    d = l(507230);
function u(e) {
    return e
        .split(/[_-]/)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
function p(e) {
    let { url: t } = e,
        l = i.useMemo(() => (0, o.AG)(t), [t]),
        p = i.useMemo(() => (0, o.uJ)(t), [t]),
        h = (0, s.bG)([a.default], () => {
            let e = a.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        x = i.useCallback(() => {
            null != l && (0, c.Ft)(l, p ?? void 0);
        }, [l, p]);
    if (!h || null == l) return null;
    let j = u(l),
        m = null != p ? u(p) : null,
        f = null != m ? `${j} > ${m}` : j;
    return (0, r.jsxs)("div", {
        className: d.z,
        children: [
            (0, r.jsx)("div", {
                className: d.w,
                children: (0, r.jsxs)(n.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsx)(n.PXj, { size: "lg" }),
                        (0, r.jsxs)(n.BJc, {
                            direction: "vertical",
                            gap: 0,
                            children: [
                                (0, r.jsx)(n.EYj, { variant: "text-md/semibold", children: f }),
                                (0, r.jsx)(n.EYj, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: "DevTools",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(n.$nd, { fullWidth: !0, variant: "primary", text: `Open ${f}`, onClick: x }),
        ],
    });
}
