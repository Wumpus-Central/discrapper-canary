n.d(t, { Ay: () => h, fh: () => m, qP: () => c });
var r,
    a,
    l = n(627968),
    s = n(64700),
    i = n(503698),
    d = n.n(i);
n(284009);
var u = n(736653),
    o = n(898434),
    c = (((r = {}).UNSET = "unset"), (r.BLUE = "blue"), (r.ORANGE = "orange"), r),
    m = (((a = {}).LIGHT = "light"), (a.MEDIUM = "medium"), a);
let h = (e) => {
    let {
            progress: t,
            minimum: n = 0,
            maximum: r = 100,
            weight: a = "light",
            variant: i,
            override: c,
            glowing: m = !0,
            labelledBy: h,
        } = e,
        x = null != c && "unset" === i,
        p = (0, u.Ay)(),
        _ = c?.[p] ?? c?.default,
        f = s.useMemo(() => ((t - n) / (r - n)) * 100, [t, n, r]),
        g = t === n,
        N = {
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
        className: d()(o.progressContainer, o[a], o[i]),
        style: N,
        children: (0, l.jsxs)("div", {
            className: d()(o.progress, { [o.empty]: g }),
            style: { width: `${f}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": r,
            "aria-labelledby": h,
            children: [
                (0, l.jsx)("div", { className: d()(o.glow, { [o.empty]: g }) }),
                (0, l.jsx)("div", { className: d()(o.bar, o[i], { [o.empty]: g }) }),
            ],
        }),
    });
};
