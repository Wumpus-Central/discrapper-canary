"use strict";
n.d(t, {
    Kv: () => A,
    M9: () => E,
    MC: () => m,
    Ot: () => f,
    UW: () => h,
    Ub: () => p,
    Wl: () => I,
    YP: () => T,
    jR: () => d,
    kc: () => _,
    uk: () => g,
});
var i = n(835245),
    r = n(773669),
    s = n(174459),
    a = n(403362),
    o = n(449054);
n(688713), n(351022);
var l = n(324580),
    u = n(652215),
    c = n(375708);
function d(e) {
    switch (e) {
        case l.o.FEATURED:
            return c.intl.string(c.t["RU+DCe"]);
        case l.o.GAMING:
            return c.intl.string(c.t["CD/USA"]);
        case l.o.MUSIC:
            return c.intl.string(c.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdt);
        case l.o.TECH:
            return c.intl.string(c.t["0A0By5"]);
        case l.o.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case l.o.HUBS:
            return c.intl.string(c.t["q469/Z"]);
    }
}
function _(e) {
    switch (e) {
        case l.o.FEATURED:
            return c.intl.string(c.t.OlDfzP);
        case l.o.GAMING:
            return c.intl.string(c.t["CD/USA"]);
        case l.o.MUSIC:
            return c.intl.string(c.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdt);
        case l.o.TECH:
            return c.intl.string(c.t["0A0By5"]);
        case l.o.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case l.o.HUBS:
            return c.intl.string(c.t.X5xPlb);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function f(e) {
    switch (e) {
        case l.o.FEATURED:
            return c.intl.string(c.t.SdMhrk);
        case l.o.GAMING:
            return c.intl.string(c.t.AAJ5ov);
        case l.o.MUSIC:
            return c.intl.string(c.t["SOio+D"]);
        case l.o.ENTERTAINMENT:
            return c.intl.string(c.t.R09vf0);
        case l.o.TECH:
            return c.intl.string(c.t.Ew4d56);
        case l.o.EDUCATION:
            return c.intl.string(c.t.sasIWU);
        case l.o.HUBS:
            return c.intl.string(c.t["F/IQCI"]);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function h(e) {
    switch (e) {
        case l.o.FEATURED:
            return c.intl.string(c.t.crt84X);
        case l.o.GAMING:
            return c.intl.string(c.t.fWbIpf);
        case l.o.MUSIC:
            return c.intl.string(c.t.nfgDzz);
        case l.o.ENTERTAINMENT:
            return c.intl.string(c.t.k1CYxv);
        case l.o.TECH:
            return c.intl.string(c.t["4dawps"]);
        case l.o.EDUCATION:
            return c.intl.string(c.t.uexPgT);
        default:
            return null;
    }
}
function p(e) {
    switch (e) {
        case l.o.FEATURED:
            return l.Iq;
        case l.o.GAMING:
            return l.wz.Activity;
        case l.o.MUSIC:
            return l.wz.Music;
        case l.o.ENTERTAINMENT:
            return l.wz.Television;
        case l.o.TECH:
            return l.wz.Science;
        case l.o.EDUCATION:
            return l.wz.Education;
        case l.o.HUBS:
            return l.Us;
        default:
            (0, a.xb)(e);
    }
}
function E(e) {
    return null == e || Date.now() - e > l.WV;
}
function m(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
    };
}
function g(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: void 0,
        preferredLocale: void 0,
        discoverySplash: e.discovery_splash,
        emojis: [],
    };
}
function A() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.default],
        t = (0, l.tO)(),
        n = e.locale;
    return (t.find((e) => e.code === n) ?? t[0]).code;
}
async function I(e) {
    let { loadId: t, guildId: n, index: i, categoryId: r, analyticsLocation: a, options: l } = e,
        c = { ...l, loadId: t };
    await o.Z2(n, a, c),
        s.default.track(u.HAw.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: r,
            location: a,
        });
}
function T() {
    return (0, i.A)().replace(/-/g, "");
}
