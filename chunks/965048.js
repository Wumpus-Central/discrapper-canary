n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(314897),
    a = n(458725),
    o = n(915525);
function s(e, t) {
    return (0, r.e7)([o.Z, i.default], () => {
        for (let n of i.default.getId() === t ? [...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT), ...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM)] : [...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), ...o.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM)]) if (n.mediaContext === e && n.userId === t) return n.type;
    });
}
