"use strict";
a.d(t, { e: () => _ });
var s = a(627968),
    r = a(64700),
    n = a(397927),
    i = a(414121),
    l = a(981355),
    o = a(652215),
    c = a(985018),
    d = a(403404);
let u = a(196390),
    h = a(906118),
    p = `${window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]}${o.BVt.ACTIVATE}`,
    x = `${location.protocol}//${p}`;
function f(e) {
    let { text: t = "" } = e,
        [a, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = h), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [h]),
        "" !== t && a
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(i.Ay, { size: 288, text: t }),
                      (0, s.jsx)("div", { className: d.xi, children: (0, s.jsx)("img", { src: h, alt: "" }) }),
                  ],
              })
            : (0, s.jsx)("div", { className: d.Yp, children: (0, s.jsx)(n.y$y, { type: n.y$y.Type.WANDERING_CUBES }) })
    );
}
let _ = (e) => {
    let { code: t } = e,
        { width: a, height: r } = (0, l.A)();
    return null == t || 0 === t.length
        ? null
        : (0, s.jsxs)("div", {
              className: d.nd,
              style: { zoom: Math.min(a / 1460, r / 1080, 1) },
              children: [
                  (0, s.jsx)("div", { className: d.Iv, children: (0, s.jsx)("div", { className: d.wm }) }),
                  (0, s.jsxs)("div", {
                      className: d.SV,
                      children: [
                          (0, s.jsxs)("div", {
                              className: d._c,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: d.fn,
                                      children: (0, s.jsx)(f, { text: `${x}?user_code=${encodeURIComponent(t)}` }),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: d.E7,
                                      children: [
                                          (0, s.jsx)(n.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.MM,
                                              children: c.intl.string(c.t.llDCid),
                                          }),
                                          (0, s.jsx)(n.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: c.intl.string(c.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: d.$G,
                              children: [
                                  (0, s.jsx)("div", { className: d.yF }),
                                  (0, s.jsx)(n.Heading, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: d.Bw,
                                      children: c.intl.string(c.t.arEHn4),
                                  }),
                                  (0, s.jsx)("div", { className: d.yF }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: d.Y7,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: d.WX,
                                      children: [
                                          (0, s.jsx)(n.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.GP,
                                              children: c.intl.string(c.t["Eu8rJ/"]),
                                          }),
                                          (0, s.jsx)(n.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: c.intl.string(c.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: d.u5,
                                      children: [
                                          (0, s.jsx)(n.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.GP,
                                              children: p,
                                          }),
                                          (0, s.jsxs)("div", {
                                              className: d.WX,
                                              children: [
                                                  (0, s.jsx)(n.Heading, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: c.intl.string(c.t.RyDxBX),
                                                  }),
                                                  (0, s.jsx)(n.Heading, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: d.H$,
                                                      children: t.match(/.{1,4}/g)?.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("img", { className: d.kX, src: u, alt: "" }),
                      ],
                  }),
              ],
          });
};
