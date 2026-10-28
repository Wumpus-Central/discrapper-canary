l.d(n, { A: () => o });
var t = l(17928),
    i = l(181041),
    a = l(828488),
    s = l(256331);
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
    let { enabled: l } = a.LX.useConfig({ location: "useMessageConversation" });
    return (0, t.bG)(
        [i.A, s.A],
        () => {
            if (!l || !s.A.isHighlightingEnabled()) return null;
            let t = i.A.getMessageMetadata(e, n);
            if (t?.conversationId == null) return null;
            let a = i.A.getConversationMetadata(e, t.conversationId);
            return null == a ? null : { conversation: a, messageMetadata: t, color: a.color };
        },
        [e, n, l],
        r,
    );
}
