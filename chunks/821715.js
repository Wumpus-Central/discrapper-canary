"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(487329),
    a = n(161518);
let s = {
    [r.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [r.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [r.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [r.iy.STREAM_SEND_LOW_FPS]: 2,
    [r.iy.STREAM_VIEW_LOW_FPS]: 2,
    [r.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
};
function l(e) {
    let t = e.id;
    return (0, i.bG)([a.A], () => {
        let e = Array.from(a.A.getActiveErrors().values())
            .filter((e) => "streamKey" in e && e.streamKey === t && null != s[e.type])
            .sort((e, t) => (s[e.type] ?? 0) - (s[t.type] ?? 0))[0];
        return e?.type;
    }, [t]);
}
