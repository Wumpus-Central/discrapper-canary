n.d(t, { Z: () => o });
var r = n(570140),
    i = n(703558),
    l = n(62817);
let o = {
    cancel(e, t) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            channelId: e,
            file: t
        });
        let n = l.Z.getMessageForFile(t.id);
        null != n &&
            '' === i.Z.getDraft(n.channel_id, i.d.ChannelMessage) &&
            r.Z.dispatch({
                type: 'DRAFT_SAVE',
                channelId: n.channel_id,
                draft: n.content,
                draftType: i.d.ChannelMessage
            });
    }
};
