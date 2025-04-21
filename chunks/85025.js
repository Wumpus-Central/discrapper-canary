n.d(t, { O: () => a });
var r = n(630388),
    i = n(981631);
function a(e) {
    if (null != e)
        return {
            guildPresences: (0, r.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, r.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, r.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, r.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, r.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, r.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
