n.d(t, {
    ZP: () => ec,
    Zb: () => T,
    sH: () => S
}),
    n(230036),
    n(653041),
    n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(149765),
    s = n(442837),
    l = n(570140),
    c = n(430198),
    u = n(933557),
    d = n(853856),
    f = n(846787),
    _ = n(131704),
    p = n(700785),
    h = n(314897),
    m = n(592125),
    g = n(271383),
    E = n(430824),
    b = n(496675),
    y = n(699516),
    v = n(594174),
    O = n(981631);
function I(e, t, n) {
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
    T = 'VOCAL',
    N = null,
    A = {},
    C = {},
    R = {},
    P = null,
    w = {},
    D = {
        comparator: -1,
        channel: (0, _.kt)({
            id: O.Sc2,
            type: O.d4z.GUILD_CATEGORY,
            name: 'Uncategorized'
        })
    },
    L = k(O.kod),
    x = [],
    M = {};
function k(e) {
    return {
        id: e,
        [S]: [],
        [T]: [],
        [O.d4z.GUILD_CATEGORY]: [D],
        count: 0
    };
}
function j(e) {
    let t = A[e];
    return null == t && (t = W(e)), t;
}
function U(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function G(e) {
    e[S].sort(U), e[T].sort(U), e[O.d4z.GUILD_CATEGORY].sort(U);
}
function B(e) {
    return (0, _.r8)(e) ? S : (0, _.bw)(e) ? T : e;
}
function F() {
    let e = {},
        t = d.Z.getFavoriteChannels();
    for (let n in t) {
        let r = m.Z.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            o = (0, f.r)(t, i, r);
        e[n] = {
            channel: o,
            comparator: o.position
        };
    }
    return e;
}
function V(e) {
    if (e === O.I_8) return F();
    let t = {},
        n = m.Z.getMutableGuildChannelsForGuild(e);
    for (let e in n)
        t[e] = {
            channel: n[e],
            comparator: n[e].position
        };
    return t;
}
function Z(e) {
    let { id: t } = e,
        n = V(t);
    return (
        o().forEach(n, (n) => {
            let r = n.channel;
            if (((e.count += 1), _.zS.has(r.type) && !b.Z.can(O.Plq.VIEW_CHANNEL, r) && !c.Z.isChannelGated(r.guild_id, r.id) && r.id !== P)) return;
            let i = B(r.type);
            r.type === O.d4z.GUILD_DIRECTORY && (null == w[t] && (w[t] = []), w[t].push(n)), null != e[i] && e[i].push(n);
        }),
        e
    );
}
function H() {
    (A = {}), (w = {}), (C = {}), (R = {}), null != N && W(N);
}
function W(e) {
    let t = k(e);
    return (A[e] = t), (w[e] = []), Z(t), G(t), Y(t), en(e), t;
}
function Y(e) {
    let t = (C[e.id] = {}),
        n = {};
    e[S].forEach((e) => {
        let { channel: r } = e,
            i = (0, u.F6)(r, v.default, y.Z),
            o = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == o ? (n[i] = 1) : ((n[i] = o + 1), (i += '~'.concat(o))),
            (t[r.id] = {
                id: r.id,
                name: i
            });
    });
}
function K(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == t) return !1;
    (A[t] = void 0), N === t && W(t);
}
function z(e) {
    let {
        guild: { id: t }
    } = e;
    return delete A[t], delete C[t], delete R[t], delete w[t], !0;
}
function q(e) {
    let { guildId: t, user: n } = e;
    if (h.default.getId() !== n.id) return !1;
    (A[t] = void 0), t === N && W(t);
}
function Q(e) {
    let t = m.Z.getBasicChannel(e.id);
    null != t && null != t.guild_id && W(t.guild_id);
}
function X(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (A[t] = void 0), t === N && W(t);
}
function J(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        null != t && ((A[t] = void 0), (n = !0), N === t && W(t));
    }
    return n;
}
function $(e) {
    let { guildId: t } = e;
    (A[t] = void 0), t === N && W(t);
}
function ee(e, t) {
    return a.Db(
        p.uB({
            user: e,
            context: t,
            checkElevated: !1
        }),
        O.TC2
    );
}
function et(e, t) {
    let n = E.Z.getGuild(t);
    if (null != n && ee(e, n)) return !0;
    let r = A[t];
    null == r && (r = W(t));
    let { [S]: i, [T]: o } = r;
    for (let { channel: t } of i) if (ee(e, t)) return !0;
    for (let { channel: t } of o) if (ee(e, t)) return !0;
    return !1;
}
function en(e) {
    et(v.default.getCurrentUser(), e) ? (R[e] = !0) : delete R[e];
}
function er(e, t) {
    var n;
    P = t;
    let r = null != (n = null == e ? void 0 : e.getGuildId()) ? n : null;
    if (null == r) return !1;
    (A[r] = void 0), r === N && W(r);
}
function ei(e) {
    let { channelId: t } = e;
    return null == t && null != P ? er(m.Z.getChannel(P), null) : er(m.Z.getChannel(t), t);
}
function eo(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return h.default.getSessionId() !== r ? e : er(m.Z.getChannel(n), n) || e;
    }, !1);
}
function ea(e) {
    let { guildId: t } = e;
    if (((N = null != t ? t : null), null == t || null != A[t])) return !1;
    W(t);
}
function es() {
    W(O.I_8);
}
class el extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, g.ZP, m.Z, b.Z, h.default, c.Z, d.Z), this.syncWith([d.Z], es);
    }
    getAllGuilds() {
        return A;
    }
    getChannels(e) {
        return null != e ? j(e) : L;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null != (n = this.getFirstChannelOfType(e, t, S)) ? n : r ? this.getFirstChannelOfType(e, t, T) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.Z.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => b.Z.can(n, e.channel) && !e.channel.nsfw, t);
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
            : x;
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
        return this.getChannels(e)[O.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null != (t = C[e]) ? t : M;
    }
}
I(el, 'displayName', 'GuildChannelStore');
let ec = new el(l.Z, {
    BACKGROUND_SYNC: H,
    CHANNEL_SELECT: ea,
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
    VOICE_STATE_UPDATES: eo
});
