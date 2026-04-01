"use strict";
n.d(t, { Ay: () => J, br: () => en, l7: () => et, rL: () => Q, st: () => M, tl: () => q, ts: () => ee }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(492462),
    a = n(791332),
    o = n.n(a),
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
    E = n(652215);
let g = 10,
    A = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    v = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    C = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    O = /^\/channels\/([0-9]+)\/shop$/,
    b = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/oauth2\/authorize/,
    L = /^#itemSkuId=([0-9]+)$/,
    w = /^\/last-meadow-online\/?$/,
    M = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    x = j(window.GLOBAL_ENV.INVITE_HOST),
    P = j(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    k = j(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${E.U2_}`),
    U = j(`//canary.${E.U2_}`),
    G = j(`//ptb.${E.U2_}`),
    F = j("discordapp.com"),
    V = j("discord.com"),
    B = [
        p.A.escape(x.host ?? ""),
        p.A.escape(P.host ?? ""),
        p.A.escape(k.host ?? ""),
        p.A.escape(F.host ?? ""),
        p.A.escape(V.host ?? ""),
    ].filter(Boolean),
    H = RegExp(`((https?://[^ ]*)|^|[^/][^/.])(${B.join("|")})`, "g");
function j(e) {
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
function Z(e) {
    if (null == e) return null;
    let t = e.match(S);
    return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function X(e) {
    let t = et(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = z(x, t),
        r = z(P, t),
        i = z(k, t) ?? z(U, t) ?? z(G, t) ?? z(F, t) ?? z(V, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: r, primaryHostRemainingPath: i };
}
function Q(e) {
    if (e.includes("\\")) {
        let t = et(e);
        if (null == t) return !1;
        if ($(x, t)) return !0;
        if ([k, U, G, F, V].some((e) => $(e, t))) return t.pathname?.toUpperCase().includes(m.I.INVITE) ?? !1;
    }
    return !1;
}
function J(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = Y((e = e.replace(H, (e, t, n, r) => (null == n ? `${t}http://${r}` : e)))).match(h.A.URL_REGEX),
        i = e.match(M);
    if (null == (r = (r ?? []).concat(i ?? [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= g) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: o } = X(e);
        if (null == r || null == r.pathname) continue;
        let l = (r, i) => {
            t.has(i) || (t.add(i), n.push({ type: r, code: i, url: e }));
        };
        if (i?.match(A) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, d.fB)(i.substring(1), r.search);
            if ((f.A.getInvite(t), e.includes("\\"))) continue;
            l(m.I.INVITE, t);
        }
        a?.match(A) != null && l(m.I.TEMPLATE, a.substring(1));
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
        let h = Z(r.pathname);
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
        let E = o?.match(y);
        if (null != E) {
            let e = E[2];
            l(m.I.APP_DIRECTORY_PROFILE, e);
        }
        let S = o?.match(v);
        if (null != S) {
            let e = S[2],
                t = S[3];
            if (null != t) {
                let n = (0, c.L)(e, t);
                l(m.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(m.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let b = o?.match(C);
        if (null != b) {
            let e = b[1];
            l(m.I.ACTIVITY_BOOKMARK, e);
        }
        let M = o?.match(N);
        null != M && l(m.I.GUILD_PRODUCT, `${M[1]}-${M[2]}`);
        let x = o?.match(O);
        null != x && l(m.I.SERVER_SHOP, x[1]);
        let P = o?.match(R);
        null != P && l(m.I.SOCIAL_LAYER_STOREFRONT, `${P[3]}-${P[1] ?? P[2]}`);
        let k = ee(e);
        if ((null != k && l(m.I.QUESTS_EMBED, k), "/shop" === o)) {
            let e = null != r.query ? (0, s.parse)(r.query).tab : null,
                t = r.hash?.match(L);
            l(m.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
        null != o?.match(w) && l(m.I.GORILLA_DEEP_LINK, "gorilla");
    }
    return n;
}
function ee(e) {
    let t = X(e),
        n = t?.primaryHostRemainingPath?.match(b);
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
