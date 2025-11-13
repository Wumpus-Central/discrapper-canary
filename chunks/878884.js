n.d(t, { Z: () => w }), n(388685);
var r,
    i = n(442837),
    a = n(46973),
    o = n(570140),
    s = n(642047),
    l = n(541638),
    c = n(189786),
    u = n(5192),
    d = n(592125),
    f = n(19780),
    _ = n(594174),
    p = n(979651),
    h = n(938475),
    m = n(981631),
    g = n(354459);
function E(e, t, n) {
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
let b = new s.Z(),
    y = new s.Z(),
    O = new Set();
function v(e, t, n) {
    let r = new c.Z({
            userId: e.id,
            channelId: n,
        }),
        i = (0, h.PH)(r, null != t ? t : m.ME, e.id);
    b.set(e.id, i);
    let a = {
        type: g.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        latched: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: u.ZP.getName(t, n, e),
        userAvatarDecoration: (0, l.o)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1,
    };
    y.set(e.id, a);
}
function I(e) {
    let t = b.delete(e),
        n = y.delete(e),
        r = O.delete(e);
    return t || n || r;
}
function T() {
    var e;
    let t = f.Z.getChannelId();
    if (null == t) return !1;
    let n = null == (e = d.Z.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return (
        O.forEach((e) => {
            if (null != p.Z.getVoiceStateForChannel(t, e)) return void O.delete(e);
            let i = _.default.getUser(e);
            null != i && ((r = !0), O.delete(e), v(i, n, t));
        }),
        r
    );
}
function S() {
    b.clear(), y.clear(), O.clear();
}
function A() {
    S();
}
function C(e) {
    let { state: t, context: n } = e;
    if (n !== a.Yn.DEFAULT || t !== m.hes.DISCONNECTED) return !1;
    S();
}
function N(e) {
    let { voiceStates: t } = e,
        n = f.Z.getChannelId();
    return (
        null != n &&
        t.reduce((e, t) => {
            let { userId: r, channelId: i } = t;
            return (i === n && !!I(r)) || e;
        }, !1)
    );
}
function R(e) {
    let { userIds: t, guildId: n, channelId: r, context: i } = e;
    return (
        i === a.Yn.DEFAULT &&
        t.reduce((e, t) => {
            if (null != p.Z.getVoiceStateForChannel(r, t)) return e;
            let i = _.default.getUser(t);
            return null == i ? (O.add(t), e) : (v(i, n, r), !0);
        }, !1)
    );
}
function P(e) {
    let { userId: t, context: n } = e;
    return n === a.Yn.DEFAULT && I(t);
}
class D extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.default, d.Z, f.Z), this.syncWith([_.default], T);
    }
    get desyncedVoiceStatesCount() {
        return b.size();
    }
    getDesyncedUserIds() {
        return b.keys();
    }
    getDesyncedVoiceStates() {
        return b.values();
    }
    getDesyncedParticipants() {
        return y.values();
    }
}
E(D, "displayName", "RTCConnectionDesyncStore");
let w = new D(o.Z, {
    CONNECTION_OPEN: A,
    VOICE_CHANNEL_SELECT: S,
    RTC_CONNECTION_STATE: C,
    VOICE_STATE_UPDATES: N,
    RTC_CONNECTION_CLIENT_CONNECT: R,
    RTC_CONNECTION_CLIENT_DISCONNECT: P,
});
