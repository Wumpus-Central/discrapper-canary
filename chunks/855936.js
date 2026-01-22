n.d(t, {
    A: () => u,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(936388),
    c = n(195338),
    d = n(661251);

function u() {
    let e = l.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: r()(d.nd, c.n),
        children: (0, a.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.A.clearUploadedKeyVersions,
        }),
    });
}
