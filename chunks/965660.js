n.d(t, {
    Kv: () => v,
    M9: () => y,
    MC: () => O,
    Ot: () => g,
    UW: () => E,
    Ub: () => b,
    Wl: () => S,
    YP: () => I,
    jR: () => h,
    kc: () => m,
    uk: () => A,
}),
    n(65821),
    n(228524),
    n(896048),
    n(747238),
    n(812715);
var r = n(835245),
    i = n(773669),
    a = n(954571),
    s = n(403362),
    o = n(449054);
n(670412), n(351022);
var l = n(324580),
    c = n(652215),
    u = n(985018);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e) {
    switch (e) {
        case l.o.FEATURED:
            return u.intl.string(u.t["RU+DCe"]);
        case l.o.GAMING:
            return u.intl.string(u.t["CD/USA"]);
        case l.o.MUSIC:
            return u.intl.string(u.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return u.intl.string(u.t.gSbmdt);
        case l.o.TECH:
            return u.intl.string(u.t["0A0By5"]);
        case l.o.EDUCATION:
            return u.intl.string(u.t.Gy9woq);
        case l.o.HUBS:
            return u.intl.string(u.t["q469/Z"]);
    }
}

function m(e) {
    switch (e) {
        case l.o.FEATURED:
            return u.intl.string(u.t.OlDfzP);
        case l.o.GAMING:
            return u.intl.string(u.t["CD/USA"]);
        case l.o.MUSIC:
            return u.intl.string(u.t["nt9PL+"]);
        case l.o.ENTERTAINMENT:
            return u.intl.string(u.t.gSbmdt);
        case l.o.TECH:
            return u.intl.string(u.t["0A0By5"]);
        case l.o.EDUCATION:
            return u.intl.string(u.t.Gy9woq);
        case l.o.HUBS:
            return u.intl.string(u.t.X5xPlb);
        default:
            throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e));
    }
}

function g(e) {
    switch (e) {
        case l.o.FEATURED:
            return u.intl.string(u.t.SdMhrk);
        case l.o.GAMING:
            return u.intl.string(u.t.AAJ5ov);
        case l.o.MUSIC:
            return u.intl.string(u.t["SOio+D"]);
        case l.o.ENTERTAINMENT:
            return u.intl.string(u.t.R09vf0);
        case l.o.TECH:
            return u.intl.string(u.t.Ew4d56);
        case l.o.EDUCATION:
            return u.intl.string(u.t.sasIWU);
        case l.o.HUBS:
            return u.intl.string(u.t["F/IQCI"]);
        default:
            throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e));
    }
}

function E(e) {
    switch (e) {
        case l.o.FEATURED:
            return u.intl.string(u.t.crt84X);
        case l.o.GAMING:
            return u.intl.string(u.t.fWbIpf);
        case l.o.MUSIC:
            return u.intl.string(u.t.nfgDzz);
        case l.o.ENTERTAINMENT:
            return u.intl.string(u.t.k1CYxv);
        case l.o.TECH:
            return u.intl.string(u.t["4dawps"]);
        case l.o.EDUCATION:
            return u.intl.string(u.t.uexPgT);
        default:
            return null;
    }
}

function b(e) {
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

function y(e) {
    return null == e || Date.now() - e > l.WV;
}

function O(e) {
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

function A(e) {
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

function v() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default],
        n = (0, l.tO)(),
        r = t.locale;
    return (null != (e = n.find((e) => e.code === r)) ? e : n[0]).code;
}
async function S(e) {
    let { loadId: t, guildId: n, index: r, categoryId: i, analyticsLocation: s, options: l } = e,
        u = _(f({}, l), {
            loadId: t,
        });
    await o.Z2(n, s, u),
        a.default.track(c.HAw.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: r,
            category_id: i,
            location: s,
        });
}

function I() {
    return (0, r.A)().replace(/-/g, "");
}
