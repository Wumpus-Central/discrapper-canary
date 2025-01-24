n(47120), n(724458);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(642047),
    d = n(189786),
    m = n(5192),
    f = n(592125),
    p = n(19780),
    h = n(594174),
    g = n(979651),
    v = n(938475),
    I = n(981631),
    S = n(354459);
let _ = new u.Z(),
    x = new u.Z(),
    E = new Set();
function C(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, v.PH)(i, null != t ? t : I.ME, e.id);
    _.set(e.id, l);
    let a = {
        type: S.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: m.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    x.set(e.id, a);
}
function y(e) {
    let t = _.delete(e),
        n = x.delete(e),
        i = E.delete(e);
    return t || n || i;
}
function Z() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        E.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
                E.delete(e);
                return;
            }
            let l = h.default.getUser(e);
            null != l && ((i = !0), E.delete(e), C(l, n, t));
        }),
        i
    );
}
function b() {
    _.clear(), x.clear(), E.clear();
}
class T extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, h.default, f.Z, p.Z), this.syncWith([h.default], Z);
    }
    get desyncedVoiceStatesCount() {
        return _.size();
    }
    getDesyncedUserIds() {
        return _.keys();
    }
    getDesyncedVoiceStates() {
        return _.values();
    }
    getDesyncedParticipants() {
        return x.values();
    }
}
(r = 'RTCConnectionDesyncStore'),
    (a = 'displayName') in (l = T)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new T(c.Z, {
        CONNECTION_OPEN: function () {
            b();
        },
        VOICE_CHANNEL_SELECT: b,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== I.hes.DISCONNECTED) return !1;
            b();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = p.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: l } = t;
                    return (l === n && !!y(i)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: l } = e;
            return (
                l === o.Yn.DEFAULT &&
                t.reduce((e, t) => {
                    if (null != g.Z.getVoiceStateForChannel(i, t)) return e;
                    let l = h.default.getUser(t);
                    return null == l ? (E.add(t), e) : (C(l, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && y(t);
        }
    }));
