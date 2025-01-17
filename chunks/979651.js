let i, a;
var s,
    o = r(47120);
var l = r(724458);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(189786),
    h = r(981631),
    p = r(354459);
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
    I = new Set(),
    T = new Map(),
    b = {},
    y = {},
    S = {},
    A = {};
function N(e, n) {
    return ''.concat(e, ':').concat(n);
}
function C(e, n) {
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
    return null !== (n = T.get(e)) && void 0 !== n ? n : new Set();
}
function D(e, n) {
    let r = O(e);
    if (!r.has(n)) (r = new Set(r)).add(n), T.set(e, r);
}
function L(e, n) {
    let r = O(e);
    if (!!r.has(n)) (r = new Set(r)).delete(n), 0 === r.size ? T.delete(e) : T.set(e, r);
}
function x(e, n, r) {
    let i = C(v, null != e ? e : h.ME),
        a = i[n],
        s = r(a);
    return a === s ? [!1, s, a] : (null != a && (delete i[n], null != a.channelId && (delete C(b, a.channelId)[n], delete C(y, a.channelId)[n]), null != a.sessionId && delete C(S, n)[a.sessionId], L(null != e ? e : h.ME, n)), null != s && ((i[n] = s), null != s.channelId && ((C(b, s.channelId)[n] = s), s.selfVideo && ((C(y, s.channelId)[n] = s), D(null != e ? e : h.ME, n))), null != s.sessionId && (C(S, n)[s.sessionId] = s)), [!0, s, a]);
}
function w(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let [r, i, s] = k(n.guildId, n);
        return r ? (n.sessionId === a && null != i && null != s && s.channelId !== i.channelId && (g += 1), E++, !0) : e;
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
    A[N(n, r)] = i;
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
            return null != e ? e.merge(r) : new _.Z(r);
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
        s = null != i && i !== n.id;
    return s && ((v = {}), (b = {}), (S = {}), (y = {}), T.clear()), (i = n.id), (a = r), s;
}
function G() {
    (v = {}), (b = {}), (S = {}), (y = {}), T.clear();
}
function Z(e) {
    let { voiceStates: n, user: r, sessionId: s } = e;
    for (let [e, r] of ((v = {}), (b = {}), (S = {}), (y = {}), Object.entries(n))) for (let [n, i] of Object.entries(r)) x(e, n, () => new _.Z(i));
    (i = r.id), (a = s);
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
class H extends (s = d.ZP.Store) {
    getAllVoiceStates() {
        return v;
    }
    getVoiceStateVersion() {
        return E;
    }
    getVoiceStates(e) {
        return C(v, null != e ? e : h.ME);
    }
    getVoiceStatesForChannel(e) {
        return C(b, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return C(y, e);
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
        return null === (n = C(b, e)) || void 0 === n ? void 0 : n[r];
    }
    getVoiceStateForUser(e) {
        return Object.values(C(S, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(C(S, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, n) {
        var r;
        return null != n ? (null === (r = C(S, e)) || void 0 === r ? void 0 : r[n]) : null;
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
        return null !== (n = T.get(e)) && void 0 !== n ? n : I;
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
        return Object.values(C(y, e)).length > 0;
    }
    getVoicePlatformForChannel(e, n) {
        var r, s;
        let o = null != a && (null === (s = S[i]) || void 0 === s ? void 0 : null === (r = s[a]) || void 0 === r ? void 0 : r.channelId);
        return n === i && e === o ? p.wR.DESKTOP : A[N(n, e)];
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
