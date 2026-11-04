var i = n(855986),
    r = n(71393),
    a = n(977997),
    s = n(63995),
    l = n(597886);
function o(e) {
    return (0, i.bG)(
        [s.A],
        () => null != s.A.getMutableParticipants(e, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM),
        [e],
    );
}
n.d(
    t,
    {},
    {
        Bw: function (e) {
            let t = r.A.getGuild(e);
            return null != t && (t?.maxStageVideoChannelUsers ?? 0) > 0;
        },
        Kl: o,
        qT: function (e) {
            let t = o(e);
            return (0, i.bG)([a.A], () => a.A.hasVideo(e), [e]) || t;
        },
        xn: function (e) {
            var t;
            return (
                (t = e),
                null != s.A.getMutableParticipants(t, l.ip.SPEAKER).find((e) => e.type === l.wY.STREAM) ||
                    a.A.hasVideo(e)
            );
        },
    },
);
