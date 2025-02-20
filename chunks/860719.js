n.d(t, { w: () => a }), n(789020);
var r = n(85025);
function a(e) {
    let { flags: t } = e,
        n = (0, r.O)(t),
        a = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        i = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: a,
        hasGuildPresences: i,
        hasGuildMembers: l,
        hasIntents: a || i || l
    };
}
