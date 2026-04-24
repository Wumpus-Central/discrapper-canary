"use strict";
n.d(t, { Nh: () => a, c$: () => s });
var i = n(136722);
n(441574);
var r = n(142839);
function s(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, i] of Object.entries(e.config_by_perk))
        t[n] = {
            source: i.source,
            kind: (function (e) {
                if (null != e.kind)
                    switch (e.kind.type) {
                        case r.D.INCREASED_FILE_UPLOAD_SIZE:
                            return { type: r.D.INCREASED_FILE_UPLOAD_SIZE, maxSize: e.kind.max_size };
                        case r.D.INCREASED_GUILD_LIMIT:
                            return { type: r.D.INCREASED_GUILD_LIMIT, maxGuilds: e.kind.max_guilds };
                        default:
                            return;
                    }
            })(i),
        };
    return { activePerksBitmask: e.active_perks_bitmask, configByPerk: t, rulesVersion: e.rules_version };
}
function a(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
        r = Math.floor(t / 64);
    return !(r >= n.length) && i.zy(i.iu(n[r]), i.jB(t % 64));
}
