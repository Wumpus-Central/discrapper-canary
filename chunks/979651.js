let r, i;
n.d(t, { Z: () => V }), n(388685);
var a,
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(189786),
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
    b = {},
    y = {},
    v = {},
    O = {};
function I(e, t) {
    return ''.concat(e, ':').concat(t);
}
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function T(e) {
    var t;
    let n = null != (t = m[d.ME]) ? t : {},
        r = {};
    s().each(n, (t, n) => {
        t.channelId !== e && (r[n] = t);
    }),
        (m[d.ME] = r);
}
function A(e) {
    var t;
    return null != (t = E.get(e)) ? t : new Set();
}
function N(e, t) {
    let n = A(e);
    n.has(t) || ((n = new Set(n)).add(t), E.set(e, n));
}
function C(e, t) {
    let n = A(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function R(e, t, n) {
    let r = S(m, null != e ? e : d.ME),
        i = r[t],
        a = n(i);
    return i === a ? [!1, a, i] : (null != i && (delete r[t], null != i.channelId && (delete S(b, i.channelId)[t], delete S(y, i.channelId)[t]), null != i.sessionId && delete S(v, t)[i.sessionId], C(null != e ? e : d.ME, t)), null != a && ((r[t] = a), null != a.channelId && ((S(b, a.channelId)[t] = a), a.selfVideo && ((S(y, a.channelId)[t] = a), N(null != e ? e : d.ME, t))), null != a.sessionId && (S(v, t)[a.sessionId] = a)), [!0, a, i]);
}
function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = L(t.guildId, t);
        return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (p += 1), h++, !0) : e;
    }, !1);
}
function w(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = L(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), (t = !0);
    return t && h++, t;
}
function D(e) {
    let { userId: t, channelId: n, platform: r } = e;
    O[I(t, n)] = r;
}
function L(e, t) {
    return R(e, t.userId, (e) => {
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
            return null != e ? e.merge(n) : new u.Z(n);
        }
    });
}
function x(e) {
    let { guildId: t, channelId: n } = e,
        [i] = R(t, r, (e) => (null == e ? void 0 : e.set('channelId', n)));
    return i;
}
function M(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((m = {}), (b = {}), (v = {}), (y = {}), E.clear()), (r = t.id), (i = n), a;
}
function k() {
    (m = {}), (b = {}), (v = {}), (y = {}), E.clear();
}
function j(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((m = {}), (b = {}), (v = {}), (y = {}), Object.entries(t))) for (let [t, r] of Object.entries(n)) R(e, t, () => new u.Z(r));
    (r = n.id), (i = a);
}
function U(e) {
    let { guild: t } = e;
    s().forEach(m[t.id], (e) => {
        R(t.id, e.userId, () => null);
    }),
        delete m[t.id];
}
function G(e) {
    let { channel: t } = e;
    T(t.id);
}
function B(e) {
    let { channelId: t } = e;
    T(t);
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
        return S(b, e);
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
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return null == (t = S(b, e)) ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(S(v, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(S(v, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null == (n = S(v, e)) ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null == (n = this.getVoiceState(e, t)) ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null != (t = E.get(e)) ? t : g;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != i && (null == (e = v[r]) ? void 0 : e[i]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(S(y, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let o = null != i && (null == (a = v[r]) || null == (n = a[i]) ? void 0 : n.channelId);
        return t === r && e === o ? f.wR.DESKTOP : O[I(t, e)];
    }
    get userHasBeenMovedVersion() {
        return p;
    }
}
_(F, 'displayName', 'VoiceStateStore');
let V = new F(c.Z, {
    CONNECTION_OPEN: M,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: j,
    VOICE_CHANNEL_SELECT: x,
    VOICE_STATE_UPDATES: P,
    GUILD_DELETE: U,
    GUILD_CREATE: U,
    CHANNEL_DELETE: G,
    CALL_DELETE: B,
    PASSIVE_UPDATE_V2: w,
    RTC_CONNECTION_PLATFORM: D
});
