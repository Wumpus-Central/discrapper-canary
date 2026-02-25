n.d(t, { A: () => d, l: () => c });
var i = n(405269),
    l = n(927813),
    s = n(661191),
    a = n(143413),
    r = n(652215);
let o = 7 * l.A.Millis.MINUTE;
function c(e, t, n) {
    return (
        null == t ||
        (t.type === r.TZK.MESSAGE && t.content.id === t.content.channel_id) ||
        (t.type !== r.TZK.MESSAGE && t.type !== r.TZK.THREAD_STARTER_MESSAGE) ||
        d(e, t.content, n)
    );
}
function d(e, t, n) {
    return (
        !!(n.hasFlag(r.pr7.HAS_THREAD) || n.isCommandType()) ||
        t.blocked !== n.blocked ||
        t.ignored !== n.ignored ||
        (n.type > r.lAJ.DEFAULT
            ? !(0, a.A)(t) || n.type === r.lAJ.REPLY
            : !!(
                  (0, a.A)(t) ||
                  t.author.id !== n.author.id ||
                  t.hasFlag(r.pr7.EPHEMERAL) !== n.hasFlag(r.pr7.EPHEMERAL) ||
                  (null != n.webhookId && t.author.username !== n.author.username) ||
                  (e?.isForumPost() && t.id === s.default.castChannelIdAsMessageId(e.id)) ||
                  !(0, i.ro)(t.timestamp, n.timestamp) ||
                  !(0, i.v0)(t.timestamp, n.timestamp, o) ||
                  (n.hasFlag(r.pr7.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(r.pr7.SUPPRESS_NOTIFICATIONS)) ||
                  (t.hasFlag(r.pr7.SUPPRESS_NOTIFICATIONS) &&
                      !n.hasFlag(r.pr7.SUPPRESS_NOTIFICATIONS) &&
                      (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone))
              ) || n.applicationId !== t.applicationId)
    );
}
