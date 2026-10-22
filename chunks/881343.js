t.d(i, { A: () => s });
var l = t(477900),
    n = t(582128),
    a = t(891694),
    r = t(916517);
function s(e) {
    let { imageBackground: i, applicationName: t, imageClassName: s, imageNotFoundClassName: o } = e,
        [p, d] = n.useState(!1);
    return "not-found" === i.state || p
        ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)(a.A, { className: r.i }) })
        : "loading" === i.state
          ? null
          : (0, l.jsx)("img", { alt: t, className: s, src: i.url, onError: () => d(!0) });
}
