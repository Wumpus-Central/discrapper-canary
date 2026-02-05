n.d(t, { A: () => u });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(936388),
    d = n(195338),
    c = n(661251);
function u() {
    let e = s.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: l()(c.nd, d.n),
        children: (0, a.jsx)(r.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.A.clearUploadedKeyVersions,
        }),
    });
}
