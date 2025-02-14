n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(704215),
    o = n(481060),
    s = n(243778),
    d = n(921944),
    l = n(388032),
    c = n(87296),
    u = n(215916);
function _(e) {
    let { locked: t } = e,
        [n, _] = (0, s.US)(t ? [] : [a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
            return () => {
                n === a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && _(d.L.AUTO_DISMISS);
            };
    }, [t, _, n]),
    t || n !== a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
        ? null
        : (0, i.jsx)('div', {
              className: c.overlayInprocessBackgroundNux,
              children: (0, i.jsxs)('div', {
                  className: c.mainContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: c.mainTitleContainer,
                          children: [
                              (0, i.jsx)(o.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  className: c.mainTitle,
                                  children: l.intl.format(l.t.Eg5ybG, {})
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  className: c.mainTitleBody,
                                  children: l.intl.format(l.t.KkM0s7, {})
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: c.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.qjv, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: l.intl.string(l.t.S6VRyM)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Dkj, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: l.intl.string(l.t.xq8CKS)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Odl, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: l.intl.string(l.t.GwpRe3)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.KY1, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: l.intl.string(l.t.VUoC5O)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('img', {
                              src: u.Z,
                              alt: l.intl.string(l.t.mdXZh4),
                              className: c.nuxImage
                          })
                      })
                  ]
              })
          });
}
