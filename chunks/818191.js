n.d(t, { i: () => r }), n(321073);
var i = n(954571),
    l = n(834720),
    s = n(652215);
function r(e) {
    let t = l.Ay.getDiscoveryChecklist(e),
        n = [];
    !t?.sufficient &&
        (t?.safeEnvironment || n.push("TNS"),
        (!t?.healthy || t?.healthScorePending) && n.push("HEALTH"),
        t?.size || n.push("MEMBER_COUNT"),
        Object.keys(t?.nsfwProperties ?? {}).length > 0 && n.push("BAD_WORDS"),
        t?.protected || n.push("2FA")),
        i.default.track(s.HAw.GUILD_SETTINGS_DISCOVERY_VIEWED, { guild_id: e, failed_reasons: n });
}
