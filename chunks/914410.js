"use strict";
n.d(t, { Ay: () => f, fh: () => _, qP: () => d });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o);
n(284009);
var u = n(736653),
    c = n(63947),
    d = (((i = {}).UNSET = "unset"), (i.BLUE = "blue"), (i.ORANGE = "orange"), i),
    _ = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
let f = (e) => {
    let {
            progress: t,
            minimum: n = 0,
            maximum: i = 100,
            weight: r = "light",
            variant: o,
            override: d,
            glowing: _ = !0,
            labelledBy: f,
        } = e,
        h = null != d && "unset" === o,
        p = (0, u.Ay)(),
        E = d?.[p] ?? d?.default,
        m = a.useMemo(() => ((t - n) / (i - n)) * 100, [t, n, i]),
        g = t === n,
        A = {
            ...(h
                ? {
                      "--custom-background": E?.background,
                      "--custom-gradient-start": E?.gradientStart,
                      "--custom-gradient-end": E?.gradientEnd,
                      "--custom-gradient-glow": E?.gradientEnd,
                  }
                : {}),
            ...(!_ && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, s.jsx)("div", {
        className: l()(c.progressContainer, c[r], c[o]),
        style: A,
        children: (0, s.jsxs)("div", {
            className: l()(c.progress, { [c.empty]: g }),
            style: { width: `${m}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": i,
            "aria-labelledby": f,
            children: [
                (0, s.jsx)("div", { className: l()(c.glow, { [c.empty]: g }) }),
                (0, s.jsx)("div", { className: l()(c.bar, c[o], { [c.empty]: g }) }),
            ],
        }),
    });
};
