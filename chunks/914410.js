"use strict";
n.d(t, { Ay: () => E, fh: () => _, qP: () => u });
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l);
n(284009);
var d = n(736653),
    c = n(137355),
    u = (((i = {}).UNSET = "unset"), (i.BLUE = "blue"), (i.ORANGE = "orange"), i),
    _ = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
let E = function (e) {
    let {
            progress: t,
            minimum: n = 0,
            maximum: i = 100,
            weight: r = "light",
            variant: l,
            override: u,
            glowing: _ = !0,
            labelledBy: E,
        } = e,
        A = null != u && "unset" === l,
        h = (0, d.Ay)(),
        I = u?.[h] ?? u?.default,
        f = s.useMemo(() => ((t - n) / (i - n)) * 100, [t, n, i]),
        p = t === n,
        T = {
            ...(A
                ? {
                      "--custom-background": I?.background,
                      "--custom-gradient-start": I?.gradientStart,
                      "--custom-gradient-end": I?.gradientEnd,
                      "--custom-gradient-glow": I?.gradientEnd,
                  }
                : {}),
            ...(!_ && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, a.jsx)("div", {
        className: o()(c.progressContainer, c[r], c[l]),
        style: T,
        children: (0, a.jsxs)("div", {
            className: o()(c.progress, { [c.empty]: p }),
            style: { width: `${f}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": i,
            "aria-labelledby": E,
            children: [
                (0, a.jsx)("div", { className: o()(c.glow, { [c.empty]: p }) }),
                (0, a.jsx)("div", { className: o()(c.bar, c[l], { [c.empty]: p }) }),
            ],
        }),
    });
};
