"use strict";
n.d(t, { A: () => O }), n(323874), n(14289), n(35956);
var i = n(477450),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(567243),
    o = n(403362),
    d = n(998218),
    c = n(652215);
let u = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    _ = /^.*\.discordapp\.net$/,
    E = /^.*\.media\.discordapp\.net$/,
    A = new Set([
        "media.tenor.com",
        "media.tenor.co",
        "c.tenor.com",
        "static.klipy.com",
        "media.giphy.com",
        "i.giphy.com",
    ]),
    h = r().v4().source,
    I = RegExp(
        `(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${h}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`,
        "ig",
    ),
    f = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
    ]);
function p(e, t) {
    return null != e && null != t && e !== t;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (u.test(e) || (t && f.has(e.toLowerCase())));
}
function m(e) {
    return null != e && "discord:" === e;
}
function g(e) {
    if (null == e) return !1;
    let t = d.A.toURLSafe(e);
    return (
        null != t &&
        ((!!(0, o.iT)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname)) ||
            t.hostname === window.GLOBAL_ENV.CDN_HOST ||
            _.test(t.hostname))
    );
}
function S(e, t, n) {
    if (!p(t, n) || null == e) return !1;
    let i = d.A.toURLSafe(e);
    return (
        null != i &&
        ((!!(0, o.iT)() && ("localhost" === i.hostname || "127.0.0.1" === i.hostname) && "4000" === i.port) ||
            E.test(i.hostname))
    );
}
function N(e) {
    if (null == e) return !1;
    let t = d.A.toURLSafe(e);
    return null != t && A.has(t.hostname);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        let n = d.A.toURLSafe(e)?.hostname;
        if (null != n && T(n, t)) return !0;
    }
    return !1;
}
function R(e) {
    return null != e && m(l.parse(e).protocol);
}
let O = {
    URL_REGEX: I,
    makeUrl: function (e, t) {
        let n = (t ?? (0, o.m6)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return `${location.protocol}//${n}${e}`;
    },
    isOriginalContentTypeDifferent: p,
    isDiscordHostname: T,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: m,
    isDiscordUrl: C,
    isDiscordUri: R,
    isDiscordCdnUrl: function (e) {
        return null != e && l.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordDirectAssetUrl: g,
    isDiscordProxiedAssetUrl: S,
    isAllowedGifProviderUrl: N,
    isDiscordAssetUrl: function (e, t, n) {
        return !!(g(e) || S(e, t, n) || N(e));
    },
    isDiscordUrlOrUri: (e) => C(e) || R(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return (
            t.startsWith("/channels/") ||
            t.startsWith(c.BVt.APPLICATION_STORE) ||
            t.startsWith(c.BVt.APPLICATION_LIBRARY) ||
            t.startsWith(c.BVt.MESSAGE_REQUESTS) ||
            t.startsWith(c.BVt.FAMILY_CENTER) ||
            t.startsWith(c.BVt.ACTIVITIES) ||
            t.startsWith(c.BVt.COLLECTIBLES_SHOP) ||
            t.startsWith("/feature/boost") ||
            t.startsWith(c.BVt.ACTIVITY)
        );
    },
    format: (e) => l.format(e),
    formatPathWithQuery: (e, t) => l.format({ pathname: e, query: s().pickBy(t) }),
    formatSearch: (e) => l.format({ query: s().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return l.parse(e, !0);
        } catch (e) {
            return null;
        }
    },
    toURLSafe(e, t) {
        try {
            return new URL(e, t);
        } catch (e) {
            return null;
        }
    },
    safeDecodeURIComponent(e) {
        try {
            return decodeURIComponent(e);
        } catch (e) {
            return null;
        }
    },
};
