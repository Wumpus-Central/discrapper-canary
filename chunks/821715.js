n.d(t, { A: () => s }), n(896048), n(638769);
var l = n(311907),
    r = n(487329),
    i = n(161518);
let a = {
    [r.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [r.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [r.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [r.iy.STREAM_SEND_LOW_FPS]: 2,
    [r.iy.STREAM_VIEW_LOW_FPS]: 2,
    [r.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
};
function s(e) {
    let t = e.id;
    return (0, l.bG)([i.A], () => {
        let e = Array.from(i.A.getActiveErrors().values())
            .filter((e) => "streamKey" in e && e.streamKey === t && null != a[e.type])
            .sort((e, t) => {
                var n, l;
                return (null != (n = a[e.type]) ? n : 0) - (null != (l = a[t.type]) ? l : 0);
            })[0];
        return null == e ? void 0 : e.type;
    }, [t]);
}
