h.d(v, { J: () => D });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#480733", "#800E6F", "#E011AC"],
    M = [0.1, 0.3, 0.55],
    H = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Q = ["#096A4C", "#2DC92D"],
    w = [0.25, 0.55],
    t = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    D = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: D, secondaryTintColor: l, ...V } = A,
            { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, C.V)({
                primaryBaseColors: f,
                primaryTintColor: D,
                primaryTintLuminances: M,
                primaryLuminanceWeights: H,
                secondaryBaseColors: Q,
                secondaryTintColor: l,
                secondaryTintLuminances: w,
                secondaryLuminanceWeights: t,
            });
        return (0, g.jsxs)("svg", {
            ...(0, B.A)(V),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z",
                    fill: a?.[1] ?? Q[1],
                }),
                (0, g.jsx)("path", {
                    d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z",
                    fill: s[0],
                }),
                (0, g.jsx)("path", { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: s[1] }),
                (0, g.jsx)("path", {
                    d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z",
                    fill: s[2],
                }),
                (0, g.jsx)("path", {
                    d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z",
                    fill: a?.[0] ?? Q[0],
                }),
                (0, g.jsx)("path", { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" }),
                (0, g.jsx)("path", {
                    d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z",
                    fill: "black",
                }),
            ],
        });
    };
