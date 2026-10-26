(n.d(t, { Go: () => I, Le: () => T, R8: () => S, _S: () => N, b5: () => C, q6: () => A, sX: () => m, vF: () => p }),
    n(321073));
var i = n(675970),
    r = n(155718),
    a = n(7584),
    s = n(935208);
n(835517);
var l = n(957806);
n(399667);
var o = n(817379),
    d = n(142617),
    c = n(309913),
    u = n(922704),
    _ = n(763166),
    E = n(105292);
function A(e) {
    var t, n;
    return (0, d.wV)("transformCheckpoint2026CardComponent") && (null != e.character || null != e.stats)
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
let h = new Set([i.Q.DEFAULT, i.Q.CHARACTER_ONLY]),
    f = new Set([i.Q.DEFAULT, i.Q.STATS_ONLY]);
function I(e, t, n) {
    let i, r, a;
    return {
        version: c.wk.V2026,
        character: h.has(e) ? (t ?? void 0) : void 0,
        stats:
            f.has(e) && null != n
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
function p(e, t) {
    let n = [];
    return (
        (0, o.fA)(e.wearable).forEach((i) => {
            let r = e[i],
                a = o.If[i][r]?.layer;
            null != a && "" !== a && n.push(`${a}?height=${t}&width=${t}`);
        }),
        n
    );
}
function T(e) {
    return new Intl.NumberFormat(E.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function m(e) {
    return Math.min(Math.max(Math.round((e / 100) * c.w0), c.Qq), c.sh);
}
function g(e) {
    return { text: e, accessibilityLabel: e };
}
function S(e) {
    let t;
    return {
        powerLevel: T(e.powerLevel),
        powerLevelUnits: m(e.powerLevelPercentile),
        voice: {
            text:
                (t = Math.round(e.totalVoiceMinutes)) > 0
                    ? (0, l.oO)(t)
                    : E.intl.formatToPlainString(E.t.iXLF9W, { minutes: t }),
            accessibilityLabel: E.intl.formatToPlainString(_.default.lw35aH, { duration: (0, l.GM)(t) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(E.intl.currentLocale)
                    : E.intl.formatToPlainString(_.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: E.intl.formatToPlainString(_.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted:
            null == e.topGuild
                ? g(E.intl.string(_.default.GultYJ))
                : {
                      text: E.intl.formatToPlainString(E.t.GBLpQ8, { days: e.topGuildNumDaysInteracted }),
                      accessibilityLabel: E.intl.formatToPlainString(_.default.MpSH8v, {
                          days: e.topGuildNumDaysInteracted,
                      }),
                  },
        topGuildName:
            null == e.topGuild
                ? g(E.intl.string(E.t["52UOf9"]))
                : {
                      text: e.topGuild.guildName,
                      accessibilityLabel: E.intl.formatToPlainString(_.default["9UTJ+t"], {
                          guildName: e.topGuild.guildName,
                      }),
                  },
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(E.intl.currentLocale)
                    : E.intl.formatToPlainString(_.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: E.intl.formatToPlainString(_.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName:
            null == e.topEmoji
                ? g(E.intl.string(E.t.lxsmBd))
                : {
                      text:
                          null == e.topEmoji.emojiId
                              ? a.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                              : `:${e.topEmoji.emojiName}:`,
                      accessibilityLabel: E.intl.formatToPlainString(_.default.CcBo8C, {
                          emojiName: e.topEmoji.emojiName,
                      }),
                  },
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? E.intl.formatToPlainString(E.t.GBLpQ8, { days: e.totalDaysPlayed })
                    : E.intl.string(_.default.mg1NPe),
            accessibilityLabel: E.intl.formatToPlainString(_.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName:
            null == e.topGame
                ? g(E.intl.string(E.t["5eYZiW"]))
                : {
                      text: e.topGame.applicationName,
                      accessibilityLabel: E.intl.formatToPlainString(_.default.kLqpNC, {
                          gameName: e.topGame.applicationName,
                      }),
                  },
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGame: e.topGame,
    };
}
function N(e) {
    let t = e.components[0];
    return null == t || t.type !== r.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function C(e) {
    switch (e.version) {
        case c.wk.V2025:
            return E.intl.string(u.default.goiR2u);
        case c.wk.V2026:
        default:
            return null;
    }
}
