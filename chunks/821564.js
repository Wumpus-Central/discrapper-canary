n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(131951),
    s = n(358085),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = !s.isPlatformEmbedded,
        n = (0, l.e7)([a.Z], () => a.Z.getMode()),
        d = (t, l) =>
            (0, r.jsx)(
                i.k5B,
                {
                    id: t,
                    group: 'input-modes',
                    label: l,
                    checked: n === t,
                    action: () => o.Z.setMode(t, void 0, void 0, { analyticsLocations: e })
                },
                t
            );
    return [d(c.pM4.VOICE_ACTIVITY, u.NW.string(u.t.cHCEOD)), d(c.pM4.PUSH_TO_TALK, t ? u.NW.string(u.t['1AINrK']) : u.NW.string(u.t.Q8gkVF))];
}
