n.d(t, {
    K8: () => R,
    Rq: () => L,
    _5: () => k,
    cJ: () => I,
    fr: () => P,
    hv: () => D,
    ls: () => T,
    nX: () => N,
    qm: () => w,
}),
    n(896048),
    n(65821),
    n(733351);
var r = n(284009),
    l = n.n(r),
    a = n(562465),
    i = n(73153),
    s = n(308528),
    o = n(843472),
    c = n(587895),
    u = n(508675),
    d = n(451909),
    m = n(223863),
    f = n(21119),
    p = n(427157),
    h = n(734057),
    b = n(760751),
    g = n(197305),
    x = n(71393),
    y = n(287809),
    v = n(954571),
    j = n(403362),
    C = n(860689),
    _ = n(661191),
    A = n(532294),
    O = n(652215);

function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (
        (i.h.dispatch({
            type: "CHECKPOINT_FETCH_START",
        }),
        e)
    ) {
        let e,
            t,
            n,
            r,
            {
                users: a,
                guilds: s,
                emojis: o,
                applications: d,
                cardId: m,
                powerLevel: p,
                powerLevelPercentile: h,
                messages: b,
                voice: v,
                sidekick: j,
                quests: _,
            } = ((e = f.A.getUserAffinities()
                .slice(0, 4)
                .map((e) => y.default.getUser(e.otherUserId))
                .filter((e) => null != e)),
            (t = g.A.affinities.slice(0, 3).map((e) => {
                let t = x.A.getGuild(e.guildId);
                return (
                    l()(null != t, "Guild must exist"),
                    {
                        guild: (0, C.yF)(
                            S(E({}, t), {
                                features: [...t.features],
                            }),
                        ),
                        numMessagesSent: 0x9e6ca8,
                        numVoiceMinutes: 409516.21576666617,
                    }
                );
            })),
            (n = u.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map((e) => ({
                id: e.id,
                name: "surrogates" in e ? e.surrogates : e.name,
                animated: e.animated,
            }))),
            (r = c.A._getAllApplications()
                .slice(0, 5)
                .map((e) => ({
                    game: {
                        id: e.id,
                        name: e.name,
                        icon: e.icon,
                        coverImageHash: e.coverImage,
                    },
                    numDaysPlayed: 289,
                }))),
            {
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
            });
        i.h.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: m,
                powerLevel: p,
                powerLevelPercentile: h,
                messages: b,
                emojis: o,
                voice: v,
                guilds: s,
                users: a,
                applications: d,
                quests: _,
                sidekick: j,
            },
        });
        return;
    }
    try {
        var t, n, r, s, o, d, m, h;
        let { body: e } = await a.Bo.get({
                url: "/checkpoint",
                rejectWithError: !0,
            }),
            {
                card_id: l,
                power_level: c,
                power_level_percentile: u,
                messages: f,
                emojis: g,
                voice: y,
                guilds: v,
                users: j,
                sidekick: A,
                applications: O,
                quests: N,
                avatar_decoration: I,
            } = e;
        i.h.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: l,
                powerLevel: c,
                powerLevelPercentile: u,
                messages:
                    null != f
                        ? {
                              numMessagesSent: f.num_messages_sent,
                              numMessagesSentPercentile: f.num_messages_sent_percentile,
                              topMonth: {
                                  month: null != (t = null == (o = f.top_month) ? void 0 : o.month) ? t : 1,
                                  numMessagesSent:
                                      null != (n = null == (d = f.top_month) ? void 0 : d.num_messages_sent) ? n : 0,
                              },
                          }
                        : void 0,
                emojis:
                    null != g
                        ? {
                              emojis: g.emojis.map((e) =>
                                  S(E({}, e), {
                                      id: _.default.isProbablyAValidSnowflake(e.id) ? e.id : void 0,
                                  }),
                              ),
                              numEmojisSent: g.num_emojis_sent,
                          }
                        : void 0,
                voice:
                    null != y
                        ? {
                              totalVoiceMinutes: y.total_voice_minutes,
                              totalVoiceMinutesPercentile: y.total_voice_minutes_percentile,
                              topMonth: {
                                  month: null != (r = null == (m = y.top_month) ? void 0 : m.month) ? r : 1,
                                  numMinutesInVoice:
                                      null != (s = null == (h = y.top_month) ? void 0 : h.num_minutes_in_voice) ? s : 0,
                              },
                          }
                        : void 0,
                guilds:
                    null != v
                        ? {
                              guilds: v.guilds.map((e) => ({
                                  numMessagesSent: e.num_messages_sent,
                                  numVoiceMinutes: e.num_voice_minutes,
                                  guild: (0, C.Wj)(e.guild, x.A.getGuild(e.guild.id)),
                              })),
                              numGuildsJoined: v.num_guilds_joined,
                          }
                        : void 0,
                users:
                    null != j
                        ? j.map((e) => {
                              let { user: t } = e;
                              return new p.A(t);
                          })
                        : void 0,
                applications:
                    null != O
                        ? {
                              applications: O.applications.map((e) => ({
                                  game: S(E({}, (0, b.M)(e.game)), {
                                      coverImageHash: e.game.cover_image_hash,
                                  }),
                                  numDaysPlayed: e.num_sessions,
                              })),
                              totalGamesPlayed: O.total_games_played,
                          }
                        : void 0,
                quests:
                    null != N
                        ? {
                              numCompleted: N.num_completed,
                              numOrbs: N.num_orbs,
                          }
                        : void 0,
                sidekick:
                    null != A
                        ? {
                              numMessagesSent: A.num_messages_sent,
                              numVoiceMinutes: A.num_voice_minutes,
                              user: new p.A(A.user),
                          }
                        : void 0,
                avatarDecoration:
                    null != I
                        ? {
                              type: I.type,
                              asset: I.asset,
                              label: I.label,
                              skuId: I.sku_id,
                          }
                        : void 0,
            },
        });
    } catch (e) {
        i.h.dispatch({
            type: "CHECKPOINT_FETCH_FAILED",
        });
    }
}
let I = async (e, t, n) => {
    let { withMessage: r } = t;
    (await Promise.all(e.map(m.pk))).filter(j.Vq).forEach((e) => {
        let t = h.A.getChannel(e);
        if (null == t) return;
        let n = d.Ay.parse(t, null != r ? r : "");
        (n.components = []),
            o.A.sendMessage(e, n, !1, {
                location: "checkpoint",
                withCheckpoint: !0,
            });
    });
};
async function P(e, t) {
    let n = await s.A.openPrivateChannel({
            recipientIds: t,
            location: "checkpoint-sidekick",
            navigateToChannel: !1,
        }),
        r = h.A.getChannel(n);
    if (null == r) throw Error("Failed to open private channel");
    let l = (0, A.qk)().findIndex((t) => t.trim() === e);
    v.default.track(O.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
        other_user_id: t,
        message_variant: l.toString(),
    });
    let a = d.Ay.parse(r, e);
    return o.A.sendMessage(r.id, a, !1, {
        location: "checkpoint-sidekick",
    });
}
async function w() {
    try {
        return await a.Bo.post({
            url: "/checkpoint/loot",
            rejectWithError: !0,
        });
    } catch (e) {}
}

function T(e) {
    return i.h.dispatch({
        type: "CHECKPOINT_SET_VOLUME",
        volume: e,
    });
}

function R() {
    return i.h.dispatch({
        type: "CHECKPOINT_TOGGLE_MUTE",
    });
}

function L(e) {
    return i.h.dispatch({
        type: "CHECKPOINT_SET_HIGHEST_SLIDE_SEEN",
        slide: e,
    });
}

function D() {
    return i.h.dispatch({
        type: "CHECKPOINT_AFTER_CLOSED",
    });
}

function k() {
    return i.h.dispatch({
        type: "CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER",
    });
}
