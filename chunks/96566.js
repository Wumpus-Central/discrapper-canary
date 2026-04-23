n.d(t, { Bw: () => E, qT: () => l, xn: () => o });
var i = n(17928),
    r = n(71393),
    a = n(977997),
    s = n(63995),
    _ = n(69407);
function l(e) {
    var t;
    let n =
        ((t = e),
        (0, i.bG)(
            [s.A],
            () => null != s.A.getMutableParticipants(t, _.ip.SPEAKER).find((e) => e.type === _.wY.STREAM),
            [t],
        ));
    return (0, i.bG)([a.A], () => a.A.hasVideo(e), [e]) || n;
}
function o(e) {
    var t;
    return (
        (t = e),
        null != s.A.getMutableParticipants(t, _.ip.SPEAKER).find((e) => e.type === _.wY.STREAM) || a.A.hasVideo(e)
    );
}
function E(e) {
    let t = r.A.getGuild(e);
    return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
}
