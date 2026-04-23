n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(367513),
    o = n(313961),
    d = n(985018);
function u(e) {
    let t = (0, l.bG)([o.A], () => o.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(a.sL, {
        id: "no-video-hide",
        label: d.intl.string(d.t.BL8ss6),
        checked: !t,
        action: () => r.A.toggleVoiceParticipantsHidden(e, !t),
    });
}
