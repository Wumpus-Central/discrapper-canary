r.d(n, {
    U: function () {
        return s;
    }
});
var i = r(570140),
    a = r(709054),
    o = r(981631);
function s(e, n, r) {
    i.Z.dispatch({
        type: 'MESSAGE_CREATE',
        channelId: e,
        message: l({
            channelId: e,
            requesterUser: n,
            requestToSpeakTimestamp: r
        }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1
    });
}
function l(e) {
    let { channelId: n, requesterUser: r, requestToSpeakTimestamp: i } = e;
    return {
        id: a.default.fromTimestamp(Date.parse(i)),
        type: o.uaV.STAGE_RAISE_HAND,
        flags: o.iLy.EPHEMERAL,
        content: '',
        channel_id: n,
        author: r,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: i,
        state: o.yb.SENT,
        tts: !1
    };
}
