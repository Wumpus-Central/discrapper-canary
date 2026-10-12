n.d(t, { i: () => c });
var i = n(477900),
    o = n(582128),
    s = n(503698),
    a = n.n(s);
let r = ["1", "2", "3", "4", "5", "6", "7"];
var l = n(374839);
let c = o.memo(function (e) {
    let { size: t = 16, "aria-label": n, className: o, ref: s, color: c = "currentColor" } = e;
    return (0, i.jsx)("div", {
        ref: s,
        className: a()(l.wG, o),
        style: { "--custom-ai-loader-size": `${t}px`, color: "string" == typeof c ? c : c.css },
        role: null == n ? void 0 : "img",
        "aria-label": n,
        "aria-hidden": null == n,
        children: Array.from({ length: 3 }, (e, t) =>
            (0, i.jsx)(
                "span",
                {
                    className: l.NI,
                    children: (0, i.jsx)("span", {
                        className: l.u4,
                        children: r.map((e) => (0, i.jsx)("span", { className: l.Vq, children: e }, e)),
                    }),
                },
                t,
            ),
        ),
    });
});
