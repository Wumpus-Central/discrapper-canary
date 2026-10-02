n.d(t, { i: () => s });
var r = n(477900),
    o = n(582128),
    a = n(503698),
    l = n.n(a);
let i = ["1", "2", "3", "4", "5", "6", "7"];
var u = n(374839);
let s = o.memo(function (e) {
    let { size: t = 16, "aria-label": n, className: o, ref: a, color: s = "currentColor" } = e;
    return (0, r.jsx)("div", {
        ref: a,
        className: l()(u.wG, o),
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
