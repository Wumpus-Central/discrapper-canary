n.d(t, { Z: () => p });
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(481060),
    c = n(617889),
    u = n(642145),
    d = n(316464);
let p = s.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: s,
            size: o = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: f,
            percentCompleteTextVariant: g = "text-lg/medium",
            children: x,
        } = e,
        h = (0, c.EK)(n, s > 0),
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
        E = { boxShadow: "0 0 20px 0px ".concat(h.glow) },
        { progressTextAnimation: O } = (0, l.q_F)({
            progressTextAnimation: +(null != f && 1 !== s),
            config: u.Y,
        });
    return (0, r.jsxs)("div", {
        className: d.outer,
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: d.inner,
                style: E,
                children: [
                    x,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: O },
                        className: a()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)("div", { className: a()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: g,
                                color: "text-strong",
                                className: d.progressText,
                                children: f,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: d.progressBar,
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
                                        stopColor: h.backgroundTop,
                                    }),
                                    (0, r.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: h.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("circle", {
                        className: d.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: b,
                        cx: _,
                        cy: _,
                        stroke: "url(#linear)",
                        style: y,
                    }),
                    (0, r.jsx)("circle", {
                        className: d.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: b,
                        cx: _,
                        cy: _,
                        stroke: h.foreground,
                        style: C,
                    }),
                ],
            }),
        ],
    });
});
