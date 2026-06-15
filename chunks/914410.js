t.d(a, { Ay: () => g, fh: () => m, qP: () => c });
var s,
    r,
    i = t(627968),
    n = t(64700),
    d = t(503698),
    l = t.n(d);
t(284009);
var u = t(736653),
    o = t(63947),
    c = (((s = {}).UNSET = "unset"), (s.BLUE = "blue"), (s.ORANGE = "orange"), s),
    m = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
let g = (e) => {
    let {
            progress: a,
            minimum: t = 0,
            maximum: s = 100,
            weight: r = "light",
            variant: d,
            override: c,
            glowing: m = !0,
            labelledBy: g,
        } = e,
        p = null != c && "unset" === d,
        h = (0, u.Ay)(),
        v = c?.[h] ?? c?.default,
        b = n.useMemo(() => ((a - t) / (s - t)) * 100, [a, t, s]),
        y = a === t,
        w = {
            ...(p
                ? {
                      "--custom-background": v?.background,
                      "--custom-gradient-start": v?.gradientStart,
                      "--custom-gradient-end": v?.gradientEnd,
                      "--custom-gradient-glow": v?.gradientEnd,
                  }
                : {}),
            ...(!m && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, i.jsx)("div", {
        className: l()(o.progressContainer, o[r], o[d]),
        style: w,
        children: (0, i.jsxs)("div", {
            className: l()(o.progress, { [o.empty]: y }),
            style: { width: `${b}%` },
            role: "meter",
            "aria-valuenow": a,
            "aria-valuemin": t,
            "aria-valuemax": s,
            "aria-labelledby": g,
            children: [
                (0, i.jsx)("div", { className: l()(o.glow, { [o.empty]: y }) }),
                (0, i.jsx)("div", { className: l()(o.bar, o[d], { [o.empty]: y }) }),
            ],
        }),
    });
};
