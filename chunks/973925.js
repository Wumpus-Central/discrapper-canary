a.d(t, { Z: () => i });
var n = a(20015),
    l = a(647006);
function i(e) {
    let t = (0, l.a)((0, n.K)(e)),
        a = null != t && (t?.messageContent || t?.messageContentLimited),
        i = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        s = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return { hasMessageContent: a, hasGuildPresences: i, hasGuildMembers: s, hasIntents: a || i || s };
}
