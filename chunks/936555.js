"use strict";
n.d(t, { A: () => o, w: () => a });
var i = n(17928),
    r = n(71393),
    s = n(652215);
function a(e) {
    return (
        !e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
        (e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE) ||
            e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
}
function o(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && a(t);
    });
}
