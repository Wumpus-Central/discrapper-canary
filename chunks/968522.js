n.d(t, { Ay: () => r, P8: () => i, sK: () => s });
var l = n(945810);
let i = { CHANNEL_TEXT_AREA_BARS: "ChannelTextAreaBars", TYPING_USERS: "TypingUsers" },
    s = (0, l.mj)({
        kind: "user",
        name: "2026-08-rich-presence-invite-banner",
        defaultConfig: { showBanner: !1 },
        variations: { 1: { showBanner: !0 } },
    });
function r(e) {
    return s.useConfig({ location: e }).showBanner;
}
