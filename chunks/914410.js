var t,
    s,
    n = r(477900),
    i = r(582128),
    d = r(503698),
    u = r.n(d);
r(284009);
var l = r(736653),
    c = r(652215),
    o = r(894726),
    g = (((t = {}).UNSET = "unset"), (t.BLUE = "blue"), (t.ORANGE = "orange"), t),
    m = (((s = {}).LIGHT = "light"), (s.MEDIUM = "medium"), s);
r.d(
    a,
    {},
    {
        Ay: function (e) {
            let {
                    progress: a,
                    minimum: r = 0,
                    maximum: t = 100,
                    weight: s = "light",
                    variant: d,
                    override: g,
                    glowing: m = !0,
                    labelledBy: h,
                } = e,
                p = null != g && "unset" === d,
                N = (0, l.Ay)(),
                k =
                    g?.[
                        (function (e) {
                            switch (e) {
                                case c.NJ8.LIGHT:
                                    return "light";
                                case c.NJ8.ASH:
                                    return "dark";
                                case c.NJ8.DARK:
                                    return "darker";
                                case c.NJ8.ONYX:
                                    return "midnight";
                                default:
                                    return "dark";
                            }
                        })(N)
                    ] ?? g?.default,
                v = i.useMemo(() => ((a - r) / (t - r)) * 100, [a, r, t]),
                b = a === r,
                w = {
                    ...(p
                        ? {
                              "--custom-background": k?.background,
                              "--custom-gradient-start": k?.gradientStart,
                              "--custom-gradient-end": k?.gradientEnd,
                              "--custom-gradient-glow": k?.gradientEnd,
                          }
                        : {}),
                    ...(!m && { "--custom-gradient-glow": "transparent" }),
                };
            return (0, n.jsx)("div", {
                className: u()(o.progressContainer, o[s], o[d]),
                style: w,
                children: (0, n.jsxs)("div", {
                    className: u()(o.progress, { [o.empty]: b }),
                    style: { width: `${v}%` },
                    role: "meter",
                    "aria-valuenow": a,
                    "aria-valuemin": r,
                    "aria-valuemax": t,
                    "aria-labelledby": h,
                    children: [
                        (0, n.jsx)("div", { className: u()(o.glow, { [o.empty]: b }) }),
                        (0, n.jsx)("div", { className: u()(o.bar, o[d], { [o.empty]: b }) }),
                    ],
                }),
            });
        },
        fh: m,
        qP: g,
    },
);
