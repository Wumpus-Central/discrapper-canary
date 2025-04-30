n.d(t, { Z: () => g }), n(388685);
var r = n(268146),
    i = n(46973),
    a = n(147913),
    o = n(314897),
    s = n(998502),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new Set();
function d() {
    for (let e of [r.X4.HasRTCConnection, r.X4.IsSendingVideo, r.X4.IsSendingStream, r.X4.IsReceivingVideo, r.X4.IsReceivingStream]) s.ZP.setCrashInformation(e, 0);
}
function f(e) {
    switch (e) {
        case i.Yn.DEFAULT:
            return r.X4.VideoMediaSessionId;
        case i.Yn.STREAM:
            return r.X4.StreamMediaSessionId;
    }
}
function _(e) {
    var t;
    s.ZP.setCrashInformation(f(e.context), null != (t = e.mediaSessionId) ? t : null);
}
function p(e) {
    var t;
    let n = (null != (t = e.channelId) ? t : 'unknown') + e.context;
    switch (e.state) {
        case l.hes.RTC_CONNECTED:
            u.add(n), s.ZP.setCrashInformation(r.X4.HasRTCConnection, 1);
            break;
        case l.hes.DISCONNECTED:
            s.ZP.setCrashInformation(f(e.context), null), u.delete(n), 0 === u.size && d();
    }
}
function h(e) {
    let t = e.userId === o.default.getId(),
        n = null != e.streamId,
        a = null;
    switch (e.context) {
        case i.Yn.DEFAULT:
            a = t ? r.X4.IsSendingVideo : r.X4.IsReceivingVideo;
            break;
        case i.Yn.STREAM:
            a = t ? r.X4.IsSendingStream : r.X4.IsReceivingStream;
    }
    s.ZP.setCrashInformation(a, +!!n);
}
class m extends a.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                RTC_CONNECTION_STATE: p,
                RTC_CONNECTION_VIDEO: h,
                MEDIA_SESSION_JOINED: _
            });
    }
}
let g = new m();
