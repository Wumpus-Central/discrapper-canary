"use strict";
n.d(t, { Nh: () => a, c$: () => s });
var r = n(136722);
n(988506);
var i = n(142839);
function s(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, r] of Object.entries(e.config_by_perk))
        t[n] = {
            source: r.source,
            kind: (function (e) {
                if (null != e.kind)
                    switch (e.kind.type) {
                        case i.D.INCREASED_FILE_UPLOAD_SIZE:
                            return { type: i.D.INCREASED_FILE_UPLOAD_SIZE, maxSize: e.kind.max_size };
                        case i.D.INCREASED_GUILD_LIMIT:
                            return { type: i.D.INCREASED_GUILD_LIMIT, maxGuilds: e.kind.max_guilds };
                        default:
                            return;
                    }
            })(r),
        };
    return { activePerksBitmask: e.active_perks_bitmask, configByPerk: t, rulesVersion: e.rules_version };
}
function a(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
        i = Math.floor(t / 64);
    return !(i >= n.length) && r.zy(r.iu(n[i]), r.jB(t % 64));
}
