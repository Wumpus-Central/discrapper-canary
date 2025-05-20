n.d(t, { Z: () => h }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(704215),
    o = n(481060),
    l = n(243778),
    a = n(921944),
    c = n(388032),
    d = n(63791),
    u = n(215916);
function h(e) {
    let { locked: t } = e,
        [n, h] = (0, l.US)(t ? [] : [s.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === s.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
            return () => {
                n === s.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && h(a.L.AUTO_DISMISS);
            };
    }, [t, h, n]),
    t || n !== s.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
        ? null
        : (0, i.jsx)('div', {
              className: d.overlayInprocessBackgroundNux,
              children: (0, i.jsxs)('div', {
                  className: d.mainContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: d.mainTitleContainer,
                          children: [
                              (0, i.jsx)(o.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  className: d.mainTitle,
                                  children: c.intl.format(c.t.Eg5ybG, {})
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  className: d.mainTitleBody,
                                  children: c.intl.format(c.t.KkM0s7, {})
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: d.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.qjv, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.S6VRyM)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Dkj, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.xq8CKS)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Odl, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.GwpRe3)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.KY1, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.VUoC5O)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('img', {
                              src: u.Z,
                              alt: c.intl.string(c.t.mdXZh4),
                              className: d.nuxImage
                          })
                      })
                  ]
              })
          });
}
