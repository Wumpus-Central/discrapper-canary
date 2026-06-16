"use strict";
n.d(t, { Bw: () => c, qT: () => l, xn: () => u });
var i = n(17928),
    r = n(71393),
    s = n(977997),
    a = n(63995),
    o = n(518769);
function l(e) {
    var t;
    let n =
        ((t = e),
        (0, i.bG)(
            [a.A],
            () => null != a.A.getMutableParticipants(t, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM),
            [t],
        ));
    return (0, i.bG)([s.A], () => s.A.hasVideo(e), [e]) || n;
}
function u(e) {
    var t;
    return (
        (t = e),
        null != a.A.getMutableParticipants(t, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM) || s.A.hasVideo(e)
    );
}
function c(e) {
    let t = r.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
