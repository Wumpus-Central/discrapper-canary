n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(100527),
    l = n(243778),
    c = n(892001),
    u = n(314897),
    d = n(993413),
    f = n(921944),
    _ = n(228168),
    p = n(388032),
    h = n(700803);
let m = () => {
    let [e, t] = (0, l.US)([a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]),
        n = e === a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        m = (0, i.e7)([u.default], () => u.default.getId());
    return (0, r.jsx)(d.Z, {
        title: p.intl.string(p.t.Jzj9q6),
        description: p.intl.string(p.t.lfF1Sk),
        titleIcon: n
            ? (0, r.jsx)(o.IGR, {
                  className: h.newBadge,
                  text: p.intl.string(p.t.y2b7CA),
              })
            : null,
        children: (0, r.jsx)(o.zxk, {
            text: p.intl.string(p.t.Geikws),
            onClick: () => {
                n && t(f.L.TAKE_ACTION),
                    (0, c.openUserProfileModal)({
                        userId: m,
                        sourceAnalyticsLocations: [s.Z.USER_SETTINGS_USER_PROFILE],
                        hideRestrictedProfile: !0,
                        section: _.oh.WIDGETS,
                    });
            },
            size: "sm",
        }),
    });
};
