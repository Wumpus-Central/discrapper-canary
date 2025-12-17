n.d(t, {
    ZP: () => ec,
    Zb: () => T,
    sH: () => I,
}),
    n(642613),
    n(539854),
    n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(149765),
    s = n(442837),
    l = n(570140),
    c = n(430198),
    u = n(933557),
    d = n(853856),
    f = n(846787),
    p = n(131704),
    _ = n(700785),
    m = n(314897),
    h = n(592125),
    g = n(271383),
    E = n(430824),
    b = n(496675),
    y = n(699516),
    O = n(594174),
    v = n(981631);
function S(e, t, n) {
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
let I = "SELECTABLE",
    T = "VOCAL",
    C = null,
    A = {},
    N = {},
    P = {},
    R = null,
    w = {},
    D = {
        comparator: -1,
        channel: (0, p.createChannelRecord)({
            id: v.Sc2,
            type: v.d4z.GUILD_CATEGORY,
            name: "Uncategorized",
        }),
    },
    x = M(v.kod),
    L = [],
    j = {};
function M(e) {
    return {
        id: e,
        [I]: [],
        [T]: [],
        [v.d4z.GUILD_CATEGORY]: [D],
        count: 0,
    };
}
function k(e) {
    let t = A[e];
    return null == t && (t = Y(e)), t;
}
function U(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function G(e) {
    e[I].sort(U), e[T].sort(U), e[v.d4z.GUILD_CATEGORY].sort(U);
}
function Z(e) {
    return (0, p.r8)(e) ? I : (0, p.bw)(e) ? T : e;
}
function F() {
    let e = {},
        t = d.Z.getFavoriteChannels();
    for (let n in t) {
        let r = h.Z.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            a = (0, f.r)(t, i, r);
        e[n] = {
            channel: a,
            comparator: a.position,
        };
    }
    return e;
}
function B(e) {
    if (e === v.I_8) return F();
    let t = {},
        n = h.Z.getMutableGuildChannelsForGuild(e);
    for (let e in n)
        t[e] = {
            channel: n[e],
            comparator: n[e].position,
        };
    return t;
}
function V(e) {
    let { id: t } = e,
        n = B(t);
    return (
        a().forEach(n, (n) => {
            let r = n.channel;
            if (
                ((e.count += 1),
                p.zS.has(r.type) &&
                    !b.Z.can(v.Plq.VIEW_CHANNEL, r) &&
                    !c.Z.isChannelGated(r.guild_id, r.id) &&
                    r.id !== R)
            )
                return;
            let i = Z(r.type);
            r.type === v.d4z.GUILD_DIRECTORY && (null == w[t] && (w[t] = []), w[t].push(n)),
                null != e[i] && e[i].push(n);
        }),
        e
    );
}
function H() {
    (A = {}), (w = {}), (N = {}), (P = {}), null != C && Y(C);
}
function Y(e) {
    let t = M(e);
    return (A[e] = t), (w[e] = []), V(t), G(t), W(t), en(e), t;
}
function W(e) {
    let t = (N[e.id] = {}),
        n = {};
    e[I].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.F6)(r, O.default, y.Z),
            a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += "~".concat(a))),
            (t[r.id] = {
                id: r.id,
                name: i,
            });
    });
}
function K(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (A[t] = void 0), C === t && Y(t);
}
function z(e) {
    let {
        guild: { id: t },
    } = e;
    return delete A[t], delete N[t], delete P[t], delete w[t], !0;
}
function q(e) {
    let { guildId: t, user: n } = e;
    if (m.default.getId() !== n.id) return !1;
    (A[t] = void 0), t === C && Y(t);
}
function Q(e) {
    let t = h.Z.getBasicChannel(e.id);
    null != t && null != t.guild_id && Y(t.guild_id);
}
function X(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (A[t] = void 0), t === C && Y(t);
}
function J(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((A[t] = void 0), (n = !0), C === t && Y(t));
    }
    return n;
}
function $(e) {
    let { guildId: t } = e;
    (A[t] = void 0), t === C && Y(t);
}
function ee(e, t) {
    return o.Db(
        _.uB({
            user: e,
            context: t,
            checkElevated: !1,
        }),
        v.TC2,
    );
}
function et(e, t) {
    let n = E.Z.getGuild(t);
    if (null != n && ee(e, n)) return !0;
    let r = A[t];
    null == r && (r = Y(t));
    let { [I]: i, [T]: a } = r;
    for (let { channel: t } of i) if (ee(e, t)) return !0;
    for (let { channel: t } of a) if (ee(e, t)) return !0;
    return !1;
}
function en(e) {
    et(O.default.getCurrentUser(), e) ? (P[e] = !0) : delete P[e];
}
function er(e, t) {
    var n;
    R = t;
    let r = null != (n = null == e ? void 0 : e.getGuildId()) ? n : null;
    if (null == r) return !1;
    (A[r] = void 0), r === C && Y(r);
}
function ei(e) {
    let { channelId: t } = e;
    return null == t && null != R ? er(h.Z.getChannel(R), null) : er(h.Z.getChannel(t), t);
}
function ea(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return m.default.getSessionId() !== r ? e : er(h.Z.getChannel(n), n) || e;
    }, !1);
}
function eo(e) {
    let { guildId: t } = e;
    if (((C = null != t ? t : null), null == t || null != A[t])) return !1;
    Y(t);
}
function es() {
    Y(v.I_8);
}
class el extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(m.default, h.Z, d.Z, c.Z, g.ZP, E.Z, b.Z, O.default), this.syncWith([d.Z], es);
    }
    getAllGuilds() {
        return A;
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
        return null != (n = this.getFirstChannelOfType(e, t, I)) ? n : r ? this.getFirstChannelOfType(e, t, T) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.Z.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.Z.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[I].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[I];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[T].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !=
            (n =
                null == (t = w[e])
                    ? void 0
                    : t.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      }))
            ? n
            : L;
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return P[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[v.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null != (t = N[e]) ? t : j;
    }
}
S(el, "displayName", "GuildChannelStore");
let ec = new el(l.Z, {
    BACKGROUND_SYNC: H,
    CHANNEL_SELECT: eo,
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
    VOICE_CHANNEL_SELECT: ei,
    VOICE_CHANNEL_STATUS_UPDATE: Q,
    VOICE_STATE_UPDATES: ea,
});
