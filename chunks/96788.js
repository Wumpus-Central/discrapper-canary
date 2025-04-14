n.d(t, { V: () => l }), n(539854);
var r = n(626135),
    i = n(118215),
    s = n(981631);
function l(e) {
    let t = i.ZP.getDiscoveryChecklist(e),
        n = [];
    if (!(null == t ? void 0 : t.sufficient)) {
        var l;
        (null == t ? void 0 : t.safeEnvironment) || n.push('TNS'), (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && n.push('HEALTH'), (null == t ? void 0 : t.size) || n.push('MEMBER_COUNT'), Object.keys(null != (l = null == t ? void 0 : t.nsfwProperties) ? l : {}).length > 0 && n.push('BAD_WORDS'), (null == t ? void 0 : t.protected) || n.push('2FA');
    }
    r.default.track(s.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
        guild_id: e,
        failed_reasons: n
    });
}
