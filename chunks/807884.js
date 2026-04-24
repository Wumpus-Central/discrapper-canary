n.d(l, { A: () => o });
var t = n(17928),
    a = n(17447),
    i = n(256331),
    s = n(736339);
function r(e, l) {
    return (
        e === l ||
        (null != e &&
            null != l &&
            e.color === l.color &&
            e.conversation.color === l.conversation.color &&
            e.conversation.conversation === l.conversation.conversation &&
            e.message.conversationId === l.message.conversationId &&
            e.message.moderationLabel === l.message.moderationLabel)
    );
}
function o(e, l) {
    let { enabled: n } = a.L.useConfig({ location: "useMessageConversation" });
    return (0, t.bG)(
        [s.A, i.A],
        () => {
            if (!n || !i.A.isHighlightingEnabled()) return null;
            let t = s.A.getMessageMetadata(e, l);
            if (null == t) return null;
            let a = s.A.getConversationMetadata(e, t.conversationId);
            return null == a ? null : { conversation: a, message: t, color: s.A.getMessageConversationColor(e, l) };
        },
        [e, l, n],
        r,
    );
}
