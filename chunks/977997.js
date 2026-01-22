let r, i;
n.d(t, { A: () => B }), n(896048);
var a,
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(288737),
    d = n(652215),
    f = n(806931);
function p(e, t, n) {
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
let _ = 0,
    h = 0,
    m = {},
    g = new Set(),
    E = new Map(),
    b = {},
    y = {},
    O = {},
    A = {};
function v(e, t) {
    return "".concat(e, ":").concat(t);
}
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function I(e) {
    var t;
    let n = null != (t = m[d.ME]) ? t : {};
    o().each(n, (t, n) => {
        t.channelId === e && R(d.ME, n, () => null);
    });
}
function T(e) {
    var t;
    return null != (t = E.get(e)) ? t : new Set();
}
function C(e, t) {
    let n = T(e);
    n.has(t) || ((n = new Set(n)).add(t), E.set(e, n));
}
function N(e, t) {
    let n = T(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function R(e, t, n) {
    let r = S(m, null != e ? e : d.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete S(b, i.channelId)[t], delete S(y, i.channelId)[t]),
              null != i.sessionId && delete S(O, t)[i.sessionId],
              N(null != e ? e : d.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((S(b, a.channelId)[t] = a), a.selfVideo && ((S(y, a.channelId)[t] = a), C(null != e ? e : d.ME, t))),
              null != a.sessionId && (S(O, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function w(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = x(t.guildId, t);
        return n
            ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (_ += 1), h++, !0)
            : e;
    }, !1);
}
function P(e) {
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
    A[v(t, n)] = r;
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
function L(e) {
    let { guildId: t, channelId: n } = e,
        [i] = R(t, r, (e) => (null == e ? void 0 : e.set("channelId", n)));
    return i;
}
function j(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((m = {}), (b = {}), (O = {}), (y = {}), E.clear()), (r = t.id), (i = n), a;
}
function M() {
    (m = {}), (b = {}), (O = {}), (y = {}), E.clear();
}
function k(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((m = {}), (b = {}), (O = {}), (y = {}), Object.entries(t)))
        for (let [t, r] of Object.entries(n)) R(e, t, () => new u.A(r));
    (r = n.id), (i = a);
}
function U(e) {
    let { guild: t } = e;
    o().forEach(m[t.id], (e) => {
        R(t.id, e.userId, () => null);
    }),
        delete m[t.id];
}
function G(e) {
    let { channel: t } = e;
    I(t.id);
}
function V(e) {
    let { channelId: t } = e;
    I(t);
}
class F extends (a = l.Ay.Store) {
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
        return Object.values(S(O, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(S(O, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null == (n = S(O, e)) ? void 0 : n[t]) : null;
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
        return null != i && (null == (e = O[r]) ? void 0 : e[i]) != null;
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
        let s = null != i && (null == (a = O[r]) || null == (n = a[i]) ? void 0 : n.channelId);
        return t === r && e === s ? f.J7.DESKTOP : A[v(t, e)];
    }
    get userHasBeenMovedVersion() {
        return _;
    }
}
p(F, "displayName", "VoiceStateStore");
let B = new F(c.h, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: M,
    OVERLAY_INITIALIZE: k,
    VOICE_CHANNEL_SELECT: L,
    VOICE_STATE_UPDATES: w,
    GUILD_DELETE: U,
    GUILD_CREATE: U,
    CHANNEL_DELETE: G,
    CALL_DELETE: V,
    PASSIVE_UPDATE_V2: P,
    RTC_CONNECTION_PLATFORM: D,
});
