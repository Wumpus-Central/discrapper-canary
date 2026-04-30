"use strict";
n.d(t, { A: () => C });
var i = n(385244),
    r = n(718564),
    s = n(807081),
    a = n(47167),
    o = n(652215),
    l = n(375708),
    u = n(942075),
    c = n(320095),
    d = n(763754),
    _ = n(808829),
    f = n(552691),
    h = n(383233),
    p = n(495544),
    E = n(734057),
    m = n(71393),
    g = n(994500),
    A = n(287809),
    I = n(562153),
    T = n(935208);
let S = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function N(e) {
    let t = [
            l.t.Jm6e0x,
            l.t.MGRnRT,
            l.t.EXOEGh,
            l.t["5uCTFN"],
            l.t.rl45Qo,
            l.t.Bh9zpQ,
            l.t.RdEy1J,
            l.t.qcdp00,
            l.t.F7w2Ru,
            l.t.gSyOgK,
            l.t.uYgqv7,
            l.t["b/1SBX"],
            l.t.LhebZF,
        ],
        n = T.default.extractTimestamp(e) % t.length;
    return t[n];
}
function y(e) {
    return (0, s.$)(l.intl.formatToParts(l.t.ihxM9x, { username: e, usernameOnClick: o.tEg }));
}
let C = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (A.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (A.default.getUser(t) ?? null)
                        : null;
            })(e),
            T = e.channel_id,
            S = I.Ay.getName(null, T, e.author);
        switch (e.type) {
            case o.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, s.$)(
                    l.intl.formatToParts(l.t["7/Xl0S"], {
                        username: S,
                        usernameOnClick: o.tEg,
                        otherUsername: I.Ay.getName(null, T, n),
                        otherUsernameOnClick: o.tEg,
                    }),
                );
            case o.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let C = e.author;
                if (null == C || C.id === n.id)
                    return (0, s.$)(l.intl.formatToParts(l.t["Qn5+Lf"], { username: S, usernameOnClick: o.tEg }));
                return (0, s.$)(
                    l.intl.formatToParts(l.t.QtZ0RD, {
                        username: S,
                        usernameOnClick: o.tEg,
                        otherUsername: I.Ay.getName(null, T, n),
                        otherUsernameOnClick: o.tEg,
                    }),
                );
            case o.lAJ.CALL:
                let { call: v } = e;
                if (null != v && -1 === v.participants.indexOf(p.default.getId()))
                    return (0, s.$)(l.intl.formatToParts(l.t.DbgSA0, { username: S, usernameOnClick: o.tEg }));
                return;
            case o.lAJ.CHANNEL_NAME_CHANGE:
                return (0, s.$)(
                    l.intl.formatToParts(t.isForumPost() ? l.t["qa0e/n"] : l.t.XCPMEG, {
                        username: S,
                        usernameOnClick: o.tEg,
                        channelName: e.content,
                    }),
                );
            case o.lAJ.CHANNEL_ICON_CHANGE:
                return (0, s.$)(l.intl.formatToParts(l.t.wypJZ0, { username: S, usernameOnClick: o.tEg }));
            case o.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, s.$)(l.intl.formatToParts(l.t["/M60j0"], { username: S, usernameOnClick: o.tEg }));
            case o.lAJ.USER_JOIN:
                return (0, s.$)(l.intl.formatToParts(N(e.id), { username: S, usernameOnClick: o.tEg }));
            case o.lAJ.EMOJI_ADDED:
                let O, R;
                return (
                    (R = null == (O = E.A.getChannel(e.channel_id)) ? null : m.A.getGuild(O.getGuildId())),
                    (0, s.$)(
                        l.intl.formatToParts(l.t.PJsjbP, {
                            emoji: e.content,
                            guildName: R?.name ?? l.intl.string(l.t.dtwqPR),
                        }),
                    )
                );
            case o.lAJ.GUILD_BOOST:
                return y(S);
            case o.lAJ.GUILD_BOOST_TIER_1:
            case o.lAJ.GUILD_BOOST_TIER_2:
            case o.lAJ.GUILD_BOOST_TIER_3:
                let b;
                return null == (b = E.A.getChannel(T)) || null == m.A.getGuild(b.getGuildId())
                    ? y(S)
                    : (0, s.$)(l.intl.formatToParts(l.t.ihxM9x, { username: S, usernameOnClick: o.tEg }));
            case o.lAJ.GUILD_INVITE_REMINDER:
                return l.intl.string(l.t.gxyKvr);
            case o.lAJ.THREAD_STARTER_MESSAGE:
                return l.intl.formatToPlainString(l.t["B8H+Cl"], {
                    username: S,
                    threadName: (0, a.m1)(t, A.default, g.A),
                });
            case o.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof h.Ay) return null;
                return (0, s.$)(
                    (0, u.eb)({ username: S, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case o.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof h.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, s.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = o.tEg, productName: i } = e;
                        return l.intl.formatToParts(l.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: S, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case o.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof h.Ay) return null;
                let D = (0, d.p_)((0, c.rh)(e));
                return (0, s.$)((0, _.P)({ application: e.application, username: D.nick }));
            case o.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof h.Ay) return null;
                return (0, s.$)((0, f.g6)({ application: e.application, username: (0, d.p_)((0, c.rh)(e)).nick }));
            case o.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof h.Ay) return null;
                return (0, s.$)((0, f.uk)({ application: e.application, username: (0, d.p_)((0, c.rh)(e)).nick }));
            case o.lAJ.AUTO_MODERATION_ACTION:
                if (
                    e.embeds?.some((e) => {
                        let { type: t } = e;
                        return t === o.Auw.AUTO_MODERATION_NOTIFICATION;
                    })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === o.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = t?.fields?.find((e) => "name" in e && e.name === i.E.NOTIFICATION_TYPE),
                        a = null != n && "value" in n ? n.value : void 0,
                        u = E.A.getChannel(T);
                    if (null == u) return null;
                    let c = m.A.getGuild(u.getGuildId());
                    if (null == c) return null;
                    switch (a) {
                        case r.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, s.$)(l.intl.formatToParts(l.t.wt3ZUM, { guildName: c.name }));
                        case r.W.INTERACTION_BLOCKED:
                            return (0, s.$)(l.intl.formatToParts(l.t.AkqI0g, { guildName: c.name }));
                        default:
                            return (0, s.$)(l.intl.formatToParts(l.t["a+lJKl"], { guildName: c.name }));
                    }
                }
                return e.content;
            case o.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var L = e.content;
                let w = E.A.getChannel(T);
                if (null == w) return null;
                let M = m.A.getGuild(w.getGuildId());
                return null == M
                    ? null
                    : (0, s.$)(
                          l.intl.formatToParts(l.t.iOuWPk, {
                              username: S,
                              guildName: M.name,
                              time:
                                  "" !== L
                                      ? new Date(L).toLocaleString(l.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case o.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let P = E.A.getChannel(T);
                if (null == P) return null;
                let x = m.A.getGuild(P.getGuildId());
                return null == x
                    ? null
                    : (0, s.$)(l.intl.formatToParts(l.t.axmbpm, { username: S, guildName: x.name }));
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                l.t["0cuj7l"],
                l.t["MuW+CN"],
                l.t.osqpHX,
                l.t["5ToSh2"],
                l.t.JEB8ps,
                l.t.pkOV5T,
                l.t["kRb1J+"],
                l.t["EmKLY+"],
                l.t.rPtBnb,
                l.t["5B/ekS"],
                l.t.ESNC3Y,
                l.t.Iw6d8w,
                l.t["WecSZ/"],
            ],
            n = T.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: N,
    getSystemMessageBotJoin: function (e) {
        return null == S[e] ? null : l.intl.format(l.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(S[e]) } });
    },
};
