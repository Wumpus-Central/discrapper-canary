n.d(t, { Ay: () => h, fh: () => m, qP: () => u });
var r,
    l,
    s = n(627968),
    a = n(64700),
    i = n(503698),
    d = n.n(i);
n(284009);
var o = n(736653),
    c = n(63947),
    u = (((r = {}).UNSET = "unset"), (r.BLUE = "blue"), (r.ORANGE = "orange"), r),
    m = (((l = {}).LIGHT = "light"), (l.MEDIUM = "medium"), l);
let h = (e) => {
    let {
            progress: t,
            minimum: n = 0,
            maximum: r = 100,
            weight: l = "light",
            variant: i,
            override: u,
            glowing: m = !0,
            labelledBy: h,
        } = e,
        x = null != u && "unset" === i,
        C = (0, o.Ay)(),
        p = u?.[C] ?? u?.default,
        _ = a.useMemo(() => ((t - n) / (r - n)) * 100, [t, n, r]),
        g = t === n,
        f = {
            ...(x
                ? {
                      "--custom-background": p?.background,
                      "--custom-gradient-start": p?.gradientStart,
                      "--custom-gradient-end": p?.gradientEnd,
                      "--custom-gradient-glow": p?.gradientEnd,
                  }
                : {}),
            ...(!m && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, s.jsx)("div", {
        className: d()(c.progressContainer, c[l], c[i]),
        style: f,
        children: (0, s.jsxs)("div", {
            className: d()(c.progress, { [c.empty]: g }),
            style: { width: `${_}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": r,
            "aria-labelledby": h,
            children: [
                (0, s.jsx)("div", { className: d()(c.glow, { [c.empty]: g }) }),
                (0, s.jsx)("div", { className: d()(c.bar, c[i], { [c.empty]: g }) }),
            ],
        }),
    });
};
