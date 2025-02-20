let r, i;
n.d(t, { Z: () => F }), n(47120);
var o,
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(189786),
    d = n(981631),
    f = n(354459);
function p(e, t, n) {
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
let _ = 0,
    h = 0,
    m = {},
    g = new Set(),
    E = new Map(),
    v = {},
    b = {},
    y = {},
    O = {};
function S(e, t) {
    return ''.concat(e, ':').concat(t);
}
function I(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function T(e) {
    var t;
    let n = null !== (t = m[d.ME]) && void 0 !== t ? t : {},
        r = {};
    s().each(n, (t, n) => {
        t.channelId !== e && (r[n] = t);
    }),
        (m[d.ME] = r);
}
function N(e) {
    var t;
    return null !== (t = E.get(e)) && void 0 !== t ? t : new Set();
}
function A(e, t) {
    let n = N(e);
    !n.has(t) && ((n = new Set(n)).add(t), E.set(e, n));
}
function C(e, t) {
    let n = N(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function R(e, t, n) {
    let r = I(m, null != e ? e : d.ME),
        i = r[t],
        o = n(i);
    return i === o ? [!1, o, i] : (null != i && (delete r[t], null != i.channelId && (delete I(v, i.channelId)[t], delete I(b, i.channelId)[t]), null != i.sessionId && delete I(y, t)[i.sessionId], C(null != e ? e : d.ME, t)), null != o && ((r[t] = o), null != o.channelId && ((I(v, o.channelId)[t] = o), o.selfVideo && ((I(b, o.channelId)[t] = o), A(null != e ? e : d.ME, t))), null != o.sessionId && (I(y, t)[o.sessionId] = o)), [!0, o, i]);
}
function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, o] = x(t.guildId, t);
        return n ? (t.sessionId === i && null != r && null != o && o.channelId !== r.channelId && (_ += 1), h++, !0) : e;
    }, !1);
}
function w(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = x(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), (t = !0);
    return t && h++, t;
}
function D(e) {
    let { userId: t, channelId: n, platform: r } = e;
    O[S(t, n)] = r;
}
function x(e, t) {
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
function L(e) {
    let { guildId: t, channelId: n } = e,
        [i] = R(t, r, (e) => (null == e ? void 0 : e.set('channelId', n)));
    return i;
}
function M(e) {
    let { user: t, sessionId: n } = e,
        o = null != r && r !== t.id;
    return o && ((m = {}), (v = {}), (y = {}), (b = {}), E.clear()), (r = t.id), (i = n), o;
}
function k() {
    (m = {}), (v = {}), (y = {}), (b = {}), E.clear();
}
function j(e) {
    let { voiceStates: t, user: n, sessionId: o } = e;
    for (let [e, n] of ((m = {}), (v = {}), (y = {}), (b = {}), Object.entries(t))) for (let [t, r] of Object.entries(n)) R(e, t, () => new u.Z(r));
    (r = n.id), (i = o);
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
class Z extends (o = l.ZP.Store) {
    getAllVoiceStates() {
        return m;
    }
    getVoiceStateVersion() {
        return h;
    }
    getVoiceStates(e) {
        return I(m, null != e ? e : d.ME);
    }
    getVoiceStatesForChannel(e) {
        return I(v, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return I(b, e);
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
        return null === (t = I(v, e)) || void 0 === t ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(I(y, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(I(y, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null === (n = I(y, e)) || void 0 === n ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null !== (t = E.get(e)) && void 0 !== t ? t : g;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != i && (null === (e = y[r]) || void 0 === e ? void 0 : e[i]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(I(b, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, o;
        let a = null != i && (null === (o = y[r]) || void 0 === o ? void 0 : null === (n = o[i]) || void 0 === n ? void 0 : n.channelId);
        return t === r && e === a ? f.wR.DESKTOP : O[S(t, e)];
    }
    get userHasBeenMovedVersion() {
        return _;
    }
}
p(Z, 'displayName', 'VoiceStateStore');
let F = new Z(c.Z, {
    CONNECTION_OPEN: M,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: j,
    VOICE_CHANNEL_SELECT: L,
    VOICE_STATE_UPDATES: P,
    GUILD_DELETE: U,
    GUILD_CREATE: U,
    CHANNEL_DELETE: G,
    CALL_DELETE: B,
    PASSIVE_UPDATE_V2: w,
    RTC_CONNECTION_PLATFORM: D
});
