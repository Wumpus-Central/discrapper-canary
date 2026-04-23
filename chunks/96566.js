"use strict";
n.d(t, { Bw: () => c, qT: () => l, xn: () => u });
var r = n(311907),
    i = n(71393),
    s = n(977997),
    a = n(63995),
    o = n(69407);
function l(e) {
    var t;
    let n =
        ((t = e),
        (0, r.bG)(
            [a.A],
            () => null != a.A.getMutableParticipants(t, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM),
            [t],
        ));
    return (0, r.bG)([s.A], () => s.A.hasVideo(e), [e]) || n;
}
function u(e) {
    var t;
    return (
        (t = e),
        null != a.A.getMutableParticipants(t, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM) || s.A.hasVideo(e)
    );
}
function c(e) {
    let t = i.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
