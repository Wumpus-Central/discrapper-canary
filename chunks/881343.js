"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    s = n(891694),
    a = n(10879);
function o(e) {
    let { imageBackground: t, applicationName: n, imageClassName: o, imageNotFoundClassName: l } = e,
        [u, c] = i.useState(!1);
    return "not-found" === t.state || u
        ? (0, r.jsx)("div", { className: l, children: (0, r.jsx)(s.A, { className: a.i }) })
        : "loading" === t.state
          ? null
          : (0, r.jsx)("img", { alt: n, className: o, src: t.url, onError: () => c(!0) });
}
