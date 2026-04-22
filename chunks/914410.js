s.d(t, { Ay: () => m, fh: () => h, qP: () => u });
var n,
    a,
    r = s(627968),
    l = s(64700),
    i = s(503698),
    d = s.n(i);
s(284009);
var o = s(736653),
    c = s(137355),
    u = (((n = {}).UNSET = "unset"), (n.BLUE = "blue"), (n.ORANGE = "orange"), n),
    h = (((a = {}).LIGHT = "light"), (a.MEDIUM = "medium"), a);
let m = (e) => {
    let {
            progress: t,
            minimum: s = 0,
            maximum: n = 100,
            weight: a = "light",
            variant: i,
            override: u,
            glowing: h = !0,
            labelledBy: m,
        } = e,
        x = null != u && "unset" === i,
        C = (0, o.Ay)(),
        _ = u?.[C] ?? u?.default,
        p = l.useMemo(() => ((t - s) / (n - s)) * 100, [t, s, n]),
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
            ...(!h && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, r.jsx)("div", {
        className: d()(c.progressContainer, c[a], c[i]),
        style: f,
        children: (0, r.jsxs)("div", {
            className: d()(c.progress, { [c.empty]: g }),
            style: { width: `${p}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": s,
            "aria-valuemax": n,
            "aria-labelledby": m,
            children: [
                (0, r.jsx)("div", { className: d()(c.glow, { [c.empty]: g }) }),
                (0, r.jsx)("div", { className: d()(c.bar, c[i], { [c.empty]: g }) }),
            ],
        }),
    });
};
