n.d(t, {
    GF: () => s,
    KX: () => o,
    j_: () => a,
    z$: () => l,
});
var r = n(626135),
    i = n(981631),
    a = (function (e) {
        return (
            (e.VIEW = "view"),
            (e.PLAY = "play"),
            (e.CLOUD_PLAY = "cloud_play"),
            (e.JOIN = "join"),
            (e.ADD_APP = "add_app"),
            (e.JOIN_SERVER = "join_server"),
            (e.INVITE = "invite"),
            (e.SYNC = "sync"),
            (e.CONTENT = "content"),
            (e.BANNER = "banner"),
            (e.STREAM = "stream"),
            e
        );
    })({});
function o(e) {
    let { applicationId: t, linkType: n, area: a, referrerId: o, customId: s, isDeadEnd: l } = e;
    r.default.track(i.rMx.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: a,
        referrer_id: o,
        custom_id: s,
        is_dead_end: l,
    });
}
function s(e) {
    let { appId: t, linkType: n, referrerId: a, customId: o, guildId: s, channelId: l, messageId: c } = e;
    r.default.track(i.rMx.APP_EMBED_VIEWED, {
        application_id: t,
        link_type: n,
        referrer_id: a,
        custom_id: o,
        guild_id: s,
        channel_id: l,
        message_id: c,
    });
}
function l(e, t, n, a) {
    r.default.track(i.rMx.APP_EMBED_LINK_SENT, {
        application_id: e,
        link_type: t,
        referrer_id: n,
        custom_id: a,
    });
}
