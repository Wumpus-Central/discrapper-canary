(n(938796), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(9842),
    s = n(619019),
    l = n(287809),
    o = n(195880),
    d = n(652215);
function c(e) {
    let { id: t, username: n, avatar: i, discriminator: r, bot: a, globalName: s, primaryGuild: l } = e;
    return { id: t, username: n, avatar: i, discriminator: r, bot: a, global_name: s, primary_guild: l };
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                    channelId: t,
                    content: n,
                    tts: i = !1,
                    type: u = d.lAJ.DEFAULT,
                    messageReference: _,
                    allowedMentions: E,
                    author: A,
                    flags: f,
                    nonce: h,
                    poll: I,
                    sharedCustomTheme: p,
                    changelogId: m,
                    giftingPrompt: T,
                    state: g,
                    mediaMention: S,
                } = e,
                N = [];
            if (
                u === d.lAJ.REPLY &&
                (r()(null != _, "Replies must have a message reference"), null == E || E.replied_user)
            ) {
                let e = a.A.getMessageByReference(_);
                e?.state === a.a.LOADED && N.push(c(e.message.author));
            }
            return (
                null == A && (A = l.default.getCurrentUser()),
                A instanceof s.A && (A = c(A)),
                r()(null != A, "createMessage: author cannot be undefined"),
                {
                    id: h ?? (0, o.m)(),
                    type: u,
                    content: n,
                    channel_id: t,
                    author: A,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: N,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: g ?? d.cmJ.SENDING,
                    tts: i,
                    message_reference: _,
                    message_snapshots: [],
                    flags: f,
                    nonce: h,
                    poll: I,
                    shared_client_theme: p,
                    changelog_id: m,
                    gifting_prompt: T,
                    media_mention: S,
                }
            );
        },
        Vi: c,
        pO: function (e) {
            let { messageId: t, channelId: n, content: i, embeds: r, loggingName: a } = e;
            return {
                id: t ?? (0, o.m)(),
                type: d.lAJ.DEFAULT,
                flags: d.pr7.EPHEMERAL,
                content: i,
                channel_id: n,
                author: { id: "1", username: "Clyde", discriminator: "0000", avatar: "clyde", bot: !0 },
                attachments: [],
                embeds: r ?? [],
                pinned: !1,
                mentions: [],
                mention_channels: [],
                mention_roles: [],
                mention_everyone: !1,
                timestamp: new Date().toISOString(),
                state: d.cmJ.SENT,
                tts: !1,
                loggingName: a,
            };
        },
    },
);
