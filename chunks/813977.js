n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(827343),
    r = n(430452),
    o = n(723702),
    c = n(652215),
    d = n(985018);
function u(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, l.bG)([r.A], () => r.A.getMode()),
        u = (t, l) =>
            (0, i.jsx)(
                a.iDA,
                {
                    id: t,
                    group: "input-modes",
                    label: l,
                    checked: n === t,
                    action: () => s.A.setMode(t, void 0, void 0, { analyticsLocations: e }),
                },
                t,
            );
    return [
        u(c.TBI.VOICE_ACTIVITY, d.intl.string(d.t.cHCEOJ)),
        u(c.TBI.PUSH_TO_TALK, t ? d.intl.string(d.t["1AINrB"]) : d.intl.string(d.t.Q8gkVL)),
    ];
}
