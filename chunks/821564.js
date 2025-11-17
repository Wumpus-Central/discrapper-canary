n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    o = n(481060),
    l = n(846027),
    a = n(131951),
    s = n(358085),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = !s.isPlatformEmbedded,
        n = (0, i.e7)([a.Z], () => a.Z.getMode()),
        d = (t, i) =>
            (0, r.jsx)(
                o.k5B,
                {
                    id: t,
                    group: "input-modes",
                    label: i,
                    checked: n === t,
                    action: () => l.Z.setMode(t, void 0, void 0, { analyticsLocations: e }),
                },
                t,
            );
    return [
        d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)),
        d(c.pM4.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL)),
    ];
}
