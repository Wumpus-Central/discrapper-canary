"use strict";
n.d(t, { Nh: () => s, c$: () => i });
var r = n(136722);
function i(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, r] of Object.entries(e.config_by_perk))
        t[n] = {
            source: r.source,
            increasedFileUploadSize:
                null != r.increased_file_upload_size ? { maxSize: r.increased_file_upload_size.max_size } : void 0,
            increasedGuildLimit:
                null != r.increased_guild_limit ? { maxGuilds: r.increased_guild_limit.max_guilds } : void 0,
        };
    return { activePerksBitmask: e.active_perks_bitmask, configByPerk: t, rulesVersion: e.rules_version };
}
function s(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
        i = Math.floor(t / 64),
        s = t % 64;
    return !(i >= n.length) && r.zy(r.iu(n[i]), r.jB(s));
}
n(988506);
