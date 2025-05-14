n.d(t, { O: () => i });
var r = n(630388),
    a = n(981631);
function i(e) {
    if (null != e)
        return {
            guildPresences: (0, r.yE)(e, a.udG.GATEWAY_PRESENCE),
            guildMembers: (0, r.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, r.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, r.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, r.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, r.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
