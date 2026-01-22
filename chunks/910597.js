n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(195043),
    l = n(430452),
    c = n(531525),
    u = n(985018);

function d() {
    let {
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n,
    } = (0, i.cf)([l.A], () => ({
        attenuation: l.A.getAttenuation(),
        attenuateWhileSpeakingSelf: l.A.getAttenuateWhileSpeakingSelf(),
        attenuateWhileSpeakingOthers: l.A.getAttenuateWhileSpeakingOthers(),
    }));
    return (0, r.jsxs)(o.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: [
            (0, r.jsx)(a.Apm, {
                label: u.intl.string(u.t.oSdBvW),
                description: u.intl.string(u.t["0A/8Rt"]),
                initialValue: e,
                onValueChange: (e) => {
                    s.A.setAttenuation(e, t, n);
                },
            }),
            (0, r.jsx)(a.dOG, {
                label: u.intl.string(u.t["9dHxRY"]),
                checked: t,
                onChange: (t) => s.A.setAttenuation(e, t, n),
            }),
            (0, r.jsx)(a.dOG, {
                label: u.intl.string(u.t.SMt0Gr),
                checked: n,
                onChange: (n) => s.A.setAttenuation(e, t, n),
            }),
        ],
    });
}
