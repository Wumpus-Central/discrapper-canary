"use strict";
n.d(t, { Ay: () => J, br: () => en, l7: () => et, rL: () => Q, st: () => x, tl: () => q, ts: () => ee }), n(321073);
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
    h = n(257120),
    p = n(998218),
    g = n(167189),
    E = n(652215);
let A = 10,
    I = /^\/([a-zA-Z0-9-]+)$/,
    T = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    y = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    v = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    C = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    b = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    O = /^\/channels\/([0-9]+)\/shop$/,
    D = /^\/quests\/([0-9-]+)\/?$/,
    L = /^\/oauth2\/authorize/,
    w = /^#itemSkuId=([0-9]+)$/,
    x = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = H(window.GLOBAL_ENV.INVITE_HOST),
    M = H(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    k = H(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${E.U2_}`),
    U = H(`//canary.${E.U2_}`),
    G = H(`//ptb.${E.U2_}`),
    F = H("discordapp.com"),
    V = H("discord.com"),
    B = [
        h.A.escape(P.host ?? ""),
        h.A.escape(M.host ?? ""),
        h.A.escape(k.host ?? ""),
        h.A.escape(F.host ?? ""),
        h.A.escape(V.host ?? ""),
    ].filter(Boolean),
    j = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${B.join("|")})`, "g");
function H(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, l.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
let Y = (e) => e.replaceAll(K, " $2 "),
    W = o().defaultRules.link?.match?.regex?.source;
i()(W, "SimpleMarkdown link regex is not set."), "^" === W[0] && (W = W.substring(1));
let K = RegExp(W, "g");
function $(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function z(e, t) {
    if (!$(e, t)) return null;
    let n = t.pathname ?? "",
        r = e.pathPrefix ?? "";
    if (!n.startsWith(r)) return null;
    let i = n.substring(r.length);
    return "" === i ? null : i;
}
function q(e) {
    return z(k, e) ?? z(U, e) ?? z(G, e) ?? z(F, e) ?? z(V, e);
}
function X(e) {
    if (null == e) return null;
    let t = e.match(S);
    return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function Z(e) {
    let t = et(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = z(P, t),
        r = z(M, t),
        i = z(k, t) ?? z(U, t) ?? z(G, t) ?? z(F, t) ?? z(V, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: r, primaryHostRemainingPath: i };
}
function Q(e) {
    if (e.includes("\\")) {
        let t = et(e);
        if (null == t) return !1;
        if ($(P, t)) return !0;
        if ([k, U, G, F, V].some((e) => $(e, t))) return t.pathname?.toUpperCase().includes(g.I.INVITE) ?? !1;
    }
    return !1;
}
function J(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = Y((e = e.replace(j, (e, t, n, r) => (null == n ? `${t}http://${r}` : e)))).match(p.A.URL_REGEX),
        i = e.match(x);
    if (null == (r = (r ?? []).concat(i ?? [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= A) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: s, primaryHostRemainingPath: o } = Z(e);
        if (null == r || null == r.pathname) continue;
        let l = (r, i) => {
            t.has(i) || (t.add(i), n.push({ type: r, code: i, url: e }));
        };
        if (i?.match(I) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, d.fB)(i.substring(1), r.search);
            if ((f.A.getInvite(t), e.includes("\\"))) continue;
            l(g.I.INVITE, t);
        }
        s?.match(I) != null && l(g.I.TEMPLATE, s.substring(1));
        let h = o?.match(y);
        if (null != h) {
            let t = h[1].toUpperCase();
            if (t === g.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, d.fB)(h[2], r.search);
                l(g.I.INVITE, t);
            } else l(t, h[2]);
        }
        o?.match(T) != null && l(g.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let p = X(r.pathname);
        if (
            (null != p &&
                l(g.I.EVENT, `${p.guildId}-${p.guildEventId}` + (null != p.recurrenceId ? `-${p.recurrenceId}` : "")),
            null != o?.match(L) && null != r.query)
        ) {
            let e = (0, _._)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== u.F.APPLICATIONS_COMMANDS) ||
                l(g.I.APP_OAUTH2_LINK, t);
        }
        let E = o?.match(v);
        if (null != E) {
            let e = E[2];
            l(g.I.APP_DIRECTORY_PROFILE, e);
        }
        let S = o?.match(C);
        if (null != S) {
            let e = S[2],
                t = S[3];
            if (null != t) {
                let n = (0, c.L)(e, t);
                l(g.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(g.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let D = o?.match(b);
        if (null != D) {
            let e = D[1];
            l(g.I.ACTIVITY_BOOKMARK, e);
        }
        let x = o?.match(N);
        null != x && l(g.I.GUILD_PRODUCT, `${x[1]}-${x[2]}`);
        let P = o?.match(O);
        null != P && l(g.I.SERVER_SHOP, P[1]);
        let M = o?.match(R);
        null != M && l(g.I.SOCIAL_LAYER_STOREFRONT, `${M[3]}-${M[1] ?? M[2]}`);
        let k = ee(e);
        if ((null != k && l(g.I.QUESTS_EMBED, k), "/shop" === o)) {
            let e = null != r.query ? (0, a.parse)(r.query).tab : null,
                t = r.hash?.match(w);
            l(g.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
    }
    return n;
}
function ee(e) {
    let t = Z(e),
        n = t?.primaryHostRemainingPath?.match(D);
    return n?.[1] ?? null;
}
function et(e) {
    try {
        return (0, l.parse)(e);
    } catch (e) {
        return null;
    }
}
function en(e) {
    return J(e)[0];
}
