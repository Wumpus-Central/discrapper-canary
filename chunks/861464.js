n.d(t, { A: () => L });
var i = n(385244),
    r = n(718564),
    a = n(807081),
    s = n(47167),
    l = n(652215),
    o = n(375708),
    d = n(942075),
    c = n(523154),
    u = n(518782),
    _ = n(320095),
    E = n(763754),
    A = n(808829),
    h = n(552691),
    I = n(383233),
    f = n(280450),
    p = n(734057),
    T = n(71393),
    m = n(994500),
    g = n(287809),
    S = n(562153),
    N = n(935208);
let C = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function O(e) {
    let t = [
            o.t.Jm6e0x,
            o.t.MGRnRT,
            o.t.EXOEGh,
            o.t["5uCTFN"],
            o.t.rl45Qo,
            o.t.Bh9zpQ,
            o.t.RdEy1J,
            o.t.qcdp00,
            o.t.F7w2Ru,
            o.t.gSyOgK,
            o.t.uYgqv7,
            o.t["b/1SBX"],
            o.t.LhebZF,
        ],
        n = N.default.extractTimestamp(e) % t.length;
    return t[n];
}
function R(e) {
    return (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: e, usernameOnClick: l.tEg }));
}
let L = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (g.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (g.default.getUser(t) ?? null)
                        : null;
            })(e),
            N = e.channel_id,
            C = S.Ay.getName(null, N, e.author);
        switch (e.type) {
            case l.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    o.intl.formatToParts(o.t["7/Xl0S"], {
                        username: C,
                        usernameOnClick: l.tEg,
                        otherUsername: S.Ay.getName(null, N, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let L = e.author;
                if (null == L || L.id === n.id)
                    return (0, a.$)(o.intl.formatToParts(o.t["Qn5+Lf"], { username: C, usernameOnClick: l.tEg }));
                return (0, a.$)(
                    o.intl.formatToParts(o.t.QtZ0RD, {
                        username: C,
                        usernameOnClick: l.tEg,
                        otherUsername: S.Ay.getName(null, N, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.CALL:
                let { call: y } = e;
                if (null != y && -1 === y.participants.indexOf(f.default.getId()))
                    return (0, a.$)(o.intl.formatToParts(o.t.DbgSA0, { username: C, usernameOnClick: l.tEg }));
                return;
            case l.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    o.intl.formatToParts(t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG, {
                        username: C,
                        usernameOnClick: l.tEg,
                        channelName: e.content,
                    }),
                );
            case l.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(o.intl.formatToParts(o.t.wypJZ0, { username: C, usernameOnClick: l.tEg }));
            case l.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(o.intl.formatToParts(o.t["/M60j0"], { username: C, usernameOnClick: l.tEg }));
            case l.lAJ.USER_JOIN:
                return (0, a.$)(o.intl.formatToParts(O(e.id), { username: C, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_BOOST:
                return R(C);
            case l.lAJ.GUILD_BOOST_TIER_1:
            case l.lAJ.GUILD_BOOST_TIER_2:
            case l.lAJ.GUILD_BOOST_TIER_3:
                let D;
                return null == (D = p.A.getChannel(N)) || null == T.A.getGuild(D.getGuildId())
                    ? R(C)
                    : (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: C, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_INVITE_REMINDER:
                return o.intl.string(o.t.gxyKvr);
            case l.lAJ.THREAD_STARTER_MESSAGE:
                return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                    username: C,
                    threadName: (0, s.m1)(t, g.default, m.A),
                });
            case l.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof I.Ay) return null;
                return (0, a.$)(
                    (0, d.eb)({ username: C, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case l.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof I.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = l.tEg, productName: i } = e;
                        return o.intl.formatToParts(o.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: C, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case l.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof I.Ay) return null;
                let v = (0, E.p_)((0, _.rh)(e));
                return (0, a.$)((0, A.P)({ application: e.application, username: v.nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof I.Ay) return null;
                return (0, a.$)((0, h.g6)({ application: e.application, username: (0, E.p_)((0, _.rh)(e)).nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof I.Ay) return null;
                return (0, a.$)((0, h.uk)({ application: e.application, username: (0, E.p_)((0, _.rh)(e)).nick }));
            case l.lAJ.AUTO_MODERATION_ACTION:
                if (
                    e.embeds?.some((e) => {
                        let { type: t } = e;
                        return t === l.Auw.AUTO_MODERATION_NOTIFICATION;
                    })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === l.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = t?.fields?.find((e) => "name" in e && e.name === i.E.NOTIFICATION_TYPE),
                        s = null != n && "value" in n ? n.value : void 0,
                        d = p.A.getChannel(N);
                    if (null == d) return null;
                    let c = T.A.getGuild(d.getGuildId());
                    if (null == c) return null;
                    switch (s) {
                        case r.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, a.$)(o.intl.formatToParts(o.t.wt3ZUM, { guildName: c.name }));
                        case r.W.INTERACTION_BLOCKED:
                            return (0, a.$)(o.intl.formatToParts(o.t.AkqI0g, { guildName: c.name }));
                        default:
                            return (0, a.$)(o.intl.formatToParts(o.t["a+lJKl"], { guildName: c.name }));
                    }
                }
                return e.content;
            case l.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var b = e.content;
                let M = p.A.getChannel(N);
                if (null == M) return null;
                let P = T.A.getGuild(M.getGuildId());
                return null == P
                    ? null
                    : (0, a.$)(
                          o.intl.formatToParts(o.t.iOuWPk, {
                              username: C,
                              guildName: P.name,
                              time:
                                  "" !== b
                                      ? new Date(b).toLocaleString(o.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case l.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let U = p.A.getChannel(N);
                if (null == U) return null;
                let w = T.A.getGuild(U.getGuildId());
                return null == w
                    ? null
                    : (0, a.$)(o.intl.formatToParts(o.t.axmbpm, { username: C, guildName: w.name }));
            case l.lAJ.GUILD_SPACE_MESSAGE: {
                let n = (0, u.Nu)(e instanceof I.Ay ? e.guildSpaceData?.leaderboard : e.guild_space_data?.leaderboard),
                    i = (0, c.U_)(n, g.default.getUser(n?.userId), g.default.getUser(n?.previousUserId));
                if (null == i) return e.content;
                let r = t.getGuildId(),
                    a = (0, c.Sx)(i.data, {
                        username: S.Ay.getName(r, N, i.subject),
                        previousUsername: null != i.previousLeader ? S.Ay.getName(r, N, i.previousLeader) : "",
                    });
                if (null == a) return e.content;
                return o.intl.formatToPlainString(a.message, {
                    ...a.values,
                    usernameHook: (e) => e,
                    previousUsernameHook: (e) => e,
                });
            }
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                o.t["0cuj7l"],
                o.t["MuW+CN"],
                o.t.osqpHX,
                o.t["5ToSh2"],
                o.t.JEB8ps,
                o.t.pkOV5T,
                o.t["kRb1J+"],
                o.t["EmKLY+"],
                o.t.rPtBnb,
                o.t["5B/ekS"],
                o.t.ESNC3Y,
                o.t.Iw6d8w,
                o.t["WecSZ/"],
            ],
            n = N.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: O,
    getSystemMessageBotJoin: function (e) {
        return null == C[e] ? null : o.intl.format(o.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(C[e]) } });
    },
};
