"use strict";
let r, i;
n.d(t, { A: () => j });
var a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(809733),
    c = n(288737),
    d = n(652215),
    _ = n(806931);
let f = 0,
    h = 0,
    p = {},
    g = new Set(),
    E = new Map(),
    A = {},
    I = {},
    T = {},
    y = {};
function S(e, t) {
    return `${e}:${t}`;
}
function v(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function C(e) {
    let t = p[d.ME] ?? {};
    s().each(t, (t, n) => {
        t.channelId === e && O(d.ME, n, () => null);
    });
}
function b(e) {
    return E.get(e) ?? new Set();
}
function N(e, t) {
    let n = b(e);
    n.has(t) || ((n = new Set(n)).add(t), E.set(e, n));
}
function R(e, t) {
    let n = b(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n));
}
function O(e, t, n) {
    let r = v(p, e ?? d.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete v(A, i.channelId)[t], delete v(I, i.channelId)[t]),
              null != i.sessionId && delete v(T, t)[i.sessionId],
              R(e ?? d.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((v(A, a.channelId)[t] = a), a.selfVideo && ((v(I, a.channelId)[t] = a), N(e ?? d.ME, t))),
              null != a.sessionId && (v(T, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = x(t.guildId, t);
        return n
            ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (f += 1), h++, !0)
            : e;
    }, !1);
}
function L(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = x(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) O(e.guildId, n, () => null), (t = !0);
    return t && h++, t;
}
function w(e) {
    let { userId: t, channelId: n, platform: r } = e;
    y[S(t, n)] = r;
}
function x(e, t) {
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
                discoverable: t.discoverable,
            };
            return null != e ? e.merge(n) : new c.A(n);
        }
    });
}
function P(e) {
    let { guildId: t, channelId: n } = e,
        [i] = O(t, r, (e) => e?.set("channelId", n));
    return i;
}
function M(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((p = {}), (A = {}), (T = {}), (I = {}), E.clear()), (r = t.id), (i = n), a;
}
function k() {
    (p = {}), (A = {}), (T = {}), (I = {}), E.clear();
}
function U(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((p = {}), (A = {}), (T = {}), (I = {}), Object.entries(t)))
        for (let [t, r] of Object.entries(n)) O(e, t, () => new c.A(r));
    (r = n.id), (i = a);
}
function G(e) {
    let { guild: t } = e;
    s().forEach(p[t.id], (e) => {
        O(t.id, e.userId, () => null);
    }),
        delete p[t.id];
}
function F(e) {
    let { channel: t } = e;
    C(t.id);
}
function V(e) {
    let { channelId: t } = e;
    C(t);
}
class B extends o.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return p;
    }
    getVoiceStateVersion() {
        return h;
    }
    getVoiceStates(e) {
        return v(p, e ?? d.ME);
    }
    getVoiceStatesForChannel(e) {
        return v(A, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return v(I, e);
    }
    getVoiceState(e, t) {
        return this.getVoiceStates(e)[t];
    }
    getDiscoverableVoiceState(e, t) {
        let n = this.getVoiceState(e, t);
        return null == n || !1 === n.discoverable ? null : n;
    }
    getVoiceStateForChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return v(A, e)?.[t];
    }
    getVoiceStateForUser(e) {
        return Object.values(v(T, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(v(T, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        return null != t ? v(T, e)?.[t] : null;
    }
    getUserVoiceChannelId(e, t) {
        return this.getVoiceState(e, t)?.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        return E.get(e) ?? g;
    }
    isCurrentClientInVoiceChannel() {
        return null != i && T[r]?.[i] != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(v(I, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        let n = null != i && T[r]?.[i]?.channelId;
        return t === r && e === n ? ((0, u.I)() ? _.J7.QUEST : _.J7.DESKTOP) : y[S(t, e)];
    }
    get userHasBeenMovedVersion() {
        return f;
    }
}
let j = new B(l.h, {
    CONNECTION_OPEN: M,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: U,
    VOICE_CHANNEL_SELECT: P,
    VOICE_STATE_UPDATES: D,
    GUILD_DELETE: G,
    GUILD_CREATE: G,
    CHANNEL_DELETE: F,
    CALL_DELETE: V,
    PASSIVE_UPDATE_V2: L,
    RTC_CONNECTION_PLATFORM: w,
});
