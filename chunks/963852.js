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
            author: h,
            flags: p,
            nonce: g,
            poll: E,
            sharedCustomTheme: A,
            changelogId: I,
            giftingPrompt: T,
            boostingPrompt: y,
            state: S,
        } = e,
        v = [];
    if (d === u.lAJ.REPLY && (i()(null != _, "Replies must have a message reference"), null == f || f.replied_user)) {
        let e = a.A.getMessageByReference(_);
        e?.state === a.a.LOADED && v.push(c(e.message.author));
    }
    return (
        null == h && (h = o.default.getCurrentUser()),
        h instanceof s.A && (h = c(h)),
        i()(null != h, "createMessage: author cannot be undefined"),
        {
            id: g ?? (0, l.m)(),
            type: d,
            content: n,
            channel_id: t,
            author: h,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: v,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: S || u.cmJ.SENDING,
            tts: r,
            message_reference: _,
            message_snapshots: [],
            flags: p,
            nonce: g,
            poll: E,
            shared_client_theme: A,
            changelog_id: I,
            gifting_prompt: T,
            boosting_prompt: y,
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
