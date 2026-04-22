"use strict";
s.d(t, { e: () => m });
var a = s(627968),
    r = s(64700),
    n = s(289873),
    i = s(534514),
    l = s(414121),
    o = s(981355),
    c = s(652215),
    d = s(985018),
    u = s(403404);
let h = s(196390),
    p = s(906118),
    x = `${window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]}${c.BVt.ACTIVATE}`,
    f = `${location.protocol}//${x}`;
function _(e) {
    let { text: t = "" } = e,
        [s, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = p), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [p]),
        "" !== t && s
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.Ay, { size: 288, text: t }),
                      (0, a.jsx)("div", { className: u.xi, children: (0, a.jsx)("img", { src: p, alt: "" }) }),
                  ],
              })
            : (0, a.jsx)("div", { className: u.Yp, children: (0, a.jsx)(n.y, { type: n.y.Type.WANDERING_CUBES }) })
    );
}
let m = (e) => {
    let { code: t } = e,
        { width: s, height: r } = (0, o.A)();
    return null == t || 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: u.nd,
              style: { zoom: Math.min(s / 1460, r / 1080, 1) },
              children: [
                  (0, a.jsx)("div", { className: u.Iv, children: (0, a.jsx)("div", { className: u.wm }) }),
                  (0, a.jsxs)("div", {
                      className: u.SV,
                      children: [
                          (0, a.jsxs)("div", {
                              className: u._c,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: u.fn,
                                      children: (0, a.jsx)(_, { text: `${f}?user_code=${encodeURIComponent(t)}` }),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: u.E7,
                                      children: [
                                          (0, a.jsx)(i.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: u.MM,
                                              children: d.intl.string(d.t.llDCid),
                                          }),
                                          (0, a.jsx)(i.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: d.intl.string(d.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: u.$G,
                              children: [
                                  (0, a.jsx)("div", { className: u.yF }),
                                  (0, a.jsx)(i.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: u.Bw,
                                      children: d.intl.string(d.t.arEHn4),
                                  }),
                                  (0, a.jsx)("div", { className: u.yF }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: u.Y7,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: u.WX,
                                      children: [
                                          (0, a.jsx)(i.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: u.GP,
                                              children: d.intl.string(d.t["Eu8rJ/"]),
                                          }),
                                          (0, a.jsx)(i.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: d.intl.string(d.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: u.u5,
                                      children: [
                                          (0, a.jsx)(i.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: u.GP,
                                              children: x,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: u.WX,
                                              children: [
                                                  (0, a.jsx)(i.D, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: d.intl.string(d.t.RyDxBX),
                                                  }),
                                                  (0, a.jsx)(i.D, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: u.H$,
                                                      children: t.match(/.{1,4}/g)?.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsx)("img", { className: u.kX, src: h, alt: "" }),
                      ],
                  }),
              ],
          });
};
