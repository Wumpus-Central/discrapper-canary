l.d(n, { A: () => o });
var t = l(17928),
    i = l(828488),
    a = l(256331),
    s = l(619065);
function r(e, n) {
    return (
        e === n ||
        (null != e &&
            null != n &&
            e.color === n.color &&
            e.conversation.color === n.conversation.color &&
            e.conversation.conversation === n.conversation.conversation &&
            e.messageMetadata.conversationId === n.messageMetadata.conversationId &&
            e.messageMetadata.moderationLabel === n.messageMetadata.moderationLabel)
    );
}
function o(e, n) {
    let { enabled: l } = i.LX.useConfig({ location: "useMessageConversation" });
    return (0, t.bG)(
        [s.A, a.A],
        () => {
            if (!l || !a.A.isHighlightingEnabled()) return null;
            let t = s.A.getMessageMetadata(e, n);
            if (t?.conversationId == null) return null;
            let i = s.A.getConversationMetadata(e, t.conversationId);
            return null == i ? null : { conversation: i, messageMetadata: t, color: i.color };
        },
        [e, n, l],
        r,
    );
}
