n.d(t, {
    FO: () => ec,
    Sq: () => er,
    ZP: () => es,
    el: () => el,
    oO: () => Z,
    wT: () => eo,
    zO: () => eu,
}),
    n(413496),
    n(433524),
    n(35282),
    n(804061),
    n(704826),
    n(388685),
    n(539854);
var r,
    i,
    a,
    o,
    s,
    l,
    c,
    u,
    d,
    f = n(512722),
    _ = n.n(f),
    p = n(593473),
    h = n(159635),
    m = n.n(h),
    g = n(729594),
    E = n(243814),
    b = n(421474);
n(865427), n(922699);
var y = n(264229);
n(413605);
var O = n(807675),
    v = n(701190),
    I = n(226951),
    T = n(591759),
    S = n(960904),
    A = n(981631);
let C = 10,
    N = /^\/([a-zA-Z0-9-]+)$/,
    R = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    P = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    D = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    w = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    x = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    M = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    j = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    k = /^\/channels\/([0-9]+)\/shop$/,
    U = /^\/quests\/([0-9-]+)\/?$/,
    G = /^\/oauth2\/authorize/,
    B = /^#itemSkuId=([0-9]+)$/,
    Z = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    F = Q(window.GLOBAL_ENV.INVITE_HOST),
    V = Q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    H = Q(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : "//canary.".concat(A.$R1)),
    Y = Q("//canary.".concat(A.$R1)),
    W = Q("//ptb.".concat(A.$R1)),
    K = Q("discordapp.com"),
    z = Q("discord.com"),
    q = [
        I.Z.escape(null != (s = F.host) ? s : ""),
        I.Z.escape(null != (l = V.host) ? l : ""),
        I.Z.escape(null != (c = H.host) ? c : ""),
        I.Z.escape(null != (u = K.host) ? u : ""),
        I.Z.escape(null != (d = z.host) ? d : ""),
    ].filter(Boolean),
    X = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(q.join("|"), ")"), "g");
