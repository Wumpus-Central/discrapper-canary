h.d(v, { r: () => Q });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#E79418", "#FAE330"],
    M = [0.5, 0.75],
    H = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
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
                    d: "M8 5v1H5v-1h3ZM5 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM4 4h-1V2h1v2ZM10 4h-1v-1h1v1ZM9 3h-1V2h1v1ZM8 2h-1V1h1v1Z",
                    fill: "#B7DBF6",
                }),
                (0, g.jsx)("path", { d: "M9 6h-1v-1H5v-1h-1V1h2v1h1v1h1v1h1v2ZM13 7h1v1h-1z", fill: "white" }),
                (0, g.jsx)("path", { d: "M13 8h1v1h-2v-2h1v1Z", fill: "#B7DBF6" }),
                (0, g.jsx)("path", {
                    d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z",
                    fill: t[1],
                }),
                (0, g.jsx)("path", {
                    d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z",
                    fill: t[0],
                }),
                (0, g.jsx)("path", { d: "M5 16h-1v-1h1v1ZM8 16h-1v-1h1v1Z", fill: "black" }),
                (0, g.jsx)("path", {
                    d: "M12 5h1v-2h1v2h1v1h1v5h-1v1H12v2h-1v-1h-1v1h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-1v-1h1V6h-1v-2h1v1h1v1h4v-2h1v1h1v-1h-1v-1h1V2h1v3ZM5 13h2V7h-2v6Zm4-6h-1v6h2v-1h1v-1h-1V6h-1v1Zm3 2h2v-2h-2v2Z",
                    fill: "black",
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", {
                    d: "M11 15h-1v-1h1v1ZM3 12H2v-1h1v1ZM2 11H1v-2H0v-1h1v-1h1v4ZM3 7H2v-1h1v1ZM3 4H2V2h1v2ZM9 4h-1v-1h1v1ZM8 3h-1V2h1v1ZM10 3h-1V2h1v1ZM15 3h-1V2h1v1ZM4 2h-1V1h1v1ZM7 2h-1V1h1v1ZM9 2h-1V1h1v1ZM13 2h-1V1h1v1ZM6 1h-2V0h2v1ZM8 1h-1V0h1v1Z",
                    fill: "black",
                }),
            ],
        });
    };
