var s = e(477900);
e(582128);
var c = e(855986),
    d = e(477782),
    n = e(367513),
    a = e(628983),
    r = e(792996);
e.d(
    t,
    {},
    {
        A: function (i) {
            let t = (0, c.bG)([a.A], () => a.A.getVoiceParticipantsHidden(i));
            return (0, s.jsx)(d.sL, {
                id: "no-video-hide",
                label: r.intl.string(r.t.BL8ss6),
                checked: !t,
                action: () => n.A.toggleVoiceParticipantsHidden(i, !t),
            });
        },
    },
);
