n.d(t, { A: () => L });
var i = n(385244),
    r = n(718564),
    a = n(807081),
    s = n(47167),
    l = n(652215),
    o = n(105292),
    d = n(942075),
    c = n(747407),
    u = n(320095),
    _ = n(763754),
    E = n(808829),
    A = n(552691),
    h = n(383233),
    f = n(280450),
    I = n(734057),
    p = n(71393),
    T = n(994500),
    m = n(287809),
    g = n(562153),
    S = n(935208);
let N = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function C(e) {
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
        n = S.default.extractTimestamp(e) % t.length;
    return t[n];
}
function O(e) {
    return (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: e, usernameOnClick: l.tEg }));
}
function R(e, t) {
    return null == t
        ? (0, a.$)(o.intl.formatToParts(o.t.EAkHd2, { appName: e, appNameOnClick: l.tEg }))
        : (0, a.$)(
              o.intl.formatToParts(o.t["x6G/Rr"], {
                  username: t,
                  usernameOnClick: l.tEg,
                  appName: e,
                  appNameOnClick: l.tEg,
              }),
          );
}
let L = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (m.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (m.default.getUser(t) ?? null)
                        : null;
            })(e),
            S = e.channel_id,
            N = g.Ay.getName(null, S, e.author);
        switch (e.type) {
            case l.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    o.intl.formatToParts(o.t["7/Xl0S"], {
                        username: N,
                        usernameOnClick: l.tEg,
                        otherUsername: g.Ay.getName(null, S, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let L = e.author;
                if (null == L || L.id === n.id)
                    return (0, a.$)(o.intl.formatToParts(o.t["Qn5+Lf"], { username: N, usernameOnClick: l.tEg }));
                return (0, a.$)(
                    o.intl.formatToParts(o.t.QtZ0RD, {
                        username: N,
                        usernameOnClick: l.tEg,
                        otherUsername: g.Ay.getName(null, S, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.CALL:
                let { call: y } = e;
                if (null != y && -1 === y.participants.indexOf(f.default.getId()))
                    return (0, a.$)(o.intl.formatToParts(o.t.DbgSA0, { username: N, usernameOnClick: l.tEg }));
                return;
            case l.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    o.intl.formatToParts(t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG, {
                        username: N,
                        usernameOnClick: l.tEg,
                        channelName: e.content,
                    }),
                );
            case l.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(o.intl.formatToParts(o.t.wypJZ0, { username: N, usernameOnClick: l.tEg }));
            case l.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(o.intl.formatToParts(o.t["/M60j0"], { username: N, usernameOnClick: l.tEg }));
            case l.lAJ.USER_JOIN:
                if (e.author?.bot === !0) return R(N, null != e.actor ? g.Ay.getName(null, S, e.actor) : null);
                return (0, a.$)(o.intl.formatToParts(C(e.id), { username: N, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_BOOST:
                return O(N);
            case l.lAJ.GUILD_BOOST_TIER_1:
            case l.lAJ.GUILD_BOOST_TIER_2:
            case l.lAJ.GUILD_BOOST_TIER_3:
                let D;
                return null == (D = I.A.getChannel(S)) || null == p.A.getGuild(D.getGuildId())
                    ? O(N)
                    : (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: N, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_INVITE_REMINDER:
                return o.intl.string(o.t.gxyKvr);
            case l.lAJ.THREAD_STARTER_MESSAGE:
                return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                    username: N,
                    threadName: (0, s.m1)(t, m.default, T.A),
                });
            case l.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof h.Ay) return null;
                return (0, a.$)(
                    (0, d.eb)({ username: N, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case l.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof h.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = l.tEg, productName: i } = e;
                        return o.intl.formatToParts(o.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: N, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case l.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof h.Ay) return null;
                let v = (0, _.p_)((0, u.rh)(e));
                return (0, a.$)((0, E.P)({ application: e.application, username: v.nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof h.Ay) return null;
                return (0, a.$)((0, A.g6)({ application: e.application, username: (0, _.p_)((0, u.rh)(e)).nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof h.Ay) return null;
                return (0, a.$)((0, A.uk)({ application: e.application, username: (0, _.p_)((0, u.rh)(e)).nick }));
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
                        d = I.A.getChannel(S);
                    if (null == d) return null;
                    let c = p.A.getGuild(d.getGuildId());
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
                let M = I.A.getChannel(S);
                if (null == M) return null;
                let P = p.A.getGuild(M.getGuildId());
                return null == P
                    ? null
                    : (0, a.$)(
                          o.intl.formatToParts(o.t.iOuWPk, {
                              username: N,
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
                let U = I.A.getChannel(S);
                if (null == U) return null;
                let w = p.A.getGuild(U.getGuildId());
                return null == w
                    ? null
                    : (0, a.$)(o.intl.formatToParts(o.t.axmbpm, { username: N, guildName: w.name }));
            case l.lAJ.GUILD_SPACE_MESSAGE:
                return (0, c.X)(e, t);
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
            n = S.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: C,
    getSystemMessageBotJoin: function (e) {
        return null == N[e] ? null : o.intl.format(o.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(N[e]) } });
    },
    getSystemMessageAppAdded: R,
};
