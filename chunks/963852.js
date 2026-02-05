"use strict";
n.d(t, { Ay: () => d, Vi: () => c, pO: () => _ }), n(938796), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(9842),
    s = n(427157),
    o = n(287809),
    l = n(195880),
    u = n(652215);
function c(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: s } = e;
    return { id: t, username: n, avatar: r, discriminator: i, bot: a, global_name: s };
}
function d(e) {
    let {
            channelId: t,
            content: n,
            tts: r = !1,
            type: d = u.lAJ.DEFAULT,
            messageReference: _,
            allowedMentions: f,
            author: p,
            flags: h,
            nonce: m,
            poll: g,
            sharedCustomTheme: E,
            changelogId: A,
            giftingPrompt: I,
            state: T,
        } = e,
        y = [];
    if (d === u.lAJ.REPLY && (i()(null != _, "Replies must have a message reference"), null == f || f.replied_user)) {
        let e = a.A.getMessageByReference(_);
        e?.state === a.a.LOADED && y.push(c(e.message.author));
    }
    return (
        null == p && (p = o.default.getCurrentUser()),
        p instanceof s.A && (p = c(p)),
        i()(null != p, "createMessage: author cannot be undefined"),
        {
            id: m ?? (0, l.m)(),
            type: d,
            content: n,
            channel_id: t,
            author: p,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: y,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: T || u.cmJ.SENDING,
            tts: r,
            message_reference: _,
            message_snapshots: [],
            flags: h,
            nonce: m,
            poll: g,
            shared_client_theme: E,
            changelog_id: A,
            gifting_prompt: I,
        }
    );
}
function _(e) {
    let { messageId: t, channelId: n, content: r, embeds: i, loggingName: a } = e;
    return {
        id: t ?? (0, l.m)(),
        type: u.lAJ.DEFAULT,
        flags: u.pr7.EPHEMERAL,
        content: r,
        channel_id: n,
        author: { id: u.oIV, username: "Clyde", discriminator: u.h3J, avatar: "clyde", bot: !0 },
        attachments: [],
        embeds: i ?? [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: u.cmJ.SENT,
        tts: !1,
        loggingName: a,
    };
}
