n.d(t, { A: () => r });
var i = n(627968);
n(64700);
let r = (e) => {
    let { id: t, startColor: n, stopColor: r, color: a, stop: l } = e;
    return (0, i.jsxs)("linearGradient", {
        id: t,
        children: [
            (0, i.jsx)("stop", { offset: "0", stopColor: n }),
            (0, i.jsx)("stop", { offset: l, stopColor: r }),
            (0, i.jsx)("stop", { offset: l, stopColor: a }),
            (0, i.jsx)("stop", { offset: "1", stopColor: a }),
        ],
    });
};
