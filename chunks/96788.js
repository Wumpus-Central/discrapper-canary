n.d(t, { V: () => s }), n(539854);
var r = n(626135),
    i = n(118215),
    l = n(981631);
function s(e) {
    let t = i.ZP.getDiscoveryChecklist(e),
        n = [];
    if (!(null == t ? void 0 : t.sufficient)) {
        var s;
        (null == t ? void 0 : t.safeEnvironment) || n.push('TNS'), (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && n.push('HEALTH'), (null == t ? void 0 : t.size) || n.push('MEMBER_COUNT'), Object.keys(null != (s = null == t ? void 0 : t.nsfwProperties) ? s : {}).length > 0 && n.push('BAD_WORDS'), (null == t ? void 0 : t.protected) || n.push('2FA');
    }
    r.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
        guild_id: e,
        failed_reasons: n
    });
}
