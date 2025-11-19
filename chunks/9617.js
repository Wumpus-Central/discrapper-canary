n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(100527),
    l = n(243778),
    c = n(892001),
    u = n(314897),
    d = n(993413),
    f = n(504983),
    _ = n(921944),
    p = n(228168),
    h = n(388032),
    m = n(700803);
let g = () => {
    let [e, t] = (0, l.US)([a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]),
        n = e === a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        g = (0, i.e7)([u.default], () => u.default.getId());
    return (0, r.jsx)(d.Z, {
        title: h.intl.string(h.t.Jzj9q4),
        description: h.intl.string(h.t.lfF1Sp),
        titleIcon: n
            ? (0, r.jsx)(o.IGR, {
                  className: m.newBadge,
                  text: h.intl.string(h.t.y2b7CA),
              })
            : null,
        borderType: f.Y.LIMITED,
        showBorder: n,
        hasBackground: n,
        children: (0, r.jsx)(o.Button, {
            text: h.intl.string(h.t.Geikwq),
            onClick: () => {
                n && t(_.L.TAKE_ACTION),
                    (0, c.openUserProfileModal)({
                        userId: g,
                        sourceAnalyticsLocations: [s.Z.USER_SETTINGS_USER_PROFILE],
                        hideRestrictedProfile: !0,
                        section: p.oh.WIDGETS,
                    });
            },
            size: "sm",
        }),
    });
};
