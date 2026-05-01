n.d(t, { A: () => h });
var i = n(385244),
    r = n(718564),
    a = n(436857),
    l = n(47167),
    s = n(652215),
    E = n(985018),
    _ = n(942075),
    o = n(320095),
    u = n(763754),
    A = n(808829),
    d = n(552691),
    c = n(383233),
    I = n(495544),
    T = n(734057),
    N = n(71393),
    S = n(994500),
    O = n(287809),
    C = n(562153),
    p = n(935208);
let R = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function g(e) {
    let t = [
            E.t.Jm6e0x,
            E.t.MGRnRT,
            E.t.EXOEGh,
            E.t["5uCTFN"],
            E.t.rl45Qo,
            E.t.Bh9zpQ,
            E.t.RdEy1J,
            E.t.qcdp00,
            E.t.F7w2Ru,
            E.t.gSyOgK,
            E.t.uYgqv7,
            E.t["b/1SBX"],
            E.t.LhebZF,
        ],
        n = p.default.extractTimestamp(e) % t.length;
    return t[n];
}
function M(e) {
    return (0, a.$)(E.intl.formatToParts(E.t.ihxM9x, { username: e, usernameOnClick: s.tEg }));
}
let h = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (O.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (O.default.getUser(t) ?? null)
                        : null;
            })(e),
            p = e.channel_id,
            R = C.Ay.getName(null, p, e.author);
        switch (e.type) {
            case s.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    E.intl.formatToParts(E.t["7/Xl0S"], {
                        username: R,
                        usernameOnClick: s.tEg,
                        otherUsername: C.Ay.getName(null, p, n),
                        otherUsernameOnClick: s.tEg,
                    }),
                );
            case s.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let h = e.author;
                if (null == h || h.id === n.id)
                    return (0, a.$)(E.intl.formatToParts(E.t["Qn5+Lf"], { username: R, usernameOnClick: s.tEg }));
                return (0, a.$)(
                    E.intl.formatToParts(E.t.QtZ0RD, {
                        username: R,
                        usernameOnClick: s.tEg,
                        otherUsername: C.Ay.getName(null, p, n),
                        otherUsernameOnClick: s.tEg,
                    }),
                );
            case s.lAJ.CALL:
                let { call: m } = e;
                if (null != m && -1 === m.participants.indexOf(I.default.getId()))
                    return (0, a.$)(E.intl.formatToParts(E.t.DbgSA0, { username: R, usernameOnClick: s.tEg }));
                return;
            case s.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    E.intl.formatToParts(t.isForumPost() ? E.t["qa0e/n"] : E.t.XCPMEG, {
                        username: R,
                        usernameOnClick: s.tEg,
                        channelName: e.content,
                    }),
                );
            case s.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(E.intl.formatToParts(E.t.wypJZ0, { username: R, usernameOnClick: s.tEg }));
            case s.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(E.intl.formatToParts(E.t["/M60j0"], { username: R, usernameOnClick: s.tEg }));
            case s.lAJ.USER_JOIN:
                return (0, a.$)(E.intl.formatToParts(g(e.id), { username: R, usernameOnClick: s.tEg }));
            case s.lAJ.EMOJI_ADDED:
                let L, D;
                return (
                    (D = null == (L = T.A.getChannel(e.channel_id)) ? null : N.A.getGuild(L.getGuildId())),
                    (0, a.$)(
                        E.intl.formatToParts(E.t.PJsjbP, {
                            emoji: e.content,
                            guildName: D?.name ?? E.intl.string(E.t.dtwqPR),
                        }),
                    )
                );
            case s.lAJ.GUILD_BOOST:
                return M(R);
            case s.lAJ.GUILD_BOOST_TIER_1:
            case s.lAJ.GUILD_BOOST_TIER_2:
            case s.lAJ.GUILD_BOOST_TIER_3:
                let y;
                return null == (y = T.A.getChannel(p)) || null == N.A.getGuild(y.getGuildId())
                    ? M(R)
                    : (0, a.$)(E.intl.formatToParts(E.t.ihxM9x, { username: R, usernameOnClick: s.tEg }));
            case s.lAJ.GUILD_INVITE_REMINDER:
                return E.intl.string(E.t.gxyKvr);
            case s.lAJ.THREAD_STARTER_MESSAGE:
                return E.intl.formatToPlainString(E.t["B8H+Cl"], {
                    username: R,
                    threadName: (0, l.m1)(t, O.default, S.A),
                });
            case s.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof c.Ay) return null;
                return (0, a.$)(
                    (0, _.eb)({ username: R, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case s.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof c.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = s.tEg, productName: i } = e;
                        return E.intl.formatToParts(E.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: R, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case s.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof c.Ay) return null;
                let f = (0, u.p_)((0, o.rh)(e));
                return (0, a.$)((0, A.P)({ application: e.application, username: f.nick }));
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof c.Ay) return null;
                return (0, a.$)((0, d.g6)({ application: e.application, username: (0, u.p_)((0, o.rh)(e)).nick }));
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof c.Ay) return null;
                return (0, a.$)((0, d.uk)({ application: e.application, username: (0, u.p_)((0, o.rh)(e)).nick }));
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
                        _ = T.A.getChannel(p);
                    if (null == _) return null;
                    let o = N.A.getGuild(_.getGuildId());
                    if (null == o) return null;
                    switch (l) {
                        case r.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, a.$)(E.intl.formatToParts(E.t.wt3ZUM, { guildName: o.name }));
                        case r.W.INTERACTION_BLOCKED:
                            return (0, a.$)(E.intl.formatToParts(E.t.AkqI0g, { guildName: o.name }));
                        default:
                            return (0, a.$)(E.intl.formatToParts(E.t["a+lJKl"], { guildName: o.name }));
                    }
                }
                return e.content;
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var U = e.content;
                let P = T.A.getChannel(p);
                if (null == P) return null;
                let G = N.A.getGuild(P.getGuildId());
                return null == G
                    ? null
                    : (0, a.$)(
                          E.intl.formatToParts(E.t.iOuWPk, {
                              username: R,
                              guildName: G.name,
                              time:
                                  "" !== U
                                      ? new Date(U).toLocaleString(E.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let B = T.A.getChannel(p);
                if (null == B) return null;
                let v = N.A.getGuild(B.getGuildId());
                return null == v
                    ? null
                    : (0, a.$)(E.intl.formatToParts(E.t.axmbpm, { username: R, guildName: v.name }));
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                E.t["0cuj7l"],
                E.t["MuW+CN"],
                E.t.osqpHX,
                E.t["5ToSh2"],
                E.t.JEB8ps,
                E.t.pkOV5T,
                E.t["kRb1J+"],
                E.t["EmKLY+"],
                E.t.rPtBnb,
                E.t["5B/ekS"],
                E.t.ESNC3Y,
                E.t.Iw6d8w,
                E.t["WecSZ/"],
            ],
            n = p.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: g,
    getSystemMessageBotJoin: function (e) {
        return null == R[e] ? null : E.intl.format(E.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(R[e]) } });
    },
};
