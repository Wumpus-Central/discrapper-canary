"use strict";
n.d(t, { A: () => o, w: () => s });
var r = n(311907),
    i = n(71393),
    a = n(652215);
function s(e) {
    return (
        !e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
        (e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) ||
            e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
}
function o(e) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return null != t && s(t);
    });
}
