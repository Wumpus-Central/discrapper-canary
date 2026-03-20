"use strict";
n.d(t, { Ay: () => eo, I6: () => S, vM: () => y }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(136722),
    a = n(311907),
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
    E = n(71393),
    g = n(576705),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = "SELECTABLE",
    y = "VOCAL",
    v = null,
    N = {},
    C = {},
    R = {},
    O = null,
    b = {},
    D = {
        comparator: -1,
        channel: (0, _.createChannelRecord)({ id: T._Ee, type: T.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    L = x(T.eGj),
    w = [],
    M = {};
function x(e) {
    return { id: e, [S]: [], [y]: [], [T.rbe.GUILD_CATEGORY]: [D], count: 0 };
}
function P(e) {
    let t = N[e];
    return null == t && (t = j(e)), t;
}
function k(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function U(e) {
    e[S].sort(k), e[y].sort(k), e[T.rbe.GUILD_CATEGORY].sort(k);
}
function G(e) {
    return (0, _.tr)(e) ? S : (0, _.ay)(e) ? y : e;
}
function F() {
    let e = {},
        t = c.A.getFavoriteChannels();
    for (let n in t) {
        let r = h.A.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            s = (0, d.K)(t, i, r);
        e[n] = { channel: s, comparator: s.position };
    }
    return e;
}
function V(e) {
    if (e === T.YYv) return F();
    let t = {},
        n = h.A.getMutableGuildChannelsForGuild(e);
    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
    return t;
}
function B(e) {
    let { id: t } = e,
        n = V(t);
    return (
        i().forEach(n, (n) => {
            let r = n.channel;
            if (
                ((e.count += 1),
                _.JT.has(r.type) &&
                    !g.A.can(T.xBc.VIEW_CHANNEL, r) &&
                    !l.A.isChannelGated(r.guild_id, r.id) &&
                    r.id !== O)
            )
                return;
            let i = G(r.type);
            r.type === T.rbe.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)),
                null != e[i] && e[i].push(n);
        }),
        e
    );
}
function H() {
    (N = {}), (b = {}), (C = {}), (R = {}), null != v && j(v);
}
function j(e) {
    let t = x(e);
    return (N[e] = t), (b[e] = []), B(t), U(t), Y(t), ee(e), t;
}
function Y(e) {
    let t = (C[e.id] = {}),
        n = {};
    e[S].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.m1)(r, I.default, A.A),
            s = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == s ? (n[i] = 1) : ((n[i] = s + 1), (i += `~${s}`)), (t[r.id] = { id: r.id, name: i });
    });
}
function W(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (N[t] = void 0), v === t && j(t);
}
function K(e) {
    let {
        guild: { id: t },
    } = e;
    return delete N[t], delete C[t], delete R[t], delete b[t], !0;
}
function $(e) {
    let { guildId: t, user: n } = e;
    if (p.default.getId() !== n.id) return !1;
    (N[t] = void 0), t === v && j(t);
}
function z(e) {
    let t = h.A.getBasicChannel(e.id);
    null != t && null != t.guild_id && j(t.guild_id);
}
function q(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (N[t] = void 0), t === v && j(t);
}
function Z(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((N[t] = void 0), (n = !0), v === t && j(t));
    }
    return n;
}
function X(e) {
    let { guildId: t } = e;
    (N[t] = void 0), t === v && j(t);
}
function Q(e, t) {
    return s.X8(f.cc({ user: e, context: t, checkElevated: !1 }), T.Lti);
}
function J(e, t) {
    let n = E.A.getGuild(t);
    if (null != n && Q(e, n)) return !0;
    let r = N[t];
    null == r && (r = j(t));
    let { [S]: i, [y]: s } = r;
    for (let { channel: t } of i) if (Q(e, t)) return !0;
    for (let { channel: t } of s) if (Q(e, t)) return !0;
    return !1;
}
function ee(e) {
    J(I.default.getCurrentUser(), e) ? (R[e] = !0) : delete R[e];
}
function et(e, t) {
    O = t;
    let n = e?.getGuildId() ?? null;
    return null != n && ((N[n] = void 0), n === v && j(n), !0);
}
function en(e) {
    let { channelId: t } = e;
    return null == t && null != O ? et(h.A.getChannel(O), null) : et(h.A.getChannel(t), t);
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
    if (((v = t ?? null), null == t || null != N[t])) return !1;
    j(t);
}
function es() {
    j(T.YYv);
}
class ea extends a.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(p.default, h.A, c.A, l.A, m.Ay, E.A, g.A, I.default), this.syncWith([c.A], es);
    }
    getAllGuilds() {
        return N;
    }
    getChannels(e) {
        return null != e ? P(e) : L;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.getFirstChannelOfType(e, t, S) ?? (n ? this.getFirstChannelOfType(e, t, y) : null);
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => g.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => g.A.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[S].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[S];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[y].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        return (
            b[e]?.map((e) => {
                let { channel: t } = e;
                return t.id;
            }) ?? w
        );
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return R[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[T.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        return null != e ? (C[e] ?? M) : M;
    }
}
let eo = new ea(o.h, {
    BACKGROUND_SYNC: H,
    CHANNEL_SELECT: ei,
    CONNECTION_OPEN: H,
    OVERLAY_INITIALIZE: H,
    CACHE_LOADED_LAZY: H,
    GUILD_CREATE: W,
    GUILD_UPDATE: W,
    GUILD_DELETE: K,
    GUILD_MEMBER_UPDATE: $,
    CHANNEL_CREATE: q,
    CHANNEL_DELETE: q,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_CREATE: X,
    GUILD_ROLE_UPDATE: X,
    GUILD_ROLE_DELETE: X,
    IMPERSONATE_UPDATE: X,
    IMPERSONATE_STOP: X,
    VOICE_CHANNEL_SELECT: en,
    VOICE_CHANNEL_STATUS_UPDATE: z,
    VOICE_STATE_UPDATES: er,
});
