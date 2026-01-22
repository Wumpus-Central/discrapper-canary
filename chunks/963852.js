n.d(t, {
    Ay: () => d,
    Vi: () => u,
    pO: () => f,
}),
    n(938796),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(9842),
    s = n(427157),
    o = n(287809),
    l = n(195880),
    c = n(652215);
function u(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: s } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: s,
    };
}
function d(e) {
    let {
            channelId: t,
            content: n,
            tts: r = !1,
            type: d = c.lAJ.DEFAULT,
            messageReference: f,
            allowedMentions: p,
            author: _,
            flags: h,
            nonce: m,
            poll: g,
            sharedCustomTheme: E,
            changelogId: b,
            giftingPrompt: y,
            state: O,
        } = e,
        A = [];
    if (d === c.lAJ.REPLY && (i()(null != f, "Replies must have a message reference"), null == p || p.replied_user)) {
        let e = a.A.getMessageByReference(f);
        (null == e ? void 0 : e.state) === a.a.LOADED && A.push(u(e.message.author));
    }
    return (
        null == _ && (_ = o.default.getCurrentUser()),
        _ instanceof s.A && (_ = u(_)),
        i()(null != _, "createMessage: author cannot be undefined"),
        {
            id: null != m ? m : (0, l.m)(),
            type: d,
            content: n,
            channel_id: t,
            author: _,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: A,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: O || c.cmJ.SENDING,
            tts: r,
            message_reference: f,
            message_snapshots: [],
            flags: h,
            nonce: m,
            poll: g,
            shared_client_theme: E,
            changelog_id: b,
            gifting_prompt: y,
        }
    );
}
function f(e) {
    let { messageId: t, channelId: n, content: r, embeds: i, loggingName: a } = e;
    return {
        id: null != t ? t : (0, l.m)(),
        type: c.lAJ.DEFAULT,
        flags: c.pr7.EPHEMERAL,
        content: r,
        channel_id: n,
        author: {
            id: c.oIV,
            username: "Clyde",
            discriminator: c.h3J,
            avatar: "clyde",
            bot: !0,
        },
        attachments: [],
        embeds: null != i ? i : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: c.cmJ.SENT,
        tts: !1,
        loggingName: a,
    };
}
