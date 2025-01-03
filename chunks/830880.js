n.d(t, {
    R: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(481060),
    a = n(230711),
    s = n(243778),
    o = n(187819),
    c = n(981631),
    d = n(921944),
    u = n(526761),
    h = n(726985),
    m = n(388032),
    p = n(962479);
function g() {
    let [e, t] = (0, s.US)([r.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]),
        n = e === r.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        g = (0, o._p)({ location: 'PeopleList' }),
        f = () => {
            a.Z.open(g ? c.oAB.CONTENT_AND_SOCIAL : c.oAB.ACCOUNT, h.s6.RESTRICTED_USERS, { scrollPosition: u.FY.RESTRICTED_ACCOUNTS });
        };
    return n
        ? (0, i.jsxs)('div', {
              className: p.blockedIgnoredSettingsNotice,
              children: [
                  (0, i.jsx)(l.CircleInformationIcon, { size: 'md' }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'interactive-active',
                      children: m.intl.format(m.t.zqv4nZ, {
                          hook: (e, t) =>
                              (0, i.jsx)(
                                  l.Anchor,
                                  {
                                      onClick: f,
                                      children: e
                                  },
                                  t
                              )
                      })
                  }),
                  (0, i.jsx)(l.Clickable, {
                      className: p.closeButton,
                      onClick: () => t(d.L.USER_DISMISS),
                      children: (0, i.jsx)(l.XSmallIcon, {})
                  })
              ]
          })
        : null;
}
