"use strict";
n.d(t, { Ay: () => eo, I6: () => y, vM: () => S }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(311907),
    o = n(73153),
    l = n(717125),
    u = n(47167),
    c = n(181079),
    d = n(424345),
    _ = n(95701),
    f = n(488926),
    p = n(961350),
    h = n(734057),
    m = n(696451),
    g = n(71393),
    E = n(576705),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let y = "SELECTABLE",
    S = "VOCAL",
    v = null,
    C = {},
    b = {},
    N = {},
    R = null,
    O = {},
    D = {
        comparator: -1,
        channel: (0, _.createChannelRecord)({ id: T._Ee, type: T.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    L = P(T.eGj),
    w = [],
    x = {};
function P(e) {
    return { id: e, [y]: [], [S]: [], [T.rbe.GUILD_CATEGORY]: [D], count: 0 };
}
function M(e) {
    let t = C[e];
    return null == t && (t = H(e)), t;
}
function k(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function U(e) {
    e[y].sort(k), e[S].sort(k), e[T.rbe.GUILD_CATEGORY].sort(k);
}
function G(e) {
    return (0, _.tr)(e) ? y : (0, _.ay)(e) ? S : e;
}
function V() {
    let e = {},
        t = c.A.getFavoriteChannels();
    for (let n in t) {
        let r = h.A.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            a = (0, d.K)(t, i, r);
        e[n] = { channel: a, comparator: a.position };
    }
    return e;
}
function F(e) {
    if (e === T.YYv) return V();
    let t = {},
        n = h.A.getMutableGuildChannelsForGuild(e);
    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
    return t;
}
function B(e) {
    let { id: t } = e,
        n = F(t);
    return (
        i().forEach(n, (n) => {
            let r = n.channel;
            if (
                ((e.count += 1),
                _.JT.has(r.type) &&
                    !E.A.can(T.xBc.VIEW_CHANNEL, r) &&
                    !l.A.isChannelGated(r.guild_id, r.id) &&
                    r.id !== R)
            )
                return;
            let i = G(r.type);
            r.type === T.rbe.GUILD_DIRECTORY && (null == O[t] && (O[t] = []), O[t].push(n)),
                null != e[i] && e[i].push(n);
        }),
        e
    );
}
function j() {
    (C = {}), (O = {}), (b = {}), (N = {}), null != v && H(v);
}
function H(e) {
    let t = P(e);
    return (C[e] = t), (O[e] = []), B(t), U(t), Y(t), ee(e), t;
}
function Y(e) {
    let t = (b[e.id] = {}),
        n = {};
    e[y].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.m1)(r, I.default, A.A),
            a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += `~${a}`)), (t[r.id] = { id: r.id, name: i });
    });
}
function W(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), v === t && H(t);
}
function K(e) {
    let {
        guild: { id: t },
    } = e;
    return delete C[t], delete b[t], delete N[t], delete O[t], !0;
}
function z(e) {
    let { guildId: t, user: n } = e;
    if (p.default.getId() !== n.id) return !1;
    (C[t] = void 0), t === v && H(t);
}
function $(e) {
    let t = h.A.getBasicChannel(e.id);
    null != t && null != t.guild_id && H(t.guild_id);
}
function q(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), t === v && H(t);
}
function Z(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((C[t] = void 0), (n = !0), v === t && H(t));
    }
    return n;
}
function Q(e) {
    let { guildId: t } = e;
    (C[t] = void 0), t === v && H(t);
}
function X(e, t) {
    return a.X8(f.cc({ user: e, context: t, checkElevated: !1 }), T.Lti);
}
function J(e, t) {
    let n = g.A.getGuild(t);
    if (null != n && X(e, n)) return !0;
    let r = C[t];
    null == r && (r = H(t));
    let { [y]: i, [S]: a } = r;
    for (let { channel: t } of i) if (X(e, t)) return !0;
    for (let { channel: t } of a) if (X(e, t)) return !0;
    return !1;
}
function ee(e) {
    J(I.default.getCurrentUser(), e) ? (N[e] = !0) : delete N[e];
}
function et(e, t) {
    R = t;
    let n = e?.getGuildId() ?? null;
    if (null == n) return !1;
    (C[n] = void 0), n === v && H(n);
}
function en(e) {
    let { channelId: t } = e;
    return null == t && null != R ? et(h.A.getChannel(R), null) : et(h.A.getChannel(t), t);
}
function er(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return p.default.getSessionId() !== r ? e : et(h.A.getChannel(n), n) || e;
    }, !1);
}
function ei(e) {
    let { guildId: t } = e;
    if (((v = t ?? null), null == t || null != C[t])) return !1;
    H(t);
}
function ea() {
    H(T.YYv);
}
class es extends s.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(p.default, h.A, c.A, l.A, m.Ay, g.A, E.A, I.default), this.syncWith([c.A], ea);
    }
    getAllGuilds() {
        return C;
    }
    getChannels(e) {
        return null != e ? M(e) : L;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.getFirstChannelOfType(e, t, y) ?? (n ? this.getFirstChannelOfType(e, t, S) : null);
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => E.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => E.A.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[y].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[y];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[S].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        return (
            O[e]?.map((e) => {
                let { channel: t } = e;
                return t.id;
            }) ?? w
        );
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return N[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[T.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        return null != e ? (b[e] ?? x) : x;
    }
}
let eo = new es(o.h, {
    BACKGROUND_SYNC: j,
    CHANNEL_SELECT: ei,
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: j,
    CACHE_LOADED_LAZY: j,
    GUILD_CREATE: W,
    GUILD_UPDATE: W,
    GUILD_DELETE: K,
    GUILD_MEMBER_UPDATE: z,
    CHANNEL_CREATE: q,
    CHANNEL_DELETE: q,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_CREATE: Q,
    GUILD_ROLE_UPDATE: Q,
    GUILD_ROLE_DELETE: Q,
    IMPERSONATE_UPDATE: Q,
    IMPERSONATE_STOP: Q,
    VOICE_CHANNEL_SELECT: en,
    VOICE_CHANNEL_STATUS_UPDATE: $,
    VOICE_STATE_UPDATES: er,
});
