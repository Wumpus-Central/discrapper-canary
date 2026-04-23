"use strict";
n.d(t, { Ay: () => W, I6: () => S, vM: () => y }), n(321073);
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
    E = n(696451),
    m = n(71393),
    g = n(576705),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = "SELECTABLE",
    y = "VOCAL",
    N = null,
    v = {},
    C = {},
    O = {},
    R = null,
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
        { comparator: r } = t;
    return n - r;
}
function k() {
    (v = {}), (b = {}), (C = {}), (O = {}), null != N && U(N);
}
function U(e) {
    var t, n;
    let r,
        s,
        a = P(e);
    return (
        (v[e] = a),
        (b[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if (e === T.YYv)
                        return (function () {
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
                        })();
                    let t = {},
                        n = h.A.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
                    return t;
                })(t);
            i().forEach(n, (n) => {
                var r;
                let i = n.channel;
                if (
                    ((e.count += 1),
                    _.JT.has(i.type) &&
                        !g.A.can(T.xBc.VIEW_CHANNEL, i) &&
                        !l.A.isChannelGated(i.guild_id, i.id) &&
                        i.id !== R)
                )
                    return;
                let s = ((r = i.type), (0, _.tr)(r) ? S : (0, _.ay)(r) ? y : r);
                i.type === T.rbe.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)),
                    null != e[s] && e[s].push(n);
            });
        })(a),
        a[S].sort(x),
        a[y].sort(x),
        a[T.rbe.GUILD_CATEGORY].sort(x),
        (r = C[(t = a).id] = {}),
        (s = {}),
        t[S].forEach((e) => {
            let { channel: t } = e,
                n = (0, u.m1)(t, I.default, A.A),
                i = Object.prototype.hasOwnProperty.call(s, n) ? s[n] : null;
            null == i ? (s[n] = 1) : ((s[n] = i + 1), (n += `~${i}`)), (r[t.id] = { id: t.id, name: n });
        }),
        (n = e),
        !(function (e, t) {
            let n = m.A.getGuild(t);
            if (null != n && B(e, n)) return !0;
            let r = v[t];
            null == r && (r = U(t));
            let { [S]: i, [y]: s } = r;
            for (let { channel: t } of i) if (B(e, t)) return !0;
            for (let { channel: t } of s) if (B(e, t)) return !0;
            return !1;
        })(I.default.getCurrentUser(), n)
            ? delete O[n]
            : (O[n] = !0),
        a
    );
}
function G(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (v[t] = void 0), N === t && U(t);
}
function F(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (v[t] = void 0), t === N && U(t);
}
function V(e) {
    let { guildId: t } = e;
    (v[t] = void 0), t === N && U(t);
}
function B(e, t) {
    return s.X8(f.cc({ user: e, context: t, checkElevated: !1 }), T.Lti);
}
function H(e, t) {
    R = t;
    let n = e?.getGuildId() ?? null;
    return null != n && ((v[n] = void 0), n === N && U(n), !0);
}
function j() {
    U(T.YYv);
}
class Y extends a.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(p.default, h.A, c.A, l.A, E.Ay, m.A, g.A, I.default), this.syncWith([c.A], j);
    }
    getAllGuilds() {
        return v;
    }
    getChannels(e) {
        let t;
        return null != e ? (null == (t = v[e]) && (t = U(e)), t) : L;
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
        return O[e] || !1;
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
let W = new Y(o.h, {
    BACKGROUND_SYNC: k,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((N = t ?? null), null == t || null != v[t])) return !1;
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
        return delete v[t], delete C[t], delete O[t], delete b[t], !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (p.default.getId() !== n.id) return !1;
        (v[t] = void 0), t === N && U(t);
    },
    CHANNEL_CREATE: F,
    CHANNEL_DELETE: F,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) {
            let { guild_id: t } = e;
            null != t && ((v[t] = void 0), (n = !0), N === t && U(t));
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
        return null == t && null != R ? H(h.A.getChannel(R), null) : H(h.A.getChannel(t), t);
    },
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        let t = h.A.getBasicChannel(e.id);
        null != t && null != t.guild_id && U(t.guild_id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: r } = t;
            return p.default.getSessionId() !== r ? e : H(h.A.getChannel(n), n) || e;
        }, !1);
    },
});
