n.d(t, { Z: () => o }), n(388685);
var a = n(951288);
n(647438);
let r = {
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
    i = 240;
function o(e) {
    var t, n;
    let { emotionHistory: o } = e;
    if (0 === o.length) return null;
    let s = Object.keys(null != (n = null == (t = o[0]) ? void 0 : t.emotions) ? n : {}),
        c = o.map((e) => e.timestamp),
        d = Math.min(...c),
        u = Math.max(...c),
        m = u - d != 0 ? u - d : 1,
        p = (e) => 60 + ((e - d) / m) * l,
        h = (e) => 20 + i - e * i,
        x = Math.min(5, o.length),
        g = Array.from({ length: x }, (e, t) => {
            let n = Math.floor((t * (o.length - 1)) / (x - 1)),
                a = o[n];
            if (null == a) return null;
            let r = ((a.timestamp - d) / 1000).toFixed(1);
            return {
                x: p(a.timestamp),
                label: "".concat(r, "s"),
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
                    height: i,
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
                s.map((e) => {
                    var t;
                    return (0, a.jsx)(
                        "path",
                        {
                            d: ((e) => {
                                let t = o.map((t) => {
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
                            stroke: null != (t = r[e]) ? t : "#94a3b8",
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
                    y2: 20 + i,
                    stroke: "#b5bac1",
                    strokeWidth: 2,
                }),
                (0, a.jsx)("line", {
                    x1: 60,
                    y1: 20 + i,
                    x2: 60 + l,
                    y2: 20 + i,
                    stroke: "#b5bac1",
                    strokeWidth: 2,
                }),
                f.map((e, t) => {
                    let { y: n, label: r } = e;
                    return (0, a.jsx)(
                        "text",
                        {
                            x: 50,
                            y: n + 4,
                            textAnchor: "end",
                            fill: "#b5bac1",
                            fontSize: 12,
                            fontFamily: "monospace",
                            children: r,
                        },
                        "y-label-".concat(t),
                    );
                }),
                g.map((e, t) => {
                    let { x: n, label: r } = e;
                    return (0, a.jsx)(
                        "text",
                        {
                            x: n,
                            y: 20 + i + 20,
                            textAnchor: "middle",
                            fill: "#b5bac1",
                            fontSize: 12,
                            fontFamily: "monospace",
                            children: r,
                        },
                        "x-label-".concat(t),
                    );
                }),
                (0, a.jsx)("text", {
                    x: 15,
                    y: 20 + i / 2,
                    textAnchor: "middle",
                    fill: "#b5bac1",
                    fontSize: 12,
                    fontFamily: "monospace",
                    transform: "rotate(-90, ".concat(15, ", ").concat(20 + i / 2, ")"),
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
                s.map((e, t) => {
                    var n;
                    let i = 60 + l + 10,
                        o = 20 + 25 * t;
                    return (0, a.jsxs)(
                        "g",
                        {
                            children: [
                                (0, a.jsx)("line", {
                                    x1: i,
                                    y1: o,
                                    x2: i + 30,
                                    y2: o,
                                    stroke: null != (n = r[e]) ? n : "#94a3b8",
                                    strokeWidth: 2,
                                }),
                                (0, a.jsx)("text", {
                                    x: i + 35,
                                    y: o + 4,
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
