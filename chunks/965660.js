"use strict";
n.d(t, {
    Kv: () => T,
    M9: () => I,
    MC: () => f,
    Ot: () => E,
    UW: () => A,
    Ub: () => h,
    Wl: () => m,
    YP: () => g,
    jR: () => u,
    kc: () => _,
    uk: () => p,
});
var i = n(132500),
    r = n(773669),
    a = n(174459),
    s = n(403362),
    l = n(449054);
n(688713), n(351022);
var o = n(324580),
    d = n(652215),
    c = n(375708);
function u(e) {
    switch (e) {
        case o.o.FEATURED:
            return c.intl.string(c.t["RU+DCe"]);
        case o.o.GAMING:
            return c.intl.string(c.t["CD/USA"]);
        case o.o.MUSIC:
            return c.intl.string(c.t["nt9PL+"]);
        case o.o.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdt);
        case o.o.TECH:
            return c.intl.string(c.t["0A0By5"]);
        case o.o.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case o.o.HUBS:
            return c.intl.string(c.t["q469/Z"]);
    }
}
function _(e) {
    switch (e) {
        case o.o.FEATURED:
            return c.intl.string(c.t.OlDfzP);
        case o.o.GAMING:
            return c.intl.string(c.t["CD/USA"]);
        case o.o.MUSIC:
            return c.intl.string(c.t["nt9PL+"]);
        case o.o.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdt);
        case o.o.TECH:
            return c.intl.string(c.t["0A0By5"]);
        case o.o.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case o.o.HUBS:
            return c.intl.string(c.t.X5xPlb);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function E(e) {
    switch (e) {
        case o.o.FEATURED:
            return c.intl.string(c.t.SdMhrk);
        case o.o.GAMING:
            return c.intl.string(c.t.AAJ5ov);
        case o.o.MUSIC:
            return c.intl.string(c.t["SOio+D"]);
        case o.o.ENTERTAINMENT:
            return c.intl.string(c.t.R09vf0);
        case o.o.TECH:
            return c.intl.string(c.t.Ew4d56);
        case o.o.EDUCATION:
            return c.intl.string(c.t.sasIWU);
        case o.o.HUBS:
            return c.intl.string(c.t["F/IQCI"]);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function A(e) {
    switch (e) {
        case o.o.FEATURED:
            return c.intl.string(c.t.crt84X);
        case o.o.GAMING:
            return c.intl.string(c.t.fWbIpf);
        case o.o.MUSIC:
            return c.intl.string(c.t.nfgDzz);
        case o.o.ENTERTAINMENT:
            return c.intl.string(c.t.k1CYxv);
        case o.o.TECH:
            return c.intl.string(c.t["4dawps"]);
        case o.o.EDUCATION:
            return c.intl.string(c.t.uexPgT);
        default:
            return null;
    }
}
function h(e) {
    switch (e) {
        case o.o.FEATURED:
            return o.Iq;
        case o.o.GAMING:
            return o.wz.Activity;
        case o.o.MUSIC:
            return o.wz.Music;
        case o.o.ENTERTAINMENT:
            return o.wz.Television;
        case o.o.TECH:
            return o.wz.Science;
        case o.o.EDUCATION:
            return o.wz.Education;
        case o.o.HUBS:
            return o.Us;
        default:
            (0, s.xb)(e);
    }
}
function I(e) {
    return null == e || Date.now() - e > o.WV;
}
function f(e) {
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
function p(e) {
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
function T() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.default],
        t = (0, o.tO)(),
        n = e.locale;
    return (t.find((e) => e.code === n) ?? t[0]).code;
}
async function m(e) {
    let { loadId: t, guildId: n, index: i, categoryId: r, analyticsLocation: s, options: o } = e,
        c = { ...o, loadId: t };
    await l.Z2(n, s, c),
        a.default.track(d.HAw.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: r,
            location: s,
        });
}
function g() {
    return (0, i.A)().replace(/-/g, "");
}
