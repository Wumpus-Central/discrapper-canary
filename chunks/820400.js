a.d(t, { Z: () => u });
var n = a(255367);
a(73800);
var r = a(924322),
    l = a(481060),
    i = a(447448),
    s = a(187162),
    o = a(484036),
    c = a(634733),
    d = a(148444);
function u() {
    return (0, i.k)({
        location: 'DevToolsWidgetsPanel',
        autoTrackExposure: !1
    })
        ? (0, n.jsx)(o.Z, {
              initialHeight: 400,
              children: (0, n.jsx)('div', {
                  className: d.container,
                  children: (0, n.jsxs)(l.hjN, {
                      children: [
                          (0, n.jsx)(l.vwX, { children: 'User Profile Widgets' }),
                          (0, n.jsx)(l.R94, { children: 'Generate and test different widget configurations for user profiles.' }),
                          (0, n.jsxs)('div', {
                              className: d.buttonGroup,
                              children: [
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: 'Favorite Game Widget',
                                      onClick: () => (0, c.w6)(r.g.FAVORITE)
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: 'Current Game Widget',
                                      onClick: () => (0, c.w6)(r.g.CURRENT)
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: 'Want to Play Game Widget',
                                      onClick: () => (0, c.w6)(r.g.WANT_TO_PLAY)
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: 'Played Game Widget',
                                      onClick: () => (0, c.w6)(r.g.PLAYED)
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'active',
                                      text: 'Show Empty State',
                                      onClick: () => {
                                          s.Z.setOverrideWidgets([]);
                                      }
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: 'critical-primary',
                                      text: 'Clear Local Overrides',
                                      onClick: () => {
                                          s.Z.clearOverrides();
                                      }
                                  })
                              ]
                          })
                      ]
                  })
              })
          })
        : null;
}
