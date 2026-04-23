"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
let s = (e) => {
    let { id: t, startColor: n, stopColor: s, color: l, stop: r } = e;
    return (0, i.jsxs)("linearGradient", {
        id: t,
        children: [
            (0, i.jsx)("stop", { offset: "0", stopColor: n }),
            (0, i.jsx)("stop", { offset: r, stopColor: s }),
            (0, i.jsx)("stop", { offset: r, stopColor: l }),
            (0, i.jsx)("stop", { offset: "1", stopColor: l }),
        ],
    });
};
