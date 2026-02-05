"use strict";
n.d(t, { Bw: () => _, qT: () => l, xn: () => c });
var r = n(311907),
    i = n(71393),
    a = n(977997),
    s = n(63995),
    o = n(69407);
function l(e) {
    let t = u(e);
    return (0, r.bG)([a.A], () => a.A.hasVideo(e), [e]) || t;
}
function u(e) {
    return (0, r.bG)(
        [s.A],
        () => null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM),
        [e],
    );
}
function c(e) {
    return d(e) || a.A.hasVideo(e);
}
function d(e) {
    return null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM);
}
function _(e) {
    let t = i.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
