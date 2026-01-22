n.d(t, { A: () => L }),
    n(896048),
    n(591487),
    n(727858),
    n(747238),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(477450),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(567243),
    l = n(403362),
    c = n(998218),
    u = n(652215);
let d = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    f = /^.*\.discordapp\.net$/,
    p = /^.*\.media\.discordapp\.net$/,
    _ = new Set([
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
    b = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
    y = "(?::\\d{2,5})?",
    O = '(?:[/?#][^\\s"]*)?',
    A = RegExp(
        "(?:"
            .concat(h, "|www\\.)")
            .concat(m, "(?:localhost|")
            .concat(g, "|")
            .concat(E)
            .concat(b, ")")
            .concat(y)
            .concat(O),
        "ig",
    ),
    v = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
    ]);
function S(e, t) {
    return null != e && null != t && e !== t;
}
function I(e) {
    return v.has(e.toLowerCase());
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (d.test(e) || (t && I(e)));
}
function C(e) {
    return null != e && "discord:" === e;
}
function N(e) {
    if (null == e) return !1;
    let t = c.A.toURLSafe(e);
    return (
        null != t &&
        ((!!(0, l.iT)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname)) ||
            t.hostname === window.GLOBAL_ENV.CDN_HOST ||
            f.test(t.hostname))
    );
}
function R(e, t, n) {
    if (!S(t, n) || null == e) return !1;
    let r = c.A.toURLSafe(e);
    return (
        null != r &&
        ((!!(0, l.iT)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port) ||
            p.test(r.hostname))
    );
}
function w(e) {
    if (null == e) return !1;
    let t = c.A.toURLSafe(e);
    return null != t && _.has(t.hostname);
}
function P(e, t, n) {
    return !!(N(e) || R(e, t, n) || w(e));
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let r = null == (n = c.A.toURLSafe(e)) ? void 0 : n.hostname;
        if (null != r && T(r, t)) return !0;
    }
    return !1;
}
function x(e) {
    return null != e && C(o.parse(e).protocol);
}
let L = {
    URL_REGEX: A,
    makeUrl: function (e, t) {
        let n = (null != t ? t : (0, l.m6)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return "".concat(location.protocol, "//").concat(n).concat(e);
    },
    isOriginalContentTypeDifferent: S,
    isDiscordHostname: T,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: C,
    isDiscordUrl: D,
    isDiscordUri: x,
    isDiscordCdnUrl: function (e) {
        return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordDirectAssetUrl: N,
    isDiscordProxiedAssetUrl: R,
    isAllowedGifProviderUrl: w,
    isDiscordAssetUrl: P,
    isDiscordUrlOrUri: (e) => D(e) || x(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return (
            t.startsWith("/channels/") ||
            t.startsWith(u.BVt.APPLICATION_STORE) ||
            t.startsWith(u.BVt.APPLICATION_LIBRARY) ||
            t.startsWith(u.BVt.MESSAGE_REQUESTS) ||
            t.startsWith(u.BVt.FAMILY_CENTER) ||
            t.startsWith(u.BVt.ACTIVITIES) ||
            t.startsWith(u.BVt.COLLECTIBLES_SHOP) ||
            t.startsWith("/feature/boost") ||
            t.startsWith(u.BVt.ACTIVITY)
        );
    },
    format: (e) => o.format(e),
    formatPathWithQuery: (e, t) =>
        o.format({
            pathname: e,
            query: s().pickBy(t),
        }),
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
