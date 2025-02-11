n.d(i, { Z: () => s });
var t = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    l = n(481060),
    r = n(709586),
    c = n(267642),
    _ = n(388032),
    d = n(822829);
let s = (e) => {
    let i,
        n,
        o,
        { guildFeature: s, guild: p, className: f, hideTooltip: m = !1, tooltipPosition: u = 'left', onClick: g } = e,
        x = p.hasFeature(s),
        v = (0, c._p)(s);
    return (x
        ? (null != v && (o = _.intl.string(_.t.hUgjyM)),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(r.Z, { className: d.unlockedIcon }),
                  (0, t.jsx)(l.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: _.intl.string(_.t['0O+87u'])
                  })
              ]
          })))
        : (null != v && (o = _.intl.string(_.t.L2wYYm)),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(r.Z, { className: d.icon }),
                  (0, t.jsx)(l.X6q, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != v && (0, c.e9)(v)
                  })
              ]
          }))),
    (n =
        m || null == o
            ? (0, t.jsx)('div', {
                  className: a()(d.availabilityIndicator, f),
                  children: i
              })
            : (0, t.jsx)(l.ua7, {
                  position: u,
                  text: o,
                  children: (e) =>
                      (0, t.jsx)('div', {
                          ...e,
                          className: a()(d.availabilityIndicator, f),
                          children: i
                      })
              })),
    null == g || x)
        ? n
        : (0, t.jsx)(l.P3F, {
              onClick: g,
              className: d.clickable,
              children: n
          });
};
