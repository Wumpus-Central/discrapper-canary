(n.d(t, { Z: () => C }), n(388685));
var r,
    i,
    l,
    o = n(442837),
    a = n(46973),
    s = n(570140),
    c = n(642047),
    u = n(189786),
    d = n(5192),
    p = n(592125),
    f = n(19780),
    m = n(594174),
    g = n(979651),
    b = n(938475),
    _ = n(981631),
    v = n(354459);
let h = new c.Z(),
    y = new c.Z(),
    O = new Set();
function j(e, t, n) {
    let r = new u.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, b.PH)(r, null != t ? t : _.ME, e.id);
    h.set(e.id, i);
    let l = {
        type: v.fO.USER,
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
    let t = h.delete(e),
        n = y.delete(e),
        r = O.delete(e);
    return t || n || r;
}
function x() {
    var e;
    let t = f.Z.getChannelId();
    if (null == t) return !1;
    let n = null == (e = p.Z.getChannel(t)) ? void 0 : e.getGuildId(),
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
    (h.clear(), y.clear(), O.clear());
}
class P extends (r = o.ZP.Store) {
    initialize() {
        (this.waitFor(g.Z, m.default, p.Z, f.Z), this.syncWith([m.default], x));
    }
    get desyncedVoiceStatesCount() {
        return h.size();
    }
    getDesyncedUserIds() {
        return h.keys();
    }
    getDesyncedVoiceStates() {
        return h.values();
    }
    getDesyncedParticipants() {
        return y.values();
    }
}
((l = 'RTCConnectionDesyncStore'),
    (i = 'displayName') in P
        ? Object.defineProperty(P, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (P[i] = l));
let C = new P(s.Z, {
    CONNECTION_OPEN: function () {
        I();
    },
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== a.Yn.DEFAULT || t !== _.hes.DISCONNECTED) return !1;
        I();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = f.Z.getChannelId();
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
            i === a.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != g.Z.getVoiceStateForChannel(r, t)) return e;
                let i = m.default.getUser(t);
                return null == i ? (O.add(t), e) : (j(i, n, r), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === a.Yn.DEFAULT && S(t);
    }
});
