var i = r(47120);
var a = r(268146),
    o = r(46973),
    s = r(147913),
    l = r(314897),
    u = r(998502),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Set();
function p() {
    for (let e of [a.X4.HasRTCConnection, a.X4.IsSendingVideo, a.X4.IsSendingStream, a.X4.IsReceivingVideo, a.X4.IsReceivingStream]) u.ZP.setCrashInformation(e, 0);
}
function h(e) {
    switch (e) {
        case o.Yn.DEFAULT:
            return a.X4.VideoMediaSessionId;
        case o.Yn.STREAM:
            return a.X4.StreamMediaSessionId;
    }
}
function _(e) {
    var n;
    u.ZP.setCrashInformation(h(e.context), null !== (n = e.mediaSessionId) && void 0 !== n ? n : null);
}
function m(e) {
    var n;
    let r = (null !== (n = e.channelId) && void 0 !== n ? n : 'unknown') + e.context;
    switch (e.state) {
        case c.hes.RTC_CONNECTED:
            f.add(r), u.ZP.setCrashInformation(a.X4.HasRTCConnection, 1);
            break;
        case c.hes.DISCONNECTED:
            u.ZP.setCrashInformation(h(e.context), null), f.delete(r), 0 === f.size && p();
    }
}
function g(e) {
    let n = e.userId === l.default.getId(),
        r = null != e.streamId,
        i = null;
    switch (e.context) {
        case o.Yn.DEFAULT:
            i = n ? a.X4.IsSendingVideo : a.X4.IsReceivingVideo;
            break;
        case o.Yn.STREAM:
            i = n ? a.X4.IsSendingStream : a.X4.IsReceivingStream;
    }
    u.ZP.setCrashInformation(i, r ? 1 : 0);
}
class E extends s.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                RTC_CONNECTION_STATE: m,
                RTC_CONNECTION_VIDEO: g,
                MEDIA_SESSION_JOINED: _
            });
    }
}
n.Z = new E();
