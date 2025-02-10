n.d(t, {
    ZP: () => eu,
    Zb: () => A,
    sH: () => S
}),
    n(653041),
    n(47120),
    n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(149765),
    o = n(442837),
    l = n(570140),
    u = n(430198),
    c = n(933557),
    d = n(853856),
    f = n(846787),
    _ = n(131704),
    p = n(700785),
    h = n(314897),
    m = n(592125),
    g = n(271383),
    E = n(430824),
    v = n(496675),
    y = n(699516),
    I = n(594174),
    T = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = 'SELECTABLE',
    A = 'VOCAL',
    N = null,
    C = {},
    R = {},
    O = {},
    D = null,
    L = {},
    x = {
        comparator: -1,
        channel: (0, _.kt)({
            id: T.Sc2,
            type: T.d4z.GUILD_CATEGORY,
            name: 'Uncategorized'
        })
    },
    w = k(T.kod),
    P = [],
    M = {};
function k(e) {
    return {
        id: e,
        [S]: [],
        [A]: [],
        [T.d4z.GUILD_CATEGORY]: [x],
        count: 0
    };
}
function U(e) {
    let t = C[e];
    return null == t && (t = Y(e)), t;
}
function G(e, t) {
    let { comparator: n } = e,
        { comparator: i } = t;
    return n - i;
}
function B(e) {
    e[S].sort(G), e[A].sort(G), e[T.d4z.GUILD_CATEGORY].sort(G);
}
function Z(e) {
    return (0, _.r8)(e) ? S : (0, _.bw)(e) ? A : e;
}
function F() {
    let e = {},
        t = d.Z.getFavoriteChannels();
    for (let n in t) {
        let i = m.Z.getChannel(n);
        if (null == i) continue;
        let r = t[n],
            a = (0, f.r)(t, r, i);
        e[n] = {
            channel: a,
            comparator: a.position
        };
    }
    return e;
}
function V(e) {
    if (e === T.I_8) return F();
    let t = {},
        n = m.Z.getMutableGuildChannelsForGuild(e);
    for (let e in n)
        t[e] = {
            channel: n[e],
            comparator: n[e].position
        };
    return t;
}
function j(e) {
    let { id: t } = e,
        n = V(t);
    return (
        a().forEach(n, (n) => {
            let i = n.channel;
            if (((e.count += 1), _.zS.has(i.type) && !v.Z.can(T.Plq.VIEW_CHANNEL, i) && !u.Z.isChannelGated(i.guild_id, i.id) && i.id !== D)) return;
            let r = Z(i.type);
            i.type === T.d4z.GUILD_DIRECTORY && (null == L[t] && (L[t] = []), L[t].push(n)), null != e[r] && e[r].push(n);
        }),
        e
    );
}
function H() {
    (C = {}), (L = {}), (R = {}), (O = {}), null != N && Y(N);
}
function Y(e) {
    let t = k(e);
    return (C[e] = t), (L[e] = []), j(t), B(t), W(t), en(e), t;
}
function W(e) {
    let t = (R[e.id] = {}),
        n = {};
    e[S].forEach((e) => {
        let { channel: i } = e,
            r = (0, c.F6)(i, I.default, y.Z),
            a = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : null;
        null == a ? (n[r] = 1) : ((n[r] = a + 1), (r += '~'.concat(a))),
            (t[i.id] = {
                id: i.id,
                name: r
            });
    });
}
function K(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), N === t && Y(t);
}
function z(e) {
    let {
        guild: { id: t }
    } = e;
    return delete C[t], delete R[t], delete O[t], delete L[t], !0;
}
function q(e) {
    let { guildId: t, user: n } = e;
    if (h.default.getId() !== n.id) return !1;
    (C[t] = void 0), t === N && Y(t);
}
function Q(e) {
    let t = m.Z.getBasicChannel(e.id);
    null != t && null != t.guild_id && Y(t.guild_id);
}
function X(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (C[t] = void 0), t === N && Y(t);
}
function J(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((C[t] = void 0), (n = !0), N === t && Y(t));
    }
    return n;
}
function $(e) {
    let { guildId: t } = e;
    (C[t] = void 0), t === N && Y(t);
}
function ee(e, t) {
    return s.Db(
        p.uB({
            user: e,
            context: t,
            checkElevated: !1
        }),
        T.TC2
    );
}
function et(e, t) {
    let n = E.Z.getGuild(t);
    if (null != n && ee(e, n)) return !0;
    let i = C[t];
    null == i && (i = Y(t));
    let { [S]: r, [A]: a } = i;
    for (let { channel: t } of r) if (ee(e, t)) return !0;
    for (let { channel: t } of a) if (ee(e, t)) return !0;
    return !1;
}
function en(e) {
    et(I.default.getCurrentUser(), e) ? (O[e] = !0) : delete O[e];
}
function ei(e, t) {
    var n;
    D = t;
    let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
    if (null == i) return !1;
    (C[i] = void 0), i === N && Y(i);
}
function er(e) {
    let { channelId: t } = e;
    return null == t && null != D ? ei(m.Z.getChannel(D), null) : ei(m.Z.getChannel(t), t);
}
function ea(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: i } = t;
        return h.default.getSessionId() !== i ? e : ei(m.Z.getChannel(n), n) || e;
    }, !1);
}
function es(e) {
    let { guildId: t } = e;
    if (((N = null != t ? t : null), null == t || null != C[t])) return !1;
    Y(t);
}
function eo() {
    Y(T.I_8);
}
class el extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, g.ZP, m.Z, v.Z, h.default, u.Z, d.Z), this.syncWith([d.Z], eo);
    }
    getAllGuilds() {
        return C;
    }
    getChannels(e) {
        return null != e ? U(e) : w;
    }
    getFirstChannelOfType(e, t, n) {
        let i = this.getChannels(e)[n].find(t);
        return null != i ? i.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null !== (n = this.getFirstChannelOfType(e, t, S)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, A) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => v.Z.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => v.Z.can(n, e.channel) && !e.channel.nsfw, t);
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
        return this.getChannels(e)[A].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !==
            (n =
                null === (t = L[e]) || void 0 === t
                    ? void 0
                    : t.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      })) && void 0 !== n
            ? n
            : P;
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return O[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[T.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null !== (t = R[e]) && void 0 !== t ? t : M;
    }
}
b(el, 'displayName', 'GuildChannelStore');
let eu = new el(l.Z, {
    BACKGROUND_SYNC: H,
    CHANNEL_SELECT: es,
    CONNECTION_OPEN: H,
    OVERLAY_INITIALIZE: H,
    CACHE_LOADED_LAZY: H,
    GUILD_CREATE: K,
    GUILD_UPDATE: K,
    GUILD_DELETE: z,
    GUILD_MEMBER_UPDATE: q,
    CHANNEL_CREATE: X,
    CHANNEL_DELETE: X,
    CHANNEL_UPDATES: J,
    GUILD_ROLE_CREATE: $,
    GUILD_ROLE_UPDATE: $,
    GUILD_ROLE_DELETE: $,
    IMPERSONATE_UPDATE: $,
    IMPERSONATE_STOP: $,
    VOICE_CHANNEL_SELECT: er,
    VOICE_CHANNEL_STATUS_UPDATE: Q,
    VOICE_STATE_UPDATES: ea
});
