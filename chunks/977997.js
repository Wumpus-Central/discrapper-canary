"use strict";
let r, i;
n.d(t, { A: () => B });
var a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(288737),
    c = n(67486),
    d = n(652215),
    _ = n(806931);
let f = 0,
    p = 0,
    h = {},
    m = new Set(),
    g = new Map(),
    E = {},
    A = {},
    I = {},
    T = {};
function y(e, t) {
    return `${e}:${t}`;
}
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function v(e) {
    let t = h[d.ME] ?? {};
    s().each(t, (t, n) => {
        t.channelId === e && R(d.ME, n, () => null);
    });
}
function C(e) {
    return g.get(e) ?? new Set();
}
function b(e, t) {
    let n = C(e);
    n.has(t) || ((n = new Set(n)).add(t), g.set(e, n));
}
function N(e, t) {
    let n = C(e);
    n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? g.delete(e) : g.set(e, n));
}
function R(e, t, n) {
    let r = S(h, e ?? d.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete S(E, i.channelId)[t], delete S(A, i.channelId)[t]),
              null != i.sessionId && delete S(I, t)[i.sessionId],
              N(e ?? d.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((S(E, a.channelId)[t] = a), a.selfVideo && ((S(A, a.channelId)[t] = a), b(e ?? d.ME, t))),
              null != a.sessionId && (S(I, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function O(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = w(t.guildId, t);
        return n
            ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (f += 1), p++, !0)
            : e;
    }, !1);
}
function D(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = w(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), (t = !0);
    return t && p++, t;
}
function L(e) {
    let { userId: t, channelId: n, platform: r } = e;
    T[y(t, n)] = r;
}
function w(e, t) {
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
function x(e) {
    let { guildId: t, channelId: n } = e,
        [i] = R(t, r, (e) => e?.set("channelId", n));
    return i;
}
function P(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((h = {}), (E = {}), (I = {}), (A = {}), g.clear()), (r = t.id), (i = n), a;
}
function M() {
    (h = {}), (E = {}), (I = {}), (A = {}), g.clear();
}
function k(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((h = {}), (E = {}), (I = {}), (A = {}), Object.entries(t)))
        for (let [t, r] of Object.entries(n)) R(e, t, () => new u.A(r));
    (r = n.id), (i = a);
}
function U(e) {
    let { guild: t } = e;
    s().forEach(h[t.id], (e) => {
        R(t.id, e.userId, () => null);
    }),
        delete h[t.id];
}
function G(e) {
    let { channel: t } = e;
    v(t.id);
}
function V(e) {
    let { channelId: t } = e;
    v(t);
}
class F extends o.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return h;
    }
    getVoiceStateVersion() {
        return p;
    }
    getVoiceStates(e) {
        return S(h, e ?? d.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(E, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return S(A, e);
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
        return S(E, e)?.[t];
    }
    getVoiceStateForUser(e) {
        return Object.values(S(I, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(S(I, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        return null != t ? S(I, e)?.[t] : null;
    }
    getUserVoiceChannelId(e, t) {
        return this.getVoiceState(e, t)?.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        return g.get(e) ?? m;
    }
    isCurrentClientInVoiceChannel() {
        return null != i && I[r]?.[i] != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(S(A, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        let n = null != i && I[r]?.[i]?.channelId;
        return t === r && e === n ? ((0, c.I)() ? _.J7.QUEST : _.J7.DESKTOP) : T[y(t, e)];
    }
    get userHasBeenMovedVersion() {
        return f;
    }
}
let B = new F(l.h, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: M,
    OVERLAY_INITIALIZE: k,
    VOICE_CHANNEL_SELECT: x,
    VOICE_STATE_UPDATES: O,
    GUILD_DELETE: U,
    GUILD_CREATE: U,
    CHANNEL_DELETE: G,
    CALL_DELETE: V,
    PASSIVE_UPDATE_V2: D,
    RTC_CONNECTION_PLATFORM: L,
});
