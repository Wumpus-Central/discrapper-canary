n.d(t, { kQ: () => u, Nh: () => d, jv: () => c, c$: () => o });
var i,
    r = n(136722),
    a = n(76573),
    s = n(501803),
    l =
        (((i = {})[(i.INCREASED_FILE_UPLOAD_SIZE = 0)] = "INCREASED_FILE_UPLOAD_SIZE"),
        (i[(i.INCREASED_GUILD_LIMIT = 1)] = "INCREASED_GUILD_LIMIT"),
        (i[(i.DISPLAY_NAME_STYLES = 2)] = "DISPLAY_NAME_STYLES"),
        (i[(i.CLIENT_THEMES = 3)] = "CLIENT_THEMES"),
        (i[(i.APP_ICONS = 4)] = "APP_ICONS"),
        i);
function o(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, i] of Object.entries(e.config_by_perk))
        t[n] = {
            source: i.source,
            kind: (function (e) {
                if (null != e.kind)
                    switch (e.kind.type) {
                        case l.INCREASED_FILE_UPLOAD_SIZE:
                            return { type: l.INCREASED_FILE_UPLOAD_SIZE, maxSize: e.kind.max_size };
                        case l.INCREASED_GUILD_LIMIT:
                            return { type: l.INCREASED_GUILD_LIMIT, maxGuilds: e.kind.max_guilds };
                        case l.DISPLAY_NAME_STYLES:
                            return {
                                type: l.DISPLAY_NAME_STYLES,
                                isRestrictedToAllowedOptions: e.kind.is_restricted_to_allowed_options,
                                allowedStyles: e.kind.allowed_styles.flatMap((e) => (0, s.mT)(e) ?? []),
                            };
                        case l.CLIENT_THEMES:
                            return {
                                type: l.CLIENT_THEMES,
                                isRestrictedToAllowedOptions: e.kind.is_restricted_to_allowed_options,
                                allowedPresetIds: e.kind.allowed_preset_ids,
                            };
                        case l.APP_ICONS:
                            return {
                                type: l.APP_ICONS,
                                isRestrictedToAllowedOptions: e.kind.is_restricted_to_allowed_options,
                                allowedIconIds: e.kind.allowed_icon_ids,
                            };
                        default:
                            return;
                    }
            })(i),
        };
    return { activePerksBitmask: e.active_perks_bitmask, configByPerk: t, rulesVersion: e.rules_version };
}
function d(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
        i = Math.floor(t / 64);
    return !(i >= n.length) && r.zy(r.iu(n[i]), r.jB(t % 64));
}
function c(e, t) {
    if (null == e || !d(e, t)) return !1;
    let n = e.configByPerk[String(t)]?.kind;
    if (null == n) return !0;
    switch (n.type) {
        case l.DISPLAY_NAME_STYLES:
        case l.CLIENT_THEMES:
        case l.APP_ICONS:
            return !n.isRestrictedToAllowedOptions;
        default:
            return !0;
    }
}
function u(e, t) {
    if (null == e) return;
    let n = e.configByPerk[String(t)];
    return n?.source != null ? n.source : d(e, t) ? [a.g$.SOURCE_NITRO] : void 0;
}
