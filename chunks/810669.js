r.d(t, {
    e: () => b,
}),
    r(747238),
    r(896048);
var a = r(627968),
    n = r(64700),
    s = r(397927),
    i = r(414121),
    l = r(981355),
    c = r(652215),
    o = r(985018),
    d = r(120509);
let u = r(196390),
    f = r(906118),
    p = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(c.BVt.ACTIVATE),
    h = "".concat(location.protocol, "//").concat(p);

function x(e) {
    let { text: t = "" } = e,
        [r, l] = n.useState(!1);
    return (
        n.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [f]),
        "" !== t && r
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.Ay, {
                          size: 288,
                          text: t,
                      }),
                      (0, a.jsx)("div", {
                          className: d.xi,
                          children: (0, a.jsx)("img", {
                              src: f,
                              alt: "",
                          }),
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  className: d.Yp,
                  children: (0, a.jsx)(s.y$y, {
                      type: s.y$y.Type.WANDERING_CUBES,
                  }),
              })
    );
}
let b = (e) => {
    var t;
    let { code: r } = e,
        { width: n, height: i } = (0, l.A)();
    return null == r || 0 === r.length
        ? null
        : (0, a.jsxs)("div", {
              className: d.nd,
              style: {
                  zoom: Math.min(n / 1460, i / 1080, 1),
              },
              children: [
                  (0, a.jsx)("div", {
                      className: d.Iv,
                      children: (0, a.jsx)("div", {
                          className: d.wm,
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: d.SV,
                      children: [
                          (0, a.jsxs)("div", {
                              className: d._c,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: d.fn,
                                      children: (0, a.jsx)(x, {
                                          text: "".concat(h, "?user_code=").concat(encodeURIComponent(r)),
                                      }),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: d.E7,
                                      children: [
                                          (0, a.jsx)(s.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.MM,
                                              children: o.intl.string(o.t.llDCid),
                                          }),
                                          (0, a.jsx)(s.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: o.intl.string(o.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: d.$G,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: d.yF,
                                  }),
                                  (0, a.jsx)(s.Heading, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: d.Bw,
                                      children: o.intl.string(o.t.arEHn4),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: d.yF,
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: d.Y7,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: d.WX,
                                      children: [
                                          (0, a.jsx)(s.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.GP,
                                              children: o.intl.string(o.t["Eu8rJ/"]),
                                          }),
                                          (0, a.jsx)(s.Heading, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: o.intl.string(o.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: d.u5,
                                      children: [
                                          (0, a.jsx)(s.Heading, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: d.GP,
                                              children: p,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: d.WX,
                                              children: [
                                                  (0, a.jsx)(s.Heading, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: o.intl.string(o.t.RyDxBX),
                                                  }),
                                                  (0, a.jsx)(s.Heading, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: d.H$,
                                                      children: null == (t = r.match(/.{1,4}/g)) ? void 0 : t.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsx)("img", {
                              className: d.kX,
                              src: u,
                              alt: "",
                          }),
                      ],
                  }),
              ],
          });
};
