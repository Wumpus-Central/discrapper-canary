n.d(t, { Ay: () => d, Vi: () => E, pO: () => c }), n(938796), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(9842),
    s = n(889227),
    _ = n(287809),
    l = n(195880),
    o = n(652215);
function E(e) {
    let { id: t, username: n, avatar: i, discriminator: r, bot: a, globalName: s, primaryGuild: _ } = e;
    return { id: t, username: n, avatar: i, discriminator: r, bot: a, global_name: s, primary_guild: _ };
}
function d(e) {
    let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: d = o.lAJ.DEFAULT,
            messageReference: c,
            allowedMentions: u,
            author: I,
            flags: A,
            nonce: T,
            poll: S,
            sharedCustomTheme: N,
            changelogId: O,
            giftingPrompt: R,
            boostingPrompt: f,
            state: C,
        } = e,
        p = [];
    if (d === o.lAJ.REPLY && (r()(null != c, "Replies must have a message reference"), null == u || u.replied_user)) {
        let e = a.A.getMessageByReference(c);
        e?.state === a.a.LOADED && p.push(E(e.message.author));
    }
    return (
        null == I && (I = _.default.getCurrentUser()),
        I instanceof s.A && (I = E(I)),
        r()(null != I, "createMessage: author cannot be undefined"),
        {
            id: T ?? (0, l.m)(),
            type: d,
            content: n,
            channel_id: t,
            author: I,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: p,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: C ?? o.cmJ.SENDING,
            tts: i,
            message_reference: c,
            message_snapshots: [],
            flags: A,
            nonce: T,
            poll: S,
            shared_client_theme: N,
            changelog_id: O,
            gifting_prompt: R,
            boosting_prompt: f,
        }
    );
}
function c(e) {
    let { messageId: t, channelId: n, content: i, embeds: r, loggingName: a } = e;
    return {
        id: t ?? (0, l.m)(),
        type: o.lAJ.DEFAULT,
        flags: o.pr7.EPHEMERAL,
        content: i,
        channel_id: n,
        author: { id: o.oIV, username: "Clyde", discriminator: o.h3J, avatar: "clyde", bot: !0 },
        attachments: [],
        embeds: r ?? [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: o.cmJ.SENT,
        tts: !1,
        loggingName: a,
    };
}
