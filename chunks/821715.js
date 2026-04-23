n.d(t, { A: () => r });
var i = n(311907),
    l = n(487329),
    a = n(161518);
let s = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
};
function r(e) {
    let t = e.id;
    return (0, i.bG)([a.A], () => {
        let e = Array.from(a.A.getActiveErrors().values())
            .filter((e) => "streamKey" in e && e.streamKey === t && null != s[e.type])
            .sort((e, t) => (s[e.type] ?? 0) - (s[t.type] ?? 0))[0];
        return e?.type;
    }, [t]);
}
