h.d(v, { l: () => Q });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#4282d8", "#0abbff", "#ffffff"],
    M = [0.1, 0.32, 1],
    H = [
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 10, tint: 1 },
    ],
    Q = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: Q, ...w } = A,
            { primaryColorsTransformed: t } = (0, C.V)({
                primaryBaseColors: f,
                primaryTintColor: Q,
                primaryTintLuminances: M,
                primaryLuminanceWeights: H,
            });
        return (0, g.jsxs)("svg", {
            ...(0, B.A)(w),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z",
                    fill: t[1],
                }),
                (0, g.jsx)("path", {
                    d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M4 14v1h8v-1H4Z", fill: t[0] }),
                (0, g.jsx)("path", { d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M7 1v1h2V1H7Z", fill: t[2] }),
                (0, g.jsx)("path", {
                    opacity: ".5",
                    d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", {
                    d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z",
                    fill: t[2],
                }),
                (0, g.jsx)("path", {
                    d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z",
                    fill: t[0],
                }),
            ],
        });
    };
