n.d(t, { R: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(704215),
    a = n(243778),
    s = n(907995),
    o = n(313789),
    c = n(518596),
    u = n(981631),
    d = n(921944),
    p = n(484710),
    f = n(526761),
    g = n(726985),
    h = n(388032),
    m = n(45639);
function b() {
    let [e, t] = (0, a.US)([l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return i.useMemo(() => e === l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, r.jsx)(s.f, {
              label: h.t.zqv4nV,
              labelHook: () => {
                  (0, c.openUserSettings)(o.n.CONTENT_AND_SOCIAL_PANEL, {
                      section: u.oAB.CONTENT_AND_SOCIAL,
                      subsection: g.s6.RESTRICTED_USERS,
                      scrollPosition: f.FY.RESTRICTED_ACCOUNTS,
                  });
              },
              dismissNotice: () => t(d.L.USER_DISMISS),
              className: m.blockedIgnoredSettingsNotice,
              noticeType: p.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
