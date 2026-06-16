a.d(t, { A: () => n });
var s = a(17928),
    l = a(487329),
    r = a(161518);
let i = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
};
function n(e) {
    let t = e.id;
    return (0, s.bG)([r.A], () => {
        let e = Array.from(r.A.getActiveErrors().values())
            .filter((e) => "streamKey" in e && e.streamKey === t && null != i[e.type])
            .sort((e, t) => (i[e.type] ?? 0) - (i[t.type] ?? 0))[0];
        return e?.type;
    }, [t]);
}
