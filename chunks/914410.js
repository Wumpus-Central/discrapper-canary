s.d(t, { Ay: () => h, fh: () => m, qP: () => u });
var n,
    a,
    r = s(627968),
    l = s(64700),
    i = s(503698),
    d = s.n(i);
s(284009);
var o = s(736653),
    c = s(63947),
    u = (((n = {}).UNSET = "unset"), (n.BLUE = "blue"), (n.ORANGE = "orange"), n),
    m = (((a = {}).LIGHT = "light"), (a.MEDIUM = "medium"), a);
let h = (e) => {
    let {
            progress: t,
            minimum: s = 0,
            maximum: n = 100,
            weight: a = "light",
            variant: i,
            override: u,
            glowing: m = !0,
            labelledBy: h,
        } = e,
        x = null != u && "unset" === i,
        C = (0, o.Ay)(),
        p = u?.[C] ?? u?.default,
        _ = l.useMemo(() => ((t - s) / (n - s)) * 100, [t, s, n]),
        g = t === s,
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
    return (0, r.jsx)("div", {
        className: d()(c.progressContainer, c[a], c[i]),
        style: f,
        children: (0, r.jsxs)("div", {
            className: d()(c.progress, { [c.empty]: g }),
            style: { width: `${_}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": s,
            "aria-valuemax": n,
            "aria-labelledby": h,
            children: [
                (0, r.jsx)("div", { className: d()(c.glow, { [c.empty]: g }) }),
                (0, r.jsx)("div", { className: d()(c.bar, c[i], { [c.empty]: g }) }),
            ],
        }),
    });
};
