"use strict";
n.d(t, {
    $9: () => X,
    Ay: () => z,
    br: () => J,
    iY: () => q,
    l7: () => Q,
    rL: () => $,
    st: () => M,
    tl: () => Y,
    ts: () => Z,
}),
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
    R = /^\/channels\/([0-9]+)\/shop$/,
    O = /^\/quests\/([0-9-]+)\/?$/,
    L = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    D = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    y = /^\/users\/([0-9]+)\/?$/,
    v = /^\/oauth2\/authorize/,
    b = /^#itemSkuId=([0-9]+)$/,
    M = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = H(window.GLOBAL_ENV.INVITE_HOST),
    U = H(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    w = H(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${A.U2_}`),
    G = H(`//canary.${A.U2_}`),
    x = H(`//ptb.${A.U2_}`),
    k = H("discordapp.com"),
    F = H("discord.com"),
    V = [
        _.A.escape(P.host ?? ""),
        _.A.escape(U.host ?? ""),
        _.A.escape(w.host ?? ""),
        _.A.escape(k.host ?? ""),
        _.A.escape(F.host ?? ""),
    ].filter(Boolean),
    B = RegExp(`((https?://[^ ]*)|^|\\s)(${V.join("|")})`, "g");
function H(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function j(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function W(e, t) {
    if (!j(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function Y(e) {
    return W(w, e) ?? W(G, e) ?? W(x, e) ?? W(k, e) ?? W(F, e);
}
function K(e) {
    let t = Q(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = W(P, t),
        i = W(U, t),
        r = W(w, t) ?? W(G, t) ?? W(x, t) ?? W(k, t) ?? W(F, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function $(e) {
    if (e.includes("\\")) {
        let t = Q(e);
        if (null == t) return !1;
        if (j(P, t)) return !0;
        if ([w, G, x, k, F].some((e) => j(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function z(e) {
    if (null == e) return [];
    e = e.replace(B, (e, t, n, i) => (null == n ? `${t}http://${i}` : e));
    let t = n(46054).A.parseToAST(e, !0, { allowLinks: !0 }),
        r = [];
    (0, s.mm)(t, (e) => {
        e.type === d.D.LINK && "string" == typeof e.target && e.target.length > 0 && r.push(e.target);
    });
    let _ = e.match(M);
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
            } = K(s);
            if (null == e || null == e.pathname) continue;
            let O = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: s }));
            }
            if (d?.match(I) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, o.fB)(d.substring(1), e.search);
                if ((u.A.getInvite(t), s.includes("\\"))) continue;
                r(E.I.INVITE, t);
            }
            _?.match(I) != null && r(E.I.TEMPLATE, _.substring(1));
            let M = A?.match(p);
            if (null != M) {
                let t = M[1].toUpperCase();
                if (t === E.I.INVITE) {
                    if (s.includes("\\")) continue;
                    let t = (0, o.fB)(M[2], e.search);
                    r(E.I.INVITE, t);
                } else r(t, M[2]);
            }
            A?.match(f) != null && r(E.I.CHANNEL_LINK, A.replace("/channels/", ""));
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
                    r(
                        E.I.EVENT,
                        `${P.guildId}-${P.guildEventId}` + (null != P.recurrenceId ? `-${P.recurrenceId}` : ""),
                    ),
                null != A?.match(v) && null != O)
            ) {
                let e = (0, c._)(O),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(E.I.APP_OAUTH2_LINK, t);
            }
            let U = A?.match(m);
            if (null != U) {
                let e = U[2];
                r(E.I.APP_DIRECTORY_PROFILE, e);
            }
            let w = A?.match(g);
            if (null != w) {
                let e = w[2],
                    t = w[3];
                if (null != t) {
                    let n = (0, l.L)(e, t);
                    r(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(E.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let G = A?.match(S);
            if (null != G) {
                let e = G[1];
                r(E.I.ACTIVITY_BOOKMARK, e);
            }
            let x = A?.match(N);
            null != x && r(E.I.GUILD_PRODUCT, `${x[1]}-${x[2]}`);
            let k = A?.match(R);
            null != k && r(E.I.SERVER_SHOP, k[1]);
            let F = A?.match(C);
            null != F && r(E.I.SOCIAL_LAYER_STOREFRONT, `${F[3]}-${F[1] ?? F[2]}`);
            let V = Z(s);
            null != V && r(E.I.QUESTS_EMBED, V);
            let B = A?.match(D);
            null != B && r(E.I.GAME_PROFILE, B[1]);
            let H = A?.match(L);
            null != H && r(E.I.GAME_SERVER_SHARE, H[1]);
            let j = A?.match(y);
            if ((null != j && r(E.I.USER_PROFILE, j[1]), "/shop" === A)) {
                let t = null != O ? (0, i.parse)(O) : null,
                    n = t?.tab;
                if (n === h.G2.GAME_SHOPS && t?.applicationId != null && t?.skuId != null) {
                    let e = t.applicationId,
                        n = t.skuId;
                    "string" == typeof e && "string" == typeof n && r(E.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${e}`);
                } else {
                    let t = e.hash?.match(b);
                    r(E.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((r = (r ?? []).concat(_ ?? []))).slice(0, 10);
}
function Z(e) {
    let t = K(e),
        n = t?.primaryHostRemainingPath?.match(O);
    return n?.[1] ?? null;
}
function q(e) {
    let t = K(e),
        n = t?.primaryHostRemainingPath?.match(y);
    return n?.[1] ?? null;
}
function X(e) {
    let t = K(e),
        n = t?.primaryHostRemainingPath?.match(L);
    return n?.[1] ?? null;
}
function Q(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function J(e) {
    return z(e)[0];
}
