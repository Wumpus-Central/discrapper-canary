a.d(t, { A: () => u });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(821609),
    o = a(936388),
    d = a(132369),
    c = a(505206);
function u() {
    let e = l.useRef(null);
    return (0, n.jsx)("div", {
        ref: e,
        className: s()(c.nd, d.n),
        children: (0, n.jsx)(r.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.A.clearUploadedKeyVersions,
        }),
    });
}
