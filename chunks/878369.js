var i = n(46653),
    r = n(768349);
n.d(
    t,
    {},
    {
        Q: function (e) {
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
                analyticsLocations: e?.analyticsLocations,
            };
        },
    },
);
