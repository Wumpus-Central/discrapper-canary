"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(397927),
    r = n(267102),
    a = n(993838),
    o = n(418208),
    c = n(47868),
    d = n(985018);
function u(e) {
    let { className: t, channel: n, highlight: u } = e,
        h = (0, r.Us)();
    return (0, o.zU)()
        ? null
        : (0, i.jsx)(c.A, {
              highlight: u ?? !1,
              className: t,
              icon: (0, i.jsx)(l.qux, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: s.A.unsafe_rawColors.GREEN_360.css,
              title: d.intl.string(d.t.OYbHfv),
              description: d.intl.string(d.t.yXwLMQ),
              onClick: function () {
                  (0, a.tQ)(n, h);
              },
          });
}
