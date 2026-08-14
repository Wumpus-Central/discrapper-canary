"use strict";
n.d(t, { Ay: () => s, P8: () => r, sK: () => a });
var i = n(945810);
let r = { CHANNEL_TEXT_AREA_BARS: "ChannelTextAreaBars", TYPING_USERS: "TypingUsers" },
    a = (0, i.mj)({
        kind: "user",
        name: "2026-08-rich-presence-invite-banner",
        defaultConfig: { showBanner: !1 },
        variations: { 1: { showBanner: !0 } },
    });
function s(e) {
    return a.useConfig({ location: e }).showBanner;
}
