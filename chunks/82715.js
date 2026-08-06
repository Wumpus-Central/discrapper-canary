n.d(t, { A: () => a });
var i = n(477900),
    l = n(582128);
function a(e) {
    let { className: t } = e,
        n = l.useId(),
        a = `${n}-filter`,
        s = `${n}-paint0`,
        r = `${n}-paint2`;
    return (0, i.jsxs)("svg", {
        className: t,
        viewBox: "0 0 206 209",
        preserveAspectRatio: "xMidYMid slice",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsxs)("g", {
                filter: `url(#${a})`,
                children: [
                    (0, i.jsx)("rect", { width: "206", height: "209", fill: "black" }),
                    (0, i.jsx)("rect", {
                        width: "206",
                        height: "209",
                        fill: `url(#${s})`,
                        fillOpacity: "0.15",
                        style: { mixBlendMode: "multiply" },
                    }),
                    (0, i.jsx)("rect", { width: "206", height: "209", fill: `url(#${r})`, fillOpacity: "0.45" }),
                ],
            }),
            (0, i.jsxs)("defs", {
                children: [
                    (0, i.jsxs)("filter", {
                        id: a,
                        x: "0",
                        y: "0",
                        width: "205.716",
                        height: "208.561",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                            (0, i.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape",
                            }),
                            (0, i.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                            }),
                            (0, i.jsx)("feMorphology", {
                                radius: "8",
                                operator: "erode",
                                in: "SourceAlpha",
                                result: "effect1_innerShadow",
                            }),
                            (0, i.jsx)("feOffset", {}),
                            (0, i.jsx)("feGaussianBlur", { stdDeviation: "4" }),
                            (0, i.jsx)("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                            (0, i.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0",
                            }),
                            (0, i.jsx)("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: s,
                        x1: "197.128",
                        y1: "67.4462",
                        x2: "90.3295",
                        y2: "111.976",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: "#00098A" }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: "#1F062D" }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: r,
                        x1: "101.884",
                        y1: "27.111",
                        x2: "57.5671",
                        y2: "163.576",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: "#572DA6" }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: "#572DA6", stopOpacity: "0" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
