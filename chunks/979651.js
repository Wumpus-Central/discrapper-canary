let i, r;
n.d(t, { Z: () => V }), n(47120), n(724458);
var a,
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(189786),
    d = n(981631),
    f = n(354459);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = 0,
    h = 0,
    m = {},
    g = new Set(),
    E = new Map(),
    v = {},
    y = {},
    I = {},
    b = {};
function T(e, t) {
    return ''.concat(e, ':').concat(t);
}
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function A(e) {
    var t;
    let n = null !== (t = m[d.ME]) && void 0 !== t ? t : {},
        i = {};
    o().each(n, (t, n) => {
        t.channelId !== e && (i[n] = t);
    }),
        (m[d.ME] = i);
}
function N(e) {
    var t;
    return null !== (t = E.get(e)) && void 0 !== t ? t : new Set();
}
function C(e, t) {
    let n = N(e);
    !n.has(t) && ((n = new Set(n)).add(t), E.set(e, n));
}
function R(e, t) {
    let n = N(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function O(e, t, n) {
    let i = S(m, null != e ? e : d.ME),
        r = i[t],
        a = n(r);
    return r === a ? [!1, a, r] : (null != r && (delete i[t], null != r.channelId && (delete S(v, r.channelId)[t], delete S(y, r.channelId)[t]), null != r.sessionId && delete S(I, t)[r.sessionId], R(null != e ? e : d.ME, t)), null != a && ((i[t] = a), null != a.channelId && ((S(v, a.channelId)[t] = a), a.selfVideo && ((S(y, a.channelId)[t] = a), C(null != e ? e : d.ME, t))), null != a.sessionId && (S(I, t)[a.sessionId] = a)), [!0, a, r]);
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, i, a] = P(t.guildId, t);
        return n ? (t.sessionId === r && null != i && null != a && a.channelId !== i.channelId && (p += 1), h++, !0) : e;
    }, !1);
}
function x(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [i] = P(e.guildId, n);
        t = t || i;
    }
    for (let n of e.removedVoiceStateUsers) O(e.guildId, n, () => null), (t = !0);
    return t && h++, t;
}
function L(e) {
    let { userId: t, channelId: n, platform: i } = e;
    b[T(t, n)] = i;
}
function P(e, t) {
    return O(e, t.userId, (e) => {
        if (null == t.channelId) return null;
        {
            let n = {
                channelId: t.channelId,
                deaf: t.deaf,
                mute: t.mute,
                requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                selfDeaf: t.selfDeaf,
                selfMute: t.selfMute,
                selfStream: t.selfStream,
                selfVideo: t.selfVideo,
                sessionId: t.sessionId,
                suppress: t.suppress,
                userId: t.userId,
                discoverable: t.discoverable
            };
            return null != e ? e.merge(n) : new c.Z(n);
        }
    });
}
function w(e) {
    let { guildId: t, channelId: n } = e,
        [r] = O(t, i, (e) => (null == e ? void 0 : e.set('channelId', n)));
    return r;
}
function M(e) {
    let { user: t, sessionId: n } = e,
        a = null != i && i !== t.id;
    return a && ((m = {}), (v = {}), (I = {}), (y = {}), E.clear()), (i = t.id), (r = n), a;
}
function k() {
    (m = {}), (v = {}), (I = {}), (y = {}), E.clear();
}
function U(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((m = {}), (v = {}), (I = {}), (y = {}), Object.entries(t))) for (let [t, i] of Object.entries(n)) O(e, t, () => new c.Z(i));
    (i = n.id), (r = a);
}
function G(e) {
    let { guild: t } = e;
    o().forEach(m[t.id], (e) => {
        O(t.id, e.userId, () => null);
    }),
        delete m[t.id];
}
function B(e) {
    let { channel: t } = e;
    A(t.id);
}
function Z(e) {
    let { channelId: t } = e;
    A(t);
}
class F extends (a = l.ZP.Store) {
    getAllVoiceStates() {
        return m;
    }
    getVoiceStateVersion() {
        return h;
    }
    getVoiceStates(e) {
        return S(m, null != e ? e : d.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(v, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return S(y, e);
    }
    getVoiceState(e, t) {
        return this.getVoiceStates(e)[t];
    }
    getDiscoverableVoiceState(e, t) {
        let n = this.getVoiceState(e, t);
        return null == n || !1 === n.discoverable ? null : n;
    }
    getVoiceStateForChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        return null === (t = S(v, e)) || void 0 === t ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(S(I, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(S(I, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null === (n = S(I, e)) || void 0 === n ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, i);
        return null != t && null != r && t.sessionId === r ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null !== (t = E.get(e)) && void 0 !== t ? t : g;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != r && (null === (e = I[i]) || void 0 === e ? void 0 : e[r]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== i || (null != r && n.sessionId === r));
    }
    hasVideo(e) {
        return Object.values(S(y, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let s = null != r && (null === (a = I[i]) || void 0 === a ? void 0 : null === (n = a[r]) || void 0 === n ? void 0 : n.channelId);
        return t === i && e === s ? f.wR.DESKTOP : b[T(t, e)];
    }
    get userHasBeenMovedVersion() {
        return p;
    }
}
_(F, 'displayName', 'VoiceStateStore');
let V = new F(u.Z, {
    CONNECTION_OPEN: M,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: U,
    VOICE_CHANNEL_SELECT: w,
    VOICE_STATE_UPDATES: D,
    GUILD_DELETE: G,
    GUILD_CREATE: G,
    CHANNEL_DELETE: B,
    CALL_DELETE: Z,
    PASSIVE_UPDATE_V2: x,
    RTC_CONNECTION_PLATFORM: L
});
