(n.d(t, { Z: () => E }), n(388685));
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
    _ = n(979651),
    v = n(938475),
    h = n(981631),
    b = n(354459);
let y = new c.Z(),
    O = new c.Z(),
    j = new Set();
function S(e, t, n) {
    let r = new d.Z({
            userId: e.id,
            channelId: n
        }),
        i = (0, v.PH)(r, null != t ? t : h.ME, e.id);
    y.set(e.id, i);
    let l = {
        type: b.fO.USER,
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
function x(e) {
    let t = y.delete(e),
        n = O.delete(e),
        r = j.delete(e);
    return t || n || r;
}
function I() {
    var e;
    let t = m.Z.getChannelId();
    if (null == t) return !1;
    let n = null == (e = p.Z.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return (
        j.forEach((e) => {
            if (null != _.Z.getVoiceStateForChannel(t, e)) return void j.delete(e);
            let i = g.default.getUser(e);
            null != i && ((r = !0), j.delete(e), S(i, n, t));
        }),
        r
    );
}
function P() {
    (y.clear(), O.clear(), j.clear());
}
class C extends (r = a.ZP.Store) {
    initialize() {
        (this.waitFor(_.Z, g.default, p.Z, m.Z), this.syncWith([g.default], I));
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
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l));
let E = new C(s.Z, {
    CONNECTION_OPEN: function () {
        P();
    },
    VOICE_CHANNEL_SELECT: P,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t, context: n } = e;
        if (n !== o.Yn.DEFAULT || t !== h.hes.DISCONNECTED) return !1;
        P();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = m.Z.getChannelId();
        return (
            null != n &&
            t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return (i === n && !!x(r)) || e;
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let { userIds: t, guildId: n, channelId: r, context: i } = e;
        return (
            i === o.Yn.DEFAULT &&
            t.reduce((e, t) => {
                if (null != _.Z.getVoiceStateForChannel(r, t)) return e;
                let i = g.default.getUser(t);
                return null == i ? (j.add(t), e) : (S(i, n, r), !0);
            }, !1)
        );
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let { userId: t, context: n } = e;
        return n === o.Yn.DEFAULT && x(t);
    }
});
