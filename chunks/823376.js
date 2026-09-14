n.d(t, { i: () => s });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    o = n.n(l);
let i = ["1", "2", "3", "4", "5", "6", "7"];
var u = n(374839);
let s = a.memo(function (e) {
    let { size: t = 16, "aria-label": n, className: a, ref: l, color: s = "currentColor" } = e;
    return (0, r.jsx)("div", {
        ref: l,
        className: o()(u.wG, a),
        style: { "--custom-ai-loader-size": `${t}px`, color: "string" == typeof s ? s : s.css },
        role: null == n ? void 0 : "img",
        "aria-label": n,
        "aria-hidden": null == n,
        children: Array.from({ length: 3 }, (e, t) =>
            (0, r.jsx)(
                "span",
                {
                    className: u.NI,
                    children: (0, r.jsx)("span", {
                        className: u.u4,
                        children: i.map((e) => (0, r.jsx)("span", { className: u.Vq, children: e }, e)),
                    }),
                },
                t,
            ),
        ),
    });
});
