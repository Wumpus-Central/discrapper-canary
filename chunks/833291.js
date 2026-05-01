"use strict";
n.d(t, { Ay: () => q, br: () => Q, l7: () => X, rL: () => $, st: () => L, tl: () => K, ts: () => Z }), n(321073);
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
    f = n(299091),
    h = n(257120),
    p = n(998218),
    E = n(167189),
    m = n(652215);
let g = /^\/([a-zA-Z0-9-]+)$/,
    A = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    I = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    T = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    N = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    y = /^\/activities\/([0-9-]+)\/?$/,
    C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    v = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    O = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    b = /^\/oauth2\/authorize/,
    D = /^#itemSkuId=([0-9]+)$/,
    L = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    w = B(window.GLOBAL_ENV.INVITE_HOST),
    M = B(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    P = B(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${m.U2_}`),
    x = B(`//canary.${m.U2_}`),
    U = B(`//ptb.${m.U2_}`),
    k = B("discordapp.com"),
    G = B("discord.com"),
    F = [
        h.A.escape(w.host ?? ""),
        h.A.escape(M.host ?? ""),
        h.A.escape(P.host ?? ""),
        h.A.escape(k.host ?? ""),
        h.A.escape(G.host ?? ""),
    ].filter(Boolean),
    V = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${F.join("|")})`, "g");
function B(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, l.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
let H = o().defaultRules.link?.match?.regex?.source;
r()(H, "SimpleMarkdown link regex is not set."), "^" === H[0] && (H = H.substring(1));
let j = RegExp(H, "g");
function Y(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function W(e, t) {
    if (!Y(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function K(e) {
    return W(P, e) ?? W(x, e) ?? W(U, e) ?? W(k, e) ?? W(G, e);
}
function z(e) {
    let t = X(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = W(w, t),
        i = W(M, t),
        r = W(P, t) ?? W(x, t) ?? W(U, t) ?? W(k, t) ?? W(G, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function $(e) {
    if (e.includes("\\")) {
        let t = X(e);
        if (null == t) return !1;
        if (Y(w, t)) return !0;
        if ([P, x, U, k, G].some((e) => Y(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function q(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        i = (e = e.replace(V, (e, t, n, i) => (null == n ? `${t}http://${i}` : e)))
            .replaceAll(j, " $2 ")
            .match(p.A.URL_REGEX),
        r = e.match(L);
    if (null == (i = (i ?? []).concat(r ?? [])) || 0 === i.length) return [];
    for (let e of i) {
        if (n.length >= 10) break;
        let { url: i, inviteHostRemainingPath: r, templateHostRemainingPath: a, primaryHostRemainingPath: o } = z(e);
        if (null == i || null == i.pathname) continue;
        let l = (i, r) => {
            t.has(r) || (t.add(r), n.push({ type: i, code: r, url: e }));
        };
        if (r?.match(g) != null && ("https:" === i.protocol || "http:" === i.protocol)) {
            let t = (0, d.fB)(r.substring(1), i.search);
            if ((f.A.getInvite(t), e.includes("\\"))) continue;
            l(E.I.INVITE, t);
        }
        a?.match(g) != null && l(E.I.TEMPLATE, a.substring(1));
        let h = o?.match(I);
        if (null != h) {
            let t = h[1].toUpperCase();
            if (t === E.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, d.fB)(h[2], i.search);
                l(E.I.INVITE, t);
            } else l(t, h[2]);
        }
        o?.match(A) != null && l(E.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let p = (function (e) {
            if (null == e) return null;
            let t = e.match(T);
            return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
        })(i.pathname);
        if (
            (null != p &&
                l(E.I.EVENT, `${p.guildId}-${p.guildEventId}` + (null != p.recurrenceId ? `-${p.recurrenceId}` : "")),
            null != o?.match(b) && null != i.query)
        ) {
            let e = (0, _._)(i.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== u.F.APPLICATIONS_COMMANDS) ||
                l(E.I.APP_OAUTH2_LINK, t);
        }
        let m = o?.match(S);
        if (null != m) {
            let e = m[2];
            l(E.I.APP_DIRECTORY_PROFILE, e);
        }
        let R = o?.match(N);
        if (null != R) {
            let e = R[2],
                t = R[3];
            if (null != t) {
                let n = (0, c.L)(e, t);
                l(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(E.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let L = o?.match(y);
        if (null != L) {
            let e = L[1];
            l(E.I.ACTIVITY_BOOKMARK, e);
        }
        let w = o?.match(C);
        null != w && l(E.I.GUILD_PRODUCT, `${w[1]}-${w[2]}`);
        let M = o?.match(O);
        null != M && l(E.I.SERVER_SHOP, M[1]);
        let P = o?.match(v);
        null != P && l(E.I.SOCIAL_LAYER_STOREFRONT, `${P[3]}-${P[1] ?? P[2]}`);
        let x = Z(e);
        if ((null != x && l(E.I.QUESTS_EMBED, x), "/shop" === o)) {
            let e = null != i.query ? (0, s.parse)(i.query).tab : null,
                t = i.hash?.match(D);
            l(E.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
    }
    return n;
}
function Z(e) {
    let t = z(e),
        n = t?.primaryHostRemainingPath?.match(R);
    return n?.[1] ?? null;
}
function X(e) {
    try {
        return (0, l.parse)(e);
    } catch (e) {
        return null;
    }
}
function Q(e) {
    return q(e)[0];
}
