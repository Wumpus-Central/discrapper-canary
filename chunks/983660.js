n.d(t, { Z: () => h }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(704215),
    l = n(481060),
    s = n(243778),
    a = n(921944),
    c = n(388032),
    d = n(63791),
    u = n(215916);
function h(e) {
    let { locked: t } = e,
        [n, h] = (0, s.US)(t ? [] : [o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
            return () => {
                n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && h(a.L.AUTO_DISMISS);
            };
    }, [t, h, n]),
    t || n !== o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
        ? null
        : (0, i.jsx)('div', {
              className: d.overlayInprocessBackgroundNux,
              children: (0, i.jsxs)('div', {
                  className: d.mainContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: d.mainTitleContainer,
                          children: [
                              (0, i.jsx)(l.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  className: d.mainTitle,
                                  children: c.intl.format(c.t.Eg5ybG, {})
                              }),
                              (0, i.jsx)(l.Text, {
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
                                      (0, i.jsx)(l.qjv, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.S6VRyM)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.Dkj, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.xq8CKS)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.Odl, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.intl.string(c.t.GwpRe3)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.KY1, {}),
                                      (0, i.jsx)(l.Text, {
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
