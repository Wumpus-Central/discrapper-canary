"use strict";
n.d(t, { Ay: () => X, br: () => J, l7: () => Q, rL: () => q, st: () => w, tl: () => $, ts: () => Z }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(492462),
    a = n(791332),
    o = n.n(a),
    l = n(567243),
    u = n(179771),
    c = n(121401);
n(380610), n(100392);
var d = n(842241);
n(346542);
var _ = n(123677),
    h = n(299091),
    f = n(257120),
    p = n(998218),
    E = n(167189),
    m = n(652215),
    g = n(758836);
let A = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    N = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    v = /^\/activities\/([0-9-]+)\/?$/,
    C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    O = /^\/channels\/([0-9]+)\/shop$/,
    b = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/oauth2\/authorize/,
    L = /^#itemSkuId=([0-9]+)$/,
    w = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    M = H(window.GLOBAL_ENV.INVITE_HOST),
    P = H(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    x = H(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${m.U2_}`),
    k = H(`//canary.${m.U2_}`),
    U = H(`//ptb.${m.U2_}`),
    G = H("discordapp.com"),
    F = H("discord.com"),
    V = [
        f.A.escape(M.host ?? ""),
        f.A.escape(P.host ?? ""),
        f.A.escape(x.host ?? ""),
        f.A.escape(G.host ?? ""),
        f.A.escape(F.host ?? ""),
    ].filter(Boolean),
    B = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${V.join("|")})`, "g");
function H(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, l.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
let j = o().defaultRules.link?.match?.regex?.source;
r()(j, "SimpleMarkdown link regex is not set."), "^" === j[0] && (j = j.substring(1));
let Y = RegExp(j, "g");
function W(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function K(e, t) {
    if (!W(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function $(e) {
    return K(x, e) ?? K(k, e) ?? K(U, e) ?? K(G, e) ?? K(F, e);
}
function z(e) {
    let t = Q(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = K(M, t),
        i = K(P, t),
        r = K(x, t) ?? K(k, t) ?? K(U, t) ?? K(G, t) ?? K(F, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function q(e) {
    if (e.includes("\\")) {
        let t = Q(e);
        if (null == t) return !1;
        if (W(M, t)) return !0;
        if ([x, k, U, G, F].some((e) => W(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function X(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        i = (e = e.replace(B, (e, t, n, i) => (null == n ? `${t}http://${i}` : e)))
            .replaceAll(Y, " $2 ")
            .match(p.A.URL_REGEX),
        r = e.match(w);
    if (null == (i = (i ?? []).concat(r ?? [])) || 0 === i.length) return [];
    for (let e of i) {
        if (n.length >= 10) break;
        let { url: i, inviteHostRemainingPath: r, templateHostRemainingPath: a, primaryHostRemainingPath: o } = z(e);
        if (null == i || null == i.pathname) continue;
        let l = (i, r) => {
            t.has(r) || (t.add(r), n.push({ type: i, code: r, url: e }));
        };
        if (r?.match(A) != null && ("https:" === i.protocol || "http:" === i.protocol)) {
            let t = (0, d.fB)(r.substring(1), i.search);
            if ((h.A.getInvite(t), e.includes("\\"))) continue;
            l(E.I.INVITE, t);
        }
        a?.match(A) != null && l(E.I.TEMPLATE, a.substring(1));
        let f = o?.match(T);
        if (null != f) {
            let t = f[1].toUpperCase();
            if (t === E.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, d.fB)(f[2], i.search);
                l(E.I.INVITE, t);
            } else l(t, f[2]);
        }
        o?.match(I) != null && l(E.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let p = (function (e) {
            if (null == e) return null;
            let t = e.match(S);
            return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
        })(i.pathname);
        if (
            (null != p &&
                l(E.I.EVENT, `${p.guildId}-${p.guildEventId}` + (null != p.recurrenceId ? `-${p.recurrenceId}` : "")),
            null != o?.match(D) && null != i.query)
        ) {
            let e = (0, _._)(i.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== u.F.APPLICATIONS_COMMANDS) ||
                l(E.I.APP_OAUTH2_LINK, t);
        }
        let m = o?.match(y);
        if (null != m) {
            let e = m[2];
            l(E.I.APP_DIRECTORY_PROFILE, e);
        }
        let b = o?.match(N);
        if (null != b) {
            let e = b[2],
                t = b[3];
            if (null != t) {
                let n = (0, c.L)(e, t);
                l(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(E.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let w = o?.match(v);
        if (null != w) {
            let e = w[1];
            l(E.I.ACTIVITY_BOOKMARK, e);
        }
        let M = o?.match(C);
        null != M && l(E.I.GUILD_PRODUCT, `${M[1]}-${M[2]}`);
        let P = o?.match(O);
        null != P && l(E.I.SERVER_SHOP, P[1]);
        let x = o?.match(R);
        null != x && l(E.I.SOCIAL_LAYER_STOREFRONT, `${x[3]}-${x[1] ?? x[2]}`);
        let k = Z(e);
        if ((null != k && l(E.I.QUESTS_EMBED, k), "/shop" === o)) {
            let e = null != i.query ? (0, s.parse)(i.query) : null,
                t = e?.tab;
            if (t === g.G2.GAME_SHOPS && e?.applicationId != null && e?.skuId != null) {
                let t = e.applicationId,
                    n = e.skuId;
                "string" == typeof t && "string" == typeof n && l(E.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${t}`);
            } else {
                let e = i.hash?.match(L);
                l(E.I.COLLECTIBLES_SHOP, `${t ?? ""}-${e?.[1] ?? ""}`);
            }
        }
    }
    return n;
}
function Z(e) {
    let t = z(e),
        n = t?.primaryHostRemainingPath?.match(b);
    return n?.[1] ?? null;
}
function Q(e) {
    try {
        return (0, l.parse)(e);
    } catch (e) {
        return null;
    }
}
function J(e) {
    return X(e)[0];
}
