a.d(t, { Z: () => s });
var n = a(20015),
    i = a(647006);
function s(e) {
    let t = (0, i.a)((0, n.K)(e)),
        a = null != t && (t?.messageContent || t?.messageContentLimited),
        s = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        l = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return { hasMessageContent: a, hasGuildPresences: s, hasGuildMembers: l, hasIntents: a || s || l };
}
