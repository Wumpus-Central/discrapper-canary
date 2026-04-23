s.d(t, { Lx: () => r, Nt: () => o, iF: () => n, pE: () => l });
var i = s(73153);
function n(e) {
    let { eventId: t, stageId: s } = e;
    (null != t || null != s) && i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: t, stageId: s });
}
function r(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: e });
}
function l(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: e });
}
function o(e) {
    i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: e });
}
