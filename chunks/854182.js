t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(477782),
    s = t(367513),
    r = t(313961),
    o = t(985018);
function c(e) {
    let n = (0, i.bG)([r.A], () => r.A.getVoiceParticipantsHidden(e));
    return (0, l.jsx)(a.sL, {
        id: "no-video-hide",
        label: o.intl.string(o.t.BL8ss6),
        checked: !n,
        action: () => s.A.toggleVoiceParticipantsHidden(e, !n),
    });
}
