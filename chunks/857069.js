n.d(t, { A: () => d, l: () => u });
var s = n(58703),
    i = n(927813),
    l = n(935208),
    a = n(143413),
    o = n(652215);
let r = 7 * i.A.Millis.MINUTE;
function c(e) {
    return null == e || "" === e ? null : e;
}
function u(e, t, n) {
    return (
        null == t ||
        (t.type === o.TZK.MESSAGE && t.content.id === t.content.channel_id) ||
        (t.type !== o.TZK.MESSAGE && t.type !== o.TZK.THREAD_STARTER_MESSAGE) ||
        d(e, t.content, n)
    );
}
function d(e, t, n) {
    return (
        !!(n.hasFlag(o.pr7.HAS_THREAD) || n.isCommandType()) ||
        t.blocked !== n.blocked ||
        t.ignored !== n.ignored ||
        (n.type > o.lAJ.DEFAULT
            ? !(0, a.A)(t) || n.type === o.lAJ.REPLY
            : !!(
                  (0, a.A)(t) ||
                  t.author.id !== n.author.id ||
                  t.hasFlag(o.pr7.EPHEMERAL) !== n.hasFlag(o.pr7.EPHEMERAL) ||
                  t.hasFlag(o.pr7.IS_SCHEDULED) !== n.hasFlag(o.pr7.IS_SCHEDULED) ||
                  (null != n.webhookId && t.author.username !== n.author.username) ||
                  (e?.isForumPost() && t.id === l.default.castChannelIdAsMessageId(e.id)) ||
                  !(0, s.ro)(t.timestamp, n.timestamp) ||
                  !(0, s.v0)(t.timestamp, n.timestamp, r) ||
                  (n.hasFlag(o.pr7.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.pr7.SUPPRESS_NOTIFICATIONS)) ||
                  (t.hasFlag(o.pr7.SUPPRESS_NOTIFICATIONS) &&
                      !n.hasFlag(o.pr7.SUPPRESS_NOTIFICATIONS) &&
                      (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone))
              ) ||
              n.applicationId !== t.applicationId ||
              c(n.additionalName) !== c(t.additionalName))
    );
}
