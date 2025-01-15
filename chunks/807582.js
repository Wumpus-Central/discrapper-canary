var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(709586),
    o = n(267642),
    c = n(388032),
    d = n(652456);
t.Z = (e) => {
    let t,
        n,
        r,
        { guildFeature: u, guild: m, className: h, hideTooltip: g = !1, tooltipPosition: x = 'left', onClick: p } = e,
        f = m.hasFeature(u),
        C = (0, o._p)(u);
    return (f
        ? (null != C && (r = c.intl.string(c.t.hUgjyM)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a.Z, { className: d.unlockedIcon }),
                  (0, i.jsx)(s.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.intl.string(c.t['0O+87u'])
                  })
              ]
          })))
        : (null != C && (r = c.intl.string(c.t.L2wYYm)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a.Z, { className: d.icon }),
                  (0, i.jsx)(s.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != C && (0, o.e9)(C)
                  })
              ]
          }))),
    (n =
        g || null == r
            ? (0, i.jsx)('div', {
                  className: l()(d.availabilityIndicator, h),
                  children: t
              })
            : (0, i.jsx)(s.Tooltip, {
                  position: x,
                  text: r,
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(d.availabilityIndicator, h),
                          children: t
                      })
              })),
    null == p || f)
        ? n
        : (0, i.jsx)(s.Clickable, {
              onClick: p,
              className: d.clickable,
              children: n
          });
};
