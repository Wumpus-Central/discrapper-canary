"use strict";
n.d(t, { LX: () => o, Lc: () => _, PD: () => d, WU: () => h, sV: () => f });
var i = n(17928),
    r = n(945810),
    s = n(71393),
    a = n(652215);
let o = (0, r.mj)({
        kind: "user",
        name: "2026-03-conversation-highlighting-utility",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    l = (0, r.mj)({
        kind: "guild",
        name: "2026-06-topical-navigation-guild",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, r.mj)({
        kind: "user",
        name: "2026-04-topical-navigation-staff-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function c(e, t) {
    return (0, i.bG)([s.A], () => null != e && (s.A.getGuild(e)?.features.has(t) ?? !1), [e, t]);
}
function d(e, t) {
    var n;
    return (
        (n = a.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING),
        !!(null != e && s.A.getGuild(e)?.features.has(n)) && o.getConfig({ location: t }).enabled
    );
}
function _(e, t) {
    if (null == e) return !1;
    if (d(e, t)) return !0;
    if (!u.getConfig({ location: t }).enabled) return !1;
    let n = s.A.getGuild(e);
    return (
        null != n &&
        !n.features.has(a.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        n.features.has(a.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) &&
        l.getConfig({ guildId: e, location: t }).enabled
    );
}
function h(e, t) {
    let n = o.useConfig({ location: t }).enabled;
    return c(e, a.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && n;
}
function f(e, t) {
    let n = h(e, t),
        i = u.useConfig({ location: t }).enabled,
        r = l.useConfig({ guildId: e ?? "", location: t }).enabled,
        s = c(e, a.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING),
        o = c(e, a.GuildFeatures.SUMMARIES_ENABLED_GA);
    return null != e && (!!n || (!!i && s && !o && r));
}
