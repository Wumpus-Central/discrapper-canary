n.d(t, { Z: () => C }), n(47120), n(724458);
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
    f = n(19780),
    h = n(594174),
    g = n(979651),
    p = n(938475),
    v = n(981631),
    S = n(354459);
let I = new u.Z(),
    x = new u.Z(),
    E = new Set();
function T(e, t, n) {
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
function Z(e) {
    let t = I.delete(e),
        n = x.delete(e),
        l = E.delete(e);
    return t || n || l;
}
function N() {
    var e;
    let t = f.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        l = !1;
    return (
        E.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
                E.delete(e);
                return;
            }
            let i = h.default.getUser(e);
            null != i && ((l = !0), E.delete(e), T(i, n, t));
        }),
        l
    );
}
function y() {
    I.clear(), x.clear(), E.clear();
}
class A extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, h.default, m.Z, f.Z), this.syncWith([h.default], N);
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
    (i = 'displayName') in A
        ? Object.defineProperty(A, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[i] = r);
let C = new A(o.Z, {
    CONNECTION_OPEN: function () {
        y();
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== s.Yn.DEFAULT || t !== v.hes.DISCONNECTED) return !1;
        y();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = f.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: l, channelId: i } = t;
                return (i === n && !!Z(l)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: l, context: i } = e;
        return (
            i === s.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != g.Z.getVoiceStateForChannel(l, t)) return e;
                let i = h.default.getUser(t);
                return null == i ? (E.add(t), e) : (T(i, n, l), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === s.Yn.DEFAULT && Z(t);
    }
});
