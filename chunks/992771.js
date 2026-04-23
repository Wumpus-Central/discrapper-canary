"use strict";
n.d(t, { y: () => l });
var r = n(607399),
    i = n(309010),
    s = n(967198),
    a = n(954571),
    o = n(652215);
function l(e, t) {
    a.default.track(o.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: r.Fr ? "mobile_web" : "desktop_web",
        guild_id: s.A.getGuildId(),
        channel_id: i.A.getChannelId(),
        section: t,
    });
}
