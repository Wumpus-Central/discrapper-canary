"use strict";
n.d(t, { Ay: () => X, br: () => et, l7: () => ee, rL: () => Q, st: () => w, tl: () => $, ts: () => J }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(492462),
    s = n(791332),
    o = n.n(s),
    l = n(567243),
    u = n(179771),
    c = n(121401);
n(380610), n(100392);
var d = n(21599);
n(346542);
var _ = n(123677),
    f = n(299091),
    p = n(257120),
    h = n(998218),
    m = n(167189),
    g = n(652215);
let E = 10,
    A = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    y = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    v = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    C = /^\/activities\/([0-9-]+)\/?$/,
    b = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    N = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    R = /^\/channels\/([0-9]+)\/shop$/,
    O = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/oauth2\/authorize/,
    L = /^#itemSkuId=([0-9]+)$/,
    w = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    x = j(window.GLOBAL_ENV.INVITE_HOST),
    P = j(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = j(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${g.U2_}`),
    k = j(`//canary.${g.U2_}`),
    U = j(`//ptb.${g.U2_}`),
    G = j("discordapp.com"),
    V = j("discord.com"),
    F = [
        p.A.escape(x.host ?? ""),
        p.A.escape(P.host ?? ""),
        p.A.escape(M.host ?? ""),
        p.A.escape(G.host ?? ""),
        p.A.escape(V.host ?? ""),
    ].filter(Boolean),
    B = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${F.join("|")})`, "g");
function j(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, l.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
let H = (e) => e.replaceAll(W, " $2 "),
    Y = o().defaultRules.link?.match?.regex?.source;
i()(Y, "SimpleMarkdown link regex is not set."), "^" === Y[0] && (Y = Y.substring(1));
let W = RegExp(Y, "g");
function K(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function z(e, t) {
    if (!K(e, t)) return null;
    let n = t.pathname ?? "",
        r = e.pathPrefix ?? "";
    if (!n.startsWith(r)) return null;
    let i = n.substring(r.length);
    return "" === i ? null : i;
}
function $(e) {
    return z(M, e) ?? z(k, e) ?? z(U, e) ?? z(G, e) ?? z(V, e);
}
function q(e) {
    if (null == e) return null;
    let t = e.match(y);
    return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function Z(e) {
    let t = ee(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = z(x, t),
        r = z(P, t),
        i = z(M, t) ?? z(k, t) ?? z(U, t) ?? z(G, t) ?? z(V, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: r, primaryHostRemainingPath: i };
}
function Q(e) {
    if (e.includes("\\")) {
        let t = ee(e);
        if (null == t) return !1;
        if (K(x, t)) return !0;
        if ([M, k, U, G, V].some((e) => K(e, t))) return t.pathname?.toUpperCase().includes(m.I.INVITE) ?? !1;
    }
    return !1;
}
function X(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = H((e = e.replace(B, (e, t, n, r) => (null == n ? `${t}http://${r}` : e)))).match(h.A.URL_REGEX),
        i = e.match(w);
    if (null == (r = (r ?? []).concat(i ?? [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= E) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: s, primaryHostRemainingPath: o } = Z(e);
        if (null == r || null == r.pathname) continue;
        let l = (r, i) => {
            t.has(i) || (t.add(i), n.push({ type: r, code: i, url: e }));
        };
        if (i?.match(A) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, d.fB)(i.substring(1), r.search);
            if ((f.A.getInvite(t), e.includes("\\"))) continue;
            l(m.I.INVITE, t);
        }
        s?.match(A) != null && l(m.I.TEMPLATE, s.substring(1));
        let p = o?.match(T);
        if (null != p) {
            let t = p[1].toUpperCase();
            if (t === m.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, d.fB)(p[2], r.search);
                l(m.I.INVITE, t);
            } else l(t, p[2]);
        }
        o?.match(I) != null && l(m.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let h = q(r.pathname);
        if (
            (null != h &&
                l(m.I.EVENT, `${h.guildId}-${h.guildEventId}` + (null != h.recurrenceId ? `-${h.recurrenceId}` : "")),
            null != o?.match(D) && null != r.query)
        ) {
            let e = (0, _._)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== u.F.APPLICATIONS_COMMANDS) ||
                l(m.I.APP_OAUTH2_LINK, t);
        }
        let g = o?.match(S);
        if (null != g) {
            let e = g[2];
            l(m.I.APP_DIRECTORY_PROFILE, e);
        }
        let y = o?.match(v);
        if (null != y) {
            let e = y[2],
                t = y[3];
            if (null != t) {
                let n = (0, c.L)(e, t);
                l(m.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(m.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let O = o?.match(C);
        if (null != O) {
            let e = O[1];
            l(m.I.ACTIVITY_BOOKMARK, e);
        }
        let w = o?.match(b);
        null != w && l(m.I.GUILD_PRODUCT, `${w[1]}-${w[2]}`);
        let x = o?.match(R);
        null != x && l(m.I.SERVER_SHOP, x[1]);
        let P = o?.match(N);
        null != P && l(m.I.SOCIAL_LAYER_STOREFRONT, `${P[3]}-${P[1] ?? P[2]}`);
        let M = J(e);
        if ((null != M && l(m.I.QUESTS_EMBED, M), "/shop" === o)) {
            let e = null != r.query ? (0, a.parse)(r.query).tab : null,
                t = r.hash?.match(L);
            l(m.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
    }
    return n;
}
function J(e) {
    let t = Z(e),
        n = t?.primaryHostRemainingPath?.match(O);
    return n?.[1] ?? null;
}
function ee(e) {
    try {
        return (0, l.parse)(e);
    } catch (e) {
        return null;
    }
}
function et(e) {
    return X(e)[0];
}
