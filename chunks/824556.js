n.d(t, { A: () => d });
var i = n(582128),
    l = n(172218),
    s = n(478437),
    a = n(17928),
    r = n(71393),
    o = n(732071),
    c = n(652215);
function d(e) {
    let { message: t, channel: n, announcementEnabled: d = !0, officialMessagesEnabled: u = !1 } = e,
        m = (0, a.bG)([r.A], () => {
            if (!d) return !1;
            let e = r.A.getGuild(n.guild_id);
            return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
        }, [d, n.guild_id]),
        h =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        g = n.type === s.r.GUILD_ANNOUNCEMENT && m,
        p = d && !t.hasFlag(c.pr7.EPHEMERAL) && (h || g),
        A = u && !t.hasFlag(c.pr7.EPHEMERAL) && t.hasFlag(c.pr7.IS_GUILD_OFFICIAL),
        x = h && null != t.messageReference ? t.messageReference.message_id : t.id,
        f = h && null != t.messageReference ? t.messageReference.channel_id : n.id,
        E = h && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        I = i.useCallback(
            (e) => {
                p &&
                    (e
                        ? o.A.handleMessageBecameVisible({
                              type: o.K.ANNOUNCEMENT,
                              messageId: x,
                              channelId: n.id,
                              guildId: n.guild_id,
                              sourceChannelId: f,
                              sourceGuildId: E,
                          })
                        : o.A.handleMessageLostVisibility(x, o.K.ANNOUNCEMENT)),
                    A &&
                        (e
                            ? o.A.handleMessageBecameVisible({
                                  type: o.K.OFFICIAL_MESSAGE,
                                  messageId: t.id,
                                  channelId: n.id,
                                  guildId: n.guild_id,
                              })
                            : o.A.handleMessageLostVisibility(t.id, o.K.OFFICIAL_MESSAGE));
            },
            [p, A, x, t.id, n.id, n.guild_id, f, E],
        );
    return (
        i.useEffect(() => {
            if (p)
                return () => {
                    o.A.handleMessageLostVisibility(x, o.K.ANNOUNCEMENT);
                };
        }, [p, x]),
        i.useEffect(() => {
            if (A)
                return () => {
                    o.A.handleMessageLostVisibility(t.id, o.K.OFFICIAL_MESSAGE);
                };
        }, [A, t.id]),
        (0, l.K)(I, 0, p || A)
    );
}
