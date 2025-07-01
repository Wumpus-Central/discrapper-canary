(n.d(t, { R: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(230711),
    o = n(243778),
    s = n(907995),
    c = n(981631),
    u = n(921944),
    d = n(484710),
    p = n(526761),
    h = n(726985),
    f = n(388032),
    g = n(306194);
function m() {
    let [e, t] = (0, o.US)([l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return i.useMemo(() => e === l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, r.jsx)(s.f, {
              label: f.t.zqv4nZ,
              labelHook: () => {
                  a.Z.open(c.oAB.CONTENT_AND_SOCIAL, h.s6.RESTRICTED_USERS, { scrollPosition: p.FY.RESTRICTED_ACCOUNTS });
              },
              dismissNotice: () => t(u.L.USER_DISMISS),
              className: g.blockedIgnoredSettingsNotice,
              noticeType: d.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE
          })
        : null;
}
