n.d(t, { A: () => v });
var i = n(385244),
    r = n(718564),
    a = n(807081),
    s = n(47167),
    l = n(652215),
    o = n(105292),
    d = n(942075),
    c = n(523154),
    u = n(518782),
    _ = n(72216),
    E = n(825476),
    A = n(320095),
    h = n(763754),
    f = n(808829),
    I = n(552691),
    p = n(383233),
    T = n(280450),
    m = n(734057),
    g = n(71393),
    S = n(994500),
    N = n(287809),
    C = n(562153),
    O = n(935208);
let R = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function L(e) {
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
        n = O.default.extractTimestamp(e) % t.length;
    return t[n];
}
function y(e) {
    return (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: e, usernameOnClick: l.tEg }));
}
function D(e, t) {
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
let v = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (N.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (N.default.getUser(t) ?? null)
                        : null;
            })(e),
            O = e.channel_id,
            R = C.Ay.getName(null, O, e.author);
        switch (e.type) {
            case l.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    o.intl.formatToParts(o.t["7/Xl0S"], {
                        username: R,
                        usernameOnClick: l.tEg,
                        otherUsername: C.Ay.getName(null, O, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let v = e.author;
                if (null == v || v.id === n.id)
                    return (0, a.$)(o.intl.formatToParts(o.t["Qn5+Lf"], { username: R, usernameOnClick: l.tEg }));
                return (0, a.$)(
                    o.intl.formatToParts(o.t.QtZ0RD, {
                        username: R,
                        usernameOnClick: l.tEg,
                        otherUsername: C.Ay.getName(null, O, n),
                        otherUsernameOnClick: l.tEg,
                    }),
                );
            case l.lAJ.CALL:
                let { call: b } = e;
                if (null != b && -1 === b.participants.indexOf(T.default.getId()))
                    return (0, a.$)(o.intl.formatToParts(o.t.DbgSA0, { username: R, usernameOnClick: l.tEg }));
                return;
            case l.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    o.intl.formatToParts(t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG, {
                        username: R,
                        usernameOnClick: l.tEg,
                        channelName: e.content,
                    }),
                );
            case l.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(o.intl.formatToParts(o.t.wypJZ0, { username: R, usernameOnClick: l.tEg }));
            case l.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(o.intl.formatToParts(o.t["/M60j0"], { username: R, usernameOnClick: l.tEg }));
            case l.lAJ.USER_JOIN:
                if (e.author?.bot === !0) return D(R, null != e.actor ? C.Ay.getName(null, O, e.actor) : null);
                return (0, a.$)(o.intl.formatToParts(L(e.id), { username: R, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_BOOST:
                return y(R);
            case l.lAJ.GUILD_BOOST_TIER_1:
            case l.lAJ.GUILD_BOOST_TIER_2:
            case l.lAJ.GUILD_BOOST_TIER_3:
                let M;
                return null == (M = m.A.getChannel(O)) || null == g.A.getGuild(M.getGuildId())
                    ? y(R)
                    : (0, a.$)(o.intl.formatToParts(o.t.ihxM9x, { username: R, usernameOnClick: l.tEg }));
            case l.lAJ.GUILD_INVITE_REMINDER:
                return o.intl.string(o.t.gxyKvr);
            case l.lAJ.THREAD_STARTER_MESSAGE:
                return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                    username: R,
                    threadName: (0, s.m1)(t, N.default, S.A),
                });
            case l.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof p.Ay) return null;
                return (0, a.$)(
                    (0, d.eb)({ username: R, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case l.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof p.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (function (e) {
                        let { username: t, usernameOnClickHandler: n = l.tEg, productName: i } = e;
                        return o.intl.formatToParts(o.t["w4iXs+"], { username: t, usernameHook: n, productName: i });
                    })({ username: R, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case l.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof p.Ay) return null;
                let P = (0, h.p_)((0, A.rh)(e));
                return (0, a.$)((0, f.P)({ application: e.application, username: P.nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof p.Ay) return null;
                return (0, a.$)((0, I.g6)({ application: e.application, username: (0, h.p_)((0, A.rh)(e)).nick }));
            case l.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof p.Ay) return null;
                return (0, a.$)((0, I.uk)({ application: e.application, username: (0, h.p_)((0, A.rh)(e)).nick }));
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
                        d = m.A.getChannel(O);
                    if (null == d) return null;
                    let c = g.A.getGuild(d.getGuildId());
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
                var U = e.content;
                let w = m.A.getChannel(O);
                if (null == w) return null;
                let G = g.A.getGuild(w.getGuildId());
                return null == G
                    ? null
                    : (0, a.$)(
                          o.intl.formatToParts(o.t.iOuWPk, {
                              username: R,
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
            case l.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let x = m.A.getChannel(O);
                if (null == x) return null;
                let k = g.A.getGuild(x.getGuildId());
                return null == k
                    ? null
                    : (0, a.$)(o.intl.formatToParts(o.t.axmbpm, { username: R, guildName: k.name }));
            case l.lAJ.GUILD_SPACE_MESSAGE: {
                let n = (0, E.x)(e instanceof p.Ay ? e.guildSpaceData?.music : e.guild_space_data?.music);
                if (null != n) {
                    let i = N.default.getUser(n.userId),
                        r = (0, _.O)(n, null != i ? C.Ay.getName(t.getGuildId(), O, i) : null);
                    if (null == r) return e.content;
                    return o.intl.formatToPlainString(r.message, { ...r.values, usernameHook: (e) => e });
                }
                let i = (0, u.Nu)(e instanceof p.Ay ? e.guildSpaceData?.leaderboard : e.guild_space_data?.leaderboard),
                    r = (0, c.U_)(i, N.default.getUser(i?.userId), N.default.getUser(i?.secondaryUserId));
                if (null == r) return e.content;
                let a = t.getGuildId(),
                    s = (0, c.Sx)(r.data, {
                        username: C.Ay.getName(a, O, r.subject),
                        previousUsername:
                            r.data.event === u.zu.LEADER_CHANGED ? C.Ay.getName(a, O, r.previousLeader) : "",
                    });
                if (null == s) return e.content;
                return o.intl.formatToPlainString(s.message, {
                    ...s.values,
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
            n = O.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: L,
    getSystemMessageBotJoin: function (e) {
        return null == R[e] ? null : o.intl.format(o.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(R[e]) } });
    },
    getSystemMessageAppAdded: D,
};
