h.d(v, { C: () => D });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#7E1B1B", "#C7531A"],
    M = [0.25, 0.45],
    H = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Q = ["#B86F00", "#E6D23B"],
    w = [0.5, 0.75],
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
                    d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z",
                    fill: s[1],
                }),
                (0, g.jsx)("path", { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: s[1] }),
                (0, g.jsx)("path", {
                    d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z",
                    fill: s[1],
                }),
                (0, g.jsx)("path", {
                    d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z",
                    fill: s[0],
                }),
                (0, g.jsx)("path", {
                    d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z",
                    fill: a?.[1] ?? Q[1],
                }),
                (0, g.jsx)("path", {
                    d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z",
                    fill: a?.[0] ?? Q[0],
                }),
                (0, g.jsx)("path", {
                    d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z",
                    fill: "black",
                }),
            ],
        });
    };
