"use strict";
n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(534514),
    d = n(834730),
    o = n(821609),
    c = n(46054),
    u = n(957565),
    _ = n(985018),
    m = n(415924);
function p(e) {
    let {
            element: {
                data: { title: t, body: n, sms: r, is_localized: p },
            },
        } = e,
        [h, g] = i.useState(!1),
        f = i.useRef(c.A.reactParserFor(c.A.defaultRules));
    return p
        ? (0, a.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, a.jsx)(s.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: m.wx,
                      children: t,
                  }),
                  (0, a.jsx)(d.E, { variant: "text-sm/normal", className: m.G3, children: f.current(n) }),
                  (0, a.jsx)("div", {
                      children: (0, a.jsxs)("div", {
                          className: l()(m.GH, { [m.pG]: h }),
                          children: [
                              (0, a.jsx)(d.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: m.Kk,
                                  children: r,
                              }),
                              (0, a.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: m.__invalid_trailingButton,
                                  children: (0, a.jsx)(o.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: h ? _.intl.string(_.t.t5VZ88) : _.intl.string(_.t.OpuAlK),
                                      onClick: () => {
                                          (0, u.C)(r, () => g(!0));
                                      },
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
