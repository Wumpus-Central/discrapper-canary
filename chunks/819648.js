(n.d(t, { Go: () => m, Le: () => S, R8: () => C, _S: () => O, b5: () => R, q6: () => I, sX: () => N, vF: () => g }),
    n(321073));
var i = n(35039),
    r = n(675970),
    a = n(155718),
    s = n(7584),
    l = n(935208);
n(835517);
var o = n(957806),
    d = n(627369);
n(399667);
var c = n(817379),
    u = n(142617),
    _ = n(407905),
    E = n(309913),
    A = n(465199),
    h = n(842089),
    f = n(105292);
function I(e) {
    var t, n;
    return (0, u.wV)("transformCheckpoint2026CardComponent") && (null != e.character || null != e.stats)
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
                                          emojiId: l.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id)
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
let p = new Set([r.Q.DEFAULT, r.Q.CHARACTER_ONLY]),
    T = new Set([r.Q.DEFAULT, r.Q.STATS_ONLY]);
function m(e, t, n) {
    let i, r, a;
    return {
        version: E.wk.V2026,
        character: p.has(e) ? (t ?? void 0) : void 0,
        stats:
            T.has(e) && null != n
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
        cardColorPalette: (0, d.o)(t),
    };
}
function g(e, t) {
    let n = [];
    return (
        (0, c.fA)(e.wearable).forEach((i) => {
            let r = e[i],
                a = c.qM[i][r]?.layer;
            null != a && "" !== a && n.push(`${a}?height=${t}&width=${t}`);
        }),
        n
    );
}
function S(e) {
    return new Intl.NumberFormat(f.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function N(e) {
    return Math.min(Math.max(Math.round((e / 100) * E.w0), E.Qq), E.sh);
}
function C(e) {
    let t;
    return {
        powerLevel: S(e.powerLevel),
        powerLevelUnits: N(e.powerLevelPercentile),
        voice:
            ((t = Math.round(e.totalVoiceMinutes)),
            {
                text: f.intl.formatToPlainString(h.default["Ww/dDO"], { count: t }),
                accessibilityLabel: f.intl.formatToPlainString(h.default.lw35aH, { duration: (0, o.GM)(t) }),
            }),
        messages: {
            text: f.intl.formatToPlainString(h.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: f.intl.formatToPlainString(h.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted: (function (e) {
            if (null == e.topGuild) {
                var t;
                return { text: (t = f.intl.string(h.default.GultYJ)), accessibilityLabel: t };
            }
            return {
                text: f.intl.formatToPlainString(h.default["51Y/V2"], { count: e.topGuildNumDaysInteracted }),
                accessibilityLabel: f.intl.formatToPlainString(h.default.MpSH8v, { days: e.topGuildNumDaysInteracted }),
            };
        })(e),
        topGuildName: (function (e) {
            if (null != e.topGuild)
                return {
                    text: e.topGuild.guildName,
                    accessibilityLabel: f.intl.formatToPlainString(h.default["9UTJ+t"], {
                        guildName: e.topGuild.guildName,
                    }),
                };
        })(e),
        reactions: {
            text: f.intl.formatToPlainString(h.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: f.intl.formatToPlainString(h.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName: (function (e) {
            if (!(e.numEmojisSent <= 0) && null != e.topEmoji)
                return {
                    text:
                        null == e.topEmoji.emojiId
                            ? s.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                            : `:${e.topEmoji.emojiName}:`,
                    accessibilityLabel: f.intl.formatToPlainString(h.default.CcBo8C, {
                        emojiName: e.topEmoji.emojiName,
                    }),
                };
        })(e),
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? f.intl.formatToPlainString(h.default["LD/96a"], { count: e.totalDaysPlayed })
                    : f.intl.string(h.default.mg1NPe),
            accessibilityLabel: f.intl.formatToPlainString(h.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName: (function (e) {
            if (!(e.totalDaysPlayed <= 0) && null != e.topGame)
                return {
                    text: e.topGame.applicationName,
                    accessibilityLabel: f.intl.formatToPlainString(h.default.kLqpNC, {
                        gameName: e.topGame.applicationName,
                    }),
                };
        })(e),
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGuildAcronymCharacter: null != e.topGuild ? (0, _.oW)(e.topGuild.guildName) : void 0,
        topGame: e.topGame,
    };
}
function O(e) {
    let t = e.components[0];
    return null == t || t.type !== a.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function R(e) {
    switch (e.version) {
        case E.wk.V2025:
            return f.intl.string(A.default.goiR2u);
        case E.wk.V2026:
        default:
            return null;
    }
}
