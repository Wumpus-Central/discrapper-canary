n.d(t, { R: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(230711),
    o = n(243778),
    s = n(907995),
    c = n(981631),
    u = n(921944),
    d = n(526761),
    p = n(726985),
    h = n(388032),
    f = n(306194);
function g() {
    let [e, t] = (0, o.US)([l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return i.useMemo(() => e === l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, r.jsx)(s.f, {
              label: h.t.zqv4nZ,
              labelHook: () => {
                  a.Z.open(c.oAB.CONTENT_AND_SOCIAL, p.s6.RESTRICTED_USERS, { scrollPosition: d.FY.RESTRICTED_ACCOUNTS });
              },
              dismissNotice: () => t(u.L.USER_DISMISS),
              className: f.blockedIgnoredSettingsNotice
          })
        : null;
}
