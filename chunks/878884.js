n.d(t, { Z: () => N }), n(47120), n(724458);
var i,
    l,
    a,
    r = n(442837),
    s = n(46973),
    o = n(570140),
    c = n(642047),
    u = n(189786),
    d = n(5192),
    m = n(592125),
    f = n(19780),
    p = n(594174),
    h = n(979651),
    g = n(938475),
    v = n(981631),
    _ = n(354459);
let S = new c.Z(),
    I = new c.Z(),
    x = new Set();
function E(e, t, n) {
    let i = new u.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, g.PH)(i, null != t ? t : v.ME, e.id);
    S.set(e.id, l);
    let a = {
        type: _.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    I.set(e.id, a);
}
function C(e) {
    let t = S.delete(e),
        n = I.delete(e),
        i = x.delete(e);
    return t || n || i;
}
function Z() {
    var e;
    let t = f.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        x.forEach((e) => {
            if (null != h.Z.getVoiceStateForChannel(t, e)) {
                x.delete(e);
                return;
            }
            let l = p.default.getUser(e);
            null != l && ((i = !0), x.delete(e), E(l, n, t));
        }),
        i
    );
}
function y() {
    S.clear(), I.clear(), x.clear();
}
class b extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.default, m.Z, f.Z), this.syncWith([p.default], Z);
    }
    get desyncedVoiceStatesCount() {
        return S.size();
    }
    getDesyncedUserIds() {
        return S.keys();
    }
    getDesyncedVoiceStates() {
        return S.values();
    }
    getDesyncedParticipants() {
        return I.values();
    }
}
(a = 'RTCConnectionDesyncStore'),
    (l = 'displayName') in b
        ? Object.defineProperty(b, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[l] = a);
let N = new b(o.Z, {
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
                let { userId: i, channelId: l } = t;
                return (l === n && !!C(i)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: i, context: l } = e;
        return (
            l === s.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != h.Z.getVoiceStateForChannel(i, t)) return e;
                let l = p.default.getUser(t);
                return null == l ? (x.add(t), e) : (E(l, n, i), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === s.Yn.DEFAULT && C(t);
    }
});
