n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(477782),
    a = n(827343),
    r = n(430452),
    o = n(723702),
    d = n(652215),
    u = n(985018);
function c(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, s.bG)([r.Ay], () => r.Ay.getMode()),
        c = (t, s) =>
            (0, i.jsx)(
                l.iD,
                {
                    id: t,
                    group: "input-modes",
                    label: s,
                    checked: n === t,
                    action: () => a.A.setMode(t, void 0, void 0, { analyticsLocations: e }),
                },
                t,
            );
    return [
        c(d.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)),
        c(d.TBI.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL)),
    ];
}
