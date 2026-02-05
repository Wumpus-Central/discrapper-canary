"use strict";
n.d(t, { E: () => s });
var i = n(73153);
function s(e, t, n) {
    return (
        i.h.dispatch({ type: "GUILD_SETTINGS_WIDGET_UPDATE", guildId: e, enabled: t, channelId: n ?? null }),
        Promise.resolve(!0)
    );
}
