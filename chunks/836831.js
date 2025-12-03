n.d(t, { Z: () => p });
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(481060),
    c = n(617889),
    d = n(642145),
    u = n(316464);
let p = s.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: s,
            size: o = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: g,
            percentCompleteTextVariant: f = "text-lg/medium",
            children: h,
        } = e,
        x = (0, c.E)(n, s > 0),
        _ = o / 2,
        b = o / 2 - p / 2,
        j = 2 * Math.PI * b,
        v = j - s * j,
        C = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: v,
        },
        y = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -s * j,
        },
        E = { boxShadow: "0 0 20px 0px ".concat(x.glow) },
        { progressTextAnimation: O } = (0, l.q_F)({
            progressTextAnimation: +(null != g && 1 !== s),
            config: d.Y,
        });
    return (0, r.jsxs)("div", {
        className: u.outer,
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: u.inner,
                style: E,
                children: [
                    h,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: O },
                        className: a()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, r.jsx)("div", { className: a()(u.coverContent, u.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: f,
                                color: "text-strong",
                                className: u.progressText,
                                children: g,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: u.progressBar,
                height: o,
                width: o,
                children: [
                    (0, r.jsxs)("defs", {
                        children: [
                            (0, r.jsxs)("filter", {
                                id: "glow",
                                children: [
                                    (0, r.jsx)("feGaussianBlur", {
                                        result: "coloredBlur",
                                        stdDeviation: m,
                                    }),
                                    (0, r.jsxs)("feMerge", {
                                        children: [
                                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, r.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("linearGradient", {
                                id: "linear",
                                x1: "100%",
                                y1: "0%",
                                x2: "0%",
                                y2: "0%",
                                children: [
                                    (0, r.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: x.backgroundTop,
                                    }),
                                    (0, r.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: x.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("circle", {
                        className: u.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: b,
                        cx: _,
                        cy: _,
                        stroke: "url(#linear)",
                        style: y,
                    }),
                    (0, r.jsx)("circle", {
                        className: u.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: b,
                        cx: _,
                        cy: _,
                        stroke: x.foreground,
                        style: C,
                    }),
                ],
            }),
        ],
    });
});
