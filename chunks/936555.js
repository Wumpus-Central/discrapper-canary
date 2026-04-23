"use strict";
n.d(t, { A: () => o, w: () => a });
var r = n(311907),
    i = n(71393),
    s = n(652215);
function a(e) {
    return (
        !e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
        (e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE) ||
            e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
}
function o(e) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return null != t && a(t);
    });
}
