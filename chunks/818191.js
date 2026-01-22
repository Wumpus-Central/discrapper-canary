n.d(t, {
    i: () => s,
}),
    n(321073);
var r = n(954571),
    i = n(834720),
    l = n(652215);

function s(e) {
    let t = i.Ay.getDiscoveryChecklist(e),
        n = [];
    if (!(null == t ? void 0 : t.sufficient)) {
        var s;
        (null == t ? void 0 : t.safeEnvironment) || n.push("TNS"),
            (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && n.push("HEALTH"),
            (null == t ? void 0 : t.size) || n.push("MEMBER_COUNT"),
            Object.keys(null != (s = null == t ? void 0 : t.nsfwProperties) ? s : {}).length > 0 && n.push("BAD_WORDS"),
            (null == t ? void 0 : t.protected) || n.push("2FA");
    }
    r.default.track(l.HAw.GUILD_SETTINGS_DISCOVERY_VIEWED, {
        guild_id: e,
        failed_reasons: n,
    });
}
