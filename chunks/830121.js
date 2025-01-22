r.d(n, {
    FO: function () {
        return $;
    },
    Sq: function () {
        return z;
    },
    ZP: function () {
        return X;
    },
    el: function () {
        return J;
    },
    oO: function () {
        return k;
    },
    zO: function () {
        return ee;
    }
});
var i,
    a,
    o,
    s,
    l,
    u,
    c = r(757143);
var d = r(47120);
var f = r(653041);
var p = r(729594),
    h = r(243814),
    _ = r(421474);
r(865427);
var m = r(264229);
r(413605);
var g = r(807675),
    E = r(701190),
    v = r(226951),
    y = r(591759),
    b = r(960904),
    I = r(981631);
let T = 10,
    S = /^\/([a-zA-Z0-9-]+)$/,
    A = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    C = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    N = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    R = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    O = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    D = /^\/activities\/([0-9-]+)\/?$/,
    x = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    L = /^\/channels\/([0-9]+)\/shop$/,
    w = /^\/quests\/([0-9-]+)\/?$/,
    P = /^\/oauth2\/authorize/,
    M = /^#itemSkuId=([0-9]+)$/,
    k = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    U = W(window.GLOBAL_ENV.INVITE_HOST),
    B = W(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    G = W(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : '//canary.'.concat(I.$R1)),
    Z = W('//canary.'.concat(I.$R1)),
    F = W('//ptb.'.concat(I.$R1)),
    V = W('discordapp.com'),
    j = W('discord.com'),
    H = [v.Z.escape(null !== (a = U.host) && void 0 !== a ? a : ''), v.Z.escape(null !== (o = B.host) && void 0 !== o ? o : ''), v.Z.escape(null !== (s = G.host) && void 0 !== s ? s : ''), v.Z.escape(null !== (l = V.host) && void 0 !== l ? l : ''), v.Z.escape(null !== (u = j.host) && void 0 !== u ? u : '')].filter(Boolean),
    Y = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(H.join('|'), ')'), 'g');
function W(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let n = (0, p.parse)(e, void 0, !0);
        return {
            host: n.host,
            pathPrefix: n.pathname
        };
    }
    return {
        host: e,
        pathPrefix: null
    };
}
function K(e, n) {
    var r, i, a;
    if ((null === (r = n.host) || void 0 === r ? void 0 : r.replace(/^www[.]/i, '')) !== e.host) return null;
    let o = null !== (i = n.pathname) && void 0 !== i ? i : '',
        s = null !== (a = e.pathPrefix) && void 0 !== a ? a : '';
    if (!o.startsWith(s)) return null;
    let l = o.substring(s.length);
    return '' === l ? null : l;
}
function z(e) {
    var n, r, i, a;
    return null !== (a = null !== (i = null !== (r = null !== (n = K(G, e)) && void 0 !== n ? n : K(Z, e)) && void 0 !== r ? r : K(F, e)) && void 0 !== i ? i : K(V, e)) && void 0 !== a ? a : K(j, e);
}
function q(e) {
    if (null == e) return null;
    let n = e.match(N);
    return null != n && n.length >= 4
        ? {
              guildId: n[1],
              guildEventId: n[2],
              recurrenceId: n[4]
          }
        : null;
}
function Q(e) {
    var n, r, i, a;
    let o = $(e);
    if (null == o || null == o.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = K(U, o),
        l = K(B, o),
        u = null !== (a = null !== (i = null !== (r = null !== (n = K(G, o)) && void 0 !== n ? n : K(Z, o)) && void 0 !== r ? r : K(F, o)) && void 0 !== i ? i : K(V, o)) && void 0 !== a ? a : K(j, o);
    return {
        url: o,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: l,
        primaryHostRemainingPath: u
    };
}
function X(e) {
    if (null == e) return [];
    let n = new Set(),
        r = [],
        i = (e = e.replace(Y, (e, n, r, i) => (null == r ? ''.concat(n, 'http://').concat(i) : e))).match(y.Z.URL_REGEX),
        a = e.match(k);
    if (null == (i = (null != i ? i : []).concat(null != a ? a : [])) || 0 === i.length) return [];
    for (let e of i) {
        var o, s, l;
        if (r.length >= T) break;
        let { url: i, inviteHostRemainingPath: a, templateHostRemainingPath: u, primaryHostRemainingPath: c } = Q(e);
        if (null == i || null == i.pathname) continue;
        let d = (i, a) => {
            !n.has(a) &&
                (n.add(a),
                r.push({
                    type: i,
                    code: a,
                    url: e
                }));
        };
        if ((null == a ? void 0 : a.match(S)) != null) {
            let e = (0, m.mb)(a.substring(1), i.search);
            E.Z.getInvite(e);
            d(b.g.INVITE, e);
        }
        (null == u ? void 0 : u.match(S)) != null && d(b.g.TEMPLATE, u.substring(1));
        let f = null == c ? void 0 : c.match(C);
        if (null != f) {
            let e = f[1].toUpperCase();
            if (e === b.g.INVITE) {
                let e = (0, m.mb)(f[2], i.search);
                d(b.g.INVITE, e);
            } else d(e, f[2]);
        }
        (null == c ? void 0 : c.match(A)) != null && d(b.g.CHANNEL_LINK, c.replace('/channels/', ''));
        let p = q(i.pathname);
        if ((null != p && d(b.g.EVENT, ''.concat(p.guildId, '-').concat(p.guildEventId) + (null != p.recurrenceId ? '-'.concat(p.recurrenceId) : '')), null != (null == c ? void 0 : c.match(P)) && null != i.query)) {
            let e = (0, g.y)(i.query),
                n = e.clientId;
            null != n && '' !== n && !(null === (o = e.scopes) || void 0 === o ? void 0 : o.some((e) => e !== h.x.APPLICATIONS_COMMANDS)) && d(b.g.APP_OAUTH2_LINK, n);
        }
        let v = null == c ? void 0 : c.match(R);
        if (null != v) {
            let e = v[2];
            d(b.g.APP_DIRECTORY_PROFILE, e);
        }
        let y = null == c ? void 0 : c.match(O);
        if (null != y) {
            let e = y[2],
                n = y[3];
            if (null != n) {
                let r = (0, _.l)(e, n);
                d(b.g.APP_DIRECTORY_STOREFRONT_SKU, r);
            } else d(b.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let I = null == c ? void 0 : c.match(D);
        if (null != I) {
            let e = I[1];
            d(b.g.ACTIVITY_BOOKMARK, e);
        }
        let N = null == c ? void 0 : c.match(x);
        null != N && d(b.g.GUILD_PRODUCT, ''.concat(N[1], '-').concat(N[2]));
        let w = null == c ? void 0 : c.match(L);
        null != w && d(b.g.SERVER_SHOP, w[1]);
        let k = J(e);
        if ((null != k && d(b.g.QUESTS_EMBED, k), '/shop' === c)) {
            let e = null === (s = i.hash) || void 0 === s ? void 0 : s.match(M);
            d(b.g.COLLECTIBLES_SHOP, null !== (l = null == e ? void 0 : e[1]) && void 0 !== l ? l : '');
        }
    }
    return r;
}
function J(e) {
    var n, r;
    let i = Q(e),
        a = null == i ? void 0 : null === (n = i.primaryHostRemainingPath) || void 0 === n ? void 0 : n.match(w);
    return null !== (r = null == a ? void 0 : a[1]) && void 0 !== r ? r : null;
}
function $(e) {
    try {
        return (0, p.parse)(e);
    } catch (e) {
        return null;
    }
}
function ee(e) {
    return X(e)[0];
}
