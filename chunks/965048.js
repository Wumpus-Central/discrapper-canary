n.d(t, {
    Z: () => c,
    c: () => l,
}),
    n(388685);
var r = n(442837),
    i = n(314897),
    o = n(458725),
    a = n(915525),
    s = n(65154);
function l(e, t) {
    return (0, r.e7)([a.Z, i.default], () => {
        for (let n of i.default.getId() === t
            ? [
                  ...(e === s.Yn.STREAM ? a.Z.getActiveErrorsOfType(o.u.SCREENSHARE_OS_ERROR) : []),
                  ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_SENDER_READY_TIMEOUT),
                  ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM),
              ]
            : [
                  ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT),
                  ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM),
              ])
            if (n.mediaContext === e && n.userId === t) return n;
    });
}
function c(e, t) {
    var n;
    return null == (n = l(e, t)) ? void 0 : n.type;
}
