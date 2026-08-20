i.d(t, { A: () => s });
var l = i(477900),
    n = i(582128),
    a = i(891694),
    r = i(916517);
function s(e) {
    let { imageBackground: t, applicationName: i, imageClassName: s, imageNotFoundClassName: o } = e,
        [d, p] = n.useState(!1);
    return "not-found" === t.state || d
        ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)(a.A, { className: r.i }) })
        : "loading" === t.state
          ? null
          : (0, l.jsx)("img", { alt: i, className: s, src: t.url, onError: () => p(!0) });
}
