n.d(t, { Z: () => A }), n(47120), n(724458);
var l,
    i,
    r,
    a = n(442837),
    s = n(46973),
    o = n(570140),
    u = n(642047),
    c = n(189786),
    d = n(5192),
    m = n(592125),
    h = n(19780),
    g = n(594174),
    f = n(979651),
    p = n(938475),
    v = n(981631),
    S = n(354459);
let I = new u.Z(),
    x = new u.Z(),
    T = new Set();
function Z(e, t, n) {
    let l = new c.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, p.PH)(l, null != t ? t : v.ME, e.id);
    I.set(e.id, i);
    let r = {
        type: S.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: l,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    x.set(e.id, r);
}
function y(e) {
    let t = I.delete(e),
        n = x.delete(e),
        l = T.delete(e);
    return t || n || l;
}
function N() {
    var e;
    let t = h.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        l = !1;
    return (
        T.forEach((e) => {
            if (null != f.Z.getVoiceStateForChannel(t, e)) {
                T.delete(e);
                return;
            }
            let i = g.default.getUser(e);
            null != i && ((l = !0), T.delete(e), Z(i, n, t));
        }),
        l
    );
}
function E() {
    I.clear(), x.clear(), T.clear();
}
class C extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.default, m.Z, h.Z), this.syncWith([g.default], N);
    }
    get desyncedVoiceStatesCount() {
        return I.size();
    }
    getDesyncedUserIds() {
        return I.keys();
    }
    getDesyncedVoiceStates() {
        return I.values();
    }
    getDesyncedParticipants() {
        return x.values();
    }
}
(r = 'RTCConnectionDesyncStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = r);
let A = new C(o.Z, {
    CONNECTION_OPEN: function () {
        E();
    },
    VOICE_CHANNEL_SELECT: E,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== s.Yn.DEFAULT || t !== v.hes.DISCONNECTED) return !1;
        E();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = h.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: l, channelId: i } = t;
                return (i === n && !!y(l)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: l, context: i } = e;
        return (
            i === s.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != f.Z.getVoiceStateForChannel(l, t)) return e;
                let i = g.default.getUser(t);
                return null == i ? (T.add(t), e) : (Z(i, n, l), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === s.Yn.DEFAULT && y(t);
    }
});
