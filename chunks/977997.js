"use strict";
let i, r;
n.d(t, { A: () => D });
var s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    d = n(809733),
    _ = n(288737),
    u = n(652215),
    c = n(806931);
let E = 0,
    h = 0,
    m = {},
    f = new Set(),
    g = new Map(),
    p = {},
    A = {},
    I = {},
    T = {};
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function N(e) {
    let t = m[u.ME] ?? {};
    a().each(t, (t, n) => {
        t.channelId === e && R(u.ME, n, () => null);
    });
}
function C(e) {
    return g.get(e) ?? new Set();
}
function R(e, t, n) {
    var i, r;
    let s = S(m, e ?? u.ME),
        a = s[t],
        o = n(a);
    if (a === o) return [!1, o, a];
    if (null != a) {
        let n;
        delete s[t],
            null != a.channelId && (delete S(p, a.channelId)[t], delete S(A, a.channelId)[t]),
            null != a.sessionId && delete S(I, t)[a.sessionId],
            (i = e ?? u.ME),
            (n = C(i)).has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? g.delete(i) : g.set(i, n));
    }
    if (null != o) {
        if (((s[t] = o), null != o.channelId && ((S(p, o.channelId)[t] = o), o.selfVideo))) {
            let n;
            (S(A, o.channelId)[t] = o), (r = e ?? u.ME), (n = C(r)).has(t) || ((n = new Set(n)).add(t), g.set(r, n));
        }
        null != o.sessionId && (S(I, t)[o.sessionId] = o);
    }
    return [!0, o, a];
}
function O(e, t) {
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
                connectedAt: t.connectedAt,
            };
            return null != e ? e.merge(n) : new _.A(n);
        }
    });
}
function y(e) {
    let { guild: t } = e;
    a().forEach(m[t.id], (e) => {
        R(t.id, e.userId, () => null);
    }),
        delete m[t.id];
}
class v extends o.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return m;
    }
    getVoiceStateVersion() {
        return h;
    }
    getVoiceStates(e) {
        return S(m, e ?? u.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(p, e);
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
        return S(p, e)?.[t];
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
        return g.get(e) ?? f;
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
        return t === i && e === n ? ((0, d.I)() ? c.J7.QUEST : c.J7.DESKTOP) : T[`${t}:${e}`];
    }
    get userHasBeenMovedVersion() {
        return E;
    }
}
let D = new v(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e,
            s = null != i && i !== t.id;
        return s && ((m = {}), (p = {}), (I = {}), (A = {}), g.clear()), (i = t.id), (r = n), s;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function () {
        (m = {}), (p = {}), (I = {}), (A = {}), g.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { voiceStates: t, user: n, sessionId: s } = e;
        for (let [e, n] of ((m = {}), (p = {}), (I = {}), (A = {}), Object.entries(t)))
            for (let [t, i] of Object.entries(n)) R(e, t, () => new _.A(i));
        (i = n.id), (r = s);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e,
            [r] = R(t, i, (e) => e?.set("channelId", n));
        return r;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let [n, i, s] = O(t.guildId, t);
            return n
                ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (E += 1), h++, !0)
                : e;
        }, !1);
    },
    GUILD_DELETE: y,
    GUILD_CREATE: y,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        N(t.id);
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        N(t);
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of e.voiceStates) {
            let [i] = O(e.guildId, n);
            t = t || i;
        }
        for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), (t = !0);
        return t && h++, t;
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { userId: t, channelId: n, platform: i } = e;
        T[`${t}:${n}`] = i;
    },
});
