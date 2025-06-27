n.d(t, { Z: () => P }), n(388685);
var r,
    i,
    l,
    a = n(442837),
    o = n(46973),
    s = n(570140),
    c = n(642047),
    u = n(189786),
    d = n(5192),
    f = n(592125),
    p = n(19780),
    m = n(594174),
    g = n(979651),
    _ = n(938475),
    b = n(981631),
    h = n(354459);
let v = new c.Z(),
    y = new c.Z(),
    O = new Set();
function j(e, t, n) {
    let r = new u.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, _.PH)(r, null != t ? t : b.ME, e.id);
    v.set(e.id, i);
    let l = {
        type: h.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    y.set(e.id, l);
}
function S(e) {
    let t = v.delete(e),
        n = y.delete(e),
        r = O.delete(e);
    return t || n || r;
}
function x() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null == (e = f.Z.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return (
        O.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) return void O.delete(e);
            let i = m.default.getUser(e);
            null != i && ((r = !0), O.delete(e), j(i, n, t));
        }),
        r
    );
}
function I() {
    v.clear(), y.clear(), O.clear();
}
class C extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, m.default, f.Z, p.Z), this.syncWith([m.default], x);
    }
    get desyncedVoiceStatesCount() {
        return v.size();
    }
    getDesyncedUserIds() {
        return v.keys();
    }
    getDesyncedVoiceStates() {
        return v.values();
    }
    getDesyncedParticipants() {
        return y.values();
    }
}
(l = 'RTCConnectionDesyncStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l);
let P = new C(s.Z, {
    CONNECTION_OPEN: function () {
        I();
    },
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== o.Yn.DEFAULT || t !== b.hes.DISCONNECTED) return !1;
        I();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = p.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return (i === n && !!S(r)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: r, context: i } = e;
        return (
            i === o.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != g.Z.getVoiceStateForChannel(r, t)) return e;
                let i = m.default.getUser(t);
                return null == i ? (O.add(t), e) : (j(i, n, r), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === o.Yn.DEFAULT && S(t);
    }
});
