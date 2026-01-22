n.d(t, {
    K8: () => M,
    Rq: () => k,
    _5: () => G,
    cJ: () => D,
    fr: () => x,
    hv: () => U,
    ls: () => j,
    nX: () => P,
    qm: () => L,
}),
    n(896048),
    n(65821),
    n(733351);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(308528),
    l = n(843472),
    c = n(587895),
    u = n(508675),
    d = n(451909),
    f = n(223863),
    p = n(21119),
    _ = n(427157),
    h = n(734057),
    m = n(760751),
    g = n(197305),
    E = n(71393),
    b = n(287809),
    y = n(954571),
    O = n(403362),
    A = n(860689),
    v = n(661191),
    S = n(532294),
    I = n(652215);

function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w() {
    let e = p.A.getUserAffinities()
            .slice(0, 4)
            .map((e) => b.default.getUser(e.otherUserId))
            .filter((e) => null != e),
        t = g.A.affinities.slice(0, 3).map((e) => {
            let t = E.A.getGuild(e.guildId);
            return (
                i()(null != t, "Guild must exist"),
                {
                    guild: (0, A.yF)(
                        R(C({}, t), {
                            features: [...t.features],
                        }),
                    ),
                    numMessagesSent: 0x9e6ca8,
                    numVoiceMinutes: 409516.21576666617,
                }
            );
        }),
        n = u.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map((e) => ({
            id: e.id,
            name: "surrogates" in e ? e.surrogates : e.name,
            animated: e.animated,
        })),
        r = c.A._getAllApplications()
            .slice(0, 5)
            .map((e) => ({
                game: {
                    id: e.id,
                    name: e.name,
                    icon: e.icon,
                    coverImageHash: e.coverImage,
                },
                numDaysPlayed: 289,
            }));
    return {
        cardId: 1,
        powerLevel: 0x9eb1f6,
        powerLevelPercentile: 5,
        messages: {
            numMessagesSent: 0x9eb1f6,
            numMessagesSentPercentile: 99.99,
            topMonth: {
                month: 8,
                numMessagesSent: 0x9eb1f6,
            },
        },
        voice: {
            totalVoiceMinutes: 2741198.975133333,
            totalVoiceMinutesPercentile: 99.99,
            topMonth: {
                numMinutesInVoice: 2741198.975133333,
                month: 8,
            },
        },
        quests: {
            numCompleted: 164,
            numOrbs: 122690,
        },
        users: e.slice(1, 4),
        sidekick: {
            user: e[0],
            numMessagesSent: 0x9eb1f6,
            numVoiceMinutes: 2741198.975133333,
        },
        guilds: {
            guilds: t,
            numGuildsJoined: 203,
        },
        emojis: {
            emojis: n,
            numEmojisSent: 0x21414c9c,
        },
        applications: {
            applications: r,
            totalGamesPlayed: 4278,
        },
    };
}
async function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (
        (s.h.dispatch({
            type: "CHECKPOINT_FETCH_START",
        }),
        e)
    ) {
        let {
            users: e,
            guilds: t,
            emojis: n,
            applications: r,
            cardId: i,
            powerLevel: a,
            powerLevelPercentile: o,
            messages: l,
            voice: c,
            sidekick: u,
            quests: d,
        } = w();
        s.h.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: i,
                powerLevel: a,
                powerLevelPercentile: o,
                messages: l,
                emojis: n,
                voice: c,
                guilds: t,
                users: e,
                applications: r,
                quests: d,
                sidekick: u,
            },
        });
        return;
    }
    try {
        var t, n, r, i, o, l, c, u;
        let { body: e } = await a.Bo.get({
                url: "/checkpoint",
                rejectWithError: !0,
            }),
            {
                card_id: d,
                power_level: f,
                power_level_percentile: p,
                messages: h,
                emojis: g,
                voice: b,
                guilds: y,
                users: O,
                sidekick: S,
                applications: I,
                quests: T,
                avatar_decoration: N,
            } = e;
        s.h.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: d,
                powerLevel: f,
                powerLevelPercentile: p,
                messages:
                    null != h
                        ? {
                              numMessagesSent: h.num_messages_sent,
                              numMessagesSentPercentile: h.num_messages_sent_percentile,
                              topMonth: {
                                  month: null != (t = null == (o = h.top_month) ? void 0 : o.month) ? t : 1,
                                  numMessagesSent:
                                      null != (n = null == (l = h.top_month) ? void 0 : l.num_messages_sent) ? n : 0,
                              },
                          }
                        : void 0,
                emojis:
                    null != g
                        ? {
                              emojis: g.emojis.map((e) =>
                                  R(C({}, e), {
                                      id: v.default.isProbablyAValidSnowflake(e.id) ? e.id : void 0,
                                  }),
                              ),
                              numEmojisSent: g.num_emojis_sent,
                          }
                        : void 0,
                voice:
                    null != b
                        ? {
                              totalVoiceMinutes: b.total_voice_minutes,
                              totalVoiceMinutesPercentile: b.total_voice_minutes_percentile,
                              topMonth: {
                                  month: null != (r = null == (c = b.top_month) ? void 0 : c.month) ? r : 1,
                                  numMinutesInVoice:
                                      null != (i = null == (u = b.top_month) ? void 0 : u.num_minutes_in_voice) ? i : 0,
                              },
                          }
                        : void 0,
                guilds:
                    null != y
                        ? {
                              guilds: y.guilds.map((e) => ({
                                  numMessagesSent: e.num_messages_sent,
                                  numVoiceMinutes: e.num_voice_minutes,
                                  guild: (0, A.Wj)(e.guild, E.A.getGuild(e.guild.id)),
                              })),
                              numGuildsJoined: y.num_guilds_joined,
                          }
                        : void 0,
                users:
                    null != O
                        ? O.map((e) => {
                              let { user: t } = e;
                              return new _.A(t);
                          })
                        : void 0,
                applications:
                    null != I
                        ? {
                              applications: I.applications.map((e) => ({
                                  game: R(C({}, (0, m.M)(e.game)), {
                                      coverImageHash: e.game.cover_image_hash,
                                  }),
                                  numDaysPlayed: e.num_sessions,
                              })),
                              totalGamesPlayed: I.total_games_played,
                          }
                        : void 0,
                quests:
                    null != T
                        ? {
                              numCompleted: T.num_completed,
                              numOrbs: T.num_orbs,
                          }
                        : void 0,
                sidekick:
                    null != S
                        ? {
                              numMessagesSent: S.num_messages_sent,
                              numVoiceMinutes: S.num_voice_minutes,
                              user: new _.A(S.user),
                          }
                        : void 0,
                avatarDecoration:
                    null != N
                        ? {
                              type: N.type,
                              asset: N.asset,
                              label: N.label,
                              skuId: N.sku_id,
                          }
                        : void 0,
            },
        });
    } catch (e) {
        s.h.dispatch({
            type: "CHECKPOINT_FETCH_FAILED",
        });
    }
}
let D = async (e, t, n) => {
    let { withMessage: r } = t;
    (await Promise.all(e.map(f.pk))).filter(O.Vq).forEach((e) => {
        let t = h.A.getChannel(e);
        if (null == t) return;
        let n = d.Ay.parse(t, null != r ? r : "");
        (n.components = []),
            l.A.sendMessage(e, n, !1, {
                location: "checkpoint",
                withCheckpoint: !0,
            });
    });
};
async function x(e, t) {
    let n = await o.A.openPrivateChannel({
            recipientIds: t,
            location: "checkpoint-sidekick",
            navigateToChannel: !1,
        }),
        r = h.A.getChannel(n);
    if (null == r) throw Error("Failed to open private channel");
    let i = (0, S.qk)().findIndex((t) => t.trim() === e);
    y.default.track(I.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
        other_user_id: t,
        message_variant: i.toString(),
    });
    let a = d.Ay.parse(r, e);
    return l.A.sendMessage(r.id, a, !1, {
        location: "checkpoint-sidekick",
    });
}
async function L() {
    try {
        return await a.Bo.post({
            url: "/checkpoint/loot",
            rejectWithError: !0,
        });
    } catch (e) {}
}

function j(e) {
    return s.h.dispatch({
        type: "CHECKPOINT_SET_VOLUME",
        volume: e,
    });
}

function M() {
    return s.h.dispatch({
        type: "CHECKPOINT_TOGGLE_MUTE",
    });
}

function k(e) {
    return s.h.dispatch({
        type: "CHECKPOINT_SET_HIGHEST_SLIDE_SEEN",
        slide: e,
    });
}

function U() {
    return s.h.dispatch({
        type: "CHECKPOINT_AFTER_CLOSED",
    });
}

function G() {
    return s.h.dispatch({
        type: "CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER",
    });
}
