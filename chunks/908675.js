n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    d = n(46054),
    o = n(957565),
    u = n(985018),
    c = n(38776);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: m },
            },
        } = e,
        [_, x] = a.useState(!1),
        g = a.useRef(d.A.reactParserFor(d.A.defaultRules));
    return m
        ? (0, l.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, l.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: c.wx,
                      children: t,
                  }),
                  (0, l.jsx)(s.Text, { variant: "text-sm/normal", className: c.G3, children: g.current(n) }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: r()(c.GH, { [c.pG]: _ }),
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: c.Kk,
                                  children: i,
                              }),
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: c.__invalid_trailingButton,
                                  children: (0, l.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: _ ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
                                      onClick: () => {
                                          (0, o.C)(i, () => x(!0));
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
