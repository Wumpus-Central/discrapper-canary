i.d(s, { A: () => c });
var l = i(64700),
    a = i(172218),
    n = i(478437),
    d = i(17928),
    t = i(71393),
    r = i(732071),
    u = i(652215);
function c(e) {
    let { message: s, channel: i, announcementEnabled: c = !0, officialMessagesEnabled: g = !1 } = e,
        o = (0, d.bG)([t.A], () => {
            if (!c) return !1;
            let e = t.A.getGuild(i.guild_id);
            return e?.features.has(u.GuildFeatures.COMMUNITY) ?? !1;
        }, [c, i.guild_id]),
        A =
            s.messageReference?.guild_id != null &&
            null != s.webhookId &&
            s.hasFlag(u.pr7.IS_CROSSPOST) &&
            null != i.guild_id,
        h = i.type === n.r.GUILD_ANNOUNCEMENT && o,
        p = c && !s.hasFlag(u.pr7.EPHEMERAL) && (A || h),
        m = g && !s.hasFlag(u.pr7.EPHEMERAL) && s.hasFlag(u.pr7.IS_GUILD_OFFICIAL),
        I = A && null != s.messageReference ? s.messageReference.message_id : s.id,
        M = A && null != s.messageReference ? s.messageReference.channel_id : i.id,
        E = A && s.messageReference?.guild_id != null ? s.messageReference.guild_id : i.guild_id,
        f = l.useCallback(
            (e) => {
                p &&
                    (e
                        ? r.A.handleMessageBecameVisible({
                              type: r.K.ANNOUNCEMENT,
                              messageId: I,
                              channelId: i.id,
                              guildId: i.guild_id,
                              sourceChannelId: M,
                              sourceGuildId: E,
                          })
                        : r.A.handleMessageLostVisibility(I, r.K.ANNOUNCEMENT)),
                    m &&
                        (e
                            ? r.A.handleMessageBecameVisible({
                                  type: r.K.OFFICIAL_MESSAGE,
                                  messageId: s.id,
                                  channelId: i.id,
                                  guildId: i.guild_id,
                              })
                            : r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE));
            },
            [p, m, I, s.id, i.id, i.guild_id, M, E],
        );
    return (
        l.useEffect(() => {
            if (p)
                return () => {
                    r.A.handleMessageLostVisibility(I, r.K.ANNOUNCEMENT);
                };
        }, [p, I]),
        l.useEffect(() => {
            if (m)
                return () => {
                    r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE);
                };
        }, [m, s.id]),
        (0, a.K)(f, 0, p || m)
    );
}
