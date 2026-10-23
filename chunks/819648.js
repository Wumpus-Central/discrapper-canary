(n.d(t, { Go: () => T, Le: () => S, R8: () => O, _S: () => R, b5: () => L, q6: () => f, sX: () => N, vF: () => g }),
    n(321073));
var i = n(675970),
    r = n(127639),
    a = n(377529),
    s = n(155718),
    l = n(7584),
    o = n(935208);
n(835517);
var d = n(957806);
n(399667);
var c = n(32623),
    u = n(142617),
    _ = n(309913),
    E = n(922704),
    A = n(763166),
    h = n(105292);
function f(e) {
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
          }
        : null;
}
let I = new Set([i.Q.DEFAULT, i.Q.CHARACTER_ONLY]),
    p = new Set([i.Q.DEFAULT, i.Q.STATS_ONLY]);
function T(e, t, n) {
    let i, r, a;
    return {
        version: _.wk.V2026,
        character: I.has(e) ? (t ?? void 0) : void 0,
        stats:
            p.has(e) && null != n
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
let m = {
    [r.V.BASE]: c.np,
    [r.V.SHOES]: c.Ck,
    [r.V.OUTFIT]: c.zk,
    [r.V.FACE]: c.FI,
    [r.V.HAT]: c.Bb,
    [r.V.WEARABLE]: c.bO,
    [r.V.AURA]: c.PE,
};
function g(e, t) {
    let n = a.IG.has(e.wearable) ? a.Vi : a.u4,
        i = [];
    return (
        n.forEach((n) => {
            let r = e[n],
                a = m[n][r]?.layer;
            null != a && "" !== a && i.push(`${a}?height=${t}&width=${t}`);
        }),
        i
    );
}
function S(e) {
    return new Intl.NumberFormat(h.intl.currentLocale, { notation: "compact", compactDisplay: "short" }).format(e);
}
function N(e) {
    return Math.min(Math.max(Math.round((e / 100) * _.w0), _.Qq), _.sh);
}
function C(e) {
    return { text: e, accessibilityLabel: e };
}
function O(e) {
    let t;
    return {
        powerLevel: S(e.powerLevel),
        powerLevelUnits: N(e.powerLevelPercentile),
        voice: {
            text:
                (t = Math.round(e.totalVoiceMinutes)) > 0
                    ? (0, d.oO)(t)
                    : h.intl.formatToPlainString(h.t.iXLF9W, { minutes: t }),
            accessibilityLabel: h.intl.formatToPlainString(A.default.lw35aH, { duration: (0, d.GM)(t) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(h.intl.currentLocale)
                    : h.intl.formatToPlainString(A.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: h.intl.formatToPlainString(A.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted:
            null == e.topGuild
                ? C(h.intl.string(A.default.GultYJ))
                : {
                      text: h.intl.formatToPlainString(h.t.GBLpQ8, { days: e.topGuildNumDaysInteracted }),
                      accessibilityLabel: h.intl.formatToPlainString(A.default.MpSH8v, {
                          days: e.topGuildNumDaysInteracted,
                      }),
                  },
        topGuildName:
            null == e.topGuild
                ? C(h.intl.string(h.t["52UOf9"]))
                : {
                      text: e.topGuild.guildName,
                      accessibilityLabel: h.intl.formatToPlainString(A.default["9UTJ+t"], {
                          guildName: e.topGuild.guildName,
                      }),
                  },
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(h.intl.currentLocale)
                    : h.intl.formatToPlainString(A.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: h.intl.formatToPlainString(A.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName:
            null == e.topEmoji
                ? C(h.intl.string(h.t.lxsmBd))
                : {
                      text:
                          null == e.topEmoji.emojiId
                              ? l.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                              : `:${e.topEmoji.emojiName}:`,
                      accessibilityLabel: h.intl.formatToPlainString(A.default.CcBo8C, {
                          emojiName: e.topEmoji.emojiName,
                      }),
                  },
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? h.intl.formatToPlainString(h.t.GBLpQ8, { days: e.totalDaysPlayed })
                    : h.intl.string(A.default.mg1NPe),
            accessibilityLabel: h.intl.formatToPlainString(A.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName:
            null == e.topGame
                ? C(h.intl.string(h.t["5eYZiW"]))
                : {
                      text: e.topGame.applicationName,
                      accessibilityLabel: h.intl.formatToPlainString(A.default.kLqpNC, {
                          gameName: e.topGame.applicationName,
                      }),
                  },
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGame: e.topGame,
    };
}
function R(e) {
    let t = e.components[0];
    return null == t || t.type !== s.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function L(e) {
    switch (e.version) {
        case _.wk.V2025:
            return h.intl.string(E.default.goiR2u);
        case _.wk.V2026:
        default:
            return null;
    }
}
