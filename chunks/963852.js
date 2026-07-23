"use strict";
n.d(t, { Ay: () => u, Vi: () => c, pO: () => _ }), n(938796), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(9842),
    s = n(889227),
    l = n(287809),
    o = n(195880),
    d = n(652215);
function c(e) {
    let { id: t, username: n, avatar: i, discriminator: r, bot: a, globalName: s, primaryGuild: l } = e;
    return { id: t, username: n, avatar: i, discriminator: r, bot: a, global_name: s, primary_guild: l };
}
function u(e) {
    let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: u = d.lAJ.DEFAULT,
            messageReference: _,
            allowedMentions: E,
            author: A,
            flags: h,
            nonce: I,
            poll: f,
            sharedCustomTheme: p,
            changelogId: T,
            giftingPrompt: m,
            boostingPrompt: g,
            state: S,
            mediaMention: N,
            mentionGames: C,
        } = e,
        O = [];
    if (u === d.lAJ.REPLY && (r()(null != _, "Replies must have a message reference"), null == E || E.replied_user)) {
        let e = a.A.getMessageByReference(_);
        e?.state === a.a.LOADED && O.push(c(e.message.author));
    }
    return (
        null == A && (A = l.default.getCurrentUser()),
        A instanceof s.A && (A = c(A)),
        r()(null != A, "createMessage: author cannot be undefined"),
        {
            id: I ?? (0, o.m)(),
            type: u,
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
            mention_games: C,
            timestamp: new Date().toISOString(),
            state: S ?? d.cmJ.SENDING,
            tts: i,
            message_reference: _,
            message_snapshots: [],
            flags: h,
            nonce: I,
            poll: f,
            shared_client_theme: p,
            changelog_id: T,
            gifting_prompt: m,
            boosting_prompt: g,
            media_mention: N,
        }
    );
}
function _(e) {
    let { messageId: t, channelId: n, content: i, embeds: r, loggingName: a } = e;
    return {
        id: t ?? (0, o.m)(),
        type: d.lAJ.DEFAULT,
        flags: d.pr7.EPHEMERAL,
        content: i,
        channel_id: n,
        author: { id: d.oIV, username: "Clyde", discriminator: d.h3J, avatar: "clyde", bot: !0 },
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
}
