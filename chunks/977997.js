let r, i;
n.d(t, {
    A: () => H,
}),
    n(896048);
var a,
    o = n(735438),
    s = n.n(o),
    l = n(311907),
    c = n(73153),
    u = n(288737),
    d = n(67486),
    f = n(652215),
    p = n(806931);

function _(e, t, n) {
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
let h = 0,
    m = 0,
    g = {},
    E = new Set(),
    y = new Map(),
    b = {},
    O = {},
    v = {},
    A = {};

function I(e, t) {
    return "".concat(e, ":").concat(t);
}

function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}

function T(e) {
    var t;
    let n = null != (t = g[f.ME]) ? t : {};
    s().each(n, (t, n) => {
        t.channelId === e && R(f.ME, n, () => null);
    });
}

function C(e) {
    var t;
    return null != (t = y.get(e)) ? t : new Set();
}

function N(e, t) {
    let n = C(e);
    n.has(t) || ((n = new Set(n)).add(t), y.set(e, n));
}

function w(e, t) {
    let n = C(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? y.delete(e) : y.set(e, n));
}

function R(e, t, n) {
    let r = S(g, null != e ? e : f.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete S(b, i.channelId)[t], delete S(O, i.channelId)[t]),
              null != i.sessionId && delete S(v, t)[i.sessionId],
              w(null != e ? e : f.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((S(b, a.channelId)[t] = a), a.selfVideo && ((S(O, a.channelId)[t] = a), N(null != e ? e : f.ME, t))),
              null != a.sessionId && (S(v, t)[a.sessionId] = a)),
          [!0, a, i]);
}

function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = x(t.guildId, t);
        return n
            ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (h += 1), m++, !0)
            : e;
    }, !1);
}

function D(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = x(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), (t = !0);
    return t && m++, t;
}

function L(e) {
    let { userId: t, channelId: n, platform: r } = e;
    A[I(t, n)] = r;
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
                discoverable: t.discoverable,
            };
            return null != e ? e.merge(n) : new u.A(n);
        }
    });
}

function M(e) {
    let { guildId: t, channelId: n } = e,
        [i] = R(t, r, (e) => (null == e ? void 0 : e.set("channelId", n)));
    return i;
}

function j(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((g = {}), (b = {}), (v = {}), (O = {}), y.clear()), (r = t.id), (i = n), a;
}

function k() {
    (g = {}), (b = {}), (v = {}), (O = {}), y.clear();
}

function U(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((g = {}), (b = {}), (v = {}), (O = {}), Object.entries(t)))
        for (let [t, r] of Object.entries(n)) R(e, t, () => new u.A(r));
    (r = n.id), (i = a);
}

function G(e) {
    let { guild: t } = e;
    s().forEach(g[t.id], (e) => {
        R(t.id, e.userId, () => null);
    }),
        delete g[t.id];
}

function F(e) {
    let { channel: t } = e;
    T(t.id);
}

function V(e) {
    let { channelId: t } = e;
    T(t);
}
class B extends (a = l.Ay.Store) {
    getAllVoiceStates() {
        return g;
    }
    getVoiceStateVersion() {
        return m;
    }
    getVoiceStates(e) {
        return S(g, null != e ? e : f.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(b, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return S(O, e);
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
        return null != (t = y.get(e)) ? t : E;
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
        return Object.values(S(O, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let o = null != i && (null == (a = v[r]) || null == (n = a[i]) ? void 0 : n.channelId);
        return t === r && e === o ? ((0, d.I)() ? p.J7.QUEST : p.J7.DESKTOP) : A[I(t, e)];
    }
    get userHasBeenMovedVersion() {
        return h;
    }
}
_(B, "displayName", "VoiceStateStore");
let H = new B(c.h, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: U,
    VOICE_CHANNEL_SELECT: M,
    VOICE_STATE_UPDATES: P,
    GUILD_DELETE: G,
    GUILD_CREATE: G,
    CHANNEL_DELETE: F,
    CALL_DELETE: V,
    PASSIVE_UPDATE_V2: D,
    RTC_CONNECTION_PLATFORM: L,
});
