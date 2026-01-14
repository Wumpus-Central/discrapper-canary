n.d(t, { R: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(704215),
    a = n(243778),
    o = n(907995),
    s = n(313789),
    c = n(526665),
    u = n(518596),
    d = n(981631),
    p = n(921944),
    f = n(484710),
    g = n(526761),
    h = n(726985),
    m = n(388032),
    b = n(45639);
function _() {
    let [e, t] = (0, a.US)([l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return i.useMemo(() => e === l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, r.jsx)(o.f, {
              label: m.t.zqv4nV,
              labelHook: () => {
                  let e = (0, c.Gl)("RestrictedAccountsSettingNotice");
                  (0, u.openUserSettings)(
                      e ? s.n.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY : s.n.CONTENT_AND_SOCIAL_PANEL,
                      {
                          section: d.oAB.CONTENT_AND_SOCIAL,
                          subsection: h.s6.RESTRICTED_USERS,
                          scrollPosition: e ? void 0 : g.FY.RESTRICTED_ACCOUNTS,
                      },
                  );
              },
              dismissNotice: () => t(p.L.USER_DISMISS),
              className: b.blockedIgnoredSettingsNotice,
              noticeType: f.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
