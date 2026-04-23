n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    d = n(834730),
    o = n(821609),
    c = n(46054),
    u = n(957565),
    _ = n(985018),
    m = n(415924);
function h(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: h },
            },
        } = e,
        [g, p] = a.useState(!1),
        x = a.useRef(c.A.reactParserFor(c.A.defaultRules));
    return h
        ? (0, l.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, l.jsx)(s.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: m.wx,
                      children: t,
                  }),
                  (0, l.jsx)(d.E, { variant: "text-sm/normal", className: m.G3, children: x.current(n) }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: r()(m.GH, { [m.pG]: g }),
                          children: [
                              (0, l.jsx)(d.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: m.Kk,
                                  children: i,
                              }),
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: m.__invalid_trailingButton,
                                  children: (0, l.jsx)(o.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g ? _.intl.string(_.t.t5VZ88) : _.intl.string(_.t.OpuAlK),
                                      onClick: () => {
                                          (0, u.C)(i, () => p(!0));
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
