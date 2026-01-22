n.d(t, {
    Lx: () => i,
    Nt: () => s,
    iF: () => l,
    pE: () => a,
});
var r = n(73153);
function l(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) &&
        r.h.dispatch({
            type: "LIVE_CHANNEL_NOTICE_HIDE",
            eventId: t,
            stageId: n,
        });
}
function i(e) {
    r.h.dispatch({
        type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
        eventId: e,
    });
}
function a(e) {
    r.h.dispatch({
        type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
        guildEventId: e,
    });
}
function s(e) {
    r.h.dispatch({
        type: "EVENT_BANNER_DISMISS",
        eventId: e,
    });
}
