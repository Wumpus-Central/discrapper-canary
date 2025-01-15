n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(846027),
    s = n(131951),
    o = n(358085),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, l.e7)([s.Z], () => s.Z.getMode()),
        d = (t, l) =>
            (0, i.jsx)(
                a.MenuRadioItem,
                {
                    id: t,
                    group: 'input-modes',
                    label: l,
                    checked: n === t,
                    action: () => r.Z.setMode(t, void 0, void 0, { analyticsLocations: e })
                },
                t
            );
    return [d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOD)), d(c.pM4.PUSH_TO_TALK, t ? u.intl.string(u.t['1AINrK']) : u.intl.string(u.t.Q8gkVF))];
}
