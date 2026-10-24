a.d(t, { A: () => n });
var s = a(17928),
    l = a(487329),
    i = a(161518);
let r = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
};
function n(e) {
    let t = e.id;
    return (0, s.bG)(
        [i.A],
        () => {
            let e = Array.from(i.A.getActiveErrors().values())
                .filter((e) => "streamKey" in e && e.streamKey === t && null != r[e.type])
                .sort((e, t) => (r[e.type] ?? 0) - (r[t.type] ?? 0))[0];
            return e?.type;
        },
        [t],
    );
}
