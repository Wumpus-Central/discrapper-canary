let r, i;
n.d(t, { Z: () => F }), n(388685);
var a,
    o = n(392711),
    s = n.n(o),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 0,
    m = 0,
    h = {},
    g = new Set(),
    E = new Map(),
    b = {},
    y = {},
    O = {},
    v = {};
function S(e, t) {
    return "".concat(e, ":").concat(t);
}
function I(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function T(e) {
    var t;
    let n = null != (t = h[d.ME]) ? t : {};
    s().each(n, (t, n) => {
        t.channelId === e && P(d.ME, n, () => null);
    });
}
function A(e) {
    var t;
    return null != (t = E.get(e)) ? t : new Set();
}
function C(e, t) {
    let n = A(e);
    n.has(t) || ((n = new Set(n)).add(t), E.set(e, n));
}
function N(e, t) {
    let n = A(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function P(e, t, n) {
    let r = I(h, null != e ? e : d.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete I(b, i.channelId)[t], delete I(y, i.channelId)[t]),
              null != i.sessionId && delete I(O, t)[i.sessionId],
              N(null != e ? e : d.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((I(b, a.channelId)[t] = a), a.selfVideo && ((I(y, a.channelId)[t] = a), C(null != e ? e : d.ME, t))),
              null != a.sessionId && (I(O, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function R(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = x(t.guildId, t);
        return n
            ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (_ += 1), m++, !0)
            : e;
    }, !1);
}
function w(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = x(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) P(e.guildId, n, () => null), (t = !0);
    return t && m++, t;
}
function D(e) {
    let { userId: t, channelId: n, platform: r } = e;
    v[S(t, n)] = r;
}
function x(e, t) {
    return P(e, t.userId, (e) => {
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
            return null != e ? e.merge(n) : new u.Z(n);
        }
    });
}
function L(e) {
    let { guildId: t, channelId: n } = e,
        [i] = P(t, r, (e) => (null == e ? void 0 : e.set("channelId", n)));
    return i;
}
function j(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((h = {}), (b = {}), (O = {}), (y = {}), E.clear()), (r = t.id), (i = n), a;
}
function M() {
    (h = {}), (b = {}), (O = {}), (y = {}), E.clear();
}
function k(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((h = {}), (b = {}), (O = {}), (y = {}), Object.entries(t)))
        for (let [t, r] of Object.entries(n)) P(e, t, () => new u.Z(r));
    (r = n.id), (i = a);
}
function U(e) {
    let { guild: t } = e;
    s().forEach(h[t.id], (e) => {
        P(t.id, e.userId, () => null);
    }),
        delete h[t.id];
}
function G(e) {
    let { channel: t } = e;
    T(t.id);
}
function Z(e) {
    let { channelId: t } = e;
    T(t);
}
class B extends (a = l.ZP.Store) {
    getAllVoiceStates() {
        return h;
    }
    getVoiceStateVersion() {
        return m;
    }
    getVoiceStates(e) {
        return I(h, null != e ? e : d.ME);
    }
    getVoiceStatesForChannel(e) {
        return I(b, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return I(y, e);
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
        return null == (t = I(b, e)) ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(I(O, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(I(O, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null == (n = I(O, e)) ? void 0 : n[t]) : null;
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
        return Object.values(I(y, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let o = null != i && (null == (a = O[r]) || null == (n = a[i]) ? void 0 : n.channelId);
        return t === r && e === o ? f.wR.DESKTOP : v[S(t, e)];
    }
    get userHasBeenMovedVersion() {
        return _;
    }
}
p(B, "displayName", "VoiceStateStore");
let F = new B(c.Z, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: M,
    OVERLAY_INITIALIZE: k,
    VOICE_CHANNEL_SELECT: L,
    VOICE_STATE_UPDATES: R,
    GUILD_DELETE: U,
    GUILD_CREATE: U,
    CHANNEL_DELETE: G,
    CALL_DELETE: Z,
    PASSIVE_UPDATE_V2: w,
    RTC_CONNECTION_PLATFORM: D,
});
