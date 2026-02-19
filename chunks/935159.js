"use strict";
n.d(t, { Lx: () => l, Nt: () => a, iF: () => s, pE: () => r });
var i = n(73153);
function s(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) && i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: t, stageId: n });
}
function l(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: e });
}
function r(e) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: e });
}
function a(e) {
    i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: e });
}
