n.d(t, { Z: () => m });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(620792),
    o = n(481060),
    c = n(617889),
    d = n(642145),
    u = n(189140);
let m = r.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: r,
            size: i = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: h,
            percentCompleteTextVariant: f = "text-lg/medium",
            children: x,
        } = e,
        b = (0, c.EK)(n, r > 0),
        g = i / 2,
        v = i / 2 - m / 2,
        j = 2 * Math.PI * v,
        y = j - r * j,
        C = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: y,
        },
        _ = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -r * j,
        },
        S = { boxShadow: "0 0 20px 0px ".concat(b.glow) },
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
                    x,
                    (0, a.jsxs)(s.animated.div, {
                        style: { opacity: E },
                        className: l()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, a.jsx)("div", { className: l()(u.coverContent, u.progressTextOverlay) }),
                            (0, a.jsx)(o.Text, {
                                variant: f,
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
                                        stopColor: b.backgroundTop,
                                    }),
                                    (0, a.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: b.backgroundBottom,
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
                        cx: g,
                        cy: g,
                        stroke: "url(#linear)",
                        style: _,
                    }),
                    (0, a.jsx)("circle", {
                        className: u.progress,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: g,
                        cy: g,
                        stroke: b.foreground,
                        style: C,
                    }),
                ],
            }),
        ],
    });
});
