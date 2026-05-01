n.d(t, { Ay: () => _, Vi: () => c, pO: () => E }), n(938796), n(321073);
var i = n(284009),
    a = n.n(i),
    r = n(9842),
    s = n(889227),
    l = n(287809),
    o = n(195880),
    d = n(652215);
function c(e) {
    let { id: t, username: n, avatar: i, discriminator: a, bot: r, globalName: s, primaryGuild: l } = e;
    return { id: t, username: n, avatar: i, discriminator: a, bot: r, global_name: s, primary_guild: l };
}
function _(e) {
    let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: _ = d.lAJ.DEFAULT,
            messageReference: E,
            allowedMentions: u,
            author: A,
            flags: I,
            nonce: T,
            poll: h,
            sharedCustomTheme: S,
            changelogId: N,
            giftingPrompt: f,
            boostingPrompt: p,
            state: m,
        } = e,
        O = [];
    if (_ === d.lAJ.REPLY && (a()(null != E, "Replies must have a message reference"), null == u || u.replied_user)) {
        let e = r.A.getMessageByReference(E);
        e?.state === r.a.LOADED && O.push(c(e.message.author));
    }
    return (
        null == A && (A = l.default.getCurrentUser()),
        A instanceof s.A && (A = c(A)),
        a()(null != A, "createMessage: author cannot be undefined"),
        {
            id: T ?? (0, o.m)(),
            type: _,
            content: n,
            channel_id: t,
            author: A,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: O,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: m ?? d.cmJ.SENDING,
            tts: i,
            message_reference: E,
            message_snapshots: [],
            flags: I,
            nonce: T,
            poll: h,
            shared_client_theme: S,
            changelog_id: N,
            gifting_prompt: f,
            boosting_prompt: p,
        }
    );
}
function E(e) {
    let { messageId: t, channelId: n, content: i, embeds: a, loggingName: r } = e;
    return {
        id: t ?? (0, o.m)(),
        type: d.lAJ.DEFAULT,
        flags: d.pr7.EPHEMERAL,
        content: i,
        channel_id: n,
        author: { id: d.oIV, username: "Clyde", discriminator: d.h3J, avatar: "clyde", bot: !0 },
        attachments: [],
        embeds: a ?? [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: d.cmJ.SENT,
        tts: !1,
        loggingName: r,
    };
}
