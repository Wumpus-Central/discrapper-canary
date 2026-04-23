n.d(t, { Lx: () => a, Nt: () => s, iF: () => r, pE: () => l });
var i = n(228366);
function r(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) && i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: t, stageId: n });
}
function a(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: e });
}
function l(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: e });
}
function s(e) {
    i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: e });
}
