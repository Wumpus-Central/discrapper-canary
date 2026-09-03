n.d(t, { Ay: () => K, I6: () => N, vM: () => C }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(17928),
    l = n(228366),
    o = n(717125),
    d = n(47167),
    c = n(181079),
    u = n(5180),
    _ = n(774452),
    E = n(95701),
    A = n(488926),
    h = n(280450),
    I = n(734057),
    f = n(696451),
    p = n(71393),
    T = n(576705),
    m = n(994500),
    g = n(287809),
    S = n(652215);
let N = "SELECTABLE",
    C = "VOCAL",
    O = null,
    R = {},
    L = {},
    y = {},
    D = null,
    v = {},
    b = {
        comparator: -1,
        channel: (0, E.createChannelRecord)({ id: S._Ee, type: S.rbe.GUILD_CATEGORY, name: "Uncategorized" }),
    },
    M = w(S.eGj),
    P = [],
    U = {};
function w(e) {
    return { id: e, [N]: [], [C]: [], [S.rbe.GUILD_CATEGORY]: [b], count: 0 };
}
function G(e, t) {
    let { comparator: n } = e,
        { comparator: i } = t;
    return n - i;
}
function x() {
    (R = {}), (v = {}), (L = {}), (y = {}), null != O && k(O);
}
function k(e) {
    var t, n;
    let i,
        a,
        s = w(e);
    return (
        (R[e] = s),
        (v[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if ((0, u.ai)(e))
                        return (function () {
                            let e = {},
                                t = c.A.getFavoriteChannels();
                            for (let n in t) {
                                let i = I.A.getChannel(n);
                                if (null == i) continue;
                                let r = t[n],
                                    a = (0, _.R)(t, r, i);
                                e[n] = { channel: a, comparator: a.position };
                            }
                            return e;
                        })();
                    let t = {},
                        n = I.A.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = { channel: n[e], comparator: n[e].position };
                    return t;
                })(t);
            r().forEach(n, (n) => {
                var i;
                let r = n.channel;
                if (
                    ((e.count += 1),
                    E.JT.has(r.type) &&
                        !T.A.can(S.xBc.VIEW_CHANNEL, r) &&
                        !o.A.isChannelGated(r.guild_id, r.id) &&
                        r.id !== D)
                )
                    return;
                let a = ((i = r.type), (0, E.tr)(i) ? N : (0, E.ay)(i) ? C : i);
                r.type === S.rbe.GUILD_DIRECTORY && (null == v[t] && (v[t] = []), v[t].push(n)),
                    null != e[a] && e[a].push(n);
            });
        })(s),
        s[N].sort(G),
        s[C].sort(G),
        s[S.rbe.GUILD_CATEGORY].sort(G),
        (i = L[(t = s).id] = {}),
        (a = {}),
        t[N].forEach((e) => {
            let { channel: t } = e,
                n = (0, d.m1)(t, g.default, m.A),
                r = Object.prototype.hasOwnProperty.call(a, n) ? a[n] : null;
            null == r ? (a[n] = 1) : ((a[n] = r + 1), (n += `~${r}`)), (i[t.id] = { id: t.id, name: n });
        }),
        (n = e),
        !(function (e, t) {
            let n = p.A.getGuild(t);
            if (null != n && H(e, n)) return !0;
            let i = R[t];
            null == i && (i = k(t));
            let { [N]: r, [C]: a } = i;
            for (let { channel: t } of r) if (H(e, t)) return !0;
            for (let { channel: t } of a) if (H(e, t)) return !0;
            return !1;
        })(g.default.getCurrentUser(), n)
            ? delete y[n]
            : (y[n] = !0),
        s
    );
}
function F(e) {
    let {
        guild: { id: t },
    } = e;
    if (null == t) return !1;
    (R[t] = void 0), O === t && k(t);
}
function V(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (R[t] = void 0), t === O && k(t);
}
function B(e) {
    let { guildId: t } = e;
    (R[t] = void 0), t === O && k(t);
}
function H(e, t) {
    return a.X8(A.cc({ user: e, context: t, checkElevated: !1 }), S.Lti);
}
function j(e, t) {
    D = t;
    let n = e?.getGuildId() ?? null;
    return null != n && ((R[n] = void 0), n === O && k(n), !0);
}
function W() {
    k(S.YYv);
}
class Y extends s.Ay.Store {
    static displayName = "GuildChannelStore";
    initialize() {
        this.waitFor(h.default, I.A, c.A, o.A, f.Ay, p.A, T.A, g.default), this.syncWith([c.A], W);
    }
    getAllGuilds() {
        return R;
    }
    getChannels(e) {
        let t;
        return null != e ? (null == (t = R[e]) && (t = k(e)), t) : M;
    }
    getFirstChannelOfType(e, t, n) {
        let i = this.getChannels(e)[n].find(t);
        return null != i ? i.channel : null;
    }
    getFirstChannel(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.getFirstChannelOfType(e, t, N) ?? (n ? this.getFirstChannelOfType(e, t, C) : null);
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.A.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.xBc.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.A.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[N].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[N];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[C].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        return (
            v[e]?.map((e) => {
                let { channel: t } = e;
                return t.id;
            }) ?? P
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
        return this.getChannels(e)[S.rbe.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        return null != e ? (L[e] ?? U) : U;
    }
}
let K = new Y(l.h, {
    BACKGROUND_SYNC: x,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((O = t ?? null), null == t || null != R[t])) return !1;
        k(t);
    },
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: x,
    CACHE_LOADED_LAZY: x,
    GUILD_CREATE: F,
    GUILD_UPDATE: F,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        return delete R[t], delete L[t], delete y[t], delete v[t], !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (h.default.getId() !== n.id) return !1;
        (R[t] = void 0), t === O && k(t);
    },
    CHANNEL_CREATE: V,
    CHANNEL_DELETE: V,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t) {
            let { guild_id: t } = e;
            null != t && ((R[t] = void 0), (n = !0), O === t && k(t));
        }
        return n;
    },
    GUILD_ROLE_CREATE: B,
    GUILD_ROLE_UPDATE: B,
    GUILD_ROLE_DELETE: B,
    IMPERSONATE_UPDATE: B,
    IMPERSONATE_STOP: B,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != D ? j(I.A.getChannel(D), null) : j(I.A.getChannel(t), t);
    },
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        let t = I.A.getBasicChannel(e.id);
        null != t && null != t.guild_id && k(t.guild_id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return h.default.getSessionId() !== i ? e : j(I.A.getChannel(n), n) || e;
        }, !1);
    },
});
