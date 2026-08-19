"use strict";
n.d(t, { A: () => l, w: () => s });
var i = n(17928),
    r = n(71393),
    a = n(652215);
function s(e) {
    return (
        !e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
        (e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) ||
            e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
}
function l(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && s(t);
    });
}
