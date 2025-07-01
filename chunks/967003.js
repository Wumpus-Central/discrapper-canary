n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(846027),
    a = n(131951),
    s = n(321614),
    c = n(345655),
    u = n(388032);
function d(e) {
    let { enabledInputProfiles: t } = (0, s.c)({ location: 'useInputProfileItems' }),
        n = {
            [c._.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpa),
            [c._.STUDIO]: u.intl.string(u.t.VZPR0d),
            [c._.CUSTOM]: u.intl.string(u.t['N/PQjo'])
        },
        d = (0, i.e7)([a.Z], () => a.Z.getActiveInputProfile()),
        p = t.map((t) =>
            (0, r.jsx)(
                l.k5B,
                {
                    id: t,
                    group: 'input-profiles',
                    label: n[t],
                    checked: t === (null != d ? d : c._.CUSTOM),
                    action: () => o.Z.setActiveInputProfile(t, { analyticsLocations: e })
                },
                t
            )
        );
    return (0, r.jsx)(l.sNh, {
        id: 'input-profiles',
        label: u.intl.string(u.t.LM3U3t),
        subtext: n[null != d ? d : c._.CUSTOM],
        children: p
    });
}
