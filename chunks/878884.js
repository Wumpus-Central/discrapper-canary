n.d(t, { Z: () => E }), n(47120);
var r,
    l,
    i,
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
    y = n(938475),
    b = n(981631),
    h = n(354459);
let v = new c.Z(),
    O = new c.Z(),
    j = new Set();
function S(e, t, n) {
    let r = new u.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, y.PH)(r, null != t ? t : b.ME, e.id);
    v.set(e.id, l);
    let i = {
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
    O.set(e.id, i);
}
function N(e) {
    let t = v.delete(e),
        n = O.delete(e),
        r = j.delete(e);
    return t || n || r;
}
function P() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        r = !1;
    return (
        j.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
                j.delete(e);
                return;
            }
            let l = m.default.getUser(e);
            null != l && ((r = !0), j.delete(e), S(l, n, t));
        }),
        r
    );
}
function I() {
    v.clear(), O.clear(), j.clear();
}
class x extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, m.default, f.Z, p.Z), this.syncWith([m.default], P);
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
        return O.values();
    }
}
(i = 'RTCConnectionDesyncStore'),
    (l = 'displayName') in x
        ? Object.defineProperty(x, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[l] = i);
let E = new x(s.Z, {
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
                let { userId: r, channelId: l } = t;
                return (l === n && !!N(r)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: r, context: l } = e;
        return (
            l === o.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != g.Z.getVoiceStateForChannel(r, t)) return e;
                let l = m.default.getUser(t);
                return null == l ? (j.add(t), e) : (S(l, n, r), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === o.Yn.DEFAULT && N(t);
    }
});
