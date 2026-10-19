(n.d(t, { R8: () => T, _S: () => m, b5: () => g, q6: () => h, vF: () => I }), n(321073));
var i = n(127639),
    r = n(377529),
    a = n(155718),
    s = n(7584),
    l = n(935208);
n(835517);
var o = n(957806);
n(890691);
var d = n(32623),
    c = n(142617),
    u = n(309913),
    _ = n(954874),
    E = n(225380),
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
          }
        : null;
}
let f = {
    [i.V.BASE]: d.np,
    [i.V.SHOES]: d.Ck,
    [i.V.OUTFIT]: d.zk,
    [i.V.FACE]: d.FI,
    [i.V.HAT]: d.Bb,
    [i.V.WEARABLE]: d.bO,
    [i.V.AURA]: d.PE,
};
function I(e, t) {
    let n = r.IG.has(e.wearable) ? r.Vi : r.u4,
        i = [];
    return (
        n.forEach((n) => {
            let r = e[n],
                a = f[n][r]?.layer;
            null != a && "" !== a && i.push(`${a}?height=${t}&width=${t}`);
        }),
        i
    );
}
function p(e) {
    return { text: e, accessibilityLabel: e };
}
function T(e) {
    let t;
    return {
        powerLevel: new Intl.NumberFormat(A.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }).format(e.powerLevel),
        powerLevelUnits: Math.min(Math.max(Math.round((e.powerLevelPercentile / 100) * u.w0), u.Qq), u.sh),
        voice: {
            text:
                (t = Math.round(e.totalVoiceMinutes)) > 0
                    ? (0, o.oO)(t)
                    : A.intl.formatToPlainString(A.t.iXLF9W, { minutes: t }),
            accessibilityLabel: A.intl.formatToPlainString(E.default.lw35aH, { duration: (0, o.GM)(t) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(A.intl.currentLocale)
                    : A.intl.formatToPlainString(E.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: A.intl.formatToPlainString(E.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted:
            null == e.topGuild
                ? p(A.intl.string(E.default.GultYJ))
                : {
                      text: A.intl.formatToPlainString(A.t.GBLpQ8, { days: e.topGuildNumDaysInteracted }),
                      accessibilityLabel: A.intl.formatToPlainString(E.default.MpSH8v, {
                          days: e.topGuildNumDaysInteracted,
                      }),
                  },
        topGuildName:
            null == e.topGuild
                ? p(A.intl.string(A.t["52UOf9"]))
                : {
                      text: e.topGuild.guildName,
                      accessibilityLabel: A.intl.formatToPlainString(E.default["9UTJ+t"], {
                          guildName: e.topGuild.guildName,
                      }),
                  },
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(A.intl.currentLocale)
                    : A.intl.formatToPlainString(E.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: A.intl.formatToPlainString(E.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName:
            null == e.topEmoji
                ? p(A.intl.string(A.t.lxsmBd))
                : {
                      text:
                          null == e.topEmoji.emojiId
                              ? s.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                              : `:${e.topEmoji.emojiName}:`,
                      accessibilityLabel: A.intl.formatToPlainString(E.default.CcBo8C, {
                          emojiName: e.topEmoji.emojiName,
                      }),
                  },
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? A.intl.formatToPlainString(A.t.GBLpQ8, { days: e.totalDaysPlayed })
                    : A.intl.string(E.default.mg1NPe),
            accessibilityLabel: A.intl.formatToPlainString(E.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName:
            null == e.topGame
                ? p(A.intl.string(A.t["5eYZiW"]))
                : {
                      text: e.topGame.applicationName,
                      accessibilityLabel: A.intl.formatToPlainString(E.default.kLqpNC, {
                          gameName: e.topGame.applicationName,
                      }),
                  },
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGame: e.topGame,
    };
}
function m(e) {
    let t = e.components[0];
    return null == t || t.type !== a.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function g(e) {
    switch (e.version) {
        case u.wk.V2025:
            return A.intl.string(_.default.goiR2u);
        case u.wk.V2026:
        default:
            return null;
    }
}
