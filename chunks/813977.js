n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    a = n(827343),
    r = n(969341),
    o = n(723702),
    d = n(652215),
    u = n(985018);
function c(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, l.bG)([r.Ay], () => r.Ay.getMode()),
        c = (t, l) =>
            (0, i.jsx)(
                s.iD,
                {
                    id: t,
                    group: "input-modes",
                    label: l,
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
