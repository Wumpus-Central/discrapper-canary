"use strict";
n.d(t, { Ay: () => q, br: () => J, l7: () => Q, rL: () => z, st: () => L, tl: () => K, ts: () => X }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(492462),
    a = n(791332),
    o = n.n(a),
    l = n(567243),
    u = n(179771),
    d = n(121401);
n(380610), n(100392);
var c = n(21599);
n(346542);
var _ = n(123677),
    f = n(299091),
    E = n(257120),
    h = n(998218),
    p = n(167189),
    m = n(652215);
let g = /^\/([a-zA-Z0-9-]+)$/,
    A = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    I = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    T = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    N = /^\/activities\/([0-9-]+)\/?$/,
    O = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    v = /^\/channels\/([0-9]+)\/shop$/,
    C = /^\/quests\/([0-9-]+)\/?$/,
    b = /^\/oauth2\/authorize/,
    D = /^#itemSkuId=([0-9]+)$/,
    L = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    w = B(window.GLOBAL_ENV.INVITE_HOST),
    M = B(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    P = B(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${m.U2_}`),
    U = B(`//canary.${m.U2_}`),
    k = B(`//ptb.${m.U2_}`),
    x = B("discordapp.com"),
    G = B("discord.com"),
    V = [
        E.A.escape(w.host ?? ""),
        E.A.escape(M.host ?? ""),
        E.A.escape(P.host ?? ""),
        E.A.escape(x.host ?? ""),
        E.A.escape(G.host ?? ""),
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
i()(H, "SimpleMarkdown link regex is not set."), "^" === H[0] && (H = H.substring(1));
let Y = RegExp(H, "g");
function W(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function j(e, t) {
    if (!W(e, t)) return null;
    let n = t.pathname ?? "",
        r = e.pathPrefix ?? "";
    if (!n.startsWith(r)) return null;
    let i = n.substring(r.length);
    return "" === i ? null : i;
}
function K(e) {
    return j(P, e) ?? j(U, e) ?? j(k, e) ?? j(x, e) ?? j(G, e);
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
    let n = j(w, t),
        r = j(M, t),
        i = j(P, t) ?? j(U, t) ?? j(k, t) ?? j(x, t) ?? j(G, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: r, primaryHostRemainingPath: i };
}
function z(e) {
    if (e.includes("\\")) {
        let t = Q(e);
        if (null == t) return !1;
        if (W(w, t)) return !0;
        if ([P, U, k, x, G].some((e) => W(e, t))) return t.pathname?.toUpperCase().includes(p.I.INVITE) ?? !1;
    }
    return !1;
}
function q(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(F, (e, t, n, r) => (null == n ? `${t}http://${r}` : e)))
            .replaceAll(Y, " $2 ")
            .match(h.A.URL_REGEX),
        i = e.match(L);
    if (null == (r = (r ?? []).concat(i ?? [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: o } = $(e);
        if (null == r || null == r.pathname) continue;
        let l = (r, i) => {
            t.has(i) || (t.add(i), n.push({ type: r, code: i, url: e }));
        };
        if (i?.match(g) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, c.fB)(i.substring(1), r.search);
            if ((f.A.getInvite(t), e.includes("\\"))) continue;
            l(p.I.INVITE, t);
        }
        a?.match(g) != null && l(p.I.TEMPLATE, a.substring(1));
        let E = o?.match(I);
        if (null != E) {
            let t = E[1].toUpperCase();
            if (t === p.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, c.fB)(E[2], r.search);
                l(p.I.INVITE, t);
            } else l(t, E[2]);
        }
        o?.match(A) != null && l(p.I.CHANNEL_LINK, o.replace("/channels/", ""));
        let h = (function (e) {
            if (null == e) return null;
            let t = e.match(T);
            return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
        })(r.pathname);
        if (
            (null != h &&
                l(p.I.EVENT, `${h.guildId}-${h.guildEventId}` + (null != h.recurrenceId ? `-${h.recurrenceId}` : "")),
            null != o?.match(b) && null != r.query)
        ) {
            let e = (0, _._)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                e.scopes?.some((e) => e !== u.F.APPLICATIONS_COMMANDS) ||
                l(p.I.APP_OAUTH2_LINK, t);
        }
        let m = o?.match(S);
        if (null != m) {
            let e = m[2];
            l(p.I.APP_DIRECTORY_PROFILE, e);
        }
        let C = o?.match(y);
        if (null != C) {
            let e = C[2],
                t = C[3];
            if (null != t) {
                let n = (0, d.L)(e, t);
                l(p.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(p.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let L = o?.match(N);
        if (null != L) {
            let e = L[1];
            l(p.I.ACTIVITY_BOOKMARK, e);
        }
        let w = o?.match(O);
        null != w && l(p.I.GUILD_PRODUCT, `${w[1]}-${w[2]}`);
        let M = o?.match(v);
        null != M && l(p.I.SERVER_SHOP, M[1]);
        let P = o?.match(R);
        null != P && l(p.I.SOCIAL_LAYER_STOREFRONT, `${P[3]}-${P[1] ?? P[2]}`);
        let U = X(e);
        if ((null != U && l(p.I.QUESTS_EMBED, U), "/shop" === o)) {
            let e = null != r.query ? (0, s.parse)(r.query).tab : null,
                t = r.hash?.match(D);
            l(p.I.COLLECTIBLES_SHOP, `${e ?? ""}-${t?.[1] ?? ""}`);
        }
    }
    return n;
}
function X(e) {
    let t = $(e),
        n = t?.primaryHostRemainingPath?.match(C);
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
