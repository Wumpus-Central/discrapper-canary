n.d(t, { Z: () => R }), n(47120), n(724458);
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
    p = n(979651),
    v = n(938475),
    g = n(981631),
    E = n(354459);
let Z = new u.Z(),
    x = new u.Z(),
    S = new Set();
function C(e, t, n) {
    let l = new c.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, v.PH)(l, null != t ? t : g.ME, e.id);
    Z.set(e.id, i);
    let r = {
        type: E.fO.USER,
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
function b(e) {
    let t = Z.delete(e),
        n = x.delete(e),
        l = S.delete(e);
    return t || n || l;
}
function I() {
    var e;
    let t = f.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        l = !1;
    return (
        S.forEach((e) => {
            if (null != p.Z.getVoiceStateForChannel(t, e)) {
                S.delete(e);
                return;
            }
            let i = h.default.getUser(e);
            null != i && ((l = !0), S.delete(e), C(i, n, t));
        }),
        l
    );
}
function _() {
    Z.clear(), x.clear(), S.clear();
}
class N extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.default, m.Z, f.Z), this.syncWith([h.default], I);
    }
    get desyncedVoiceStatesCount() {
        return Z.size();
    }
    getDesyncedUserIds() {
        return Z.keys();
    }
    getDesyncedVoiceStates() {
        return Z.values();
    }
    getDesyncedParticipants() {
        return x.values();
    }
}
(r = 'RTCConnectionDesyncStore'),
    (i = 'displayName') in N
        ? Object.defineProperty(N, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[i] = r);
let R = new N(o.Z, {
    CONNECTION_OPEN: function () {
        _();
    },
    VOICE_CHANNEL_SELECT: _,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== s.Yn.DEFAULT || t !== g.hes.DISCONNECTED) return !1;
        _();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = f.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: l, channelId: i } = t;
                return (i === n && !!b(l)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: l, context: i } = e;
        return (
            i === s.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != p.Z.getVoiceStateForChannel(l, t)) return e;
                let i = h.default.getUser(t);
                return null == i ? (S.add(t), e) : (C(i, n, l), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === s.Yn.DEFAULT && b(t);
    }
});
