n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(131951),
    o = n(358085),
    u = n(981631),
    c = n(388032);
function d(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, i.e7)([s.Z], () => s.Z.getMode()),
        d = (t, i) =>
            (0, l.jsx)(
                r.k5B,
                {
                    id: t,
                    group: 'input-modes',
                    label: i,
                    checked: n === t,
                    action: () => a.Z.setMode(t, void 0, void 0, { analyticsLocations: e })
                },
                t
            );
    return [d(u.pM4.VOICE_ACTIVITY, c.intl.string(c.t.cHCEOD)), d(u.pM4.PUSH_TO_TALK, t ? c.intl.string(c.t['1AINrK']) : c.intl.string(c.t.Q8gkVF))];
}
