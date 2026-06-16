e.d(t, { A: () => o });
var s = e(627968);
e(64700);
var c = e(17928),
    d = e(477782),
    n = e(367513),
    a = e(313961),
    r = e(375708);
function o(i) {
    let t = (0, c.bG)([a.A], () => a.A.getVoiceParticipantsHidden(i));
    return (0, s.jsx)(d.sL, {
        id: "no-video-hide",
        label: r.intl.string(r.t.BL8ss6),
        checked: !t,
        action: () => n.A.toggleVoiceParticipantsHidden(i, !t),
    });
}
