n.d(t, { w: () => i }), n(997841);
var r = n(85025);
function i(e) {
    let { flags: t } = e,
        n = (0, r.O)(t),
        i = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        a = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: a,
        hasGuildMembers: l,
        hasIntents: i || a || l
    };
}
