n.d(t, {
    Ay: () => eo,
    br: () => eu,
    l7: () => ec,
    rL: () => es,
    st: () => F,
    tl: () => er,
    ts: () => el,
}),
    n(591487),
    n(727858),
    n(747238),
    n(812715),
    n(866193),
    n(896048),
    n(321073);
var r,
    i,
    a,
    s,
    o,
    l,
    c,
    u,
    d,
    f = n(284009),
    p = n.n(f),
    _ = n(492462),
    h = n(280230),
    m = n.n(h),
    g = n(567243),
    E = n(179771),
    b = n(121401);
n(380610), n(100392);
var y = n(21599);
n(346542);
var O = n(123677),
    A = n(299091),
    v = n(257120),
    S = n(998218),
    I = n(167189),
    T = n(652215);
let C = 10,
    N = /^\/([a-zA-Z0-9-]+)$/,
    R = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    w = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    P = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    x = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    j = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    M = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    k = /^\/channels\/([0-9]+)\/shop$/,
    U = /^\/quests\/([0-9-]+)\/?$/,
    G = /^\/oauth2\/authorize/,
    V = /^#itemSkuId=([0-9]+)$/,
    F = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = Q(window.GLOBAL_ENV.INVITE_HOST),
    H = Q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    Y = Q(null != (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? r : "//canary.".concat(T.U2_)),
    W = Q("//canary.".concat(T.U2_)),
    K = Q("//ptb.".concat(T.U2_)),
    z = Q("discordapp.com"),
    q = Q("discord.com"),
    X = [
        v.A.escape(null != (i = B.host) ? i : ""),
        v.A.escape(null != (a = H.host) ? a : ""),
        v.A.escape(null != (s = Y.host) ? s : ""),
        v.A.escape(null != (o = z.host) ? o : ""),
        v.A.escape(null != (l = q.host) ? l : ""),
    ].filter(Boolean),
    Z = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(X.join("|"), ")"), "g");

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
let $ = (e) => e.replaceAll(ee, " $2 "),
    J = null == (d = m().defaultRules.link) || null == (u = d.match) || null == (c = u.regex) ? void 0 : c.source;
p()(J, "SimpleMarkdown link regex is not set."), "^" === J[0] && (J = J.substring(1));
let ee = RegExp(J, "g");

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
    let s = i.substring(a.length);
    return "" === s ? null : s;
}

function er(e) {
    var t, n, r, i;
    return null != (t = null != (n = null != (r = null != (i = en(Y, e)) ? i : en(W, e)) ? r : en(K, e)) ? n : en(z, e))
        ? t
        : en(q, e);
}

function ei(e) {
    if (null == e) return null;
    let t = e.match(P);
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
    let s = en(B, a),
        o = en(H, a),
        l =
            null !=
            (t = null != (n = null != (r = null != (i = en(Y, a)) ? i : en(W, a)) ? r : en(K, a)) ? n : en(z, a))
                ? t
                : en(q, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l,
    };
}

function es(e) {
    if (e.includes("\\")) {
        let r = ec(e);
        if (null == r) return !1;
        if (et(B, r)) return !0;
        if ([Y, W, K, z, q].some((e) => et(e, r))) {
            var t, n;
            return null != (t = null == (n = r.pathname) ? void 0 : n.toUpperCase().includes(I.I.INVITE)) && t;
        }
    }
    return !1;
}

function eo(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = $((e = e.replace(Z, (e, t, n, r) => (null == n ? "".concat(t, "http://").concat(r) : e)))).match(
            S.A.URL_REGEX,
        ),
        i = e.match(F);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, s, o, l;
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
            let t = (0, y.fB)(i.substring(1), r.search);
            if ((A.A.getInvite(t), e.includes("\\"))) continue;
            d(I.I.INVITE, t);
        }
        (null == c ? void 0 : c.match(N)) != null && d(I.I.TEMPLATE, c.substring(1));
        let f = null == u ? void 0 : u.match(w);
        if (null != f) {
            let t = f[1].toUpperCase();
            if (t === I.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, y.fB)(f[2], r.search);
                d(I.I.INVITE, t);
            } else d(t, f[2]);
        }
        (null == u ? void 0 : u.match(R)) != null && d(I.I.CHANNEL_LINK, u.replace("/channels/", ""));
        let p = ei(r.pathname);
        if (
            (null != p &&
                d(
                    I.I.EVENT,
                    "".concat(p.guildId, "-").concat(p.guildEventId) +
                        (null != p.recurrenceId ? "-".concat(p.recurrenceId) : ""),
                ),
            null != (null == u ? void 0 : u.match(G)) && null != r.query)
        ) {
            let e = (0, O._)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                (null == (a = e.scopes) ? void 0 : a.some((e) => e !== E.F.APPLICATIONS_COMMANDS)) ||
                d(I.I.APP_OAUTH2_LINK, t);
        }
        let h = null == u ? void 0 : u.match(D);
        if (null != h) {
            let e = h[2];
            d(I.I.APP_DIRECTORY_PROFILE, e);
        }
        let m = null == u ? void 0 : u.match(x);
        if (null != m) {
            let e = m[2],
                t = m[3];
            if (null != t) {
                let n = (0, b.L)(e, t);
                d(I.I.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else d(I.I.APP_DIRECTORY_STOREFRONT, e);
        }
        let g = null == u ? void 0 : u.match(L);
        if (null != g) {
            let e = g[1];
            d(I.I.ACTIVITY_BOOKMARK, e);
        }
        let v = null == u ? void 0 : u.match(j);
        null != v && d(I.I.GUILD_PRODUCT, "".concat(v[1], "-").concat(v[2]));
        let S = null == u ? void 0 : u.match(k);
        null != S && d(I.I.SERVER_SHOP, S[1]);
        let T = null == u ? void 0 : u.match(M);
        null != T && d(I.I.SOCIAL_LAYER_STOREFRONT, "".concat(T[3], "-").concat(null != (s = T[1]) ? s : T[2]));
        let P = el(e);
        if ((null != P && d(I.I.QUESTS_EMBED, P), "/shop" === u)) {
            let e = null != r.query ? (0, _.parse)(r.query).tab : null,
                t = null == (l = r.hash) ? void 0 : l.match(V);
            d(
                I.I.COLLECTIBLES_SHOP,
                "".concat(null != e ? e : "", "-").concat(null != (o = null == t ? void 0 : t[1]) ? o : ""),
            );
        }
    }
    return n;
}

function el(e) {
    var t, n;
    let r = ea(e),
        i = null == r || null == (n = r.primaryHostRemainingPath) ? void 0 : n.match(U);
    return null != (t = null == i ? void 0 : i[1]) ? t : null;
}

function ec(e) {
    try {
        return (0, g.parse)(e);
    } catch (e) {
        return null;
    }
}

function eu(e) {
    return eo(e)[0];
}
