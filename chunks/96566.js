"use strict";
n.d(t, { Bw: () => c, qT: () => o, xn: () => d });
var i = n(17928),
    r = n(71393),
    a = n(977997),
    s = n(63995),
    l = n(518769);
function o(e) {
    var t;
    let n =
        ((t = e),
        (0, i.bG)(
            [s.A],
            () => null != s.A.getMutableParticipants(t, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM),
            [t],
        ));
    return (0, i.bG)([a.A], () => a.A.hasVideo(e), [e]) || n;
}
function d(e) {
    var t;
    return (
        (t = e),
        null != s.A.getMutableParticipants(t, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM) || a.A.hasVideo(e)
    );
}
function c(e) {
    let t = r.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
