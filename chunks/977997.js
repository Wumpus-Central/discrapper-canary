"use strict";
let r, i;
n.d(t, { A: () => b });
var s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(809733),
    d = n(288737),
    c = n(652215),
    _ = n(806931);
let f = 0,
    E = 0,
    h = {},
    p = new Set(),
    m = new Map(),
    g = {},
    A = {},
    I = {},
    T = {};
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function y(e) {
    let t = h[c.ME] ?? {};
    a().each(t, (t, n) => {
        t.channelId === e && O(c.ME, n, () => null);
    });
}
function N(e) {
    return m.get(e) ?? new Set();
}
function O(e, t, n) {
    var r, i;
    let s = S(h, e ?? c.ME),
        a = s[t],
        o = n(a);
    if (a === o) return [!1, o, a];
    if (null != a) {
        let n;
        delete s[t],
            null != a.channelId && (delete S(g, a.channelId)[t], delete S(A, a.channelId)[t]),
            null != a.sessionId && delete S(I, t)[a.sessionId],
            (r = e ?? c.ME),
            (n = N(r)).has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? m.delete(r) : m.set(r, n));
    }
    if (null != o) {
        if (((s[t] = o), null != o.channelId && ((S(g, o.channelId)[t] = o), o.selfVideo))) {
            let n;
            (S(A, o.channelId)[t] = o), (i = e ?? c.ME), (n = N(i)).has(t) || ((n = new Set(n)).add(t), m.set(i, n));
        }
        null != o.sessionId && (S(I, t)[o.sessionId] = o);
    }
    return [!0, o, a];
}
function R(e, t) {
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
            return null != e ? e.merge(n) : new d.A(n);
        }
    });
}
function v(e) {
    let { guild: t } = e;
    a().forEach(h[t.id], (e) => {
        O(t.id, e.userId, () => null);
    }),
        delete h[t.id];
}
class C extends o.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return h;
    }
    getVoiceStateVersion() {
        return E;
    }
    getVoiceStates(e) {
        return S(h, e ?? c.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(g, e);
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
        return S(g, e)?.[t];
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
        return m.get(e) ?? p;
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
        return t === r && e === n ? ((0, u.I)() ? _.J7.QUEST : _.J7.DESKTOP) : T[`${t}:${e}`];
    }
    get userHasBeenMovedVersion() {
        return f;
    }
}
let b = new C(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e,
            s = null != r && r !== t.id;
        return s && ((h = {}), (g = {}), (I = {}), (A = {}), m.clear()), (r = t.id), (i = n), s;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function () {
        (h = {}), (g = {}), (I = {}), (A = {}), m.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { voiceStates: t, user: n, sessionId: s } = e;
        for (let [e, n] of ((h = {}), (g = {}), (I = {}), (A = {}), Object.entries(t)))
            for (let [t, r] of Object.entries(n)) O(e, t, () => new d.A(r));
        (r = n.id), (i = s);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e,
            [i] = O(t, r, (e) => e?.set("channelId", n));
        return i;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let [n, r, s] = R(t.guildId, t);
            return n
                ? (t.sessionId === i && null != r && null != s && s.channelId !== r.channelId && (f += 1), E++, !0)
                : e;
        }, !1);
    },
    GUILD_DELETE: v,
    GUILD_CREATE: v,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        y(t.id);
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        y(t);
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of e.voiceStates) {
            let [r] = R(e.guildId, n);
            t = t || r;
        }
        for (let n of e.removedVoiceStateUsers) O(e.guildId, n, () => null), (t = !0);
        return t && E++, t;
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { userId: t, channelId: n, platform: r } = e;
        T[`${t}:${n}`] = r;
    },
});
