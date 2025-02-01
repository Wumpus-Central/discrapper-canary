n.d(t, { Z: () => g }), n(47120);
var i = n(268146),
    r = n(46973),
    a = n(147913),
    s = n(314897),
    o = n(998502),
    l = n(981631);
function u(e, t, n) {
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
let c = new Set();
function d() {
    for (let e of [i.X4.HasRTCConnection, i.X4.IsSendingVideo, i.X4.IsSendingStream, i.X4.IsReceivingVideo, i.X4.IsReceivingStream]) o.ZP.setCrashInformation(e, 0);
}
function f(e) {
    switch (e) {
        case r.Yn.DEFAULT:
            return i.X4.VideoMediaSessionId;
        case r.Yn.STREAM:
            return i.X4.StreamMediaSessionId;
    }
}
function _(e) {
    var t;
    o.ZP.setCrashInformation(f(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null);
}
function p(e) {
    var t;
    let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
    switch (e.state) {
        case l.hes.RTC_CONNECTED:
            c.add(n), o.ZP.setCrashInformation(i.X4.HasRTCConnection, 1);
            break;
        case l.hes.DISCONNECTED:
            o.ZP.setCrashInformation(f(e.context), null), c.delete(n), 0 === c.size && d();
    }
}
function h(e) {
    let t = e.userId === s.default.getId(),
        n = null != e.streamId,
        a = null;
    switch (e.context) {
        case r.Yn.DEFAULT:
            a = t ? i.X4.IsSendingVideo : i.X4.IsReceivingVideo;
            break;
        case r.Yn.STREAM:
            a = t ? i.X4.IsSendingStream : i.X4.IsReceivingStream;
    }
    o.ZP.setCrashInformation(a, n ? 1 : 0);
}
class m extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                RTC_CONNECTION_STATE: p,
                RTC_CONNECTION_VIDEO: h,
                MEDIA_SESSION_JOINED: _
            });
    }
}
let g = new m();
