"use strict";
n.d(t, { Ay: () => W, I6: () => S, vM: () => y }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(228366),
    l = n(717125),
    u = n(47167),
    c = n(181079),
    d = n(424345),
    _ = n(95701),
    h = n(488926),
    f = n(495544),
    p = n(734057),
    E = n(696451),
    m = n(71393),
    g = n(576705),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = "SELECTABLE",
    y = "VOCAL",
    C = null,
    N = {},
    v = {},
    R = {},
    O = null,
    b = {},
    D = {
        comparator: -1,
        channel: (0, _.createChannelRecord)({ id: T._Ee, type: T.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    L = P(T.eGj),
    w = [],
    M = {};
function P(e) {
    return { id: e, [S]: [], [y]: [], [T.rbe.GUILD_CATEGORY]: [D], count: 0 };
}
function x(e, t) {
    let { comparator: n } = e,
        { comparator: i } = t;
    return n - i;
}
function k() {
    (N = {}), (b = {}), (v = {}), (R = {}), null != C && U(C);
}
function U(e) {
    var t, n;
    let i,
        s,
        a = P(e);
    return (
        (N[e] = a),
        (b[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if (e === T.YYv)
                        return (function () {
                            let e = {},
                                t = c.A.getFavoriteChannels();
                            for (let n in t) {
                                let i = p.A.getChannel(n);
                                if (null == i) continue;
                                let r = t[n],
                                    s = (0, d.K)(t, r, i);
                                e[n] = { channel: s, comparator: s.position };
                            }
                            return e;
                        })();
                    let t = {},
                        n = p.A.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
                    return t;
                })(t);
            r().forEach(n, (n) => {
                var i;
                let r = n.channel;
                if (
                    ((e.count += 1),
                    _.JT.has(r.type) &&
                        !g.A.can(T.xBc.VIEW_CHANNEL, r) &&
                        !l.A.isChannelGated(r.guild_id, r.id) &&
                        r.id !== O)
                )
                    return;
                let s = ((i = r.type), (0, _.tr)(i) ? S : (0, _.ay)(i) ? y : i);
                r.type === T.rbe.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)),
                    null != e[s] && e[s].push(n);
            });
        })(a),
        a[S].sort(x),
        a[y].sort(x),
        a[T.rbe.GUILD_CATEGORY].sort(x),
        (i = v[(t = a).id] = {}),
        (s = {}),
        t[S].forEach((e) => {
            let { channel: t } = e,
                n = (0, u.m1)(t, I.default, A.A),
                r = Object.prototype.hasOwnProperty.call(s, n) ? s[n] : null;
            null == r ? (s[n] = 1) : ((s[n] = r + 1), (n += `~${r}`)), (i[t.id] = { id: t.id, name: n });
        }),
        (n = e),
        !(function (e, t) {
            let n = m.A.getGuild(t);
            if (null != n && B(e, n)) return !0;
            let i = N[t];
            null == i && (i = U(t));
            let { [S]: r, [y]: s } = i;
            for (let { channel: t } of r) if (B(e, t)) return !0;
            for (let { channel: t } of s) if (B(e, t)) return !0;
            return !1;
        })(I.default.getCurrentUser(), n)
            ? delete R[n]
            : (R[n] = !0),
        a
    );
}
function G(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (N[t] = void 0), C === t && U(t);
}
function F(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (N[t] = void 0), t === C && U(t);
}
function V(e) {
    let { guildId: t } = e;
    (N[t] = void 0), t === C && U(t);
}
function B(e, t) {
    return s.X8(h.cc({ user: e, context: t, checkElevated: !1 }), T.Lti);
}
function j(e, t) {
    O = t;
    let n = e?.getGuildId() ?? null;
    return null != n && ((N[n] = void 0), n === C && U(n), !0);
}
function H() {
    U(T.YYv);
}
class Y extends a.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(f.default, p.A, c.A, l.A, E.Ay, m.A, g.A, I.default), this.syncWith([c.A], H);
    }
    getAllGuilds() {
        return N;
    }
    getChannels(e) {
        let t;
        return null != e ? (null == (t = N[e]) && (t = U(e)), t) : L;
    }
    getFirstChannelOfType(e, t, n) {
        let i = this.getChannels(e)[n].find(t);
        return null != i ? i.channel : null;
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
        return null != e ? (v[e] ?? M) : M;
    }
}
let W = new Y(o.h, {
    BACKGROUND_SYNC: k,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((C = t ?? null), null == t || null != N[t])) return !1;
        U(t);
    },
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    CACHE_LOADED_LAZY: k,
    GUILD_CREATE: G,
    GUILD_UPDATE: G,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        return delete N[t], delete v[t], delete R[t], delete b[t], !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (f.default.getId() !== n.id) return !1;
        (N[t] = void 0), t === C && U(t);
    },
    CHANNEL_CREATE: F,
    CHANNEL_DELETE: F,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) {
            let { guild_id: t } = e;
            null != t && ((N[t] = void 0), (n = !0), C === t && U(t));
        }
        return n;
    },
    GUILD_ROLE_CREATE: V,
    GUILD_ROLE_UPDATE: V,
    GUILD_ROLE_DELETE: V,
    IMPERSONATE_UPDATE: V,
    IMPERSONATE_STOP: V,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != O ? j(p.A.getChannel(O), null) : j(p.A.getChannel(t), t);
    },
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        let t = p.A.getBasicChannel(e.id);
        null != t && null != t.guild_id && U(t.guild_id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return f.default.getSessionId() !== i ? e : j(p.A.getChannel(n), n) || e;
        }, !1);
    },
});
