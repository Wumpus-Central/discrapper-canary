"use strict";
n.d(t, { Bw: () => u, Kl: () => d, qT: () => o, xn: () => c });
var i = n(17928),
    r = n(71393),
    a = n(977997),
    s = n(63995),
    l = n(518769);
function o(e) {
    let t = d(e);
    return (0, i.bG)([a.A], () => a.A.hasVideo(e), [e]) || t;
}
function d(e) {
    return (0, i.bG)(
        [s.A],
        () => null != s.A.getMutableParticipants(e, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM),
        [e],
    );
}
function c(e) {
    var t;
    return (
        (t = e),
        null != s.A.getMutableParticipants(t, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM) || a.A.hasVideo(e)
    );
}
function u(e) {
    let t = r.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
