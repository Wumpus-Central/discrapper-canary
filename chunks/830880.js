n.d(t, {
    R: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(481060),
    a = n(230711),
    s = n(243778),
    o = n(981631),
    c = n(921944),
    d = n(526761),
    u = n(726985),
    h = n(388032),
    m = n(781707);
function p() {
    let [e, t] = (0, s.US)([r.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]),
        n = e === r.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        p = () => {
            a.Z.open(o.oAB.CONTENT_AND_SOCIAL, u.s6.RESTRICTED_USERS, { scrollPosition: d.FY.RESTRICTED_ACCOUNTS });
        };
    return n
        ? (0, i.jsxs)('div', {
              className: m.blockedIgnoredSettingsNotice,
              children: [
                  (0, i.jsx)(l.CircleInformationIcon, { size: 'md' }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'interactive-active',
                      children: h.intl.format(h.t.zqv4nZ, {
                          hook: (e, t) =>
                              (0, i.jsx)(
                                  l.Anchor,
                                  {
                                      onClick: p,
                                      children: e
                                  },
                                  t
                              )
                      })
                  }),
                  (0, i.jsx)(l.Clickable, {
                      className: m.closeButton,
                      onClick: () => t(c.L.USER_DISMISS),
                      children: (0, i.jsx)(l.XSmallIcon, {})
                  })
              ]
          })
        : null;
}
