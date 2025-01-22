r.d(n, {
    Zb: function () {
        return O;
    },
    sH: function () {
        return R;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(724458);
var l = r(392711),
    u = r.n(l),
    c = r(149765),
    d = r(442837),
    f = r(570140),
    p = r(430198),
    h = r(933557),
    _ = r(853856),
    m = r(846787),
    g = r(131704),
    E = r(700785),
    v = r(314897),
    y = r(592125),
    b = r(271383),
    I = r(430824),
    T = r(496675),
    S = r(699516),
    A = r(594174),
    C = r(981631);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let R = 'SELECTABLE',
    O = 'VOCAL',
    D = null,
    x = {},
    L = {},
    w = {},
    P = null,
    M = {},
    k = {
        comparator: -1,
        channel: (0, g.kt)({
            id: C.Sc2,
            type: C.d4z.GUILD_CATEGORY,
            name: 'Uncategorized'
        })
    },
    U = Z(C.kod),
    B = [],
    G = {};
function Z(e) {
    return {
        id: e,
        [R]: [],
        [O]: [],
        [C.d4z.GUILD_CATEGORY]: [k],
        count: 0
    };
}
function F(e) {
    let n = x[e];
    return null == n && (n = q(e)), n;
}
function V(e, n) {
    let { comparator: r } = e,
        { comparator: i } = n;
    return r - i;
}
function j(e) {
    e[R].sort(V), e[O].sort(V), e[C.d4z.GUILD_CATEGORY].sort(V);
}
function H(e) {
    return (0, g.r8)(e) ? R : (0, g.bw)(e) ? O : e;
}
function Y() {
    let e = {},
        n = _.Z.getFavoriteChannels();
    for (let r in n) {
        let i = y.Z.getChannel(r);
        if (null == i) continue;
        let a = n[r],
            o = (0, m.r)(n, a, i);
        e[r] = {
            channel: o,
            comparator: o.position
        };
    }
    return e;
}
function W(e) {
    if (e === C.I_8) return Y();
    let n = {},
        r = y.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r)
        n[e] = {
            channel: r[e],
            comparator: r[e].position
        };
    return n;
}
function K(e) {
    let { id: n } = e,
        r = W(n);
    return (
        u().forEach(r, (r) => {
            let i = r.channel;
            if (((e.count += 1), g.zS.has(i.type) && !T.Z.can(C.Plq.VIEW_CHANNEL, i) && !p.Z.isChannelGated(i.guild_id, i.id) && i.id !== P)) return;
            let a = H(i.type);
            i.type === C.d4z.GUILD_DIRECTORY && (null == M[n] && (M[n] = []), M[n].push(r)), null != e[a] && e[a].push(r);
        }),
        e
    );
}
function z() {
    (x = {}), (M = {}), (L = {}), (w = {}), null != D && q(D);
}
function q(e) {
    let n = Z(e);
    return (x[e] = n), (M[e] = []), K(n), j(n), Q(n), eo(e), n;
}
function Q(e) {
    let n = (L[e.id] = {}),
        r = {};
    e[R].forEach((e) => {
        let { channel: i } = e,
            a = (0, h.F6)(i, A.default, S.Z),
            o = Object.prototype.hasOwnProperty.call(r, a) ? r[a] : null;
        null == o ? (r[a] = 1) : ((r[a] = o + 1), (a += '~'.concat(o))),
            (n[i.id] = {
                id: i.id,
                name: a
            });
    });
}
function X(e) {
    let {
        guild: { id: n }
    } = e;
    if (null == n) return !1;
    (x[n] = void 0), D === n && q(n);
}
function J(e) {
    let {
        guild: { id: n }
    } = e;
    return delete x[n], delete L[n], delete w[n], delete M[n], !0;
}
function $(e) {
    let { guildId: n, user: r } = e;
    if (v.default.getId() !== r.id) return !1;
    (x[n] = void 0), n === D && q(n);
}
function ee(e) {
    let n = y.Z.getBasicChannel(e.id);
    null != n && null != n.guild_id && q(n.guild_id);
}
function et(e) {
    let {
        channel: { guild_id: n }
    } = e;
    if (null == n) return !1;
    (x[n] = void 0), n === D && q(n);
}
function en(e) {
    let { channels: n } = e,
        r = !1;
    for (let e of n) {
        let { guild_id: n } = e;
        if (null != n) (x[n] = void 0), (r = !0), D === n && q(n);
    }
    return r;
}
function er(e) {
    let { guildId: n } = e;
    (x[n] = void 0), n === D && q(n);
}
function ei(e, n) {
    return c.Db(
        E.uB({
            user: e,
            context: n,
            checkElevated: !1
        }),
        C.TC2
    );
}
function ea(e, n) {
    let r = I.Z.getGuild(n);
    if (null != r && ei(e, r)) return !0;
    let i = x[n];
    null == i && (i = q(n));
    let { [R]: a, [O]: o } = i;
    for (let { channel: n } of a) if (ei(e, n)) return !0;
    for (let { channel: n } of o) if (ei(e, n)) return !0;
    return !1;
}
function eo(e) {
    ea(A.default.getCurrentUser(), e) ? (w[e] = !0) : delete w[e];
}
function es(e, n) {
    var r;
    P = n;
    let i = null !== (r = null == e ? void 0 : e.getGuildId()) && void 0 !== r ? r : null;
    if (null == i) return !1;
    (x[i] = void 0), i === D && q(i);
}
function el(e) {
    let { channelId: n } = e;
    return null == n && null != P ? es(y.Z.getChannel(P), null) : es(y.Z.getChannel(n), n);
}
function eu(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { channelId: r, sessionId: i } = n;
        return v.default.getSessionId() !== i ? e : es(y.Z.getChannel(r), r) || e;
    }, !1);
}
function ec(e) {
    let { guildId: n } = e;
    if (((D = null != n ? n : null), null == n || null != x[n])) return !1;
    q(n);
}
function ed() {
    q(C.I_8);
}
class ef extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, b.ZP, y.Z, T.Z, v.default, p.Z, _.Z), this.syncWith([_.Z], ed);
    }
    getAllGuilds() {
        return x;
    }
    getChannels(e) {
        return null != e ? F(e) : U;
    }
    getFirstChannelOfType(e, n, r) {
        let i = this.getChannels(e)[r].find(n);
        return null != i ? i.channel : null;
    }
    getFirstChannel(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null !== (r = this.getFirstChannelOfType(e, n, R)) && void 0 !== r ? r : i ? this.getFirstChannelOfType(e, n, O) : null;
    }
    getDefaultChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.Z.can(r, e.channel), n);
    }
    getSFWDefaultChannel(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.Z.can(r, e.channel) && !e.channel.nsfw, n);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[R].map((e) => {
            let { channel: n } = e;
            return n.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[R];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[O].map((e) => {
            let { channel: n } = e;
            return n.id;
        });
    }
    getDirectoryChannelIds(e) {
        var n, r;
        return null !==
            (r =
                null === (n = M[e]) || void 0 === n
                    ? void 0
                    : n.map((e) => {
                          let { channel: n } = e;
                          return n.id;
                      })) && void 0 !== r
            ? r
            : B;
    }
    hasSelectableChannel(e, n) {
        return this.getSelectableChannelIds(e).includes(n);
    }
    hasElevatedPermissions(e) {
        return w[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[C.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var n;
        return null != e && null !== (n = L[e]) && void 0 !== n ? n : G;
    }
}
N(ef, 'displayName', 'GuildChannelStore'),
    (n.ZP = new ef(f.Z, {
        BACKGROUND_SYNC: z,
        CHANNEL_SELECT: ec,
        CONNECTION_OPEN: z,
        OVERLAY_INITIALIZE: z,
        CACHE_LOADED_LAZY: z,
        GUILD_CREATE: X,
        GUILD_UPDATE: X,
        GUILD_DELETE: J,
        GUILD_MEMBER_UPDATE: $,
        CHANNEL_CREATE: et,
        CHANNEL_DELETE: et,
        CHANNEL_UPDATES: en,
        GUILD_ROLE_CREATE: er,
        GUILD_ROLE_UPDATE: er,
        GUILD_ROLE_DELETE: er,
        IMPERSONATE_UPDATE: er,
        IMPERSONATE_STOP: er,
        VOICE_CHANNEL_SELECT: el,
        VOICE_CHANNEL_STATUS_UPDATE: ee,
        VOICE_STATE_UPDATES: eu
    }));
