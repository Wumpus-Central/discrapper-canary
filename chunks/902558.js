n.d(t, { Z: () => g }), n(47120);
var r = n(268146),
    i = n(46973),
    o = n(147913),
    a = n(314897),
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
    let t = e.userId === a.default.getId(),
        n = null != e.streamId,
        o = null;
    switch (e.context) {
        case i.Yn.DEFAULT:
            o = t ? r.X4.IsSendingVideo : r.X4.IsReceivingVideo;
            break;
        case i.Yn.STREAM:
            o = t ? r.X4.IsSendingStream : r.X4.IsReceivingStream;
    }
    s.ZP.setCrashInformation(o, +!!n);
}
class m extends o.Z {
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
