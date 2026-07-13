"use strict";
n.d(t, { A: () => R });
var i = n(385244),
    r = n(718564),
    a = n(807081),
    s = n(47167),
    l = n(652215),
    o = n(375708),
    d = n(942075),
    c = n(320095),
    u = n(763754),
    _ = n(808829),
    E = n(552691),
    A = n(383233),
    h = n(280450),
    I = n(734057),
    f = n(71393),
    p = n(994500),
    T = n(287809),
    m = n(562153),
    g = n(935208);
let S = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function N(e) {
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
        n = g.default.extractTimestamp(e) % t.length;
    return t[n];
}
function C(e) {
    return (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: e, usernameOnClick: l.tEg }));
}
let R = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (T.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (T.default.getUser(t) ?? null)
                        : null;
            })(e),
            g = e.channel_id,
            S = m.Ay.getName(null, g, e.author);
        switch (e.type) {
            case l.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    o.intl.formatToParts(o.t["7/Xl0S"], {
                        username: S,
                        usernameOnClick: l.tEg,
                        otherUsername: m.Ay.getName(null, g, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let R = e.author;
                if (null == R || R.id === n.id)
                    return (0, a.$)(o.intl.formatToParts(o.t["Qn5+Lf"], { username: S, usernameOnClick: l.tEg }));
                return (0, a.$)(
                    o.intl.formatToParts(o.t.QtZ0RD, {
                        username: S,
                        usernameOnClick: l.tEg,
                        otherUsername: m.Ay.getName(null, g, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.CALL:
                let { call: O } = e;
                if (null != O && -1 === O.participants.indexOf(h.default.getId()))
                    return (0, a.$)(o.intl.formatToParts(o.t.DbgSA0, { username: S, usernameOnClick: l.tEg }));
                return;
            case l.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    o.intl.formatToParts(t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG, {
                        username: S,
                        usernameOnClick: l.tEg,
                        channelName: e.content,
                    }),
                );
            case l.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(o.intl.formatToParts(o.t.wypJZ0, { username: S, usernameOnClick: l.tEg }));
            case l.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(o.intl.formatToParts(o.t["/M60j0"], { username: S, usernameOnClick: l.tEg }));
            case l.lAJ.USER_JOIN:
                return (0, a.$)(o.intl.formatToParts(N(e.id), { username: S, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_BOOST:
                return C(S);
            case l.lAJ.GUILD_BOOST_TIER_1:
            case l.lAJ.GUILD_BOOST_TIER_2:
            case l.lAJ.GUILD_BOOST_TIER_3:
                let L;
                return null == (L = I.A.getChannel(g)) || null == f.A.getGuild(L.getGuildId())
                    ? C(S)
                    : (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: S, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_INVITE_REMINDER:
                return o.intl.string(o.t.gxyKvr);
            case l.lAJ.THREAD_STARTER_MESSAGE:
                return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                    username: S,
                    threadName: (0, s.m1)(t, T.default, p.A),
                });
            case l.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof A.Ay) return null;
                return (0, a.$)(
                    (0, d.eb)({ username: S, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case l.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof A.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = l.tEg, productName: i } = e;
                        return o.intl.formatToParts(o.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: S, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case l.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof A.Ay) return null;
                let D = (0, u.p_)((0, c.rh)(e));
                return (0, a.$)((0, _.P)({ application: e.application, username: D.nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof A.Ay) return null;
                return (0, a.$)((0, E.g6)({ application: e.application, username: (0, u.p_)((0, c.rh)(e)).nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof A.Ay) return null;
                return (0, a.$)((0, E.uk)({ application: e.application, username: (0, u.p_)((0, c.rh)(e)).nick }));
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
                        d = I.A.getChannel(g);
                    if (null == d) return null;
                    let c = f.A.getGuild(d.getGuildId());
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
                var y = e.content;
                let v = I.A.getChannel(g);
                if (null == v) return null;
                let b = f.A.getGuild(v.getGuildId());
                return null == b
                    ? null
                    : (0, a.$)(
                          o.intl.formatToParts(o.t.iOuWPk, {
                              username: S,
                              guildName: b.name,
                              time:
                                  "" !== y
                                      ? new Date(y).toLocaleString(o.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case l.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let M = I.A.getChannel(g);
                if (null == M) return null;
                let P = f.A.getGuild(M.getGuildId());
                return null == P
                    ? null
                    : (0, a.$)(o.intl.formatToParts(o.t.axmbpm, { username: S, guildName: P.name }));
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
            n = g.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: N,
    getSystemMessageBotJoin: function (e) {
        return null == S[e] ? null : o.intl.format(o.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(S[e]) } });
    },
};
