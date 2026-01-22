n.d(t, {
    Bw: () => f,
    qT: () => l,
    xn: () => u,
});
var r = n(311907),
    i = n(71393),
    a = n(977997),
    s = n(63995),
    o = n(69407);
function l(e) {
    let t = c(e);
    return (0, r.bG)([a.A], () => a.A.hasVideo(e), [e]) || t;
}
function c(e) {
    return (0, r.bG)(
        [s.A],
        () => null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM),
        [e],
    );
}
function u(e) {
    return d(e) || a.A.hasVideo(e);
}
function d(e) {
    return null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find((e) => e.type === o.wY.STREAM);
}
function f(e) {
    var t;
    let n = i.A.getGuild(e);
    return null != n && (null != (t = null == n ? void 0 : n.maxStageVideoChannelUsers) ? t : 0) > 0;
}
