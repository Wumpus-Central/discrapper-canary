n.d(t, { O: () => i });
var a = n(95015),
    r = n(981631);
function i(e) {
    if (null != e)
        return {
            guildPresences: (0, a.yE)(e, r.udG.GATEWAY_PRESENCE),
            guildMembers: (0, a.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, a.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, a.yE)(e, r.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, a.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, a.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT_LIMITED),
        };
}
