n.d(t, { A: () => r });
var l = n(627968),
    i = n(64700),
    a = n(891694),
    s = n(609848);
function r(e) {
    let { imageBackground: t, applicationName: n, imageClassName: r, imageNotFoundClassName: o } = e,
        [c, d] = i.useState(!1);
    return "not-found" === t.state || c
        ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)(a.A, { className: s.i }) })
        : "loading" === t.state
          ? null
          : (0, l.jsx)("img", { alt: n, className: r, src: t.url, onError: () => d(!0) });
}
