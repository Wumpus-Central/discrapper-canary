n.d(t, {
    V: function () {
        return o;
    }
}),
    n(653041);
var i,
    r,
    l = n(626135),
    s = n(118215),
    a = n(981631);
function o(e) {
    let t = s.ZP.getDiscoveryChecklist(e),
        n = [];
    if (!(null == t ? void 0 : t.sufficient)) {
        var i;
        !(null == t ? void 0 : t.safeEnvironment) && n.push('TNS'), (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && n.push('HEALTH'), !(null == t ? void 0 : t.size) && n.push('MEMBER_COUNT'), Object.keys(null !== (i = null == t ? void 0 : t.nsfwProperties) && void 0 !== i ? i : {}).length > 0 && n.push('BAD_WORDS'), !(null == t ? void 0 : t.protected) && n.push('2FA');
    }
    l.default.track(a.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
        guild_id: e,
        failed_reasons: n
    });
}
((r = i || (i = {})).SAFE_ENVIRONMENT = 'TNS'), (r.HEALTHY = 'HEALTH'), (r.SIZE = 'MEMBER_COUNT'), (r.NSFW = 'BAD_WORDS'), (r.PROTECTED = '2FA');
