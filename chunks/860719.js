t.d(n, { w: () => r }), t(997841);
var l = t(85025);
function r(e) {
    let { flags: n } = e,
        t = (0, l.O)(n),
        r = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)),
        i = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)),
        s = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
    return {
        hasMessageContent: r,
        hasGuildPresences: i,
        hasGuildMembers: s,
        hasIntents: r || i || s
    };
}
