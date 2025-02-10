n.d(e, { Z: () => s });
var o = n(200651);
n(192379);
var t = n(120356),
    l = n.n(t),
    a = n(481060),
    r = n(709586),
    c = n(267642),
    d = n(388032),
    _ = n(822829);
let s = (i) => {
    let e,
        n,
        t,
        { guildFeature: s, guild: p, className: f, hideTooltip: m = !1, tooltipPosition: u = 'left', onClick: g } = i,
        x = p.hasFeature(s),
        C = (0, c._p)(s);
    return (x
        ? (null != C && (t = d.intl.string(d.t.hUgjyM)),
          (e = (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(r.Z, { className: _.unlockedIcon }),
                  (0, o.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: _.description,
                      children: d.intl.string(d.t['0O+87u'])
                  })
              ]
          })))
        : (null != C && (t = d.intl.string(d.t.L2wYYm)),
          (e = (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(r.Z, { className: _.icon }),
                  (0, o.jsx)(a.X6q, {
                      variant: 'eyebrow',
                      className: _.description,
                      children: null != C && (0, c.e9)(C)
                  })
              ]
          }))),
    (n =
        m || null == t
            ? (0, o.jsx)('div', {
                  className: l()(_.availabilityIndicator, f),
                  children: e
              })
            : (0, o.jsx)(a.ua7, {
                  position: u,
                  text: t,
                  children: (i) =>
                      (0, o.jsx)('div', {
                          ...i,
                          className: l()(_.availabilityIndicator, f),
                          children: e
                      })
              })),
    null == g || x)
        ? n
        : (0, o.jsx)(a.P3F, {
              onClick: g,
              className: _.clickable,
              children: n
          });
};
