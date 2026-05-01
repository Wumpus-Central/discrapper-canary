n.d(t, { A: () => l, w: () => s });
var i = n(17928),
    a = n(71393),
    r = n(652215);
function s(e) {
    return (
        !e.features.has(r.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
        (e.features.has(r.GuildFeatures.CREATOR_MONETIZABLE) ||
            e.features.has(r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
}
function l(e) {
    return (0, i.bG)([a.A], () => {
        let t = a.A.getGuild(e);
        return null != t && s(t);
    });
}
