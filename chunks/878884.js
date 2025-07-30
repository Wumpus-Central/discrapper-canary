(n.d(t, { Z: () => C }), n(388685));
var r,
    i,
    l,
    a = n(442837),
    o = n(46973),
    s = n(570140),
    c = n(642047),
    u = n(541638),
    d = n(189786),
    f = n(5192),
    p = n(592125),
    m = n(19780),
    g = n(594174),
    h = n(979651),
    b = n(938475),
    v = n(981631),
    _ = n(354459);
let y = new c.Z(),
    O = new c.Z(),
    S = new Set();
function I(e, t, n) {
    let r = new d.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, b.PH)(r, null != t ? t : v.ME, e.id);
    y.set(e.id, i);
    let l = {
        type: _.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: f.ZP.getName(t, n, e),
        userAvatarDecoration: (0, u.o)(e, t),
        localVideoDisabled: !1
    };
    O.set(e.id, l);
}
function j(e) {
    let t = y.delete(e),
        n = O.delete(e),
        r = S.delete(e);
    return t || n || r;
}
function x() {
    var e;
    let t = m.Z.getChannelId();
    if (null == t) return !1;
    let n = null == (e = p.Z.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return (
        S.forEach((e) => {
            if (null != h.Z.getVoiceStateForChannel(t, e)) return void S.delete(e);
            let i = g.default.getUser(e);
            null != i && ((r = !0), S.delete(e), I(i, n, t));
        }),
        r
    );
}
function E() {
    (y.clear(), O.clear(), S.clear());
}
class P extends (r = a.ZP.Store) {
    initialize() {
        (this.waitFor(h.Z, g.default, p.Z, m.Z), this.syncWith([g.default], x));
    }
    get desyncedVoiceStatesCount() {
        return y.size();
    }
    getDesyncedUserIds() {
        return y.keys();
    }
    getDesyncedVoiceStates() {
        return y.values();
    }
    getDesyncedParticipants() {
        return O.values();
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
        E();
    },
    VOICE_CHANNEL_SELECT: E,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== o.Yn.DEFAULT || t !== v.hes.DISCONNECTED) return !1;
        E();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return (i === n && !!j(r)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: r, context: i } = e;
        return (
            i === o.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != h.Z.getVoiceStateForChannel(r, t)) return e;
                let i = g.default.getUser(t);
                return null == i ? (S.add(t), e) : (I(i, n, r), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === o.Yn.DEFAULT && j(t);
    }
});
