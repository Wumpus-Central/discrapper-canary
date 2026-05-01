s.d(t, { Ay: () => h, fh: () => m, qP: () => u });
var a,
    r,
    l = s(627968),
    i = s(64700),
    n = s(503698),
    d = s.n(n);
s(284009);
var o = s(736653),
    c = s(63947),
    u = (((a = {}).UNSET = "unset"), (a.BLUE = "blue"), (a.ORANGE = "orange"), a),
    m = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
let h = (e) => {
    let {
            progress: t,
            minimum: s = 0,
            maximum: a = 100,
            weight: r = "light",
            variant: n,
            override: u,
            glowing: m = !0,
            labelledBy: h,
        } = e,
        x = null != u && "unset" === n,
        C = (0, o.Ay)(),
        _ = u?.[C] ?? u?.default,
        p = i.useMemo(() => ((t - s) / (a - s)) * 100, [t, s, a]),
        g = t === s,
        f = {
            ...(x
                ? {
                      "--custom-background": _?.background,
                      "--custom-gradient-start": _?.gradientStart,
                      "--custom-gradient-end": _?.gradientEnd,
                      "--custom-gradient-glow": _?.gradientEnd,
                  }
                : {}),
            ...(!m && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, l.jsx)("div", {
        className: d()(c.progressContainer, c[r], c[n]),
        style: f,
        children: (0, l.jsxs)("div", {
            className: d()(c.progress, { [c.empty]: g }),
            style: { width: `${p}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": s,
            "aria-valuemax": a,
            "aria-labelledby": h,
            children: [
                (0, l.jsx)("div", { className: d()(c.glow, { [c.empty]: g }) }),
                (0, l.jsx)("div", { className: d()(c.bar, c[n], { [c.empty]: g }) }),
            ],
        }),
    });
};
