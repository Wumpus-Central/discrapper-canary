n.d(t, {
    FO: () => q,
    Sq: () => H,
    ZP: () => K,
    el: () => z,
    oO: () => x,
    zO: () => Q
}),
    n(757143),
    n(47120),
    n(653041);
var i,
    r,
    a,
    s,
    o,
    l,
    u = n(729594),
    c = n(243814),
    d = n(421474);
n(865427);
var f = n(264229);
n(413605);
var _ = n(807675),
    p = n(701190),
    h = n(226951),
    m = n(591759),
    g = n(960904),
    E = n(981631);
let v = 10,
    y = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    b = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    A = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    N = /^\/activities\/([0-9-]+)\/?$/,
    C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^\/channels\/([0-9]+)\/shop$/,
    O = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/oauth2\/authorize/,
    L = /^#itemSkuId=([0-9]+)$/,
    x = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = V(window.GLOBAL_ENV.INVITE_HOST),
    w = V(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = V(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : '//canary.'.concat(E.$R1)),
    k = V('//canary.'.concat(E.$R1)),
    U = V('//ptb.'.concat(E.$R1)),
    G = V('discordapp.com'),
    B = V('discord.com'),
    Z = [h.Z.escape(null !== (r = P.host) && void 0 !== r ? r : ''), h.Z.escape(null !== (a = w.host) && void 0 !== a ? a : ''), h.Z.escape(null !== (s = M.host) && void 0 !== s ? s : ''), h.Z.escape(null !== (o = G.host) && void 0 !== o ? o : ''), h.Z.escape(null !== (l = B.host) && void 0 !== l ? l : '')].filter(Boolean),
    F = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(Z.join('|'), ')'), 'g');
function V(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, u.parse)(e, void 0, !0);
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
function j(e, t) {
    var n, i, r;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (i = t.pathname) && void 0 !== i ? i : '',
        s = null !== (r = e.pathPrefix) && void 0 !== r ? r : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function H(e) {
    var t, n, i, r;
    return null !== (r = null !== (i = null !== (n = null !== (t = j(M, e)) && void 0 !== t ? t : j(k, e)) && void 0 !== n ? n : j(U, e)) && void 0 !== i ? i : j(G, e)) && void 0 !== r ? r : j(B, e);
}
function Y(e) {
    if (null == e) return null;
    let t = e.match(b);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4]
          }
        : null;
}
function W(e) {
    var t, n, i, r;
    let a = q(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = j(P, a),
        o = j(w, a),
        l = null !== (r = null !== (i = null !== (n = null !== (t = j(M, a)) && void 0 !== t ? t : j(k, a)) && void 0 !== n ? n : j(U, a)) && void 0 !== i ? i : j(G, a)) && void 0 !== r ? r : j(B, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function K(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        i = (e = e.replace(F, (e, t, n, i) => (null == n ? ''.concat(t, 'http://').concat(i) : e))).match(m.Z.URL_REGEX),
        r = e.match(x);
    if (null == (i = (null != i ? i : []).concat(null != r ? r : [])) || 0 === i.length) return [];
    for (let e of i) {
        var a, s, o;
        if (n.length >= v) break;
        let { url: i, inviteHostRemainingPath: r, templateHostRemainingPath: l, primaryHostRemainingPath: u } = W(e);
        if (null == i || null == i.pathname) continue;
        let h = (i, r) => {
            t.has(r) ||
                (t.add(r),
                n.push({
                    type: i,
                    code: r,
                    url: e
                }));
        };
        if ((null == r ? void 0 : r.match(y)) != null) {
            let e = (0, f.mb)(r.substring(1), i.search);
            p.Z.getInvite(e), h(g.g.INVITE, e);
        }
        (null == l ? void 0 : l.match(y)) != null && h(g.g.TEMPLATE, l.substring(1));
        let m = null == u ? void 0 : u.match(T);
        if (null != m) {
            let e = m[1].toUpperCase();
            if (e === g.g.INVITE) {
                let e = (0, f.mb)(m[2], i.search);
                h(g.g.INVITE, e);
            } else h(e, m[2]);
        }
        (null == u ? void 0 : u.match(I)) != null && h(g.g.CHANNEL_LINK, u.replace('/channels/', ''));
        let E = Y(i.pathname);
        if ((null != E && h(g.g.EVENT, ''.concat(E.guildId, '-').concat(E.guildEventId) + (null != E.recurrenceId ? '-'.concat(E.recurrenceId) : '')), null != (null == u ? void 0 : u.match(D)) && null != i.query)) {
            let e = (0, _.y)(i.query),
                t = e.clientId;
            null == t || '' === t || (null === (a = e.scopes) || void 0 === a ? void 0 : a.some((e) => e !== c.x.APPLICATIONS_COMMANDS)) || h(g.g.APP_OAUTH2_LINK, t);
        }
        let b = null == u ? void 0 : u.match(S);
        if (null != b) {
            let e = b[2];
            h(g.g.APP_DIRECTORY_PROFILE, e);
        }
        let O = null == u ? void 0 : u.match(A);
        if (null != O) {
            let e = O[2],
                t = O[3];
            if (null != t) {
                let n = (0, d.l)(e, t);
                h(g.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else h(g.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let x = null == u ? void 0 : u.match(N);
        if (null != x) {
            let e = x[1];
            h(g.g.ACTIVITY_BOOKMARK, e);
        }
        let P = null == u ? void 0 : u.match(C);
        null != P && h(g.g.GUILD_PRODUCT, ''.concat(P[1], '-').concat(P[2]));
        let w = null == u ? void 0 : u.match(R);
        null != w && h(g.g.SERVER_SHOP, w[1]);
        let M = z(e);
        if ((null != M && h(g.g.QUESTS_EMBED, M), '/shop' === u)) {
            let e = null === (s = i.hash) || void 0 === s ? void 0 : s.match(L);
            h(g.g.COLLECTIBLES_SHOP, null !== (o = null == e ? void 0 : e[1]) && void 0 !== o ? o : '');
        }
    }
    return n;
}
function z(e) {
    var t, n;
    let i = W(e),
        r = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(O);
    return null !== (n = null == r ? void 0 : r[1]) && void 0 !== n ? n : null;
}
function q(e) {
    try {
        return (0, u.parse)(e);
    } catch (e) {
        return null;
    }
}
function Q(e) {
    return K(e)[0];
}
