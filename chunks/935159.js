n.d(t, { Lx: () => s, Nt: () => r, iF: () => l, pE: () => a });
var i = n(73153);
function l(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) && i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: t, stageId: n });
}
function s(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: e });
}
function a(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: e });
}
function r(e) {
    i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: e });
}