function Q(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null,
        };
    if (e.indexOf("/") >= 0) {
        let t = (0, g.parse)(e, void 0, !0);
        return {
            host: t.host,
            pathPrefix: t.pathname,
        };
    }
    return {
        host: e,
        pathPrefix: null,
    };
}
let J = (e) => e.replaceAll(ee, " $2 "),
    $ = null == (a = m().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? void 0 : r.source;
_()($, "SimpleMarkdown link regex is not set."), "^" === $[0] && ($ = $.substring(1));
let ee = RegExp($, "g");
function et(e, t) {
    var n;
    return (null == (n = t.host) ? void 0 : n.replace(/^www[.]/i, "")) === e.host;
}
function en(e, t) {
    var n, r;
    if (!et(e, t)) return null;
    let i = null != (n = t.pathname) ? n : "",
        a = null != (r = e.pathPrefix) ? r : "";
    if (!i.startsWith(a)) return null;
    let o = i.substring(a.length);
    return "" === o ? null : o;
}
function er(e) {
    var t, n, r, i;
    return null != (i = null != (r = null != (n = null != (t = en(H, e)) ? t : en(Y, e)) ? n : en(W, e)) ? r : en(K, e))
        ? i
        : en(z, e);
}
function ei(e) {
    if (null == e) return null;
    let t = e.match(D);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4],
          }
        : null;
}
function ea(e) {
    var t, n, r, i;
    let a = ec(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let o = en(F, a),
        s = en(V, a),
        l =
            null !=
            (i = null != (r = null != (n = null != (t = en(H, a)) ? t : en(Y, a)) ? n : en(W, a)) ? r : en(K, a))
                ? i
                : en(z, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l,
    };
}
function eo(e) {
    if (e.includes("\\")) {
        let r = ec(e);
        if (null == r) return !1;
        if (et(F, r)) return !0;
        if ([H, Y, W, K, z].some((e) => et(e, r))) {
            var t, n;
            return null != (n = null == (t = r.pathname) ? void 0 : t.toUpperCase().includes(S.g.INVITE)) && n;
        }
    }
    return !1;
}
function es(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = J((e = e.replace(X, (e, t, n, r) => (null == n ? "".concat(t, "http://").concat(r) : e)))).match(
            T.Z.URL_REGEX,
        ),
        i = e.match(Z);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, o, s, l;
        if (n.length >= C) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: c, primaryHostRemainingPath: u } = ea(e);
        if (null == r || null == r.pathname) continue;
        let d = (r, i) => {
            t.has(i) ||
                (t.add(i),
                n.push({
                    type: r,
                    code: i,
                    url: e,
                }));
        };
        if ((null == i ? void 0 : i.match(N)) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, y.mb)(i.substring(1), r.search);
            if ((v.Z.getInvite(t), e.includes("\\"))) continue;
            d(S.g.INVITE, t);
        }
        (null == c ? void 0 : c.match(N)) != null && d(S.g.TEMPLATE, c.substring(1));
        let f = null == u ? void 0 : u.match(P);
        if (null != f) {
            let t = f[1].toUpperCase();
            if (t === S.g.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, y.mb)(f[2], r.search);
                d(S.g.INVITE, t);
            } else d(t, f[2]);
        }
        (null == u ? void 0 : u.match(R)) != null && d(S.g.CHANNEL_LINK, u.replace("/channels/", ""));
        let _ = ei(r.pathname);
        if (
            (null != _ &&
                d(
                    S.g.EVENT,
                    "".concat(_.guildId, "-").concat(_.guildEventId) +
                        (null != _.recurrenceId ? "-".concat(_.recurrenceId) : ""),
                ),
            null != (null == u ? void 0 : u.match(G)) && null != r.query)
        ) {
            let e = (0, O.y)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                (null == (a = e.scopes) ? void 0 : a.some((e) => e !== E.x.APPLICATIONS_COMMANDS)) ||
                d(S.g.APP_OAUTH2_LINK, t);
        }
        let h = null == u ? void 0 : u.match(w);
        if (null != h) {
            let e = h[2];
            d(S.g.APP_DIRECTORY_PROFILE, e);
        }
        let m = null == u ? void 0 : u.match(x);
        if (null != m) {
            let e = m[2],
                t = m[3];
            if (null != t) {
                let n = (0, b.l)(e, t);
                d(S.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else d(S.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let g = null == u ? void 0 : u.match(L);
        if (null != g) {
            let e = g[1];
            d(S.g.ACTIVITY_BOOKMARK, e);
        }
        let I = null == u ? void 0 : u.match(M);
        null != I && d(S.g.GUILD_PRODUCT, "".concat(I[1], "-").concat(I[2]));
        let T = null == u ? void 0 : u.match(k);
        null != T && d(S.g.SERVER_SHOP, T[1]);
        let A = null == u ? void 0 : u.match(j);
        null != A && d(S.g.SOCIAL_LAYER_STOREFRONT, "".concat(A[3], "-").concat(null != (o = A[1]) ? o : A[2]));
        let D = el(e);
        if ((null != D && d(S.g.QUESTS_EMBED, D), "/shop" === u)) {
            let e = null != r.query ? (0, p.parse)(r.query).tab : null,
                t = null == (s = r.hash) ? void 0 : s.match(B);
            d(
                S.g.COLLECTIBLES_SHOP,
                "".concat(null != e ? e : "", "-").concat(null != (l = null == t ? void 0 : t[1]) ? l : ""),
            );
        }
    }
    return n;
}
function el(e) {
    var t, n;
    let r = ea(e),
        i = null == r || null == (t = r.primaryHostRemainingPath) ? void 0 : t.match(U);
    return null != (n = null == i ? void 0 : i[1]) ? n : null;
}
function ec(e) {
    try {
        return (0, g.parse)(e);
    } catch (e) {
        return null;
    }
}
function eu(e) {
    return es(e)[0];
}
