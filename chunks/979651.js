let i, a;
var o,
    s = r(47120);
var l = r(724458);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(189786),
    h = r(981631),
    _ = r(354459);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = 0,
    E = 0,
    v = {},
    y = new Set(),
    b = new Map(),
    I = {},
    T = {},
    S = {},
    A = {};
function C(e, n) {
    return ''.concat(e, ':').concat(n);
}
function N(e, n) {
    let r = e[n];
    return null == r && ((r = {}), (e[n] = r)), r;
}
function R(e) {
    var n;
    let r = null !== (n = v[h.ME]) && void 0 !== n ? n : {},
        i = {};
    c().each(r, (n, r) => {
        n.channelId !== e && (i[r] = n);
    }),
        (v[h.ME] = i);
}
function O(e) {
    var n;
    return null !== (n = b.get(e)) && void 0 !== n ? n : new Set();
}
function D(e, n) {
    let r = O(e);
    if (!r.has(n)) (r = new Set(r)).add(n), b.set(e, r);
}
function L(e, n) {
    let r = O(e);
    if (!!r.has(n)) (r = new Set(r)).delete(n), 0 === r.size ? b.delete(e) : b.set(e, r);
}
function x(e, n, r) {
    let i = N(v, null != e ? e : h.ME),
        a = i[n],
        o = r(a);
    return a === o ? [!1, o, a] : (null != a && (delete i[n], null != a.channelId && (delete N(I, a.channelId)[n], delete N(T, a.channelId)[n]), null != a.sessionId && delete N(S, n)[a.sessionId], L(null != e ? e : h.ME, n)), null != o && ((i[n] = o), null != o.channelId && ((N(I, o.channelId)[n] = o), o.selfVideo && ((N(T, o.channelId)[n] = o), D(null != e ? e : h.ME, n))), null != o.sessionId && (N(S, n)[o.sessionId] = o)), [!0, o, a]);
}
function w(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let [r, i, o] = k(n.guildId, n);
        return r ? (n.sessionId === a && null != i && null != o && o.channelId !== i.channelId && (g += 1), E++, !0) : e;
    }, !1);
}
function P(e) {
    let n = !1;
    for (let r of e.voiceStates) {
        let [i] = k(e.guildId, r);
        n = n || i;
    }
    for (let r of e.removedVoiceStateUsers) x(e.guildId, r, () => null), (n = !0);
    return n && E++, n;
}
function M(e) {
    let { userId: n, channelId: r, platform: i } = e;
    A[C(n, r)] = i;
}
function k(e, n) {
    return x(e, n.userId, (e) => {
        if (null == n.channelId) return null;
        {
            let r = {
                channelId: n.channelId,
                deaf: n.deaf,
                mute: n.mute,
                requestToSpeakTimestamp: n.requestToSpeakTimestamp,
                selfDeaf: n.selfDeaf,
                selfMute: n.selfMute,
                selfStream: n.selfStream,
                selfVideo: n.selfVideo,
                sessionId: n.sessionId,
                suppress: n.suppress,
                userId: n.userId,
                discoverable: n.discoverable
            };
            return null != e ? e.merge(r) : new p.Z(r);
        }
    });
}
function U(e) {
    let { guildId: n, channelId: r } = e,
        [a] = x(n, i, (e) => (null == e ? void 0 : e.set('channelId', r)));
    return a;
}
function B(e) {
    let { user: n, sessionId: r } = e,
        o = null != i && i !== n.id;
    return o && ((v = {}), (I = {}), (S = {}), (T = {}), b.clear()), (i = n.id), (a = r), o;
}
function G() {
    (v = {}), (I = {}), (S = {}), (T = {}), b.clear();
}
function Z(e) {
    let { voiceStates: n, user: r, sessionId: o } = e;
    for (let [e, r] of ((v = {}), (I = {}), (S = {}), (T = {}), Object.entries(n))) for (let [n, i] of Object.entries(r)) x(e, n, () => new p.Z(i));
    (i = r.id), (a = o);
}
function F(e) {
    let { guild: n } = e;
    c().forEach(v[n.id], (e) => {
        x(n.id, e.userId, () => null);
    }),
        delete v[n.id];
}
function V(e) {
    let { channel: n } = e;
    R(n.id);
}
function j(e) {
    let { channelId: n } = e;
    R(n);
}
class H extends (o = d.ZP.Store) {
    getAllVoiceStates() {
        return v;
    }
    getVoiceStateVersion() {
        return E;
    }
    getVoiceStates(e) {
        return N(v, null != e ? e : h.ME);
    }
    getVoiceStatesForChannel(e) {
        return N(I, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return N(T, e);
    }
    getVoiceState(e, n) {
        return this.getVoiceStates(e)[n];
    }
    getDiscoverableVoiceState(e, n) {
        let r = this.getVoiceState(e, n);
        return null == r || !1 === r.discoverable ? null : r;
    }
    getVoiceStateForChannel(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        return null === (n = N(I, e)) || void 0 === n ? void 0 : n[r];
    }
    getVoiceStateForUser(e) {
        return Object.values(N(S, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(N(S, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, n) {
        var r;
        return null != n ? (null === (r = N(S, e)) || void 0 === r ? void 0 : r[n]) : null;
    }
    getUserVoiceChannelId(e, n) {
        var r;
        return null === (r = this.getVoiceState(e, n)) || void 0 === r ? void 0 : r.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let n = this.getVoiceState(e, i);
        return null != n && null != a && n.sessionId === a ? n.channelId : null;
    }
    getUsersWithVideo(e) {
        var n;
        return null !== (n = b.get(e)) && void 0 !== n ? n : y;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != a && (null === (e = S[i]) || void 0 === e ? void 0 : e[a]) != null;
    }
    isInChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if (null == e) return !1;
        let r = this.getVoiceStateForChannel(e, n);
        return null != r && (n !== i || (null != a && r.sessionId === a));
    }
    hasVideo(e) {
        return Object.values(N(T, e)).length > 0;
    }
    getVoicePlatformForChannel(e, n) {
        var r, o;
        let s = null != a && (null === (o = S[i]) || void 0 === o ? void 0 : null === (r = o[a]) || void 0 === r ? void 0 : r.channelId);
        return n === i && e === s ? _.wR.DESKTOP : A[C(n, e)];
    }
    get userHasBeenMovedVersion() {
        return g;
    }
}
m(H, 'displayName', 'VoiceStateStore'),
    (n.Z = new H(f.Z, {
        CONNECTION_OPEN: B,
        CONNECTION_OPEN_SUPPLEMENTAL: G,
        OVERLAY_INITIALIZE: Z,
        VOICE_CHANNEL_SELECT: U,
        VOICE_STATE_UPDATES: w,
        GUILD_DELETE: F,
        GUILD_CREATE: F,
        CHANNEL_DELETE: V,
        CALL_DELETE: j,
        PASSIVE_UPDATE_V2: P,
        RTC_CONNECTION_PLATFORM: M
    }));
