n.d(t, {
    w: function () {
        return a;
    }
}),
    n(789020);
var i = n(85025);
function a(e) {
    let { flags: t } = e,
        n = (0, i.O)(t),
        a = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        r = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: a,
        hasGuildPresences: r,
        hasGuildMembers: l,
        hasIntents: a || r || l
    };
}
