t.d(n, { A: () => d });
var i = t(477900);
t(582128);
var l = t(661531),
    s = t(451394),
    a = t(267102),
    r = t(993838),
    o = t(418208),
    c = t(47868),
    u = t(105292);
function d(e) {
    let { className: n, channel: t, highlight: d } = e,
        A = (0, a.Us)();
    return (0, o.zU)()
        ? null
        : (0, i.jsx)(c.A, {
              highlight: d ?? !1,
              className: n,
              icon: (0, i.jsx)(s.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: l.A.unsafe_rawColors.GREEN_360.css,
              title: u.intl.string(u.t.OYbHfv),
              description: u.intl.string(u.t.yXwLMQ),
              onClick: function () {
                  (0, r.tQ)(t, A);
              },
          });
}
