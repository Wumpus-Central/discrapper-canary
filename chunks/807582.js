n.d(i, { Z: () => u });
var t = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(709586),
    r = n(267642),
    c = n(388032),
    d = n(267105);
let u = (e) => {
    let i,
        n,
        l,
        { guildFeature: u, guild: p, className: f, hideTooltip: x = !1, tooltipPosition: m = 'left', onClick: g } = e,
        h = p.hasFeature(u),
        _ = (0, r._p)(u);
    return (h
        ? (null != _ && (l = c.intl.string(c.t.hUgjyM)),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                  (0, t.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.intl.string(c.t['0O+87u'])
                  })
              ]
          })))
        : (null != _ && (l = c.intl.string(c.t.L2wYYm)),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.icon }),
                  (0, t.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != _ && (0, r.e9)(_)
                  })
              ]
          }))),
    (n =
        x || null == l
            ? (0, t.jsx)('div', {
                  className: o()(d.availabilityIndicator, f),
                  children: i
              })
            : (0, t.jsx)(a.ua7, {
                  position: m,
                  text: l,
                  children: (e) =>
                      (0, t.jsx)('div', {
                          ...e,
                          className: o()(d.availabilityIndicator, f),
                          children: i
                      })
              })),
    null == g || h)
        ? n
        : (0, t.jsx)(a.P3F, {
              onClick: g,
              className: d.clickable,
              children: n
          });
};
