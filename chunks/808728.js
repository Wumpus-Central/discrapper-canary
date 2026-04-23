"use strict";
n.d(t, { Ay: () => Y, I6: () => S, vM: () => N }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(228366),
    l = n(717125),
    d = n(47167),
    _ = n(181079),
    u = n(424345),
    c = n(95701),
    E = n(488926),
    h = n(495544),
    m = n(734057),
    f = n(696451),
    g = n(71393),
    p = n(576705),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = "SELECTABLE",
    N = "VOCAL",
    C = null,
    R = {},
    O = {},
    y = {},
    v = null,
    D = {},
    L = {
        comparator: -1,
        channel: (0, c.createChannelRecord)({ id: T._Ee, type: T.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    b = k(T.eGj),
    w = [],
    P = {};
function k(e) {
    return { id: e, [S]: [], [N]: [], [T.rbe.GUILD_CATEGORY]: [L], count: 0 };
}
function M(e, t) {
    let { comparator: n } = e,
        { comparator: i } = t;
    return n - i;
}
function U() {
    (R = {}), (D = {}), (O = {}), (y = {}), null != C && x(C);
}
function x(e) {
    var t, n;
    let i,
        s,
        a = k(e);
    return (
        (R[e] = a),
        (D[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if (e === T.YYv)
                        return (function () {
                            let e = {},
                                t = _.A.getFavoriteChannels();
                            for (let n in t) {
                                let i = m.A.getChannel(n);
                                if (null == i) continue;
                                let r = t[n],
                                    s = (0, u.K)(t, r, i);
                                e[n] = { channel: s, comparator: s.position };
                            }
                            return e;
                        })();
                    let t = {},
                        n = m.A.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
                    return t;
                })(t);
            r().forEach(n, (n) => {
                var i;
                let r = n.channel;
                if (
                    ((e.count += 1),
                    c.JT.has(r.type) &&
                        !p.A.can(T.xBc.VIEW_CHANNEL, r) &&
                        !l.A.isChannelGated(r.guild_id, r.id) &&
                        r.id !== v)
                )
                    return;
                let s = ((i = r.type), (0, c.tr)(i) ? S : (0, c.ay)(i) ? N : i);
                r.type === T.rbe.GUILD_DIRECTORY && (null == D[t] && (D[t] = []), D[t].push(n)),
                    null != e[s] && e[s].push(n);
            });
        })(a),
        a[S].sort(M),
        a[N].sort(M),
        a[T.rbe.GUILD_CATEGORY].sort(M),
        (i = O[(t = a).id] = {}),
        (s = {}),
        t[S].forEach((e) => {
            let { channel: t } = e,
                n = (0, d.m1)(t, I.default, A.A),
                r = Object.prototype.hasOwnProperty.call(s, n) ? s[n] : null;
            null == r ? (s[n] = 1) : ((s[n] = r + 1), (n += `~${r}`)), (i[t.id] = { id: t.id, name: n });
        }),
        (n = e),
        !(function (e, t) {
            let n = g.A.getGuild(t);
            if (null != n && B(e, n)) return !0;
            let i = R[t];
            null == i && (i = x(t));
            let { [S]: r, [N]: s } = i;
            for (let { channel: t } of r) if (B(e, t)) return !0;
            for (let { channel: t } of s) if (B(e, t)) return !0;
            return !1;
        })(I.default.getCurrentUser(), n)
            ? delete y[n]
            : (y[n] = !0),
        a
    );
}
function G(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (R[t] = void 0), C === t && x(t);
}
function V(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (R[t] = void 0), t === C && x(t);
}
function F(e) {
    let { guildId: t } = e;
    (R[t] = void 0), t === C && x(t);
}
function B(e, t) {
    return s.X8(E.cc({ user: e, context: t, checkElevated: !1 }), T.Lti);
}
function H(e, t) {
    v = t;
    let n = e?.getGuildId() ?? null;
    return null != n && ((R[n] = void 0), n === C && x(n), !0);
}
function j() {
    x(T.YYv);
}
class W extends a.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(h.default, m.A, _.A, l.A, f.Ay, g.A, p.A, I.default), this.syncWith([_.A], j);
    }
    getAllGuilds() {
        return R;
    }
    getChannels(e) {
        let t;
        return null != e ? (null == (t = R[e]) && (t = x(e)), t) : b;
    }
    getFirstChannelOfType(e, t, n) {
        let i = this.getChannels(e)[n].find(t);
        return null != i ? i.channel : null;
    }
    getFirstChannel(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.getFirstChannelOfType(e, t, S) ?? (n ? this.getFirstChannelOfType(e, t, N) : null);
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => p.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => p.A.can(n, e.channel) && !e.channel.nsfw, t);
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
        return this.getChannels(e)[N].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        return (
            D[e]?.map((e) => {
                let { channel: t } = e;
                return t.id;
            }) ?? w
        );
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return y[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[T.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        return null != e ? (O[e] ?? P) : P;
    }
}
let Y = new W(o.h, {
    BACKGROUND_SYNC: U,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((C = t ?? null), null == t || null != R[t])) return !1;
        x(t);
    },
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    CACHE_LOADED_LAZY: U,
    GUILD_CREATE: G,
    GUILD_UPDATE: G,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        return delete R[t], delete O[t], delete y[t], delete D[t], !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (h.default.getId() !== n.id) return !1;
        (R[t] = void 0), t === C && x(t);
    },
    CHANNEL_CREATE: V,
    CHANNEL_DELETE: V,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) {
            let { guild_id: t } = e;
            null != t && ((R[t] = void 0), (n = !0), C === t && x(t));
        }
        return n;
    },
    GUILD_ROLE_CREATE: F,
    GUILD_ROLE_UPDATE: F,
    GUILD_ROLE_DELETE: F,
    IMPERSONATE_UPDATE: F,
    IMPERSONATE_STOP: F,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != v ? H(m.A.getChannel(v), null) : H(m.A.getChannel(t), t);
    },
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        let t = m.A.getBasicChannel(e.id);
        null != t && null != t.guild_id && x(t.guild_id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return h.default.getSessionId() !== i ? e : H(m.A.getChannel(n), n) || e;
        }, !1);
    },
});
