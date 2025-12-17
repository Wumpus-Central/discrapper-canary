n.d(t, { w: () => r }), n(997841);
var a = n(85025);
function r(e) {
    let { flags: t } = e,
        n = (0, a.O)(t),
        r = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        i = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: r,
        hasGuildPresences: i,
        hasGuildMembers: l,
        hasIntents: r || i || l,
    };
}
