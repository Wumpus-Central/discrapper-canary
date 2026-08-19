"use strict";
n.d(t, {
    $9: () => en,
    Ay: () => J,
    br: () => er,
    iY: () => et,
    l7: () => ei,
    rL: () => Q,
    st: () => M,
    tl: () => q,
    ts: () => ee,
}),
    n(321073);
var i = n(477450),
    r = n.n(i),
    a = n(492462),
    s = n(567243),
    l = n(179771),
    o = n(121401);
n(380610), n(100392);
var d = n(842241);
n(346542);
var c = n(123677),
    u = n(299091),
    _ = n(257120),
    E = n(167189),
    A = n(652215),
    h = n(758836);
let I = /^\/([a-zA-Z0-9-]+)$/,
    f = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    T = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    m = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    g = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    S = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    O = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    L = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    y = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    D = /^\/users\/([0-9]+)\/?$/,
    v = /^\/oauth2\/authorize/,
    b = /^#itemSkuId=([0-9]+)$/,
    M = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = r().v4().source,
    U = RegExp(
        `(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${P}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"()\\[\\]<>]*)?`,
        "ig",
    ),
    w = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g,
    G = /[.,;:?'*_~|]+$/;
function x(e) {
    return e.replace(G, "");
}
let k = $(window.GLOBAL_ENV.INVITE_HOST),
    F = $(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    V = $(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${A.U2_}`),
    B = $(`//canary.${A.U2_}`),
    H = $(`//ptb.${A.U2_}`),
    j = $("discordapp.com"),
    W = $("discord.com"),
    Y = [
        _.A.escape(k.host ?? ""),
        _.A.escape(F.host ?? ""),
        _.A.escape(V.host ?? ""),
        _.A.escape(j.host ?? ""),
        _.A.escape(W.host ?? ""),
    ].filter(Boolean),
    K = RegExp(`((https?://[^ ]*)|^|\\s)(${Y.join("|")})`, "g");
function $(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, s.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function z(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function Z(e, t) {
    if (!z(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function q(e) {
    return Z(V, e) ?? Z(B, e) ?? Z(H, e) ?? Z(j, e) ?? Z(W, e);
}
function X(e) {
    let t = ei(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = Z(k, t),
        i = Z(F, t),
        r = Z(V, t) ?? Z(B, t) ?? Z(H, t) ?? Z(j, t) ?? Z(W, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function Q(e) {
    if (e.includes("\\")) {
        let t = ei(e);
        if (null == t) return !1;
        if (z(k, t)) return !0;
        if ([V, B, H, j, W].some((e) => z(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function J(e) {
    if (null == e) return [];
    e = e.replace(K, (e, t, n, i) => (null == n ? `${t}http://${i}` : e));
    let t = e.replaceAll(w, " ").match(U)?.map(x) ?? null,
        n = e.match(M);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let r of e) {
            let {
                url: e,
                inviteHostRemainingPath: s,
                templateHostRemainingPath: _,
                primaryHostRemainingPath: A,
            } = X(r);
            if (null == e || null == e.pathname) continue;
            let R = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function i(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: r }));
            }
            if (s?.match(I) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, d.fB)(s.substring(1), e.search);
                if ((u.A.getInvite(t), r.includes("\\"))) continue;
                i(E.I.INVITE, t);
            }
            _?.match(I) != null && i(E.I.TEMPLATE, _.substring(1));
            let M = A?.match(p);
            if (null != M) {
                let t = M[1].toUpperCase();
                if (t === E.I.INVITE) {
                    if (r.includes("\\")) continue;
                    let t = (0, d.fB)(M[2], e.search);
                    i(E.I.INVITE, t);
                } else i(t, M[2]);
            }
            A?.match(f) != null && i(E.I.CHANNEL_LINK, A.replace("/channels/", ""));
            let P = (function (e) {
                if (null == e) return null;
                let t = e.match(T);
                if (null != t && t.length >= 4) {
                    let e = t[2];
                    return null == e ? null : { guildId: t[1], guildEventId: e, recurrenceId: t[4] };
                }
                return null;
            })(e.pathname);
            if (
                (null != P &&
                    i(
                        E.I.EVENT,
                        `${P.guildId}-${P.guildEventId}` + (null != P.recurrenceId ? `-${P.recurrenceId}` : ""),
                    ),
                null != A?.match(v) && null != R)
            ) {
                let e = (0, c._)(R),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== l.F.APPLICATIONS_COMMANDS) ||
                    i(E.I.APP_OAUTH2_LINK, t);
            }
            let U = A?.match(m);
            if (null != U) {
                let e = U[2];
                i(E.I.APP_DIRECTORY_PROFILE, e);
            }
            let w = A?.match(g);
            if (null != w) {
                let e = w[2],
                    t = w[3];
                if (null != t) {
                    let n = (0, o.L)(e, t);
                    i(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else i(E.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let G = A?.match(S);
            if (null != G) {
                let e = G[1];
                i(E.I.ACTIVITY_BOOKMARK, e);
            }
            let x = A?.match(N);
            null != x && i(E.I.GUILD_PRODUCT, `${x[1]}-${x[2]}`);
            let k = A?.match(O);
            null != k && i(E.I.SERVER_SHOP, k[1]);
            let F = A?.match(C);
            null != F && i(E.I.SOCIAL_LAYER_STOREFRONT, `${F[3]}-${F[1] ?? F[2]}`);
            let V = ee(r);
            null != V && i(E.I.QUESTS_EMBED, V);
            let B = A?.match(y);
            null != B && i(E.I.GAME_PROFILE, B[1]);
            let H = A?.match(L);
            null != H && i(E.I.GAME_SERVER_SHARE, H[1]);
            let j = A?.match(D);
            if ((null != j && i(E.I.USER_PROFILE, j[1]), "/shop" === A)) {
                let t = null != R ? (0, a.parse)(R) : null,
                    n = t?.tab;
                if (n === h.G2.GAME_SHOPS && t?.applicationId != null && t?.skuId != null) {
                    let e = t.applicationId,
                        n = t.skuId;
                    "string" == typeof e && "string" == typeof n && i(E.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${e}`);
                } else {
                    let t = e.hash?.match(b);
                    i(E.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((t = (t ?? []).concat(n ?? []))).slice(0, 10);
}
function ee(e) {
    let t = X(e),
        n = t?.primaryHostRemainingPath?.match(R);
    return n?.[1] ?? null;
}
function et(e) {
    let t = X(e),
        n = t?.primaryHostRemainingPath?.match(D);
    return n?.[1] ?? null;
}
function en(e) {
    let t = X(e),
        n = t?.primaryHostRemainingPath?.match(L);
    return n?.[1] ?? null;
}
function ei(e) {
    try {
        return (0, s.parse)(e);
    } catch (e) {
        return null;
    }
}
function er(e) {
    return J(e)[0];
}
