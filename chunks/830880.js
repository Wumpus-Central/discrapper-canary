n.d(t, { R: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(704215),
    l = n(481060),
    a = n(230711),
    o = n(243778),
    s = n(981631),
    c = n(921944),
    u = n(526761),
    d = n(726985),
    p = n(388032),
    h = n(306194);
function f() {
    let [e, t] = (0, o.US)([i.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]),
        n = e === i.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        f = () => {
            a.Z.open(s.oAB.CONTENT_AND_SOCIAL, d.s6.RESTRICTED_USERS, { scrollPosition: u.FY.RESTRICTED_ACCOUNTS });
        };
    return n
        ? (0, r.jsxs)('div', {
              className: h.blockedIgnoredSettingsNotice,
              children: [
                  (0, r.jsx)(l.d3s, { size: 'md' }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'interactive-active',
                      children: p.NW.format(p.t.zqv4nZ, {
                          hook: (e, t) =>
                              (0, r.jsx)(
                                  l.eee,
                                  {
                                      onClick: f,
                                      children: e
                                  },
                                  t
                              )
                      })
                  }),
                  (0, r.jsx)(l.P3F, {
                      className: h.closeButton,
                      onClick: () => t(c.L.USER_DISMISS),
                      children: (0, r.jsx)(l.Dio, {})
                  })
              ]
          })
        : null;
}
