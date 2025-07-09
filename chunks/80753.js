(s.r(t), s.d(t, { default: () => h }), s(388685));
var i = s(255367),
    r = s(73800),
    l = s(755721),
    n = s(481060),
    a = s(377171),
    o = s(31336),
    c = s(481637),
    d = s(532810),
    u = s(915312);
function h() {
    let [e, t] = r.useState(!1),
        s = (0, u.LL)(),
        { reporting: h } = c.Z.useExperiment({ location: 'be7a1c_1' }, { autoTrackExposure: !1 });
    return (r.useEffect(() => {
        if (h && e && null != s)
            return (
                s.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(d.OF, '');
                    });
                }),
                () => {
                    s.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(d.OF);
                        });
                    });
                }
            );
    }, [s, h, e]),
    h && null != s && 0 !== s.length)
        ? (0, i.jsxs)('div', {
              style: {
                  backgroundColor: a.Z.BACKGROUND_FEEDBACK_CRITICAL,
                  color: a.Z.TEXT_FEEDBACK_CRITICAL,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 12px'
              },
              children: [
                  (0, i.jsx)(n.Text, {
                      variant: 'text-sm/semibold',
                      color: 'text-feedback-critical',
                      children: 'Accessibility compliance issue(s) detected, check in-app DevTools'
                  }),
                  (0, i.jsxs)('div', {
                      style: {
                          display: 'grid',
                          gridAutoFlow: 'column',
                          gap: 4,
                          marginLeft: 'auto'
                      },
                      children: [
                          (0, i.jsx)(l.zx, {
                              size: l.zx.Sizes.TINY,
                              color: l.zx.Colors.RED,
                              style: { marginLeft: 'auto' },
                              onClick: o.SO,
                              children: 'Open DevTools'
                          }),
                          (0, i.jsxs)(l.zx, {
                              size: l.zx.Sizes.TINY,
                              color: l.zx.Colors.RED,
                              style: { marginLeft: 'auto' },
                              onClick: () => t(!e),
                              children: [e ? 'Hide' : 'Show', ' Overlays']
                          })
                      ]
                  })
              ]
          })
        : null;
}
