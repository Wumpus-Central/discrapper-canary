n(321073);
var i = n(35039),
    r = n(675970),
    a = n(499979),
    s = n(155718),
    l = n(7584),
    o = n(811091);
n(835517);
var d = n(989238),
    c = n(373955);
n(399667);
var u = n(817379);
n(142617);
var _ = n(407905),
    E = n(532294),
    A = n(350363),
    f = n(852717),
    h = n(792996);
let I = [a.pJ.HOURS, a.pJ.MINUTES],
    p = new Set([r.Q.DEFAULT, r.Q.CHARACTER_ONLY]),
    m = new Set([r.Q.DEFAULT, r.Q.STATS_ONLY]);
function T(e) {
    return new Intl.NumberFormat(h.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function g(e) {
    return Math.min(Math.max(Math.round((e / 100) * 6), 1), 5);
}
n.d(
    t,
    {},
    {
        Go: function (e, t, n) {
            let i, r, a;
            return {
                version: E.wk.V2026,
                character: p.has(e) ? (t ?? void 0) : void 0,
                stats:
                    m.has(e) && null != n
                        ? ((i = n.guilds?.guilds[0]),
                          (r = n.emojis?.emojis[0]),
                          (a = n.games?.games[0]?.game),
                          {
                              totalVoiceMinutes: n.voice?.totalVoiceMinutes ?? 0,
                              numMessagesSent: n.messages?.numMessagesSent ?? 0,
                              numEmojisSent: n.emojis?.numEmojisSent ?? 0,
                              totalDaysPlayed: n.games?.totalDaysPlayed ?? 0,
                              topEmoji: null != r ? { emojiId: r.id, emojiName: r.name } : void 0,
                              topGuild:
                                  null != i
                                      ? {
                                            guildId: i.guild.id,
                                            guildName: i.guild.name,
                                            guildIcon: i.guild.icon ?? void 0,
                                        }
                                      : void 0,
                              topGuildNumDaysInteracted: i?.numDaysInteracted ?? 0,
                              topGame:
                                  null != a
                                      ? { applicationId: a.id, applicationName: a.name, applicationImageId: a.iconHash }
                                      : void 0,
                              powerLevel: n.power?.powerLevel ?? 0,
                              powerLevelPercentile: n.power?.powerLevelPercentile ?? 0,
                          })
                        : void 0,
                cardColorPalette: (0, c.o)(t),
            };
        },
        Le: T,
        R8: function (e) {
            let t;
            return {
                powerLevel: T(e.powerLevel),
                powerLevelUnits: g(e.powerLevelPercentile),
                voice: {
                    text:
                        (t = Math.round(e.totalVoiceMinutes)) > 0
                            ? (function (e) {
                                  let { unit: t, time: n } = (0, a.$l)(e, I),
                                      i = Math.round(n ?? 0);
                                  return t === a.pJ.HOURS
                                      ? h.intl.formatToPlainString(f.default.CQfBsB, { hours: i })
                                      : h.intl.formatToPlainString(f.default.yRfTht, { minutes: i });
                              })(t)
                            : h.intl.formatToPlainString(f.default.x7PkHm, { minutes: t }),
                    accessibilityLabel: h.intl.formatToPlainString(f.default.lw35aH, { duration: (0, d.GM)(t) }),
                },
                messages: {
                    text:
                        e.numMessagesSent > 0
                            ? e.numMessagesSent.toLocaleString(h.intl.currentLocale)
                            : h.intl.formatToPlainString(f.default.foKBCN, { count: e.numMessagesSent }),
                    accessibilityLabel: h.intl.formatToPlainString(f.default.IdRUAC, { count: e.numMessagesSent }),
                },
                topGuildDaysInteracted: (function (e) {
                    if (null == e.topGuild) {
                        var t;
                        return { text: (t = h.intl.string(f.default.GultYJ)), accessibilityLabel: t };
                    }
                    return {
                        text: h.intl.formatToPlainString(f.default.cQXIkj, { days: e.topGuildNumDaysInteracted }),
                        accessibilityLabel: h.intl.formatToPlainString(f.default.MpSH8v, {
                            days: e.topGuildNumDaysInteracted,
                        }),
                    };
                })(e),
                topGuildName: (function (e) {
                    if (null != e.topGuild)
                        return {
                            text: e.topGuild.guildName,
                            accessibilityLabel: h.intl.formatToPlainString(f.default["9UTJ+t"], {
                                guildName: e.topGuild.guildName,
                            }),
                        };
                })(e),
                reactions: {
                    text:
                        e.numEmojisSent > 0
                            ? e.numEmojisSent.toLocaleString(h.intl.currentLocale)
                            : h.intl.formatToPlainString(f.default.RHYx1k, { count: e.numEmojisSent }),
                    accessibilityLabel: h.intl.formatToPlainString(f.default["36qpUG"], { count: e.numEmojisSent }),
                },
                topEmojiName: (function (e) {
                    if (!(e.numEmojisSent <= 0) && null != e.topEmoji)
                        return {
                            text:
                                null == e.topEmoji.emojiId
                                    ? l.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                                    : `:${e.topEmoji.emojiName}:`,
                            accessibilityLabel: h.intl.formatToPlainString(f.default.CcBo8C, {
                                emojiName: e.topEmoji.emojiName,
                            }),
                        };
                })(e),
                daysPlayed: {
                    text:
                        e.totalDaysPlayed > 0
                            ? h.intl.formatToPlainString(f.default.cQXIkj, { days: e.totalDaysPlayed })
                            : h.intl.string(f.default.mg1NPe),
                    accessibilityLabel: h.intl.formatToPlainString(f.default.LYcKX7, { days: e.totalDaysPlayed }),
                },
                topGameName: (function (e) {
                    if (!(e.totalDaysPlayed <= 0) && null != e.topGame)
                        return {
                            text: e.topGame.applicationName,
                            accessibilityLabel: h.intl.formatToPlainString(f.default.kLqpNC, {
                                gameName: e.topGame.applicationName,
                            }),
                        };
                })(e),
                topEmoji: e.topEmoji,
                topGuild: e.topGuild,
                topGuildAcronymCharacter: null != e.topGuild ? (0, _.oW)(e.topGuild.guildName) : void 0,
                topGame: e.topGame,
            };
        },
        _S: function (e) {
            let t = e.components[0];
            return null == t || t.type !== s.I5.CHECKPOINT_CARD ? null : t.checkpointData;
        },
        b5: function (e) {
            switch (e.version) {
                case E.wk.V2025:
                    return h.intl.string(A.default.goiR2u);
                case E.wk.V2026:
                default:
                    return null;
            }
        },
        q6: function (e) {
            var t, n;
            return null == e.character && null == e.stats
                ? null
                : {
                      version: e.version,
                      character:
                          null != e.character
                              ? {
                                    base: (t = e.character).base,
                                    shoes: t.shoes,
                                    outfit: t.outfit,
                                    face: t.face,
                                    hat: t.hat,
                                    wearable: t.wearable,
                                    aura: t.aura,
                                }
                              : void 0,
                      stats:
                          null != e.stats
                              ? {
                                    totalVoiceMinutes: (n = e.stats).total_voice_minutes,
                                    numMessagesSent: n.num_messages_sent,
                                    numEmojisSent: n.num_emojis_sent,
                                    totalDaysPlayed: n.total_days_played,
                                    topEmoji:
                                        null != n.top_emoji
                                            ? {
                                                  emojiId: o.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id)
                                                      ? n.top_emoji.emoji_id
                                                      : void 0,
                                                  emojiName: n.top_emoji.emoji_name,
                                              }
                                            : void 0,
                                    topGuild:
                                        null != n.top_guild
                                            ? {
                                                  guildId: n.top_guild.guild_id,
                                                  guildName: n.top_guild.guild_name,
                                                  guildIcon: n.top_guild.guild_icon,
                                              }
                                            : void 0,
                                    topGuildNumDaysInteracted: n.top_guild_num_days_interacted,
                                    topGame:
                                        null != n.top_game
                                            ? {
                                                  applicationId: n.top_game.application_id,
                                                  applicationName: n.top_game.application_name,
                                                  applicationImageId: n.top_game.application_image_id,
                                              }
                                            : void 0,
                                    powerLevel: n.power_level,
                                    powerLevelPercentile: n.power_level_percentile,
                                }
                              : void 0,
                      cardColorPalette: e.card_color_palette ?? i.h.NONE,
                  };
        },
        sX: g,
        vF: function (e, t) {
            let n = [];
            return (
                (0, u.fA)(e.wearable).forEach((i) => {
                    let r = e[i],
                        a = u.qM[i][r]?.layer;
                    null != a && "" !== a && n.push(`${a}?height=${t}&width=${t}&format=webp`);
                }),
                n
            );
        },
    },
);
