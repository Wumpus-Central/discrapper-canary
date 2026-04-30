"use strict";
n.d(t, { Ay: () => d, Vi: () => c, pO: () => _ }), n(938796), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(9842),
    a = n(889227),
    o = n(287809),
    l = n(195880),
    u = n(652215);
function c(e) {
    let { id: t, username: n, avatar: i, discriminator: r, bot: s, globalName: a, primaryGuild: o } = e;
    return { id: t, username: n, avatar: i, discriminator: r, bot: s, global_name: a, primary_guild: o };
}
function d(e) {
    let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: d = u.lAJ.DEFAULT,
            messageReference: _,
            allowedMentions: f,
            author: h,
            flags: p,
            nonce: E,
            poll: m,
            sharedCustomTheme: g,
            changelogId: A,
            giftingPrompt: I,
            boostingPrompt: T,
            state: S,
        } = e,
        N = [];
    if (d === u.lAJ.REPLY && (r()(null != _, "Replies must have a message reference"), null == f || f.replied_user)) {
        let e = s.A.getMessageByReference(_);
        e?.state === s.a.LOADED && N.push(c(e.message.author));
    }
    return (
        null == h && (h = o.default.getCurrentUser()),
        h instanceof a.A && (h = c(h)),
        r()(null != h, "createMessage: author cannot be undefined"),
        {
            id: E ?? (0, l.m)(),
            type: d,
            content: n,
            channel_id: t,
            author: h,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: N,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: S ?? u.cmJ.SENDING,
            tts: i,
            message_reference: _,
            message_snapshots: [],
            flags: p,
            nonce: E,
            poll: m,
            shared_client_theme: g,
            changelog_id: A,
            gifting_prompt: I,
            boosting_prompt: T,
        }
    );
}
function _(e) {
    let { messageId: t, channelId: n, content: i, embeds: r, loggingName: s } = e;
    return {
        id: t ?? (0, l.m)(),
        type: u.lAJ.DEFAULT,
        flags: u.pr7.EPHEMERAL,
        content: i,
        channel_id: n,
        author: { id: u.oIV, username: "Clyde", discriminator: u.h3J, avatar: "clyde", bot: !0 },
        attachments: [],
        embeds: r ?? [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: u.cmJ.SENT,
        tts: !1,
        loggingName: s,
    };
}
