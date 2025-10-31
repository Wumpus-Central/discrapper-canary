n.d(t, { Z: () => s }), n(388685);
var a = n(951288);
n(647438);
let i = {
        anger: "#ef4444",
        calm: "#60a5fa",
        disgust: "#84cc16",
        fear: "#a78bfa",
        happy: "#fbbf24",
        neutral: "#94a3b8",
        sad: "#06b6d4",
        surprised: "#f472b6",
    },
    l = 490,
    r = 240;
function s(e) {
    var t, n;
    let { emotionHistory: s } = e;
    if (0 === s.length) return null;
    let o = Object.keys(null != (n = null == (t = s[0]) ? void 0 : t.emotions) ? n : {}),
        c = s.map((e) => e.timestamp),
        d = Math.min(...c),
        u = Math.max(...c),
        m = u - d != 0 ? u - d : 1,
        p = (e) => 60 + ((e - d) / m) * l,
        h = (e) => 20 + r - e * r,
        x = Math.min(5, s.length),
        g = Array.from({ length: x }, (e, t) => {
            let n = Math.floor((t * (s.length - 1)) / (x - 1)),
                a = s[n];
            if (null == a) return null;
            let i = ((a.timestamp - d) / 1000).toFixed(1);
            return {
                x: p(a.timestamp),
                label: "".concat(i, "s"),
            };
        }).filter((e) => null !== e),
        f = [0, 0.25, 0.5, 0.75, 1].map((e) => ({
            y: h(e),
            label: e.toFixed(2),
        }));
    return (0, a.jsx)("div", {
        style: {
            overflowX: "auto",
            marginTop: "12px",
        },
        children: (0, a.jsxs)("svg", {
            width: 700,
            height: 300,
            style: { display: "block" },
            children: [
                (0, a.jsx)("rect", {
                    x: 60,
                    y: 20,
                    width: l,
                    height: r,
                    fill: "#18191c",
                    stroke: "#2e3035",
                    strokeWidth: 1,
                }),
                f.map((e, t) => {
                    let { y: n } = e;
                    return (0, a.jsx)(
                        "line",
                        {
                            x1: 60,
                            y1: n,
                            x2: 60 + l,
                            y2: n,
                            stroke: "#2e3035",
                            strokeWidth: 1,
                        },
                        "grid-y-".concat(t),
                    );
                }),
                o.map((e) => {
                    var t;
                    return (0, a.jsx)(
                        "path",
                        {
                            d: ((e) => {
                                let t = s.map((t) => {
                                    var n;
                                    return {
                                        x: p(t.timestamp),
                                        y: h(null != (n = t.emotions[e]) ? n : 0),
                                    };
                                });
                                return 0 === t.length
                                    ? ""
                                    : t
                                          .map((e, t) =>
                                              0 === t
                                                  ? "M ".concat(e.x, ",").concat(e.y)
                                                  : "L ".concat(e.x, ",").concat(e.y),
                                          )
                                          .join(" ");
                            })(e),
                            fill: "none",
                            stroke: null != (t = i[e]) ? t : "#94a3b8",
                            strokeWidth: 2,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                        },
                        e,
                    );
                }),
                (0, a.jsx)("line", {
                    x1: 60,
                    y1: 20,
                    x2: 60,
                    y2: 20 + r,
                    stroke: "#b5bac1",
                    strokeWidth: 2,
                }),
                (0, a.jsx)("line", {
                    x1: 60,
                    y1: 20 + r,
                    x2: 60 + l,
                    y2: 20 + r,
                    stroke: "#b5bac1",
                    strokeWidth: 2,
                }),
                f.map((e, t) => {
                    let { y: n, label: i } = e;
                    return (0, a.jsx)(
                        "text",
                        {
                            x: 50,
                            y: n + 4,
                            textAnchor: "end",
                            fill: "#b5bac1",
                            fontSize: 12,
                            fontFamily: "monospace",
                            children: i,
                        },
                        "y-label-".concat(t),
                    );
                }),
                g.map((e, t) => {
                    let { x: n, label: i } = e;
                    return (0, a.jsx)(
                        "text",
                        {
                            x: n,
                            y: 20 + r + 20,
                            textAnchor: "middle",
                            fill: "#b5bac1",
                            fontSize: 12,
                            fontFamily: "monospace",
                            children: i,
                        },
                        "x-label-".concat(t),
                    );
                }),
                (0, a.jsx)("text", {
                    x: 15,
                    y: 20 + r / 2,
                    textAnchor: "middle",
                    fill: "#b5bac1",
                    fontSize: 12,
                    fontFamily: "monospace",
                    transform: "rotate(-90, ".concat(15, ", ").concat(20 + r / 2, ")"),
                    children: "Probability",
                }),
                (0, a.jsx)("text", {
                    x: 60 + l / 2,
                    y: 295,
                    textAnchor: "middle",
                    fill: "#b5bac1",
                    fontSize: 12,
                    fontFamily: "monospace",
                    children: "Time (seconds)",
                }),
                o.map((e, t) => {
                    var n;
                    let r = 60 + l + 10,
                        s = 20 + 25 * t;
                    return (0, a.jsxs)(
                        "g",
                        {
                            children: [
                                (0, a.jsx)("line", {
                                    x1: r,
                                    y1: s,
                                    x2: r + 30,
                                    y2: s,
                                    stroke: null != (n = i[e]) ? n : "#94a3b8",
                                    strokeWidth: 2,
                                }),
                                (0, a.jsx)("text", {
                                    x: r + 35,
                                    y: s + 4,
                                    fill: "#b5bac1",
                                    fontSize: 12,
                                    fontFamily: "monospace",
                                    children: e,
                                }),
                            ],
                        },
                        "legend-".concat(e),
                    );
                }),
            ],
        }),
    });
}
