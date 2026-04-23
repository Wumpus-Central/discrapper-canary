n.d(t, { A: () => h });
var i = n(385244),
    r = n(718564),
    a = n(436857),
    l = n(47167),
    s = n(652215),
    o = n(985018),
    u = n(942075),
    _ = n(320095),
    E = n(763754),
    A = n(808829),
    c = n(552691),
    d = n(383233),
    I = n(495544),
    T = n(734057),
    N = n(71393),
    S = n(994500),
    p = n(287809),
    O = n(562153),
    C = n(935208);
let g = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function R(e) {
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
        n = C.default.extractTimestamp(e) % t.length;
    return t[n];
}
function m(e) {
    return (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: e, usernameOnClick: s.tEg }));
}
let h = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (p.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (p.default.getUser(t) ?? null)
                        : null;
            })(e),
            C = e.channel_id,
            g = O.Ay.getName(null, C, e.author);
        switch (e.type) {
            case s.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    o.intl.formatToParts(o.t["7/Xl0S"], {
                        username: g,
                        usernameOnClick: s.tEg,
                        otherUsername: O.Ay.getName(null, C, n),
                        otherUsernameOnClick: s.tEg,
                    }),
                );
            case s.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let h = e.author;
                if (null == h || h.id === n.id)
                    return (0, a.$)(o.intl.formatToParts(o.t["Qn5+Lf"], { username: g, usernameOnClick: s.tEg }));
                return (0, a.$)(
                    o.intl.formatToParts(o.t.QtZ0RD, {
                        username: g,
                        usernameOnClick: s.tEg,
                        otherUsername: O.Ay.getName(null, C, n),
                        otherUsernameOnClick: s.tEg,
                    }),
                );
            case s.lAJ.CALL:
                let { call: M } = e;
                if (null != M && -1 === M.participants.indexOf(I.default.getId()))
                    return (0, a.$)(o.intl.formatToParts(o.t.DbgSA0, { username: g, usernameOnClick: s.tEg }));
                return;
            case s.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    o.intl.formatToParts(t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG, {
                        username: g,
                        usernameOnClick: s.tEg,
                        channelName: e.content,
                    }),
                );
            case s.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(o.intl.formatToParts(o.t.wypJZ0, { username: g, usernameOnClick: s.tEg }));
            case s.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(o.intl.formatToParts(o.t["/M60j0"], { username: g, usernameOnClick: s.tEg }));
            case s.lAJ.USER_JOIN:
                return (0, a.$)(o.intl.formatToParts(R(e.id), { username: g, usernameOnClick: s.tEg }));
            case s.lAJ.EMOJI_ADDED:
                let f, L;
                return (
                    (L = null == (f = T.A.getChannel(e.channel_id)) ? null : N.A.getGuild(f.getGuildId())),
                    (0, a.$)(
                        o.intl.formatToParts(o.t.PJsjbP, {
                            emoji: e.content,
                            guildName: L?.name ?? o.intl.string(o.t.dtwqPR),
                        }),
                    )
                );
            case s.lAJ.GUILD_BOOST:
                return m(g);
            case s.lAJ.GUILD_BOOST_TIER_1:
            case s.lAJ.GUILD_BOOST_TIER_2:
            case s.lAJ.GUILD_BOOST_TIER_3:
                let y;
                return null == (y = T.A.getChannel(C)) || null == N.A.getGuild(y.getGuildId())
                    ? m(g)
                    : (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: g, usernameOnClick: s.tEg }));
            case s.lAJ.GUILD_INVITE_REMINDER:
                return o.intl.string(o.t.gxyKvr);
            case s.lAJ.THREAD_STARTER_MESSAGE:
                return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                    username: g,
                    threadName: (0, l.m1)(t, p.default, S.A),
                });
            case s.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof d.Ay) return null;
                return (0, a.$)(
                    (0, u.eb)({ username: g, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case s.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof d.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = s.tEg, productName: i } = e;
                        return o.intl.formatToParts(o.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: g, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case s.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof d.Ay) return null;
                let D = (0, E.p_)((0, _.rh)(e));
                return (0, a.$)((0, A.P)({ application: e.application, username: D.nick }));
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof d.Ay) return null;
                return (0, a.$)((0, c.g6)({ application: e.application, username: (0, E.p_)((0, _.rh)(e)).nick }));
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof d.Ay) return null;
                return (0, a.$)((0, c.uk)({ application: e.application, username: (0, E.p_)((0, _.rh)(e)).nick }));
            case s.lAJ.AUTO_MODERATION_ACTION:
                if (
                    e.embeds?.some((e) => {
                        let { type: t } = e;
                        return t === s.Auw.AUTO_MODERATION_NOTIFICATION;
                    })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === s.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = t?.fields?.find((e) => "name" in e && e.name === i.E.NOTIFICATION_TYPE),
                        l = null != n && "value" in n ? n.value : void 0,
                        u = T.A.getChannel(C);
                    if (null == u) return null;
                    let _ = N.A.getGuild(u.getGuildId());
                    if (null == _) return null;
                    switch (l) {
                        case r.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, a.$)(o.intl.formatToParts(o.t.wt3ZUM, { guildName: _.name }));
                        case r.W.INTERACTION_BLOCKED:
                            return (0, a.$)(o.intl.formatToParts(o.t.AkqI0g, { guildName: _.name }));
                        default:
                            return (0, a.$)(o.intl.formatToParts(o.t["a+lJKl"], { guildName: _.name }));
                    }
                }
                return e.content;
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var U = e.content;
                let P = T.A.getChannel(C);
                if (null == P) return null;
                let G = N.A.getGuild(P.getGuildId());
                return null == G
                    ? null
                    : (0, a.$)(
                          o.intl.formatToParts(o.t.iOuWPk, {
                              username: g,
                              guildName: G.name,
                              time:
                                  "" !== U
                                      ? new Date(U).toLocaleString(o.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let v = T.A.getChannel(C);
                if (null == v) return null;
                let B = N.A.getGuild(v.getGuildId());
                return null == B
                    ? null
                    : (0, a.$)(o.intl.formatToParts(o.t.axmbpm, { username: g, guildName: B.name }));
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
            n = C.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (e) {
        return null == g[e] ? null : o.intl.format(o.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(g[e]) } });
    },
};
