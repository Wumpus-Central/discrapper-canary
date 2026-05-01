"use strict";
n.d(t, { Ay: () => q, br: () => J, l7: () => Q, rL: () => z, st: () => w, tl: () => j, ts: () => X }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(492462),
    a = n(791332),
    o = n.n(a),
    l = n(567243),
    _ = n(179771),
    d = n(121401);
n(380610), n(100392);
var u = n(21599);
n(346542);
var c = n(123677),
    E = n(299091),
    h = n(257120),
    m = n(998218),
    f = n(167189),
    g = n(652215);
let A = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    T = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    N = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    O = /^\/activities\/([0-9-]+)\/?$/,
    R = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    y = /^\/channels\/([0-9]+)\/shop$/,
    D = /^\/quests\/([0-9-]+)\/?$/,
    L = /^\/oauth2\/authorize/,
    v = /^#itemSkuId=([0-9]+)$/,
    w = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = B(window.GLOBAL_ENV.INVITE_HOST),
    b = B(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    k = B(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${g.U2_}`),
    U = B(`//canary.${g.U2_}`),
    M = B(`//ptb.${g.U2_}`),
    G = B("discordapp.com"),
    x = B("discord.com"),
    V = [
        h.A.escape(P.host ?? ""),
        h.A.escape(b.host ?? ""),
        h.A.escape(k.host ?? ""),
        h.A.escape(G.host ?? ""),
        h.A.escape(x.host ?? ""),
    ].filter(Boolean),
    F = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${V.join("|")})`, "g");
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
let Y = RegExp(H, "g");
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
function j(e) {
    return K(k, e) ?? K(U, e) ?? K(M, e) ?? K(G, e) ?? K(x, e);
}
function $(e) {
    let t = Q(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = K(P, t),
        i = K(b, t),
        r = K(k, t) ?? K(U, t) ?? K(M, t) ?? K(G, t) ?? K(x, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function z(e) {
    if (e.includes("\\")) {
        let t = Q(e);
        if (null == t) return !1;
        if (W(P, t)) return !0;
        if ([k, U, M, G, x].some((e) => W(e, t))) return t.pathname?.toUpperCase().includes(f.I.INVITE) ?? !1;
    }
    return !1;
}
function q(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        i = (e = e.replace(F, (e, t, n, i) => (null == n ? `${t}http://${i}` : e)))
            .replaceAll(Y, " $2 ")
            .match(m.A.URL_REGEX),
        r = e.match(w);
    if (null == (i = (i ?? []).concat(r ?? [])) || 0 === i.length) return [];
    for (let e of i) {
        if (n.length >= 10) break;
        let { url: i, inviteHostRemainingPath: r, templateHostRemainingPath: a, primaryHostRemainingPath: o } = $(e);
        if (null == i || null == i.pathname) continue;
        let l = (i, r) => {
            t.has(r) || (t.add(r), n.push({ type: i, code: r, url: e }));
        };
        if (r?.match(A) != null && ("https:" === i.protocol || "http:" === i.protocol)) {
            let t = (0, u.fB)(r.substring(1), i.search);
            if ((E.A.getInvite(t), e.includes("\\"))) continue;
            l(f.I.INVITE, t);
        }
        a?.match(A) != null && l(f.I.TEMPLATE, a.substring(1));
        let h = o?.match(p);
        if (null != h) {
            let t = h[1].toUpperCase();
            if (t === f.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, u.fB)(h[2], i.search);
                l(f.I.INVITE, t);
            } else l(t, h[2]);
        }
        o?.match(I) != null && l(f.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let m = (function (e) {
            if (null == e) return null;
            let t = e.match(T);
            return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
        })(i.pathname);
        if (
            (null != m &&
                l(f.I.EVENT, `${m.guildId}-${m.guildEventId}` + (null != m.recurrenceId ? `-${m.recurrenceId}` : "")),
            null != o?.match(L) && null != i.query)
        ) {
            let e = (0, c._)(i.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== _.F.APPLICATIONS_COMMANDS) ||
                l(f.I.APP_OAUTH2_LINK, t);
        }
        let g = o?.match(S);
        if (null != g) {
            let e = g[2];
            l(f.I.APP_DIRECTORY_PROFILE, e);
        }
        let D = o?.match(N);
        if (null != D) {
            let e = D[2],
                t = D[3];
            if (null != t) {
                let n = (0, d.L)(e, t);
                l(f.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(f.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let w = o?.match(O);
        if (null != w) {
            let e = w[1];
            l(f.I.ACTIVITY_BOOKMARK, e);
        }
        let P = o?.match(R);
        null != P && l(f.I.GUILD_PRODUCT, `${P[1]}-${P[2]}`);
        let b = o?.match(y);
        null != b && l(f.I.SERVER_SHOP, b[1]);
        let k = o?.match(C);
        null != k && l(f.I.SOCIAL_LAYER_STOREFRONT, `${k[3]}-${k[1] ?? k[2]}`);
        let U = X(e);
        if ((null != U && l(f.I.QUESTS_EMBED, U), "/shop" === o)) {
            let e = null != i.query ? (0, s.parse)(i.query).tab : null,
                t = i.hash?.match(v);
            l(f.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
    }
    return n;
}
function X(e) {
    let t = $(e),
        n = t?.primaryHostRemainingPath?.match(D);
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
    return q(e)[0];
}
