n.d(t, { A: () => l });
var i = n(652215);
function l(e) {
    let t = e.features.has(i.GuildFeatures.COMMUNITY);
    return (
        (!t && e.features.has(i.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)) ||
        (t && !e.features.has(i.GuildFeatures.RAID_ALERTS_DISABLED))
    );
}
