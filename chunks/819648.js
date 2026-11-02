(n.d(t, { Go: () => S, Le: () => C, R8: () => R, _S: () => L, b5: () => y, q6: () => T, sX: () => O, vF: () => N }),
    n(321073));
var i = n(35039),
    r = n(675970),
    a = n(499979),
    s = n(155718),
    l = n(7584),
    o = n(935208);
n(835517);
var d = n(957806),
    c = n(627369);
n(399667);
var u = n(817379),
    _ = n(142617),
    E = n(407905),
    A = n(309913),
    h = n(465199),
    f = n(842089),
    I = n(105292);
let p = [a.pJ.HOURS, a.pJ.MINUTES];
function T(e) {
    var t, n;
    return (0, _.wV)("transformCheckpoint2026CardComponent") && (null != e.character || null != e.stats)
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
          }
        : null;
}
let m = new Set([r.Q.DEFAULT, r.Q.CHARACTER_ONLY]),
    g = new Set([r.Q.DEFAULT, r.Q.STATS_ONLY]);
function S(e, t, n) {
    let i, r, a;
    return {
        version: A.wk.V2026,
        character: m.has(e) ? (t ?? void 0) : void 0,
        stats:
            g.has(e) && null != n
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
        cardColorPalette: (0, c.o)(t),
    };
}
function N(e, t) {
    let n = [];
    return (
        (0, u.fA)(e.wearable).forEach((i) => {
            let r = e[i],
                a = u.qM[i][r]?.layer;
            null != a && "" !== a && n.push(`${a}?height=${t}&width=${t}`);
        }),
        n
    );
}
function C(e) {
    return new Intl.NumberFormat(I.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function O(e) {
    return Math.min(Math.max(Math.round((e / 100) * A.w0), A.Qq), A.sh);
}
function R(e) {
    let t;
    return {
        powerLevel: C(e.powerLevel),
        powerLevelUnits: O(e.powerLevelPercentile),
        voice: {
            text:
                (t = Math.round(e.totalVoiceMinutes)) > 0
                    ? (function (e) {
                          let { unit: t, time: n } = (0, a.$l)(e, p),
                              i = Math.round(n ?? 0);
                          return t === a.pJ.HOURS
                              ? I.intl.formatToPlainString(f.default.CQfBsB, { hours: i })
                              : I.intl.formatToPlainString(f.default.yRfTht, { minutes: i });
                      })(t)
                    : I.intl.formatToPlainString(f.default.x7PkHm, { minutes: t }),
            accessibilityLabel: I.intl.formatToPlainString(f.default.lw35aH, { duration: (0, d.GM)(t) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(I.intl.currentLocale)
                    : I.intl.formatToPlainString(f.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: I.intl.formatToPlainString(f.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted: (function (e) {
            if (null == e.topGuild) {
                var t;
                return { text: (t = I.intl.string(f.default.GultYJ)), accessibilityLabel: t };
            }
            return {
                text: I.intl.formatToPlainString(f.default.cQXIkj, { days: e.topGuildNumDaysInteracted }),
                accessibilityLabel: I.intl.formatToPlainString(f.default.MpSH8v, { days: e.topGuildNumDaysInteracted }),
            };
        })(e),
        topGuildName: (function (e) {
            if (null != e.topGuild)
                return {
                    text: e.topGuild.guildName,
                    accessibilityLabel: I.intl.formatToPlainString(f.default["9UTJ+t"], {
                        guildName: e.topGuild.guildName,
                    }),
                };
        })(e),
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(I.intl.currentLocale)
                    : I.intl.formatToPlainString(f.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: I.intl.formatToPlainString(f.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName: (function (e) {
            if (!(e.numEmojisSent <= 0) && null != e.topEmoji)
                return {
                    text:
                        null == e.topEmoji.emojiId
                            ? l.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                            : `:${e.topEmoji.emojiName}:`,
                    accessibilityLabel: I.intl.formatToPlainString(f.default.CcBo8C, {
                        emojiName: e.topEmoji.emojiName,
                    }),
                };
        })(e),
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? I.intl.formatToPlainString(f.default.cQXIkj, { days: e.totalDaysPlayed })
                    : I.intl.string(f.default.mg1NPe),
            accessibilityLabel: I.intl.formatToPlainString(f.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName: (function (e) {
            if (!(e.totalDaysPlayed <= 0) && null != e.topGame)
                return {
                    text: e.topGame.applicationName,
                    accessibilityLabel: I.intl.formatToPlainString(f.default.kLqpNC, {
                        gameName: e.topGame.applicationName,
                    }),
                };
        })(e),
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGuildAcronymCharacter: null != e.topGuild ? (0, E.oW)(e.topGuild.guildName) : void 0,
        topGame: e.topGame,
    };
}
function L(e) {
    let t = e.components[0];
    return null == t || t.type !== s.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function y(e) {
    switch (e.version) {
        case A.wk.V2025:
            return I.intl.string(h.default.goiR2u);
        case A.wk.V2026:
        default:
            return null;
    }
}
