n.d(t, { U: () => s });
var i = n(570140),
    r = n(709054),
    a = n(981631);
function s(e, t, n) {
    i.Z.dispatch({
        type: 'MESSAGE_CREATE',
        channelId: e,
        message: o({
            channelId: e,
            requesterUser: t,
            requestToSpeakTimestamp: n
        }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1
    });
}
function o(e) {
    let { channelId: t, requesterUser: n, requestToSpeakTimestamp: i } = e;
    return {
        id: r.default.fromTimestamp(Date.parse(i)),
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
        timestamp: i,
        state: a.yb.SENT,
        tts: !1
    };
}
