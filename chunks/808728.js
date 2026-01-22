n.d(t, {
    Ay: () => ec,
    I6: () => S,
    vM: () => I,
}),
    n(638769),
    n(321073),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(136722),
    o = n(311907),
    l = n(73153),
    c = n(717125),
    u = n(47167),
    d = n(181079),
    f = n(424345),
    p = n(95701),
    _ = n(488926),
    h = n(961350),
    m = n(734057),
    g = n(696451),
    E = n(71393),
    b = n(576705),
    y = n(994500),
    O = n(287809),
    A = n(652215);

function v(e, t, n) {
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
let S = "SELECTABLE",
    I = "VOCAL",
    T = null,
    C = {},
    N = {},
    R = {},
    w = null,
    P = {},
    D = {
        comparator: -1,
        channel: (0, p.createChannelRecord)({
            id: A._Ee,
            type: A.rbe.GUILD_CATEGORY,
            name: "Uncategorized",
        }),
    },
    x = M(A.eGj),
    L = [],
    j = {};

function M(e) {
    return {
        id: e,
        [S]: [],
        [I]: [],
        [A.rbe.GUILD_CATEGORY]: [D],
        count: 0,
    };
}

function k(e) {
    let t = C[e];
    return null == t && (t = W(e)), t;
}

function U(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}

function G(e) {
    e[S].sort(U), e[I].sort(U), e[A.rbe.GUILD_CATEGORY].sort(U);
}

function V(e) {
    return (0, p.tr)(e) ? S : (0, p.ay)(e) ? I : e;
}

function F() {
    let e = {},
        t = d.A.getFavoriteChannels();
    for (let n in t) {
        let r = m.A.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            a = (0, f.K)(t, i, r);
        e[n] = {
            channel: a,
            comparator: a.position,
        };
    }
    return e;
}

function B(e) {
    if (e === A.YYv) return F();
    let t = {},
        n = m.A.getMutableGuildChannelsForGuild(e);
    for (let e in n)
        t[e] = {
            channel: n[e],
            comparator: n[e].position,
        };
    return t;
}

function H(e) {
    let { id: t } = e,
        n = B(t);
    return (
        a().forEach(n, (n) => {
            let r = n.channel;
            if (
                ((e.count += 1),
                p.JT.has(r.type) &&
                    !b.A.can(A.xBc.VIEW_CHANNEL, r) &&
                    !c.A.isChannelGated(r.guild_id, r.id) &&
                    r.id !== w)
            )
                return;
            let i = V(r.type);
            r.type === A.rbe.GUILD_DIRECTORY && (null == P[t] && (P[t] = []), P[t].push(n)),
                null != e[i] && e[i].push(n);
        }),
        e
    );
}

function Y() {
    (C = {}), (P = {}), (N = {}), (R = {}), null != T && W(T);
}

function W(e) {
    let t = M(e);
    return (C[e] = t), (P[e] = []), H(t), G(t), K(t), en(e), t;
}

function K(e) {
    let t = (N[e.id] = {}),
        n = {};
    e[S].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.m1)(r, O.default, y.A),
            a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += "~".concat(a))),
            (t[r.id] = {
                id: r.id,
                name: i,
            });
    });
}

function z(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), T === t && W(t);
}

function q(e) {
    let {
        guild: { id: t },
    } = e;
    return delete C[t], delete N[t], delete R[t], delete P[t], !0;
}

function X(e) {
    let { guildId: t, user: n } = e;
    if (h.default.getId() !== n.id) return !1;
    (C[t] = void 0), t === T && W(t);
}

function Z(e) {
    let t = m.A.getBasicChannel(e.id);
    null != t && null != t.guild_id && W(t.guild_id);
}

function Q(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), t === T && W(t);
}

function $(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((C[t] = void 0), (n = !0), T === t && W(t));
    }
    return n;
}

function J(e) {
    let { guildId: t } = e;
    (C[t] = void 0), t === T && W(t);
}

function ee(e, t) {
    return s.X8(
        _.cc({
            user: e,
            context: t,
            checkElevated: !1,
        }),
        A.Lti,
    );
}

function et(e, t) {
    let n = E.A.getGuild(t);
    if (null != n && ee(e, n)) return !0;
    let r = C[t];
    null == r && (r = W(t));
    let { [S]: i, [I]: a } = r;
    for (let { channel: t } of i) if (ee(e, t)) return !0;
    for (let { channel: t } of a) if (ee(e, t)) return !0;
    return !1;
}

function en(e) {
    et(O.default.getCurrentUser(), e) ? (R[e] = !0) : delete R[e];
}

function er(e, t) {
    var n;
    w = t;
    let r = null != (n = null == e ? void 0 : e.getGuildId()) ? n : null;
    if (null == r) return !1;
    (C[r] = void 0), r === T && W(r);
}

function ei(e) {
    let { channelId: t } = e;
    return null == t && null != w ? er(m.A.getChannel(w), null) : er(m.A.getChannel(t), t);
}

function ea(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return h.default.getSessionId() !== r ? e : er(m.A.getChannel(n), n) || e;
    }, !1);
}

function es(e) {
    let { guildId: t } = e;
    if (((T = null != t ? t : null), null == t || null != C[t])) return !1;
    W(t);
}

function eo() {
    W(A.YYv);
}
class el extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(h.default, m.A, d.A, c.A, g.Ay, E.A, b.A, O.default), this.syncWith([d.A], eo);
    }
    getAllGuilds() {
        return C;
    }
    getChannels(e) {
        return null != e ? k(e) : x;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null != (n = this.getFirstChannelOfType(e, t, S)) ? n : r ? this.getFirstChannelOfType(e, t, I) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.A.can(n, e.channel) && !e.channel.nsfw, t);
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
        return this.getChannels(e)[I].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !=
            (t =
                null == (n = P[e])
                    ? void 0
                    : n.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      }))
            ? t
            : L;
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
        return this.getChannels(e)[A.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null != (t = N[e]) ? t : j;
    }
}
v(el, "displayName", "GuildChannelStore");
let ec = new el(l.h, {
    BACKGROUND_SYNC: Y,
    CHANNEL_SELECT: es,
    CONNECTION_OPEN: Y,
    OVERLAY_INITIALIZE: Y,
    CACHE_LOADED_LAZY: Y,
    GUILD_CREATE: z,
    GUILD_UPDATE: z,
    GUILD_DELETE: q,
    GUILD_MEMBER_UPDATE: X,
    CHANNEL_CREATE: Q,
    CHANNEL_DELETE: Q,
    CHANNEL_UPDATES: $,
    GUILD_ROLE_CREATE: J,
    GUILD_ROLE_UPDATE: J,
    GUILD_ROLE_DELETE: J,
    IMPERSONATE_UPDATE: J,
    IMPERSONATE_STOP: J,
    VOICE_CHANNEL_SELECT: ei,
    VOICE_CHANNEL_STATUS_UPDATE: Z,
    VOICE_STATE_UPDATES: ea,
});
