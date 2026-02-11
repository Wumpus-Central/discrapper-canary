"use strict";
n.d(t, { Ay: () => el, I6: () => S, vM: () => v }), n(321073);
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
    h = n(961350),
    p = n(734057),
    g = n(696451),
    E = n(71393),
    A = n(576705),
    I = n(994500),
    T = n(287809),
    y = n(652215);
let S = "SELECTABLE",
    v = "VOCAL",
    C = null,
    b = {},
    N = {},
    R = {},
    O = null,
    D = {},
    L = {
        comparator: -1,
        channel: (0, _.createChannelRecord)({ id: y._Ee, type: y.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    w = M(y.eGj),
    x = [],
    P = {};
function M(e) {
    return { id: e, [S]: [], [v]: [], [y.rbe.GUILD_CATEGORY]: [L], count: 0 };
}
function k(e) {
    let t = b[e];
    return null == t && (t = Y(e)), t;
}
function U(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function G(e) {
    e[S].sort(U), e[v].sort(U), e[y.rbe.GUILD_CATEGORY].sort(U);
}
function F(e) {
    return (0, _.tr)(e) ? S : (0, _.ay)(e) ? v : e;
}
function V() {
    let e = {},
        t = c.A.getFavoriteChannels();
    for (let n in t) {
        let r = p.A.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            a = (0, d.K)(t, i, r);
        e[n] = { channel: a, comparator: a.position };
    }
    return e;
}
function B(e) {
    if (e === y.YYv) return V();
    let t = {},
        n = p.A.getMutableGuildChannelsForGuild(e);
    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
    return t;
}
function j(e) {
    let { id: t } = e,
        n = B(t);
    return (
        i().forEach(n, (n) => {
            let r = n.channel;
            if (
                ((e.count += 1),
                _.JT.has(r.type) &&
                    !A.A.can(y.xBc.VIEW_CHANNEL, r) &&
                    !l.A.isChannelGated(r.guild_id, r.id) &&
                    r.id !== O)
            )
                return;
            let i = F(r.type);
            r.type === y.rbe.GUILD_DIRECTORY && (null == D[t] && (D[t] = []), D[t].push(n)),
                null != e[i] && e[i].push(n);
        }),
        e
    );
}
function H() {
    (b = {}), (D = {}), (N = {}), (R = {}), null != C && Y(C);
}
function Y(e) {
    let t = M(e);
    return (b[e] = t), (D[e] = []), j(t), G(t), W(t), et(e), t;
}
function W(e) {
    let t = (N[e.id] = {}),
        n = {};
    e[S].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.m1)(r, T.default, I.A),
            a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += `~${a}`)), (t[r.id] = { id: r.id, name: i });
    });
}
function K(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (b[t] = void 0), C === t && Y(t);
}
function $(e) {
    let {
        guild: { id: t },
    } = e;
    return delete b[t], delete N[t], delete R[t], delete D[t], !0;
}
function z(e) {
    let { guildId: t, user: n } = e;
    if (h.default.getId() !== n.id) return !1;
    (b[t] = void 0), t === C && Y(t);
}
function q(e) {
    let t = p.A.getBasicChannel(e.id);
    null != t && null != t.guild_id && Y(t.guild_id);
}
function X(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (b[t] = void 0), t === C && Y(t);
}
function Z(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((b[t] = void 0), (n = !0), C === t && Y(t));
    }
    return n;
}
function Q(e) {
    let { guildId: t } = e;
    (b[t] = void 0), t === C && Y(t);
}
function J(e, t) {
    return a.X8(f.cc({ user: e, context: t, checkElevated: !1 }), y.Lti);
}
function ee(e, t) {
    let n = E.A.getGuild(t);
    if (null != n && J(e, n)) return !0;
    let r = b[t];
    null == r && (r = Y(t));
    let { [S]: i, [v]: a } = r;
    for (let { channel: t } of i) if (J(e, t)) return !0;
    for (let { channel: t } of a) if (J(e, t)) return !0;
    return !1;
}
function et(e) {
    ee(T.default.getCurrentUser(), e) ? (R[e] = !0) : delete R[e];
}
function en(e, t) {
    O = t;
    let n = e?.getGuildId() ?? null;
    if (null == n) return !1;
    (b[n] = void 0), n === C && Y(n);
}
function er(e) {
    let { channelId: t } = e;
    return null == t && null != O ? en(p.A.getChannel(O), null) : en(p.A.getChannel(t), t);
}
function ei(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return h.default.getSessionId() !== r ? e : en(p.A.getChannel(n), n) || e;
    }, !1);
}
function ea(e) {
    let { guildId: t } = e;
    if (((C = t ?? null), null == t || null != b[t])) return !1;
    Y(t);
}
function es() {
    Y(y.YYv);
}
class eo extends s.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(h.default, p.A, c.A, l.A, g.Ay, E.A, A.A, T.default), this.syncWith([c.A], es);
    }
    getAllGuilds() {
        return b;
    }
    getChannels(e) {
        return null != e ? k(e) : w;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.getFirstChannelOfType(e, t, S) ?? (n ? this.getFirstChannelOfType(e, t, v) : null);
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => A.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => A.A.can(n, e.channel) && !e.channel.nsfw, t);
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
        return this.getChannels(e)[v].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        return (
            D[e]?.map((e) => {
                let { channel: t } = e;
                return t.id;
            }) ?? x
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
        return this.getChannels(e)[y.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        return null != e ? (N[e] ?? P) : P;
    }
}
let el = new eo(o.h, {
    BACKGROUND_SYNC: H,
    CHANNEL_SELECT: ea,
    CONNECTION_OPEN: H,
    OVERLAY_INITIALIZE: H,
    CACHE_LOADED_LAZY: H,
    GUILD_CREATE: K,
    GUILD_UPDATE: K,
    GUILD_DELETE: $,
    GUILD_MEMBER_UPDATE: z,
    CHANNEL_CREATE: X,
    CHANNEL_DELETE: X,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_CREATE: Q,
    GUILD_ROLE_UPDATE: Q,
    GUILD_ROLE_DELETE: Q,
    IMPERSONATE_UPDATE: Q,
    IMPERSONATE_STOP: Q,
    VOICE_CHANNEL_SELECT: er,
    VOICE_CHANNEL_STATUS_UPDATE: q,
    VOICE_STATE_UPDATES: ei,
});
