n.d(t, {
    FO: () => eo,
    Sq: () => ee,
    ZP: () => er,
    el: () => ei,
    oO: () => G,
    zO: () => ea
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
    o,
    a,
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
    S = n(960904),
    T = n(981631);
let A = 10,
    N = /^\/([a-zA-Z0-9-]+)$/,
    C = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    P = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    w = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    x = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    M = /^\/channels\/([0-9]+)\/shop$/,
    k = /^\/quests\/([0-9-]+)\/?$/,
    j = /^\/oauth2\/authorize/,
    U = /^#itemSkuId=([0-9]+)$/,
    G = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = q(window.GLOBAL_ENV.INVITE_HOST),
    V = q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    F = q(null != (a = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? a : '//canary.'.concat(T.$R1)),
    Z = q('//canary.'.concat(T.$R1)),
    H = q('//ptb.'.concat(T.$R1)),
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
let Q = (e) => e.replaceAll(J, ' $2 '),
    X = null == (o = h().defaultRules.link) || null == (i = o.match) || null == (r = i.regex) ? void 0 : r.source;
_()(X, 'SimpleMarkdown link regex is not set.'), '^' === X[0] && (X = X.substring(1));
let J = RegExp(X, 'g');
function $(e, t) {
    var n, r, i;
    if ((null == (n = t.host) ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let o = null != (r = t.pathname) ? r : '',
        a = null != (i = e.pathPrefix) ? i : '';
    if (!o.startsWith(a)) return null;
    let s = o.substring(a.length);
    return '' === s ? null : s;
}
function ee(e) {
    var t, n, r, i;
    return null != (i = null != (r = null != (n = null != (t = $(F, e)) ? t : $(Z, e)) ? n : $(H, e)) ? r : $(Y, e)) ? i : $(W, e);
}
function et(e) {
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
function en(e) {
    var t, n, r, i;
    let o = eo(e);
    if (null == o || null == o.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let a = $(B, o),
        s = $(V, o),
        l = null != (i = null != (r = null != (n = null != (t = $(F, o)) ? t : $(Z, o)) ? n : $(H, o)) ? r : $(Y, o)) ? i : $(W, o);
    return {
        url: o,
        inviteHostRemainingPath: a,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function er(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = Q((e = e.replace(z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e)))).match(I.Z.URL_REGEX),
        i = e.match(G);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var o, a, s;
        if (n.length >= A) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: l, primaryHostRemainingPath: c } = en(e);
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
            let e = (0, b.mb)(i.substring(1), r.search);
            O.Z.getInvite(e), u(S.g.INVITE, e);
        }
        (null == l ? void 0 : l.match(N)) != null && u(S.g.TEMPLATE, l.substring(1));
        let d = null == c ? void 0 : c.match(R);
        if (null != d) {
            let e = d[1].toUpperCase();
            if (e === S.g.INVITE) {
                let e = (0, b.mb)(d[2], r.search);
                u(S.g.INVITE, e);
            } else u(e, d[2]);
        }
        (null == c ? void 0 : c.match(C)) != null && u(S.g.CHANNEL_LINK, c.replace('/channels/', ''));
        let f = et(r.pathname);
        if ((null != f && u(S.g.EVENT, ''.concat(f.guildId, '-').concat(f.guildEventId) + (null != f.recurrenceId ? '-'.concat(f.recurrenceId) : '')), null != (null == c ? void 0 : c.match(j)) && null != r.query)) {
            let e = (0, y.y)(r.query),
                t = e.clientId;
            null == t || '' === t || (null == (o = e.scopes) ? void 0 : o.some((e) => e !== g.x.APPLICATIONS_COMMANDS)) || u(S.g.APP_OAUTH2_LINK, t);
        }
        let _ = null == c ? void 0 : c.match(w);
        if (null != _) {
            let e = _[2];
            u(S.g.APP_DIRECTORY_PROFILE, e);
        }
        let p = null == c ? void 0 : c.match(D);
        if (null != p) {
            let e = p[2],
                t = p[3];
            if (null != t) {
                let n = (0, E.l)(e, t);
                u(S.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else u(S.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let h = null == c ? void 0 : c.match(L);
        if (null != h) {
            let e = h[1];
            u(S.g.ACTIVITY_BOOKMARK, e);
        }
        let m = null == c ? void 0 : c.match(x);
        null != m && u(S.g.GUILD_PRODUCT, ''.concat(m[1], '-').concat(m[2]));
        let v = null == c ? void 0 : c.match(M);
        null != v && u(S.g.SERVER_SHOP, v[1]);
        let I = ei(e);
        if ((null != I && u(S.g.QUESTS_EMBED, I), '/shop' === c)) {
            let e = null == (a = r.hash) ? void 0 : a.match(U);
            u(S.g.COLLECTIBLES_SHOP, null != (s = null == e ? void 0 : e[1]) ? s : '');
        }
    }
    return n;
}
function ei(e) {
    var t, n;
    let r = en(e),
        i = null == r || null == (t = r.primaryHostRemainingPath) ? void 0 : t.match(k);
    return null != (n = null == i ? void 0 : i[1]) ? n : null;
}
function eo(e) {
    try {
        return (0, m.parse)(e);
    } catch (e) {
        return null;
    }
}
function ea(e) {
    return er(e)[0];
}
