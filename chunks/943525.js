n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(506774),
    i = n(73153),
    a = n(272355),
    s = n(961350),
    o = n(309010),
    l = n(525002),
    c = n(312006),
    u = n(516607);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends a.A {
    _initialize() {
        i.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            d(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    if (null == e.channelId || e.userId !== s.default.getId() || (this.terminate(), r.w.get(u.zh, !1)))
                        return;
                    let t = o.A.getVoiceChannelId();
                    null == t ||
                        (e.channelId === t && c.Ay.isAudienceMember(e.userId, t) && (r.w.set(u.zh, !0), l.H(t)));
                });
            });
    }
}
let p = new f();
