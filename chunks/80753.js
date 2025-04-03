s.r(t), s.d(t, { default: () => u }), s(47120);
var i = s(200651),
    r = s(192379),
    l = s(481060),
    n = s(377171),
    a = s(31336),
    o = s(481637),
    c = s(532810),
    d = s(915312);
function u() {
    let [e, t] = r.useState(!1),
        s = (0, d.LL)(),
        { reporting: u } = o.Z.useExperiment({ location: 'be7a1c_1' }, { autoTrackExposure: !1 });
    return (r.useEffect(() => {
        if (u && e && null != s)
            return (
                s.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(c.OF, '');
                    });
                }),
                () => {
                    s.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(c.OF);
                        });
                    });
                }
            );
    }, [s, u, e]),
    u && null != s && 0 !== s.length)
        ? (0, i.jsxs)('div', {
              style: {
                  backgroundColor: n.Z.INFO_DANGER_BACKGROUND,
                  color: n.Z.INFO_DANGER_TEXT,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 12px'
              },
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/semibold',
                      color: 'info-danger-text',
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
                          (0, i.jsx)(l.zxk, {
                              size: l.zxk.Sizes.TINY,
                              color: l.zxk.Colors.RED,
                              style: { marginLeft: 'auto' },
                              onClick: a.SO,
                              children: 'Open DevTools'
                          }),
                          (0, i.jsxs)(l.zxk, {
                              size: l.zxk.Sizes.TINY,
                              color: l.zxk.Colors.RED,
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
