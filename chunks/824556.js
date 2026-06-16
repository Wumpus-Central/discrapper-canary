l.d(s, { A: () => c });
var i = l(64700),
    a = l(172218),
    n = l(478437),
    d = l(17928),
    t = l(71393),
    r = l(732071),
    u = l(652215);
function c(e) {
    let { message: s, channel: l, announcementEnabled: c = !0, officialMessagesEnabled: o = !1 } = e,
        g = (0, d.bG)([t.A], () => {
            if (!c) return !1;
            let e = t.A.getGuild(l.guild_id);
            return e?.features.has(u.GuildFeatures.COMMUNITY) ?? !1;
        }, [c, l.guild_id]),
        A =
            s.messageReference?.guild_id != null &&
            null != s.webhookId &&
            s.hasFlag(u.pr7.IS_CROSSPOST) &&
            null != l.guild_id,
        h = l.type === n.r.GUILD_ANNOUNCEMENT && g,
        p = c && !s.hasFlag(u.pr7.EPHEMERAL) && (A || h),
        m = o && !s.hasFlag(u.pr7.EPHEMERAL) && s.hasFlag(u.pr7.IS_GUILD_OFFICIAL),
        I = A && null != s.messageReference ? s.messageReference.message_id : s.id,
        M = A && null != s.messageReference ? s.messageReference.channel_id : l.id,
        E = A && s.messageReference?.guild_id != null ? s.messageReference.guild_id : l.guild_id,
        f = i.useCallback(
            (e) => {
                p &&
                    (e
                        ? r.A.handleMessageBecameVisible({
                              type: r.K.ANNOUNCEMENT,
                              messageId: I,
                              channelId: l.id,
                              guildId: l.guild_id,
                              sourceChannelId: M,
                              sourceGuildId: E,
                          })
                        : r.A.handleMessageLostVisibility(I, r.K.ANNOUNCEMENT)),
                    m &&
                        (e
                            ? r.A.handleMessageBecameVisible({
                                  type: r.K.OFFICIAL_MESSAGE,
                                  messageId: s.id,
                                  channelId: l.id,
                                  guildId: l.guild_id,
                              })
                            : r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE));
            },
            [p, m, I, s.id, l.id, l.guild_id, M, E],
        );
    return (
        i.useEffect(() => {
            if (p)
                return () => {
                    r.A.handleMessageLostVisibility(I, r.K.ANNOUNCEMENT);
                };
        }, [p, I]),
        i.useEffect(() => {
            if (m)
                return () => {
                    r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE);
                };
        }, [m, s.id]),
        (0, a.K)(f, 0, p || m)
    );
}
