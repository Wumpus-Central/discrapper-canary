t.d(n, { O: () => i });
var l = t(630388),
    r = t(981631);
function i(e) {
    if (null != e)
        return {
            guildPresences: (0, l.yE)(e, r.udG.GATEWAY_PRESENCE),
            guildMembers: (0, l.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, l.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, l.yE)(e, r.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, l.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, l.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
