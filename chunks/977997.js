"use strict";
let i, r;
n.d(t, { A: () => D });
var a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(809733),
    c = n(288737),
    u = n(652215),
    _ = n(806931);
let E = 0,
    A = 0,
    h = {},
    I = new Set(),
    f = new Map(),
    p = {},
    T = {},
    m = {},
    g = {};
function S(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function N(e) {
    let t = h[u.ME] ?? {};
    s().each(t, (t, n) => {
        t.channelId === e && O(u.ME, n, () => null);
    });
}
function C(e) {
    return f.get(e) ?? new Set();
}
function O(e, t, n) {
    var i, r;
    let a = S(h, e ?? u.ME),
        s = a[t],
        l = n(s);
    if (s === l) return [!1, l, s];
    if (null != s) {
        let n;
        delete a[t],
            null != s.channelId && (delete S(p, s.channelId)[t], delete S(T, s.channelId)[t]),
            null != s.sessionId && delete S(m, t)[s.sessionId],
            (i = e ?? u.ME),
            (n = C(i)).has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? f.delete(i) : f.set(i, n));
    }
    if (null != l) {
        if (((a[t] = l), null != l.channelId && ((S(p, l.channelId)[t] = l), l.selfVideo))) {
            let n;
            (S(T, l.channelId)[t] = l), (r = e ?? u.ME), (n = C(r)).has(t) || ((n = new Set(n)).add(t), f.set(r, n));
        }
        null != l.sessionId && (S(m, t)[l.sessionId] = l);
    }
    return [!0, l, s];
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
                connectedAt: t.connectedAt,
            };
            return null != e ? e.merge(n) : new c.A(n);
        }
    });
}
function L(e) {
    let { guild: t } = e;
    s().forEach(h[t.id], (e) => {
        O(t.id, e.userId, () => null);
    }),
        delete h[t.id];
}
class y extends l.Ay.Store {
    static displayName = "VoiceStateStore";
    getAllVoiceStates() {
        return h;
    }
    getVoiceStateVersion() {
        return A;
    }
    getVoiceStates(e) {
        return S(h, e ?? u.ME);
    }
    getVoiceStatesForChannel(e) {
        return S(p, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return S(T, e);
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
        return Object.values(S(m, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(S(m, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        return null != t ? S(m, e)?.[t] : null;
    }
    getUserVoiceChannelId(e, t) {
        return this.getVoiceState(e, t)?.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, i);
        return null != t && null != r && t.sessionId === r ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        return f.get(e) ?? I;
    }
    isCurrentClientInVoiceChannel() {
        return null != r && m[i]?.[r] != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== i || (null != r && n.sessionId === r));
    }
    hasVideo(e) {
        return Object.values(S(T, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        let n = null != r && m[i]?.[r]?.channelId;
        return t === i && e === n ? ((0, d.IA)() ? _.J7.QUEST : _.J7.DESKTOP) : g[`${t}:${e}`];
    }
    get userHasBeenMovedVersion() {
        return E;
    }
}
let D = new y(o.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e,
            a = null != i && i !== t.id;
        return a && ((h = {}), (p = {}), (m = {}), (T = {}), f.clear()), (i = t.id), (r = n), a;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function () {
        (h = {}), (p = {}), (m = {}), (T = {}), f.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { voiceStates: t, user: n, sessionId: a } = e;
        for (let [e, n] of ((h = {}), (p = {}), (m = {}), (T = {}), Object.entries(t)))
            for (let [t, i] of Object.entries(n)) O(e, t, () => new c.A(i));
        (i = n.id), (r = a);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e,
            [r] = O(t, i, (e) => e?.set("channelId", n));
        return r;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let [n, i, a] = R(t.guildId, t);
            return n
                ? (t.sessionId === r && null != i && null != a && a.channelId !== i.channelId && (E += 1), A++, !0)
                : e;
        }, !1);
    },
    GUILD_DELETE: L,
    GUILD_CREATE: L,
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
            let [i] = R(e.guildId, n);
            t = t || i;
        }
        for (let n of e.removedVoiceStateUsers) O(e.guildId, n, () => null), (t = !0);
        return t && A++, t;
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { userId: t, channelId: n, platform: i } = e;
        g[`${t}:${n}`] = i;
    },
});
