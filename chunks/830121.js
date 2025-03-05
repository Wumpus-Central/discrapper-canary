n.d(t, {
    FO: () => eo,
    Sq: () => ee,
    ZP: () => er,
    el: () => ei,
    oO: () => G,
    zO: () => ea
}),
    n(474991),
    n(398202),
    n(301563),
    n(627494),
    n(757143),
    n(47120),
    n(653041);
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
    p = n(477660),
    h = n.n(p),
    g = n(729594),
    m = n(243814),
    E = n(421474);
n(865427);
var v = n(264229);
n(413605);
var b = n(807675),
    y = n(701190),
    O = n(226951),
    S = n(591759),
    I = n(960904),
    T = n(981631);
let N = 10,
    A = /^\/([a-zA-Z0-9-]+)$/,
    C = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    P = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    w = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    x = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    M = /^\/channels\/([0-9]+)\/shop$/,
    k = /^\/quests\/([0-9-]+)\/?$/,
    j = /^\/oauth2\/authorize/,
    U = /^#itemSkuId=([0-9]+)$/,
    G = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = q(window.GLOBAL_ENV.INVITE_HOST),
    V = q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    F = q(null !== (a = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== a ? a : '//canary.'.concat(T.$R1)),
    Z = q('//canary.'.concat(T.$R1)),
    H = q('//ptb.'.concat(T.$R1)),
    W = q('discordapp.com'),
    Y = q('discord.com'),
    K = [O.Z.escape(null !== (s = B.host) && void 0 !== s ? s : ''), O.Z.escape(null !== (l = V.host) && void 0 !== l ? l : ''), O.Z.escape(null !== (c = F.host) && void 0 !== c ? c : ''), O.Z.escape(null !== (u = W.host) && void 0 !== u ? u : ''), O.Z.escape(null !== (d = Y.host) && void 0 !== d ? d : '')].filter(Boolean),
    z = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(K.join('|'), ')'), 'g');
function q(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, g.parse)(e, void 0, !0);
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
    X = null === (o = h().defaultRules.link) || void 0 === o ? void 0 : null === (i = o.match) || void 0 === i ? void 0 : null === (r = i.regex) || void 0 === r ? void 0 : r.source;
_()(X, 'SimpleMarkdown link regex is not set.'), '^' === X[0] && (X = X.substring(1));
let J = RegExp(X, 'g');
function $(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let o = null !== (r = t.pathname) && void 0 !== r ? r : '',
        a = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!o.startsWith(a)) return null;
    let s = o.substring(a.length);
    return '' === s ? null : s;
}
function ee(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = $(F, e)) && void 0 !== t ? t : $(Z, e)) && void 0 !== n ? n : $(H, e)) && void 0 !== r ? r : $(W, e)) && void 0 !== i ? i : $(Y, e);
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
        l = null !== (i = null !== (r = null !== (n = null !== (t = $(F, o)) && void 0 !== t ? t : $(Z, o)) && void 0 !== n ? n : $(H, o)) && void 0 !== r ? r : $(W, o)) && void 0 !== i ? i : $(Y, o);
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
        r = Q((e = e.replace(z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e)))).match(S.Z.URL_REGEX),
        i = e.match(G);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var o, a, s;
        if (n.length >= N) break;
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
        if ((null == i ? void 0 : i.match(A)) != null) {
            let e = (0, v.mb)(i.substring(1), r.search);
            y.Z.getInvite(e), u(I.g.INVITE, e);
        }
        (null == l ? void 0 : l.match(A)) != null && u(I.g.TEMPLATE, l.substring(1));
        let d = null == c ? void 0 : c.match(R);
        if (null != d) {
            let e = d[1].toUpperCase();
            if (e === I.g.INVITE) {
                let e = (0, v.mb)(d[2], r.search);
                u(I.g.INVITE, e);
            } else u(e, d[2]);
        }
        (null == c ? void 0 : c.match(C)) != null && u(I.g.CHANNEL_LINK, c.replace('/channels/', ''));
        let f = et(r.pathname);
        if ((null != f && u(I.g.EVENT, ''.concat(f.guildId, '-').concat(f.guildEventId) + (null != f.recurrenceId ? '-'.concat(f.recurrenceId) : '')), null != (null == c ? void 0 : c.match(j)) && null != r.query)) {
            let e = (0, b.y)(r.query),
                t = e.clientId;
            null == t || '' === t || (null === (o = e.scopes) || void 0 === o ? void 0 : o.some((e) => e !== m.x.APPLICATIONS_COMMANDS)) || u(I.g.APP_OAUTH2_LINK, t);
        }
        let _ = null == c ? void 0 : c.match(D);
        if (null != _) {
            let e = _[2];
            u(I.g.APP_DIRECTORY_PROFILE, e);
        }
        let p = null == c ? void 0 : c.match(w);
        if (null != p) {
            let e = p[2],
                t = p[3];
            if (null != t) {
                let n = (0, E.l)(e, t);
                u(I.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else u(I.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let h = null == c ? void 0 : c.match(L);
        if (null != h) {
            let e = h[1];
            u(I.g.ACTIVITY_BOOKMARK, e);
        }
        let g = null == c ? void 0 : c.match(x);
        null != g && u(I.g.GUILD_PRODUCT, ''.concat(g[1], '-').concat(g[2]));
        let O = null == c ? void 0 : c.match(M);
        null != O && u(I.g.SERVER_SHOP, O[1]);
        let S = ei(e);
        if ((null != S && u(I.g.QUESTS_EMBED, S), '/shop' === c)) {
            let e = null === (a = r.hash) || void 0 === a ? void 0 : a.match(U);
            u(I.g.COLLECTIBLES_SHOP, null !== (s = null == e ? void 0 : e[1]) && void 0 !== s ? s : '');
        }
    }
    return n;
}
function ei(e) {
    var t, n;
    let r = en(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(k);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function eo(e) {
    try {
        return (0, g.parse)(e);
    } catch (e) {
        return null;
    }
}
function ea(e) {
    return er(e)[0];
}
