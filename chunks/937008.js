n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(556638),
    l = n(694978);
function u(e) {
    let { icon: t, tooltip: n, className: r } = e,
        u = (0, s.vjg)(s.Skl.ONLINE);
    return null == n
        ? (0, i.jsx)(t, {
              size: 'custom',
              color: u,
              className: a()(l.icon, r)
          })
        : (0, i.jsx)(s.ua7, {
              text: n,
              tooltipContentClassName: l.container,
              delay: o.X,
              children: (e) =>
                  (0, i.jsx)(t, {
                      ...e,
                      size: 'custom',
                      color: u,
                      className: a()(l.icon, r)
                  })
          });
}
