t.d(i, { Z: () => s });
var n = t(200651);
t(192379);
var o = t(120356),
    a = t.n(o),
    l = t(481060),
    r = t(709586),
    c = t(267642),
    _ = t(388032),
    d = t(450277);
let s = (e) => {
    let i,
        t,
        o,
        { guildFeature: s, guild: p, className: f, hideTooltip: m = !1, tooltipPosition: u = 'left', onClick: g } = e,
        x = p.hasFeature(s),
        h = (0, c._p)(s);
    return (x
        ? (null != h && (o = _.intl.string(_.t.hUgjyM)),
          (i = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(r.Z, { className: d.unlockedIcon }),
                  (0, n.jsx)(l.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: _.intl.string(_.t['0O+87u'])
                  })
              ]
          })))
        : (null != h && (o = _.intl.string(_.t.L2wYYm)),
          (i = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(r.Z, { className: d.icon }),
                  (0, n.jsx)(l.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != h && (0, c.e9)(h)
                  })
              ]
          }))),
    (t =
        m || null == o
            ? (0, n.jsx)('div', {
                  className: a()(d.availabilityIndicator, f),
                  children: i
              })
            : (0, n.jsx)(l.ua7, {
                  position: u,
                  text: o,
                  children: (e) =>
                      (0, n.jsx)('div', {
                          ...e,
                          className: a()(d.availabilityIndicator, f),
                          children: i
                      })
              })),
    null == g || x)
        ? t
        : (0, n.jsx)(l.P3F, {
              onClick: g,
              className: d.clickable,
              children: t
          });
};
