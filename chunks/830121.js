(n.d(t, {
    FO: () => es,
    Sq: () => et,
    ZP: () => ea,
    el: () => eo,
    oO: () => G,
    wT: () => ei,
    zO: () => el
}),
    n(413496),
    n(433524),
    n(35282),
    n(804061),
    n(704826),
    n(388685),
    n(539854));
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
    p = n(159635),
    h = n.n(p),
    m = n(729594),
    g = n(243814),
    E = n(421474);
n(865427);
var b = n(264229);
n(413605);
var y = n(807675),
    O = n(701190),
    v = n(226951),
    I = n(591759),
    T = n(960904),
    S = n(981631);
let A = 10,
    N = /^\/([a-zA-Z0-9-]+)$/,
    C = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    P = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    w = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    x = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    k = /^\/channels\/([0-9]+)\/shop$/,
    M = /^\/quests\/([0-9-]+)\/?$/,
    j = /^\/oauth2\/authorize/,
    U = /^#itemSkuId=([0-9]+)$/,
    G = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = q(window.GLOBAL_ENV.INVITE_HOST),
    V = q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    F = q(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : '//canary.'.concat(S.$R1)),
    Z = q('//canary.'.concat(S.$R1)),
    H = q('//ptb.'.concat(S.$R1)),
    Y = q('discordapp.com'),
    W = q('discord.com'),
    K = [v.Z.escape(null != (s = B.host) ? s : ''), v.Z.escape(null != (l = V.host) ? l : ''), v.Z.escape(null != (c = F.host) ? c : ''), v.Z.escape(null != (u = Y.host) ? u : ''), v.Z.escape(null != (d = W.host) ? d : '')].filter(Boolean),
    z = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(K.join('|'), ')'), 'g');
function q(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, m.parse)(e, void 0, !0);
        return {
            host: t.host,
            pathPrefix: t.pathname
        };
    }
    return {
        host: e,
        pathPrefix: null
    };
}
let X = (e) => e.replaceAll(J, ' $2 '),
    Q = null == (a = h().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? void 0 : r.source;
(_()(Q, 'SimpleMarkdown link regex is not set.'), '^' === Q[0] && (Q = Q.substring(1)));
let J = RegExp(Q, 'g');
function $(e, t) {
    var n;
    return (null == (n = t.host) ? void 0 : n.replace(/^www[.]/i, '')) === e.host;
}
function ee(e, t) {
    var n, r;
    if (!$(e, t)) return null;
    let i = null != (n = t.pathname) ? n : '',
        a = null != (r = e.pathPrefix) ? r : '';
    if (!i.startsWith(a)) return null;
    let o = i.substring(a.length);
    return '' === o ? null : o;
}
function et(e) {
    var t, n, r, i;
    return null != (i = null != (r = null != (n = null != (t = ee(F, e)) ? t : ee(Z, e)) ? n : ee(H, e)) ? r : ee(Y, e)) ? i : ee(W, e);
}
function en(e) {
    if (null == e) return null;
    let t = e.match(P);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4]
          }
        : null;
}
function er(e) {
    var t, n, r, i;
    let a = es(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let o = ee(B, a),
        s = ee(V, a),
        l = null != (i = null != (r = null != (n = null != (t = ee(F, a)) ? t : ee(Z, a)) ? n : ee(H, a)) ? r : ee(Y, a)) ? i : ee(W, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function ei(e) {
    if (e.includes('\\')) {
        let r = es(e);
        if (null == r) return !1;
        if ($(B, r)) return !0;
        if ([F, Z, H, Y, W].some((e) => $(e, r))) {
            var t, n;
            return null != (n = null == (t = r.pathname) ? void 0 : t.toUpperCase().includes(T.g.INVITE)) && n;
        }
    }
    return !1;
}
function ea(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = X((e = e.replace(z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e)))).match(I.Z.URL_REGEX),
        i = e.match(G);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, o, s;
        if (n.length >= A) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: l, primaryHostRemainingPath: c } = er(e);
        if (null == r || null == r.pathname) continue;
        let u = (r, i) => {
            t.has(i) ||
                (t.add(i),
                n.push({
                    type: r,
                    code: i,
                    url: e
                }));
        };
        if ((null == i ? void 0 : i.match(N)) != null && ('https:' === r.protocol || 'http:' === r.protocol)) {
            let t = (0, b.mb)(i.substring(1), r.search);
            if ((O.Z.getInvite(t), e.includes('\\'))) continue;
            u(T.g.INVITE, t);
        }
        (null == l ? void 0 : l.match(N)) != null && u(T.g.TEMPLATE, l.substring(1));
        let d = null == c ? void 0 : c.match(R);
        if (null != d) {
            let t = d[1].toUpperCase();
            if (t === T.g.INVITE) {
                if (e.includes('\\')) continue;
                let t = (0, b.mb)(d[2], r.search);
                u(T.g.INVITE, t);
            } else u(t, d[2]);
        }
        (null == c ? void 0 : c.match(C)) != null && u(T.g.CHANNEL_LINK, c.replace('/channels/', ''));
        let f = en(r.pathname);
        if ((null != f && u(T.g.EVENT, ''.concat(f.guildId, '-').concat(f.guildEventId) + (null != f.recurrenceId ? '-'.concat(f.recurrenceId) : '')), null != (null == c ? void 0 : c.match(j)) && null != r.query)) {
            let e = (0, y.y)(r.query),
                t = e.clientId;
            null == t || '' === t || (null == (a = e.scopes) ? void 0 : a.some((e) => e !== g.x.APPLICATIONS_COMMANDS)) || u(T.g.APP_OAUTH2_LINK, t);
        }
        let _ = null == c ? void 0 : c.match(w);
        if (null != _) {
            let e = _[2];
            u(T.g.APP_DIRECTORY_PROFILE, e);
        }
        let p = null == c ? void 0 : c.match(D);
        if (null != p) {
            let e = p[2],
                t = p[3];
            if (null != t) {
                let n = (0, E.l)(e, t);
                u(T.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else u(T.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let h = null == c ? void 0 : c.match(L);
        if (null != h) {
            let e = h[1];
            u(T.g.ACTIVITY_BOOKMARK, e);
        }
        let m = null == c ? void 0 : c.match(x);
        null != m && u(T.g.GUILD_PRODUCT, ''.concat(m[1], '-').concat(m[2]));
        let v = null == c ? void 0 : c.match(k);
        null != v && u(T.g.SERVER_SHOP, v[1]);
        let I = eo(e);
        if ((null != I && u(T.g.QUESTS_EMBED, I), '/shop' === c)) {
            let e = null == (o = r.hash) ? void 0 : o.match(U);
            u(T.g.COLLECTIBLES_SHOP, null != (s = null == e ? void 0 : e[1]) ? s : '');
        }
    }
    return n;
}
function eo(e) {
    var t, n;
    let r = er(e),
        i = null == r || null == (t = r.primaryHostRemainingPath) ? void 0 : t.match(M);
    return null != (n = null == i ? void 0 : i[1]) ? n : null;
}
function es(e) {
    try {
        return (0, m.parse)(e);
    } catch (e) {
        return null;
    }
}
function el(e) {
    return ea(e)[0];
}
