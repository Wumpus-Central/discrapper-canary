n.d(t, { Z: () => m });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(481060),
    c = n(617889),
    d = n(642145),
    u = n(316464);
let m = r.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: r,
            size: i = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: h,
            percentCompleteTextVariant: x = "text-lg/medium",
            children: f,
        } = e,
        g = (0, c.EK)(n, r > 0),
        b = i / 2,
        v = i / 2 - m / 2,
        j = 2 * Math.PI * v,
        _ = j - r * j,
        y = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: _,
        },
        C = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -r * j,
        },
        S = { boxShadow: "0 0 20px 0px ".concat(g.glow) },
        { progressTextAnimation: E } = (0, o.q_F)({
            progressTextAnimation: +(null != h && 1 !== r),
            config: d.Y,
        });
    return (0, a.jsxs)("div", {
        className: u.outer,
        ref: t,
        children: [
            (0, a.jsxs)("div", {
                className: u.inner,
                style: S,
                children: [
                    f,
                    (0, a.jsxs)(s.animated.div, {
                        style: { opacity: E },
                        className: l()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, a.jsx)("div", { className: l()(u.coverContent, u.progressTextOverlay) }),
                            (0, a.jsx)(o.Text, {
                                variant: x,
                                color: "text-strong",
                                className: u.progressText,
                                children: h,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("svg", {
                className: u.progressBar,
                height: i,
                width: i,
                children: [
                    (0, a.jsxs)("defs", {
                        children: [
                            (0, a.jsxs)("filter", {
                                id: "glow",
                                children: [
                                    (0, a.jsx)("feGaussianBlur", {
                                        result: "coloredBlur",
                                        stdDeviation: p,
                                    }),
                                    (0, a.jsxs)("feMerge", {
                                        children: [
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("linearGradient", {
                                id: "linear",
                                x1: "100%",
                                y1: "0%",
                                x2: "0%",
                                y2: "0%",
                                children: [
                                    (0, a.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: g.backgroundTop,
                                    }),
                                    (0, a.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: g.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("circle", {
                        className: u.progress,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: b,
                        cy: b,
                        stroke: "url(#linear)",
                        style: C,
                    }),
                    (0, a.jsx)("circle", {
                        className: u.progress,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: b,
                        cy: b,
                        stroke: g.foreground,
                        style: y,
                    }),
                ],
            }),
        ],
    });
});
