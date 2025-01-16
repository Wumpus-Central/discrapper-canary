var t = i(200651);
i(192379);
var o = i(120356),
    a = i.n(o),
    l = i(481060),
    s = i(709586),
    r = i(267642),
    c = i(388032),
    d = i(267105);
n.Z = (e) => {
    let n,
        i,
        o,
        { guildFeature: f, guild: u, className: p, hideTooltip: x = !1, tooltipPosition: m = 'left', onClick: g } = e,
        b = u.hasFeature(f),
        h = (0, r._p)(f);
    return (b
        ? (null != h && (o = c.intl.string(c.t.hUgjyM)),
          (n = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                  (0, t.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.intl.string(c.t['0O+87u'])
                  })
              ]
          })))
        : (null != h && (o = c.intl.string(c.t.L2wYYm)),
          (n = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.icon }),
                  (0, t.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != h && (0, r.e9)(h)
                  })
              ]
          }))),
    (i =
        x || null == o
            ? (0, t.jsx)('div', {
                  className: a()(d.availabilityIndicator, p),
                  children: n
              })
            : (0, t.jsx)(l.Tooltip, {
                  position: m,
                  text: o,
                  children: (e) =>
                      (0, t.jsx)('div', {
                          ...e,
                          className: a()(d.availabilityIndicator, p),
                          children: n
                      })
              })),
    null == g || b)
        ? i
        : (0, t.jsx)(l.Clickable, {
              onClick: g,
              className: d.clickable,
              children: i
          });
};
