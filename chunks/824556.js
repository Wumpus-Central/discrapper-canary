i.d(s, { A: () => o });
var l = i(582128),
    n = i(172218),
    a = i(478437),
    t = i(17928),
    d = i(71393),
    r = i(732071),
    c = i(652215);
function o(e) {
    let { message: s, channel: i, announcementEnabled: o = !0, officialMessagesEnabled: u = !1 } = e,
        g = (0, t.bG)(
            [d.A],
            () => {
                if (!o) return !1;
                let e = d.A.getGuild(i.guild_id);
                return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
            },
            [o, i.guild_id],
        ),
        A =
            s.messageReference?.guild_id != null &&
            null != s.webhookId &&
            s.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != i.guild_id,
        m = i.type === a.r.GUILD_ANNOUNCEMENT && g,
        h = o && !s.hasFlag(c.pr7.EPHEMERAL) && (A || m),
        E = u && !s.hasFlag(c.pr7.EPHEMERAL) && s.hasFlag(c.pr7.IS_GUILD_OFFICIAL),
        p = A && null != s.messageReference ? s.messageReference.message_id : s.id,
        M = A && null != s.messageReference ? s.messageReference.channel_id : i.id,
        f = A && s.messageReference?.guild_id != null ? s.messageReference.guild_id : i.guild_id,
        I = l.useCallback(
            (e) => {
                (h &&
                    (e
                        ? r.A.handleMessageBecameVisible({
                              type: r.K.ANNOUNCEMENT,
                              messageId: p,
                              channelId: i.id,
                              guildId: i.guild_id,
                              sourceChannelId: M,
                              sourceGuildId: f,
                          })
                        : r.A.handleMessageLostVisibility(p, r.K.ANNOUNCEMENT)),
                    E &&
                        (e
                            ? r.A.handleMessageBecameVisible({
                                  type: r.K.OFFICIAL_MESSAGE,
                                  messageId: s.id,
                                  channelId: i.id,
                                  guildId: i.guild_id,
                              })
                            : r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE)));
            },
            [h, E, p, s.id, i.id, i.guild_id, M, f],
        );
    return (
        l.useEffect(() => {
            if (h)
                return () => {
                    r.A.handleMessageLostVisibility(p, r.K.ANNOUNCEMENT);
                };
        }, [h, p]),
        l.useEffect(() => {
            if (E)
                return () => {
                    r.A.handleMessageLostVisibility(s.id, r.K.OFFICIAL_MESSAGE);
                };
        }, [E, s.id]),
        (0, n.K)(I, 0, h || E)
    );
}
