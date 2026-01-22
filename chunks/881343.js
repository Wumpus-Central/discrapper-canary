n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(891694),
    s = n(10879);
function o(e) {
    let { imageBackground: t, applicationName: n, imageClassName: o, imageNotFoundClassName: l } = e,
        [c, u] = i.useState(!1);
    return "not-found" === t.state || c
        ? (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(a.A, { className: s.i }),
          })
        : "loading" === t.state
          ? null
          : (0, r.jsx)("img", {
                alt: n,
                className: o,
                src: t.url,
                onError: () => u(!0),
            });
}
