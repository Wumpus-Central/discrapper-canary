n.d(t, {
    FO: () => el,
    Sq: () => en,
    ZP: () => eo,
    el: () => es,
    oO: () => B,
    wT: () => ea,
    zO: () => ec,
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
n(865427);
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
    L = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    x = /^\/activities\/([0-9-]+)\/?$/,
    M = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    k = /^\/channels\/([0-9]+)\/shop$/,
    j = /^\/quests\/([0-9-]+)\/?$/,
    U = /^\/oauth2\/authorize/,
    G = /^#itemSkuId=([0-9]+)$/,
    B = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    Z = X(window.GLOBAL_ENV.INVITE_HOST),
    F = X(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    V = X(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : "//canary.".concat(A.$R1)),
    H = X("//canary.".concat(A.$R1)),
    Y = X("//ptb.".concat(A.$R1)),
    W = X("discordapp.com"),
    K = X("discord.com"),
    z = [
        I.Z.escape(null != (s = Z.host) ? s : ""),
        I.Z.escape(null != (l = F.host) ? l : ""),
        I.Z.escape(null != (c = V.host) ? c : ""),
        I.Z.escape(null != (u = W.host) ? u : ""),
        I.Z.escape(null != (d = K.host) ? d : ""),
    ].filter(Boolean),
    q = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(z.join("|"), ")"), "g");
function X(e) {
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
let Q = (e) => e.replaceAll($, " $2 "),
    J = null == (a = m().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? void 0 : r.source;
_()(J, "SimpleMarkdown link regex is not set."), "^" === J[0] && (J = J.substring(1));
let $ = RegExp(J, "g");
function ee(e, t) {
    var n;
    return (null == (n = t.host) ? void 0 : n.replace(/^www[.]/i, "")) === e.host;
}
function et(e, t) {
    var n, r;
    if (!ee(e, t)) return null;
    let i = null != (n = t.pathname) ? n : "",
        a = null != (r = e.pathPrefix) ? r : "";
    if (!i.startsWith(a)) return null;
    let o = i.substring(a.length);
    return "" === o ? null : o;
}
function en(e) {
    var t, n, r, i;
    return null != (i = null != (r = null != (n = null != (t = et(V, e)) ? t : et(H, e)) ? n : et(Y, e)) ? r : et(W, e))
        ? i
        : et(K, e);
}
function er(e) {
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
function ei(e) {
    var t, n, r, i;
    let a = el(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let o = et(Z, a),
        s = et(F, a),
        l =
            null !=
            (i = null != (r = null != (n = null != (t = et(V, a)) ? t : et(H, a)) ? n : et(Y, a)) ? r : et(W, a))
                ? i
                : et(K, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l,
    };
}
function ea(e) {
    if (e.includes("\\")) {
        let r = el(e);
        if (null == r) return !1;
        if (ee(Z, r)) return !0;
        if ([V, H, Y, W, K].some((e) => ee(e, r))) {
            var t, n;
            return null != (n = null == (t = r.pathname) ? void 0 : t.toUpperCase().includes(S.g.INVITE)) && n;
        }
    }
    return !1;
}
function eo(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = Q((e = e.replace(q, (e, t, n, r) => (null == n ? "".concat(t, "http://").concat(r) : e)))).match(
            T.Z.URL_REGEX,
        ),
        i = e.match(B);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, o, s;
        if (n.length >= C) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: l, primaryHostRemainingPath: c } = ei(e);
        if (null == r || null == r.pathname) continue;
        let u = (r, i) => {
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
            u(S.g.INVITE, t);
        }
        (null == l ? void 0 : l.match(N)) != null && u(S.g.TEMPLATE, l.substring(1));
        let d = null == c ? void 0 : c.match(P);
        if (null != d) {
            let t = d[1].toUpperCase();
            if (t === S.g.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, y.mb)(d[2], r.search);
                u(S.g.INVITE, t);
            } else u(t, d[2]);
        }
        (null == c ? void 0 : c.match(R)) != null && u(S.g.CHANNEL_LINK, c.replace("/channels/", ""));
        let f = er(r.pathname);
        if (
            (null != f &&
                u(
                    S.g.EVENT,
                    "".concat(f.guildId, "-").concat(f.guildEventId) +
                        (null != f.recurrenceId ? "-".concat(f.recurrenceId) : ""),
                ),
            null != (null == c ? void 0 : c.match(U)) && null != r.query)
        ) {
            let e = (0, O.y)(r.query),
                t = e.clientId;
            null == t ||
                "" === t ||
                (null == (a = e.scopes) ? void 0 : a.some((e) => e !== E.x.APPLICATIONS_COMMANDS)) ||
                u(S.g.APP_OAUTH2_LINK, t);
        }
        let _ = null == c ? void 0 : c.match(w);
        if (null != _) {
            let e = _[2];
            u(S.g.APP_DIRECTORY_PROFILE, e);
        }
        let h = null == c ? void 0 : c.match(L);
        if (null != h) {
            let e = h[2],
                t = h[3];
            if (null != t) {
                let n = (0, b.l)(e, t);
                u(S.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else u(S.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let m = null == c ? void 0 : c.match(x);
        if (null != m) {
            let e = m[1];
            u(S.g.ACTIVITY_BOOKMARK, e);
        }
        let g = null == c ? void 0 : c.match(M);
        null != g && u(S.g.GUILD_PRODUCT, "".concat(g[1], "-").concat(g[2]));
        let I = null == c ? void 0 : c.match(k);
        null != I && u(S.g.SERVER_SHOP, I[1]);
        let T = es(e);
        if ((null != T && u(S.g.QUESTS_EMBED, T), "/shop" === c)) {
            let e = null != r.query ? (0, p.parse)(r.query).tab : null,
                t = null == (o = r.hash) ? void 0 : o.match(G);
            u(
                S.g.COLLECTIBLES_SHOP,
                "".concat(null != e ? e : "", "-").concat(null != (s = null == t ? void 0 : t[1]) ? s : ""),
            );
        }
    }
    return n;
}
function es(e) {
    var t, n;
    let r = ei(e),
        i = null == r || null == (t = r.primaryHostRemainingPath) ? void 0 : t.match(j);
    return null != (n = null == i ? void 0 : i[1]) ? n : null;
}
function el(e) {
    try {
        return (0, g.parse)(e);
    } catch (e) {
        return null;
    }
}
function ec(e) {
    return eo(e)[0];
}
