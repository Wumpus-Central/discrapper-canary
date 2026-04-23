n.d(t, {
    Kv: () => O,
    M9: () => T,
    MC: () => S,
    Ot: () => u,
    UW: () => I,
    Ub: () => A,
    Wl: () => R,
    YP: () => f,
    jR: () => d,
    kc: () => c,
    uk: () => N,
});
var i = n(132500),
    r = n(773669),
    a = n(954571),
    s = n(403362),
    _ = n(449054);
n(688713), n(351022);
var l = n(324580),
    o = n(652215),
    E = n(985018);
function d(e) {
    switch (e) {
        case l.o.FEATURED:
            return E.intl.string(E.t["RU+DCe"]);
        case l.o.GAMING:
            return E.intl.string(E.t["CD/USA"]);
        case l.o.MUSIC:
            return E.intl.string(E.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return E.intl.string(E.t.gSbmdt);
        case l.o.TECH:
            return E.intl.string(E.t["0A0By5"]);
        case l.o.EDUCATION:
            return E.intl.string(E.t.Gy9woq);
        case l.o.HUBS:
            return E.intl.string(E.t["q469/Z"]);
    }
}
function c(e) {
    switch (e) {
        case l.o.FEATURED:
            return E.intl.string(E.t.OlDfzP);
        case l.o.GAMING:
            return E.intl.string(E.t["CD/USA"]);
        case l.o.MUSIC:
            return E.intl.string(E.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return E.intl.string(E.t.gSbmdt);
        case l.o.TECH:
            return E.intl.string(E.t["0A0By5"]);
        case l.o.EDUCATION:
            return E.intl.string(E.t.Gy9woq);
        case l.o.HUBS:
            return E.intl.string(E.t.X5xPlb);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function u(e) {
    switch (e) {
        case l.o.FEATURED:
            return E.intl.string(E.t.SdMhrk);
        case l.o.GAMING:
            return E.intl.string(E.t.AAJ5ov);
        case l.o.MUSIC:
            return E.intl.string(E.t["SOio+D"]);
        case l.o.ENTERTAINMENT:
            return E.intl.string(E.t.R09vf0);
        case l.o.TECH:
            return E.intl.string(E.t.Ew4d56);
        case l.o.EDUCATION:
            return E.intl.string(E.t.sasIWU);
        case l.o.HUBS:
            return E.intl.string(E.t["F/IQCI"]);
        default:
            throw Error(`[getGlobalDiscoveryServerTabTitle] Unsupported tab: ${e}`);
    }
}
function I(e) {
    switch (e) {
        case l.o.FEATURED:
            return E.intl.string(E.t.crt84X);
        case l.o.GAMING:
            return E.intl.string(E.t.fWbIpf);
        case l.o.MUSIC:
            return E.intl.string(E.t.nfgDzz);
        case l.o.ENTERTAINMENT:
            return E.intl.string(E.t.k1CYxv);
        case l.o.TECH:
            return E.intl.string(E.t["4dawps"]);
        case l.o.EDUCATION:
            return E.intl.string(E.t.uexPgT);
        default:
            return null;
    }
}
function A(e) {
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
            (0, s.xb)(e);
    }
}
function T(e) {
    return null == e || Date.now() - e > l.WV;
}
function S(e) {
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
function N(e) {
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
function O() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.default],
        t = (0, l.tO)(),
        n = e.locale;
    return (t.find((e) => e.code === n) ?? t[0]).code;
}
async function R(e) {
    let { loadId: t, guildId: n, index: i, categoryId: r, analyticsLocation: s, options: l } = e,
        E = { ...l, loadId: t };
    await _.Z2(n, s, E),
        a.default.track(o.HAw.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: r,
            location: s,
        });
}
function f() {
    return (0, i.A)().replace(/-/g, "");
}
