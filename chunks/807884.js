"use strict";
n.d(t, { A: () => o });
var l = n(311907),
    a = n(17447),
    s = n(256331),
    i = n(736339);
function r(e, t) {
    return (
        e === t ||
        (null != e &&
            null != t &&
            e.color === t.color &&
            e.conversation.color === t.conversation.color &&
            e.conversation.conversation === t.conversation.conversation &&
            e.message.conversationId === t.message.conversationId &&
            e.message.moderationLabel === t.message.moderationLabel)
    );
}
function o(e, t) {
    let { enabled: n } = a.L.useConfig({ location: "useMessageConversation" });
    return (0, l.bG)(
        [i.A, s.A],
        () => {
            if (!n || !s.A.isHighlightingEnabled()) return null;
            let l = i.A.getMessageMetadata(e, t);
            if (null == l) return null;
            let a = i.A.getConversationMetadata(e, l.conversationId);
            return null == a ? null : { conversation: a, message: l, color: i.A.getMessageConversationColor(e, t) };
        },
        [e, t, n],
        r,
    );
}
