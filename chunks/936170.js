o.d(l, { y: () => N });
var c = o(477900),
    e = o(582128),
    r = o(503698),
    n = o.n(r),
    a = o(249686),
    t = o.n(a),
    i = o(661531),
    d = o(603392),
    u = o(628284),
    C = o(695366),
    m = o(834730),
    p = o(395762);
let E = {
    success: { color: i.A.colors.ICON_FEEDBACK_POSITIVE, icon: u.y },
    critical: { color: i.A.colors.ICON_FEEDBACK_CRITICAL, icon: C.E },
};
function N(s) {
    let { variant: l = "default", text: o, icon: r, iconColor: a, secondaryIconColor: u } = s,
        C = (0, d.r)(i.A.modules.toast.TEXT_LINE_COUNT),
        N = e.useMemo(() => {
            let s = E[l],
                o = s?.icon ?? r;
            if (null == o) return null;
            let e = { color: s?.color ?? a ?? i.A.colors.ICON_DEFAULT };
            return (null != u && (e.secondaryColor = u), (0, c.jsx)(o, { className: p.icon, size: "sm", ...e }));
        }, [r, a, u, l]);
    return (0, c.jsxs)("div", {
        className: n()(p.wrapper, p[l]),
        children: [
            (0, c.jsx)("div", { className: n()(p.baselayer, p[l]) }),
            (0, c.jsxs)("div", {
                className: p.content,
                children: [
                    N,
                    !t()(o) &&
                        (0, c.jsx)(m.E, { variant: "text-md/normal", color: "text-strong", lineClamp: C, children: o }),
                ],
            }),
        ],
    });
}
