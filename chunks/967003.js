n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    o = n(481060),
    l = n(846027),
    a = n(131951),
    s = n(846071),
    c = n(345655),
    u = n(388032);
function d(e) {
    let { enabledInputProfiles: t } = (0, s.G)({ location: "useInputProfileItems" }),
        n = {
            [c._.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpT),
            [c._.STUDIO]: u.intl.string(u.t.VZPR0R),
            [c._.CUSTOM]: u.intl.string(u.t["N/PQjv"]),
        },
        d = (0, i.e7)([a.Z], () => a.Z.getActiveInputProfile()),
        p = t.map((t) =>
            (0, r.jsx)(
                o.k5B,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (null != d ? d : c._.CUSTOM),
                    action: () => l.Z.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, r.jsx)(o.sNh, {
        id: "input-profiles",
        label: u.intl.string(u.t.LM3U3k),
        subtext: n[null != d ? d : c._.CUSTOM],
        children: p,
    });
}
