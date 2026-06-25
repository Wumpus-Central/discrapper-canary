"use strict";
n.d(t, { Ay: () => K, br: () => q, l7: () => z, rL: () => W, st: () => D, tl: () => H, ts: () => $ }), n(321073);
var i = n(492462),
    r = n(567243),
    s = n(179771),
    a = n(919535),
    o = n(121401);
n(380610), n(100392);
var l = n(842241);
n(346542);
var u = n(182490),
    c = n(123677),
    d = n(299091),
    _ = n(257120),
    h = n(167189),
    f = n(652215),
    p = n(758836);
let E = /^\/([a-zA-Z0-9-]+)$/,
    m = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    g = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    I = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    T = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    S = /^\/activities\/([0-9-]+)\/?$/,
    y = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    N = /^\/channels\/([0-9]+)\/shop$/,
    v = /^\/quests\/([0-9-]+)\/?$/,
    R = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    O = /^\/oauth2\/authorize/,
    b = /^#itemSkuId=([0-9]+)$/,
    D = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    L = V(window.GLOBAL_ENV.INVITE_HOST),
    w = V(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = V(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${f.U2_}`),
    P = V(`//canary.${f.U2_}`),
    x = V(`//ptb.${f.U2_}`),
    k = V("discordapp.com"),
    U = V("discord.com"),
    G = [
        _.A.escape(L.host ?? ""),
        _.A.escape(w.host ?? ""),
        _.A.escape(M.host ?? ""),
        _.A.escape(k.host ?? ""),
        _.A.escape(U.host ?? ""),
    ].filter(Boolean),
    F = RegExp(`((https?://[^ ]*)|^|\\s)(${G.join("|")})`, "g");
function V(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function B(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function j(e, t) {
    if (!B(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function H(e) {
    return j(M, e) ?? j(P, e) ?? j(x, e) ?? j(k, e) ?? j(U, e);
}
function Y(e) {
    let t = z(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = j(L, t),
        i = j(w, t),
        r = j(M, t) ?? j(P, t) ?? j(x, t) ?? j(k, t) ?? j(U, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function W(e) {
    if (e.includes("\\")) {
        let t = z(e);
        if (null == t) return !1;
        if (B(L, t)) return !0;
        if ([M, P, x, k, U].some((e) => B(e, t))) return t.pathname?.toUpperCase().includes(h.I.INVITE) ?? !1;
    }
    return !1;
}
function K(e) {
    if (null == e) return [];
    e = e.replace(F, (e, t, n, i) => (null == n ? `${t}http://${i}` : e));
    let t = n(46054).A.parseToAST(e, !0, { allowLinks: !0 }),
        r = [];
    (0, a.mm)(t, (e) => {
        e.type === u.D.LINK && "string" == typeof e.target && e.target.length > 0 && r.push(e.target);
    });
    let _ = e.match(D);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let a of e) {
            let {
                url: e,
                inviteHostRemainingPath: u,
                templateHostRemainingPath: _,
                primaryHostRemainingPath: f,
            } = Y(a);
            if (null == e || null == e.pathname) continue;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: a }));
            }
            if (u?.match(E) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, l.fB)(u.substring(1), e.search);
                if ((d.A.getInvite(t), a.includes("\\"))) continue;
                r(h.I.INVITE, t);
            }
            _?.match(E) != null && r(h.I.TEMPLATE, _.substring(1));
            let v = f?.match(g);
            if (null != v) {
                let t = v[1].toUpperCase();
                if (t === h.I.INVITE) {
                    if (a.includes("\\")) continue;
                    let t = (0, l.fB)(v[2], e.search);
                    r(h.I.INVITE, t);
                } else r(t, v[2]);
            }
            f?.match(m) != null && r(h.I.CHANNEL_LINK, f.replace("/channels/", ""));
            let D = (function (e) {
                if (null == e) return null;
                let t = e.match(A);
                return null != t && t.length >= 4 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
            })(e.pathname);
            if (
                (null != D &&
                    r(
                        h.I.EVENT,
                        `${D.guildId}-${D.guildEventId}` + (null != D.recurrenceId ? `-${D.recurrenceId}` : ""),
                    ),
                null != f?.match(O) && null != e.query)
            ) {
                let t = (0, c._)(e.query),
                    n = t.clientId;
                null == n ||
                    "" === n ||
                    t.scopes?.some((e) => e !== s.F.APPLICATIONS_COMMANDS) ||
                    r(h.I.APP_OAUTH2_LINK, n);
            }
            let L = f?.match(I);
            if (null != L) {
                let e = L[2];
                r(h.I.APP_DIRECTORY_PROFILE, e);
            }
            let w = f?.match(T);
            if (null != w) {
                let e = w[2],
                    t = w[3];
                if (null != t) {
                    let n = (0, o.L)(e, t);
                    r(h.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(h.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let M = f?.match(S);
            if (null != M) {
                let e = M[1];
                r(h.I.ACTIVITY_BOOKMARK, e);
            }
            let P = f?.match(y);
            null != P && r(h.I.GUILD_PRODUCT, `${P[1]}-${P[2]}`);
            let x = f?.match(N);
            null != x && r(h.I.SERVER_SHOP, x[1]);
            let k = f?.match(C);
            null != k && r(h.I.SOCIAL_LAYER_STOREFRONT, `${k[3]}-${k[1] ?? k[2]}`);
            let U = $(a);
            null != U && r(h.I.QUESTS_EMBED, U);
            let G = f?.match(R);
            if ((null != G && r(h.I.GAME_PROFILE, G[1]), "/shop" === f)) {
                let t = null != e.query ? (0, i.parse)(e.query) : null,
                    n = t?.tab;
                if (n === p.G2.GAME_SHOPS && t?.applicationId != null && t?.skuId != null) {
                    let e = t.applicationId,
                        n = t.skuId;
                    "string" == typeof e && "string" == typeof n && r(h.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${e}`);
                } else {
                    let t = e.hash?.match(b);
                    r(h.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((r = (r ?? []).concat(_ ?? []))).slice(0, 10);
}
function $(e) {
    let t = Y(e),
        n = t?.primaryHostRemainingPath?.match(v);
    return n?.[1] ?? null;
}
function z(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function q(e) {
    return K(e)[0];
}
