n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    d = n(46054),
    o = n(957565),
    c = n(985018),
    u = n(38776);
function _(e) {
    let {
            element: {
                data: { title: t, body: n, sms: r, is_localized: _ },
            },
        } = e,
        [m, x] = a.useState(!1),
        p = a.useRef(d.A.reactParserFor(d.A.defaultRules));
    return _
        ? (0, l.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, l.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: u.wx,
                      children: t,
                  }),
                  (0, l.jsx)(s.Text, { variant: "text-sm/normal", className: u.G3, children: p.current(n) }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: i()(u.GH, { [u.pG]: m }),
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: u.Kk,
                                  children: r,
                              }),
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, l.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: m ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
                                      onClick: () => {
                                          (0, o.C)(r, () => x(!0));
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
