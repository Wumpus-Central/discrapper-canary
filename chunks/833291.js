"use strict";
n.d(t, { $9: () => q, Ay: () => $, br: () => X, l7: () => Z, rL: () => K, st: () => b, tl: () => W, ts: () => z }),
    n(321073);
var i = n(492462),
    r = n(567243),
    a = n(179771),
    s = n(919535),
    l = n(121401);
n(380610), n(100392);
var o = n(842241);
n(346542);
var d = n(182490),
    c = n(123677),
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
    D = /^\/oauth2\/authorize/,
    v = /^#itemSkuId=([0-9]+)$/,
    b = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    M = B(window.GLOBAL_ENV.INVITE_HOST),
    P = B(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    U = B(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${A.U2_}`),
    w = B(`//canary.${A.U2_}`),
    G = B(`//ptb.${A.U2_}`),
    x = B("discordapp.com"),
    k = B("discord.com"),
    F = [
        _.A.escape(M.host ?? ""),
        _.A.escape(P.host ?? ""),
        _.A.escape(U.host ?? ""),
        _.A.escape(x.host ?? ""),
        _.A.escape(k.host ?? ""),
    ].filter(Boolean),
    V = RegExp(`((https?://[^ ]*)|^|\\s)(${F.join("|")})`, "g");
function B(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function H(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function j(e, t) {
    if (!H(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function W(e) {
    return j(U, e) ?? j(w, e) ?? j(G, e) ?? j(x, e) ?? j(k, e);
}
function Y(e) {
    let t = Z(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = j(M, t),
        i = j(P, t),
        r = j(U, t) ?? j(w, t) ?? j(G, t) ?? j(x, t) ?? j(k, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function K(e) {
    if (e.includes("\\")) {
        let t = Z(e);
        if (null == t) return !1;
        if (H(M, t)) return !0;
        if ([U, w, G, x, k].some((e) => H(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function $(e) {
    if (null == e) return [];
    e = e.replace(V, (e, t, n, i) => (null == n ? `${t}http://${i}` : e));
    let t = n(46054).A.parseToAST(e, !0, { allowLinks: !0 }),
        r = [];
    (0, s.mm)(t, (e) => {
        e.type === d.D.LINK && "string" == typeof e.target && e.target.length > 0 && r.push(e.target);
    });
    let _ = e.match(b);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let s of e) {
            let {
                url: e,
                inviteHostRemainingPath: d,
                templateHostRemainingPath: _,
                primaryHostRemainingPath: A,
            } = Y(s);
            if (null == e || null == e.pathname) continue;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: s }));
            }
            if (d?.match(I) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, o.fB)(d.substring(1), e.search);
                if ((u.A.getInvite(t), s.includes("\\"))) continue;
                r(E.I.INVITE, t);
            }
            _?.match(I) != null && r(E.I.TEMPLATE, _.substring(1));
            let R = A?.match(p);
            if (null != R) {
                let t = R[1].toUpperCase();
                if (t === E.I.INVITE) {
                    if (s.includes("\\")) continue;
                    let t = (0, o.fB)(R[2], e.search);
                    r(E.I.INVITE, t);
                } else r(t, R[2]);
            }
            A?.match(f) != null && r(E.I.CHANNEL_LINK, A.replace("/channels/", ""));
            let b = (function (e) {
                if (null == e) return null;
                let t = e.match(T);
                return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
            })(e.pathname);
            if (
                (null != b &&
                    r(
                        E.I.EVENT,
                        `${b.guildId}-${b.guildEventId}` + (null != b.recurrenceId ? `-${b.recurrenceId}` : ""),
                    ),
                null != A?.match(D) && null != e.query)
            ) {
                let t = (0, c._)(e.query),
                    n = t.clientId;
                null == n ||
                    "" === n ||
                    t.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(E.I.APP_OAUTH2_LINK, n);
            }
            let M = A?.match(m);
            if (null != M) {
                let e = M[2];
                r(E.I.APP_DIRECTORY_PROFILE, e);
            }
            let P = A?.match(g);
            if (null != P) {
                let e = P[2],
                    t = P[3];
                if (null != t) {
                    let n = (0, l.L)(e, t);
                    r(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(E.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let U = A?.match(S);
            if (null != U) {
                let e = U[1];
                r(E.I.ACTIVITY_BOOKMARK, e);
            }
            let w = A?.match(N);
            null != w && r(E.I.GUILD_PRODUCT, `${w[1]}-${w[2]}`);
            let G = A?.match(O);
            null != G && r(E.I.SERVER_SHOP, G[1]);
            let x = A?.match(C);
            null != x && r(E.I.SOCIAL_LAYER_STOREFRONT, `${x[3]}-${x[1] ?? x[2]}`);
            let k = z(s);
            null != k && r(E.I.QUESTS_EMBED, k);
            let F = A?.match(y);
            null != F && r(E.I.GAME_PROFILE, F[1]);
            let V = A?.match(L);
            if ((null != V && r(E.I.GAME_SERVER_SHARE, V[1]), "/shop" === A)) {
                let t = null != e.query ? (0, i.parse)(e.query) : null,
                    n = t?.tab;
                if (n === h.G2.GAME_SHOPS && t?.applicationId != null && t?.skuId != null) {
                    let e = t.applicationId,
                        n = t.skuId;
                    "string" == typeof e && "string" == typeof n && r(E.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${e}`);
                } else {
                    let t = e.hash?.match(v);
                    r(E.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((r = (r ?? []).concat(_ ?? []))).slice(0, 10);
}
function z(e) {
    let t = Y(e),
        n = t?.primaryHostRemainingPath?.match(R);
    return n?.[1] ?? null;
}
function q(e) {
    let t = Y(e),
        n = t?.primaryHostRemainingPath?.match(L);
    return n?.[1] ?? null;
}
function Z(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function X(e) {
    return $(e)[0];
}
