n.d(t, {
    Z: () => a,
}),
    n(938796);
var l = n(647006);

function a(e) {
    let { flags: t } = e,
        n = (0, l.a)(t),
        a = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        r = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        i = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: a,
        hasGuildPresences: r,
        hasGuildMembers: i,
        hasIntents: a || r || i,
    };
}
