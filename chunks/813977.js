d.d(i, { A: () => u });
var e = d(627968);
d(64700);
var s = d(17928),
    n = d(477782),
    r = d(827343),
    o = d(235058),
    c = d(723702),
    a = d(652215),
    p = d(375708);
function u(t) {
    let i = !c.isPlatformEmbedded,
        d = (0, s.bG)([o.Ay], () => o.Ay.getMode()),
        u = (i, s) =>
            (0, e.jsx)(
                n.iD,
                {
                    id: i,
                    group: "input-modes",
                    label: s,
                    checked: d === i,
                    action: () => r.A.setMode(i, void 0, void 0, { analyticsLocations: t }),
                },
                i,
            );
    return [
        u(a.TBI.VOICE_ACTIVITY, p.intl.string(p.t.cHCEOJ)),
        u(a.TBI.PUSH_TO_TALK, i ? p.intl.string(p.t["1AINrB"]) : p.intl.string(p.t.Q8gkVL)),
    ];
}
