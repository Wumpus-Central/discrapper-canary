n.d(t, {
    K: () => i,
    w: () => o
});
var r = n(570140);
function i(e, t, n, i) {
    r.Z.dispatch({
        type: 'VIDEO_STREAM_READY_TIMEOUT',
        videoStreamId: e,
        mediaContext: n,
        userId: t,
        streamKey: i
    });
}
function o(e, t) {
    r.Z.dispatch({
        type: 'CLEAR_VIDEO_STREAM_READY_TIMEOUT',
        mediaContext: e,
        userId: t
    });
}
