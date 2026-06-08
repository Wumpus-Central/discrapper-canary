"use strict";
let i, r;
n.d(t, { A: () => b });
var s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(809733),
    c = n(288737),
    d = n(652215),
    _ = n(806931);
let h = 0,
    f = 0,
    p = {},
    E = new Set(),
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
    let t = p[d.ME] ?? {};
    a().each(t, (t, n) => {
        t.channelId === e && v(d.ME, n, () => null);
    });
}
function N(e) {
    return m.get(e) ?? new Set();
}
function v(e, t, n) {
    var i, r;
    let s = S(p, e ?? d.ME),
        a = s[t],
        o = n(a);
    if (a === o) return [!1, o, a];
    if (null != a) {
        let n;
        delete s[t],
            null != a.channelId && (delete S(g, a.channelId)[t], delete S(A, a.channelId)[t]),
            null != a.sessionId && delete S(I, t)[a.sessionId],
            (i = e ?? d.ME),
            (n = N(i)).has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? m.delete(i) : m.set(i, n));
    }
    if (null != o) {
        if (((s[t] = o), null != o.channelId && ((S(g, o.channelId)[t] = o), o.selfVideo))) {
            let n;
            (S(A, o.channelId)[t] = o), (r = e ?? d.ME), (n = N(r)).has(t) || ((n = new Set(n)).add(t), m.set(r, n));
        }
        null != o.sessionId && (S(I, t)[o.sessionId] = o);
    }
    return [!0, o, a];
}
function C(e, t) {
    return v(e, t.userId, (e) => {
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
                connectedAt: t.connectedAt,
            };
            return null != e ? e.merge(n) : new c.A(n);
        }
    });
}
function R(e) {
    let { guild: t } = e;
    a().forEach(p[t.id], (e) => {
        v(t.id, e.userId, () => null);
    }),
        delete p[t.id];
}
class O extends o.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return p;
    }
    getVoiceStateVersion() {
        return f;
    }
    getVoiceStates(e) {
        return S(p, e ?? d.ME);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
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
        let t = this.getVoiceState(e, i);
        return null != t && null != r && t.sessionId === r ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        return m.get(e) ?? E;
    }
    isCurrentClientInVoiceChannel() {
        return null != r && I[i]?.[r] != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== i || (null != r && n.sessionId === r));
    }
    hasVideo(e) {
        return Object.values(S(A, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        let n = null != r && I[i]?.[r]?.channelId;
        return t === i && e === n ? ((0, u.IA)() ? _.J7.QUEST : _.J7.DESKTOP) : T[`${t}:${e}`];
    }
    get userHasBeenMovedVersion() {
        return h;
    }
}
let b = new O(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e,
            s = null != i && i !== t.id;
        return s && ((p = {}), (g = {}), (I = {}), (A = {}), m.clear()), (i = t.id), (r = n), s;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function () {
        (p = {}), (g = {}), (I = {}), (A = {}), m.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { voiceStates: t, user: n, sessionId: s } = e;
        for (let [e, n] of ((p = {}), (g = {}), (I = {}), (A = {}), Object.entries(t)))
            for (let [t, i] of Object.entries(n)) v(e, t, () => new c.A(i));
        (i = n.id), (r = s);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e,
            [r] = v(t, i, (e) => e?.set("channelId", n));
        return r;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let [n, i, s] = C(t.guildId, t);
            return n
                ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (h += 1), f++, !0)
                : e;
        }, !1);
    },
    GUILD_DELETE: R,
    GUILD_CREATE: R,
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
            let [i] = C(e.guildId, n);
            t = t || i;
        }
        for (let n of e.removedVoiceStateUsers) v(e.guildId, n, () => null), (t = !0);
        return t && f++, t;
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { userId: t, channelId: n, platform: i } = e;
        T[`${t}:${n}`] = i;
    },
});
