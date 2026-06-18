"use strict";
n.d(t, { Q: () => s });
var i = n(495544),
    r = n(768349);
function s(e) {
    return {
        id: e?.id ?? "0",
        linkType: e?.linkType ?? r.J.UNKNOWN,
        referrerId: e?.referrerId ?? i.default.getId(),
        activityCustomId: e?.activityCustomId,
        onView: e?.onView,
        onLinkCopied: e?.onLinkCopied,
        guildId: e?.guildId,
        channelId: e?.channelId,
        messageId: e?.messageId,
        isDeadEnd: e?.isDeadEnd ?? !1,
        appEmbedState: e?.appEmbedState,
    };
}
