n.d(t, {
    FO: () => q,
    Sq: () => H,
    ZP: () => K,
    el: () => z,
    oO: () => D,
    zO: () => Q
}),
    n(474991),
    n(398202),
    n(301563),
    n(757143),
    n(47120),
    n(653041);
var r,
    i,
    o,
    a,
    s,
    l,
    c = n(729594),
    u = n(243814),
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
let b = 10,
    v = /^\/([a-zA-Z0-9-]+)$/,
    y = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    O = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    I = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    T = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    N = /^\/activities\/([0-9-]+)\/?$/,
    A = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    P = /^\/oauth2\/authorize/,
    w = /^#itemSkuId=([0-9]+)$/,
    D = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    L = V(window.GLOBAL_ENV.INVITE_HOST),
    x = V(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = V(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(E.$R1)),
    k = V('//canary.'.concat(E.$R1)),
    j = V('//ptb.'.concat(E.$R1)),
    U = V('discordapp.com'),
    G = V('discord.com'),
    B = [h.Z.escape(null !== (i = L.host) && void 0 !== i ? i : ''), h.Z.escape(null !== (o = x.host) && void 0 !== o ? o : ''), h.Z.escape(null !== (a = M.host) && void 0 !== a ? a : ''), h.Z.escape(null !== (s = U.host) && void 0 !== s ? s : ''), h.Z.escape(null !== (l = G.host) && void 0 !== l ? l : '')].filter(Boolean),
    F = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(B.join('|'), ')'), 'g');
function V(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, c.parse)(e, void 0, !0);
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
function Z(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let o = null !== (r = t.pathname) && void 0 !== r ? r : '',
        a = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!o.startsWith(a)) return null;
    let s = o.substring(a.length);
    return '' === s ? null : s;
}
function H(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = Z(M, e)) && void 0 !== t ? t : Z(k, e)) && void 0 !== n ? n : Z(j, e)) && void 0 !== r ? r : Z(U, e)) && void 0 !== i ? i : Z(G, e);
}
function W(e) {
    if (null == e) return null;
    let t = e.match(I);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4]
          }
        : null;
}
function Y(e) {
    var t, n, r, i;
    let o = q(e);
    if (null == o || null == o.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let a = Z(L, o),
        s = Z(x, o),
        l = null !== (i = null !== (r = null !== (n = null !== (t = Z(M, o)) && void 0 !== t ? t : Z(k, o)) && void 0 !== n ? n : Z(j, o)) && void 0 !== r ? r : Z(U, o)) && void 0 !== i ? i : Z(G, o);
    return {
        url: o,
        inviteHostRemainingPath: a,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function K(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(F, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(D);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var o, a, s;
        if (n.length >= b) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: l, primaryHostRemainingPath: c } = Y(e);
        if (null == r || null == r.pathname) continue;
        let h = (r, i) => {
            t.has(i) ||
                (t.add(i),
                n.push({
                    type: r,
                    code: i,
                    url: e
                }));
        };
        if ((null == i ? void 0 : i.match(v)) != null && ('https:' === r.protocol || 'http:' === r.protocol)) {
            let e = (0, f.mb)(i.substring(1), r.search);
            p.Z.getInvite(e), h(g.g.INVITE, e);
        }
        (null == l ? void 0 : l.match(v)) != null && h(g.g.TEMPLATE, l.substring(1));
        let m = null == c ? void 0 : c.match(O);
        if (null != m) {
            let e = m[1].toUpperCase();
            if (e === g.g.INVITE) {
                let e = (0, f.mb)(m[2], r.search);
                h(g.g.INVITE, e);
            } else h(e, m[2]);
        }
        (null == c ? void 0 : c.match(y)) != null && h(g.g.CHANNEL_LINK, c.replace('/channels/', ''));
        let E = W(r.pathname);
        if ((null != E && h(g.g.EVENT, ''.concat(E.guildId, '-').concat(E.guildEventId) + (null != E.recurrenceId ? '-'.concat(E.recurrenceId) : '')), null != (null == c ? void 0 : c.match(P)) && null != r.query)) {
            let e = (0, _.y)(r.query),
                t = e.clientId;
            null == t || '' === t || (null === (o = e.scopes) || void 0 === o ? void 0 : o.some((e) => e !== u.x.APPLICATIONS_COMMANDS)) || h(g.g.APP_OAUTH2_LINK, t);
        }
        let I = null == c ? void 0 : c.match(S);
        if (null != I) {
            let e = I[2];
            h(g.g.APP_DIRECTORY_PROFILE, e);
        }
        let R = null == c ? void 0 : c.match(T);
        if (null != R) {
            let e = R[2],
                t = R[3];
            if (null != t) {
                let n = (0, d.l)(e, t);
                h(g.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else h(g.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let D = null == c ? void 0 : c.match(N);
        if (null != D) {
            let e = D[1];
            h(g.g.ACTIVITY_BOOKMARK, e);
        }
        let L = null == c ? void 0 : c.match(A);
        null != L && h(g.g.GUILD_PRODUCT, ''.concat(L[1], '-').concat(L[2]));
        let x = null == c ? void 0 : c.match(C);
        null != x && h(g.g.SERVER_SHOP, x[1]);
        let M = z(e);
        if ((null != M && h(g.g.QUESTS_EMBED, M), '/shop' === c)) {
            let e = null === (a = r.hash) || void 0 === a ? void 0 : a.match(w);
            h(g.g.COLLECTIBLES_SHOP, null !== (s = null == e ? void 0 : e[1]) && void 0 !== s ? s : '');
        }
    }
    return n;
}
function z(e) {
    var t, n;
    let r = Y(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function q(e) {
    try {
        return (0, c.parse)(e);
    } catch (e) {
        return null;
    }
}
function Q(e) {
    return K(e)[0];
}
