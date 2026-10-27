(n.d(t, { Go: () => p, Le: () => m, R8: () => S, _S: () => N, b5: () => C, q6: () => h, sX: () => g, vF: () => T }),
    n(321073),
    n(134528),
    n(947204));
var i = n(675970),
    r = n(155718),
    a = n(7584),
    s = n(935208),
    l = n(240248);
n(835517);
var o = n(957806);
n(399667);
var d = n(817379),
    c = n(142617),
    u = n(309913),
    _ = n(922704),
    E = n(763166),
    A = n(105292);
function h(e) {
    var t, n;
    return (0, c.wV)("transformCheckpoint2026CardComponent") && (null != e.character || null != e.stats)
        ? {
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
                                          emojiId: s.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id)
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
          }
        : null;
}
let f = new Set([i.Q.DEFAULT, i.Q.CHARACTER_ONLY]),
    I = new Set([i.Q.DEFAULT, i.Q.STATS_ONLY]);
function p(e, t, n) {
    let i, r, a;
    return {
        version: u.wk.V2026,
        character: f.has(e) ? (t ?? void 0) : void 0,
        stats:
            I.has(e) && null != n
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
                              ? { guildId: i.guild.id, guildName: i.guild.name, guildIcon: i.guild.icon ?? void 0 }
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
    };
}
function T(e, t) {
    let n = [];
    return (
        (0, d.fA)(e.wearable).forEach((i) => {
            let r = e[i],
                a = d.qM[i][r]?.layer;
            null != a && "" !== a && n.push(`${a}?height=${t}&width=${t}`);
        }),
        n
    );
}
function m(e) {
    return new Intl.NumberFormat(A.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function g(e) {
    return Math.min(Math.max(Math.round((e / 100) * u.w0), u.Qq), u.sh);
}
function S(e) {
    var t;
    let n;
    return {
        powerLevel: m(e.powerLevel),
        powerLevelUnits: g(e.powerLevelPercentile),
        voice: {
            text:
                (n = Math.round(e.totalVoiceMinutes)) > 0
                    ? (0, o.oO)(n)
                    : A.intl.formatToPlainString(A.t.iXLF9W, { minutes: n }),
            accessibilityLabel: A.intl.formatToPlainString(E.default.lw35aH, { duration: (0, o.GM)(n) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(A.intl.currentLocale)
                    : A.intl.formatToPlainString(E.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: A.intl.formatToPlainString(E.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted: (function (e) {
            if (null == e.topGuild) {
                var t;
                return { text: (t = A.intl.string(E.default.GultYJ)), accessibilityLabel: t };
            }
            return {
                text: A.intl.formatToPlainString(A.t.GBLpQ8, { days: e.topGuildNumDaysInteracted }),
                accessibilityLabel: A.intl.formatToPlainString(E.default.MpSH8v, { days: e.topGuildNumDaysInteracted }),
            };
        })(e),
        topGuildName: (function (e) {
            if (null != e.topGuild)
                return {
                    text: e.topGuild.guildName,
                    accessibilityLabel: A.intl.formatToPlainString(E.default["9UTJ+t"], {
                        guildName: e.topGuild.guildName,
                    }),
                };
        })(e),
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(A.intl.currentLocale)
                    : A.intl.formatToPlainString(E.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: A.intl.formatToPlainString(E.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName: (function (e) {
            if (!(e.numEmojisSent <= 0) && null != e.topEmoji)
                return {
                    text:
                        null == e.topEmoji.emojiId
                            ? a.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                            : `:${e.topEmoji.emojiName}:`,
                    accessibilityLabel: A.intl.formatToPlainString(E.default.CcBo8C, {
                        emojiName: e.topEmoji.emojiName,
                    }),
                };
        })(e),
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? A.intl.formatToPlainString(A.t.GBLpQ8, { days: e.totalDaysPlayed })
                    : A.intl.string(E.default.mg1NPe),
            accessibilityLabel: A.intl.formatToPlainString(E.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName: (function (e) {
            if (!(e.totalDaysPlayed <= 0) && null != e.topGame)
                return {
                    text: e.topGame.applicationName,
                    accessibilityLabel: A.intl.formatToPlainString(E.default.kLqpNC, {
                        gameName: e.topGame.applicationName,
                    }),
                };
        })(e),
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGuildAcronymCharacter:
            null != e.topGuild
                ? ((t = e.topGuild.guildName),
                  Array.from((0, l.oN)(t))
                      .at(0)
                      ?.toLocaleUpperCase(A.intl.currentLocale))
                : void 0,
        topGame: e.topGame,
    };
}
function N(e) {
    let t = e.components[0];
    return null == t || t.type !== r.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function C(e) {
    switch (e.version) {
        case u.wk.V2025:
            return A.intl.string(_.default.goiR2u);
        case u.wk.V2026:
        default:
            return null;
    }
}
