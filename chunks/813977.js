n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(827343),
    s = n(430452),
    o = n(723702),
    c = n(652215),
    u = n(985018);
function d(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, r.bG)([s.A], () => s.A.getMode()),
        d = (t, r) =>
            (0, l.jsx)(
                i.iDA,
                {
                    id: t,
                    group: "input-modes",
                    label: r,
                    checked: n === t,
                    action: () => a.A.setMode(t, void 0, void 0, { analyticsLocations: e }),
                },
                t,
            );
    return [
        d(c.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)),
        d(c.TBI.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL)),
    ];
}
