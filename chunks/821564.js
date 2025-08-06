n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(846027),
    s = n(131951),
    l = n(358085),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = !l.isPlatformEmbedded,
        n = (0, i.e7)([s.Z], () => s.Z.getMode()),
        d = (t, i) =>
            (0, r.jsx)(
                o.k5B,
                {
                    id: t,
                    group: 'input-modes',
                    label: i,
                    checked: n === t,
                    action: () => a.Z.setMode(t, void 0, void 0, { analyticsLocations: e })
                },
                t
            );
    return [d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOD)), d(c.pM4.PUSH_TO_TALK, t ? u.intl.string(u.t['1AINrK']) : u.intl.string(u.t.Q8gkVF))];
}
