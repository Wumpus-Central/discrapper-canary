"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(367513),
    a = n(313961),
    o = n(985018);
function c(e) {
    let t = (0, s.bG)([a.A], () => a.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(l.sLh, {
        id: "no-video-hide",
        label: o.intl.string(o.t.BL8ss6),
        checked: !t,
        action: () => r.A.toggleVoiceParticipantsHidden(e, !t),
    });
}
