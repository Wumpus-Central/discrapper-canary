n.d(t, { A: () => i });
var r = n(652215);
function i(e) {
    let t = e.features.has(r.GuildFeatures.COMMUNITY);
    return (
        (!t && e.features.has(r.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)) ||
        (t && !e.features.has(r.GuildFeatures.RAID_ALERTS_DISABLED))
    );
}
