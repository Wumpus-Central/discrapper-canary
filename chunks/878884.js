n(47120), n(724458);
var i,
    l,
    r,
    a,
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
    S = n(981631),
    I = n(354459);
let x = new u.Z(),
    _ = new u.Z(),
    C = new Set();
function b(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, v.PH)(i, null != t ? t : S.ME, e.id);
    x.set(e.id, l);
    let r = {
        type: I.fO.USER,
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
    _.set(e.id, r);
}
function E(e) {
    let t = x.delete(e),
        n = _.delete(e),
        i = C.delete(e);
    return t || n || i;
}
function y() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        C.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
                C.delete(e);
                return;
            }
            let l = h.default.getUser(e);
            null != l && ((i = !0), C.delete(e), b(l, n, t));
        }),
        i
    );
}
function Z() {
    x.clear(), _.clear(), C.clear();
}
class T extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, h.default, f.Z, p.Z), this.syncWith([h.default], y);
    }
    get desyncedVoiceStatesCount() {
        return x.size();
    }
    getDesyncedUserIds() {
        return x.keys();
    }
    getDesyncedVoiceStates() {
        return x.values();
    }
    getDesyncedParticipants() {
        return _.values();
    }
}
(a = 'RTCConnectionDesyncStore'),
    (r = 'displayName') in (l = T)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new T(c.Z, {
        CONNECTION_OPEN: function () {
            Z();
        },
        VOICE_CHANNEL_SELECT: Z,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== S.hes.DISCONNECTED) return !1;
            Z();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = p.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: l } = t;
                    return (l === n && !!E(i)) || e;
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
                    return null == l ? (C.add(t), e) : (b(l, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && E(t);
        }
    }));
