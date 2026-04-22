"use strict";
n.d(t, { A: () => R }), n(323874), n(14289), n(35956);
var r = n(477450),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(567243),
    l = n(403362),
    u = n(998218),
    d = n(652215);
let c = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    _ = /^.*\.discordapp\.net$/,
    f = /^.*\.media\.discordapp\.net$/,
    E = new Set([
        "media.tenor.com",
        "media.tenor.co",
        "c.tenor.com",
        "static.klipy.com",
        "media.giphy.com",
        "i.giphy.com",
    ]),
    h = i().v4().source,
    p = RegExp(
        `(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|${h}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`,
        "ig",
    ),
    m = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
    ]);
function g(e, t) {
    return null != e && null != t && e !== t;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (c.test(e) || (t && m.has(e.toLowerCase())));
}
function I(e) {
    return null != e && "discord:" === e;
}
function T(e) {
    if (null == e) return !1;
    let t = u.A.toURLSafe(e);
    return (
        null != t &&
        ((!!(0, l.iT)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname)) ||
            t.hostname === window.GLOBAL_ENV.CDN_HOST ||
            _.test(t.hostname))
    );
}
function S(e, t, n) {
    if (!g(t, n) || null == e) return !1;
    let r = u.A.toURLSafe(e);
    return (
        null != r &&
        ((!!(0, l.iT)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port) ||
            f.test(r.hostname))
    );
}
function y(e) {
    if (null == e) return !1;
    let t = u.A.toURLSafe(e);
    return null != t && E.has(t.hostname);
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        let n = u.A.toURLSafe(e)?.hostname;
        if (null != n && A(n, t)) return !0;
    }
    return !1;
}
function O(e) {
    return null != e && I(o.parse(e).protocol);
}
let R = {
    URL_REGEX: p,
    makeUrl: function (e, t) {
        let n = (t ?? (0, l.m6)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return `${location.protocol}//${n}${e}`;
    },
    isOriginalContentTypeDifferent: g,
    isDiscordHostname: A,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: I,
    isDiscordUrl: N,
    isDiscordUri: O,
    isDiscordCdnUrl: function (e) {
        return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordDirectAssetUrl: T,
    isDiscordProxiedAssetUrl: S,
    isAllowedGifProviderUrl: y,
    isDiscordAssetUrl: function (e, t, n) {
        return !!(T(e) || S(e, t, n) || y(e));
    },
    isDiscordUrlOrUri: (e) => N(e) || O(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return (
            t.startsWith("/channels/") ||
            t.startsWith(d.BVt.APPLICATION_STORE) ||
            t.startsWith(d.BVt.APPLICATION_LIBRARY) ||
            t.startsWith(d.BVt.MESSAGE_REQUESTS) ||
            t.startsWith(d.BVt.FAMILY_CENTER) ||
            t.startsWith(d.BVt.ACTIVITIES) ||
            t.startsWith(d.BVt.COLLECTIBLES_SHOP) ||
            t.startsWith("/feature/boost") ||
            t.startsWith(d.BVt.ACTIVITY)
        );
    },
    format: (e) => o.format(e),
    formatPathWithQuery: (e, t) => o.format({ pathname: e, query: a().pickBy(t) }),
    formatSearch: (e) => o.format({ query: a().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return o.parse(e, !0);
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
