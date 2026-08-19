"use strict";
n.d(t, { LX: () => l, Lc: () => _, PD: () => u, WU: () => E, sV: () => A });
var i = n(17928),
    r = n(945810),
    a = n(71393),
    s = n(652215);
let l = (0, r.mj)({
        kind: "user",
        name: "2026-03-conversation-highlighting-utility",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    o = (0, r.mj)({
        kind: "guild",
        name: "2026-06-topical-navigation-guild",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, r.mj)({
        kind: "user",
        name: "2026-04-topical-navigation-staff-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function c(e, t) {
    return (0, i.bG)([a.A], () => null != e && (a.A.getGuild(e)?.features.has(t) ?? !1), [e, t]);
}
function u(e, t) {
    var n;
    return (
        (n = s.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING),
        !!(null != e && a.A.getGuild(e)?.features.has(n)) && l.getConfig({ location: t }).enabled
    );
}
function _(e, t) {
    if (null == e) return !1;
    if (u(e, t)) return !0;
    if (!d.getConfig({ location: t }).enabled) return !1;
    let n = a.A.getGuild(e);
    return (
        null != n &&
        !n.features.has(s.GuildFeatures.SUMMARIES_ENABLED_GA) &&
        n.features.has(s.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) &&
        o.getConfig({ guildId: e, location: t }).enabled
    );
}
function E(e, t) {
    let n = l.useConfig({ location: t }).enabled;
    return c(e, s.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && n;
}
function A(e, t) {
    let n = E(e, t),
        i = d.useConfig({ location: t }).enabled,
        r = o.useConfig({ guildId: e ?? "", location: t }).enabled,
        a = c(e, s.GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING),
        l = c(e, s.GuildFeatures.SUMMARIES_ENABLED_GA);
    return null != e && (!!n || (!!i && a && !l && r));
}
