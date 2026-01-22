n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(195043),
    l = n(430452),
    c = n(531525),
    u = n(985018);
function d() {
    let e = (0, i.bG)([l.A], () => l.A.getQoS());
    return (0, r.jsx)(o.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_QOS,
        children: (0, r.jsx)(a.dOG, {
            label: u.intl.string(u.t["3CqDxp"]),
            description: u.intl.string(u.t.I1Eoqq),
            checked: e,
            onChange: (e) => s.A.setQoS(e),
        }),
    });
}
