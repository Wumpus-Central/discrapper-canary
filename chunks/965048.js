(n.d(t, {
    Z: () => c,
    c: () => l
}),
    n(388685));
var r = n(442837),
    i = n(314897),
    a = n(458725),
    o = n(915525),
    s = n(65154);
function l(e, t) {
    return (0, r.e7)([o.Z, i.default], () => {
        for (let n of i.default.getId() === t ? [...(e === s.Yn.STREAM ? o.Z.getActiveErrorsOfType(a.u.SCREENSHARE_OS_ERROR) : []), ...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT), ...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM)] : [...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), ...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM)]) if (n.mediaContext === e && n.userId === t) return n;
    });
}
function c(e, t) {
    var n;
    return null == (n = l(e, t)) ? void 0 : n.type;
}
