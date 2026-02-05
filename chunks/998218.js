"use strict";
n.d(t, { A: () => P }), n(323874), n(14289), n(35956);
var r = n(477450),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(567243),
    l = n(403362),
    u = n(998218),
    c = n(652215);
let d = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    _ = /^.*\.discordapp\.net$/,
    f = /^.*\.media\.discordapp\.net$/,
    p = new Set([
        "media.tenor.com",
        "media.tenor.co",
        "c.tenor.com",
        "static.klipy.com",
        "media.giphy.com",
        "i.giphy.com",
    ]),
    h = "(?:(?:[a-z]+:)?//)",
    m = "(?:\\S+(?::\\S*)?@)?",
    g = i().v4().source,
    E = "(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+",
    A = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
    I = "(?::\\d{2,5})?",
    T = '(?:[/?#][^\\s"]*)?',
    y = RegExp(`(?:${h}|www\\.)${m}(?:localhost|${g}|${E}${A})${I}${T}`, "ig"),
    S = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
    ]);
function v(e, t) {
    return null != e && null != t && e !== t;
}
function C(e) {
    return S.has(e.toLowerCase());
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (d.test(e) || (t && C(e)));
}
function N(e) {
    return null != e && "discord:" === e;
}
function R(e) {
    if (null == e) return !1;
    let t = u.A.toURLSafe(e);
    return (
        null != t &&
        ((!!(0, l.iT)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname)) ||
            t.hostname === window.GLOBAL_ENV.CDN_HOST ||
            _.test(t.hostname))
    );
}
function O(e, t, n) {
    if (!v(t, n) || null == e) return !1;
    let r = u.A.toURLSafe(e);
    return (
        null != r &&
        ((!!(0, l.iT)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port) ||
            f.test(r.hostname))
    );
}
function D(e) {
    if (null == e) return !1;
    let t = u.A.toURLSafe(e);
    return null != t && p.has(t.hostname);
}
function L(e, t, n) {
    return !!(R(e) || O(e, t, n) || D(e));
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        let n = u.A.toURLSafe(e)?.hostname;
        if (null != n && b(n, t)) return !0;
    }
    return !1;
}
function x(e) {
    return null != e && N(o.parse(e).protocol);
}
let P = {
    URL_REGEX: y,
    makeUrl: function (e, t) {
        let n = (t ?? (0, l.m6)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return `${location.protocol}//${n}${e}`;
    },
    isOriginalContentTypeDifferent: v,
    isDiscordHostname: b,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: N,
    isDiscordUrl: w,
    isDiscordUri: x,
    isDiscordCdnUrl: function (e) {
        return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordDirectAssetUrl: R,
    isDiscordProxiedAssetUrl: O,
    isAllowedGifProviderUrl: D,
    isDiscordAssetUrl: L,
    isDiscordUrlOrUri: (e) => w(e) || x(e),
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
    format: (e) => o.format(e),
    formatPathWithQuery: (e, t) => o.format({ pathname: e, query: s().pickBy(t) }),
    formatSearch: (e) => o.format({ query: s().pickBy(e) }),
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
