n.d(t, { U: () => o });
var r = n(570140),
    i = n(709054),
    a = n(981631);
function o(e, t, n) {
    r.Z.dispatch({
        type: 'MESSAGE_CREATE',
        channelId: e,
        message: s({
            channelId: e,
            requesterUser: t,
            requestToSpeakTimestamp: n
        }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1
    });
}
function s(e) {
    let { channelId: t, requesterUser: n, requestToSpeakTimestamp: r } = e;
    return {
        id: i.default.fromTimestamp(Date.parse(r)),
        type: a.uaV.STAGE_RAISE_HAND,
        flags: a.iLy.EPHEMERAL,
        content: '',
        channel_id: t,
        author: n,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: r,
        state: a.yb.SENT,
        tts: !1
    };
}
