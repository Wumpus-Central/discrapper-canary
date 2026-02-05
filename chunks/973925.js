a.d(t, { Z: () => i }), a(938796);
var n = a(647006);
function i(e) {
    let { flags: t } = e,
        a = (0, n.a)(t),
        i = null != a && (a?.messageContent || a?.messageContentLimited),
        s = null != a && (a?.guildPresences || a?.guildPresencesLimited),
        l = null != a && (a?.guildMembers || a?.guildMembersLimited);
    return { hasMessageContent: i, hasGuildPresences: s, hasGuildMembers: l, hasIntents: i || s || l };
}
