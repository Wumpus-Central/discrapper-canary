n.d(t, {
    Iz: () => _,
    g: () => f,
    yg: () => p,
});
var r = n(562465),
    i = n(465532),
    a = n(843472),
    s = n(118517),
    o = n(734057),
    l = n(31717),
    c = n(320501),
    u = n(203982),
    d = n(652215);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT;
    r.Bo.post({
        url: d.Rsh.FORCE_SEND_PROMPT(e),
        body: { prompt_type: t },
        rejectWithError: !0,
    });
}
async function p(e, t, n) {
    await r.Bo.post({
        url: d.Rsh.SEND_GAMING_STATS(t),
        body: {
            message_reference: {
                guild_id: e,
                channel_id: t,
                message_id: n,
            },
        },
        rejectWithError: !1,
    }),
        h(t);
}
async function _(e) {
    let t = await r.Bo.patch({
        url: d.Rsh.UPDATE_GAMING_STATS(e.channel_id, e.id),
        rejectWithError: !1,
    });
    if (null != t.text && "" !== t.text) {
        let n = o.A.getChannel(e.channel_id);
        null != n &&
            ((0, s.Yf)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1,
            }),
            h(n.id)),
            i.A.saveDraft(e.channel_id, t.text, l.C.ChannelMessage);
    }
}
function h(e) {
    c.A.getMessages(e).hasMoreAfter ? a.A.jumpToPresent(e, d.EMb) : u._.dispatch(d.jej.SCROLLTO_PRESENT);
}
