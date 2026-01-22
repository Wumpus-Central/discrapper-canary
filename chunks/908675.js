n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(397927),
    o = n(46054),
    c = n(957565),
    d = n(985018),
    u = n(38776);

function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: a, is_localized: m },
            },
        } = e,
        [b, p] = r.useState(!1),
        x = r.useRef(o.A.reactParserFor(o.A.defaultRules));
    return m
        ? (0, l.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, l.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: u.wx,
                      children: t,
                  }),
                  (0, l.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      className: u.G3,
                      children: x.current(n),
                  }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: i()(u.GH, {
                              [u.pG]: b,
                          }),
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: u.Kk,
                                  children: a,
                              }),
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, l.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: b ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
                                      onClick: () => {
                                          (0, c.C)(a, () => p(!0));
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
