n.d(l, { A: () => o });
var t = n(17928),
    i = n(828488),
    a = n(256331),
    s = n(958720);
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
    let { enabled: n } = i.LX.useConfig({ location: "useMessageConversation" });
    return (0, t.bG)(
        [s.A, a.A],
        () => {
            if (!n || !a.A.isHighlightingEnabled()) return null;
            let t = s.A.getMessageMetadata(e, l);
            if (null == t) return null;
            let i = s.A.getConversationMetadata(e, t.conversationId);
            return null == i ? null : { conversation: i, message: t, color: i.color };
        },
        [e, l, n],
        r,
    );
}
