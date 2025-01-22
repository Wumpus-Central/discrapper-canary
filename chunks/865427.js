r.d(n, {
    Ce: function () {
        return m;
    },
    Ji: function () {
        return h;
    },
    _G: function () {
        return b;
    },
    _I: function () {
        return g;
    },
    _S: function () {
        return v;
    },
    fD: function () {
        return E;
    },
    mG: function () {
        return T;
    },
    pU: function () {
        return _;
    },
    r4: function () {
        return R;
    }
});
var i = r(642549);
var a = r(47120);
var o = r(973361),
    s = r(729594),
    l = r(544891),
    u = r(358085),
    c = r(591759),
    d = r(908442);
r(981631);
let f = void 0,
    p = '/__development/build_overrides',
    h = (0, u.isAndroid)() ? f.Version.split(' - ')[0] : (0, u.isIOS)() ? f.Version : void 0;
function _(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function m() {
    let e = c.Z.safeParseWithQuery(_(p));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          h && (e.query.version = h),
          l.tn
              .get({
                  url: s.format(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function g(e) {
    if (T(e)) return Promise.resolve(S(e));
    let n = c.Z.safeParseWithQuery(e);
    return null == n
        ? Promise.resolve(null)
        : ((n.search = null),
          (n.query.meta = 'true'),
          h && (n.query.version = h),
          (n.host = window.location.host),
          l.tn
              .get({
                  url: s.format(n),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function E() {
    return -1 !== window.document.cookie.indexOf(''.concat(d.ZF, '='));
}
function v() {
    try {
        var e;
        let n = o.parse(window.document.cookie)[d.ZF];
        if (null == n) return {};
        let r = JSON.parse(atob(n.substring(n.indexOf('.') + 1)));
        return null !== (e = r.$meta.experiments) && void 0 !== e ? e : {};
    } catch (e) {
        return {};
    }
}
let y = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function b(e) {
    return null != e && y.test(e);
}
let I = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function T(e) {
    return null != e && I.test(e);
}
function S(e) {
    let n = e.match(I);
    if (null == n || 2 !== n.length) return null;
    let r = (0, u.getNativePlatform)(),
        i = n[1];
    return {
        targetBuildOverride: {
            ['discord_'.concat(r)]: {
                type: 'branch',
                id: i
            }
        },
        validForUserIds: [],
        expiresAt: 'Mon, 1 Jan 2038 00:00:00 GMT'
    };
}
let A = 's',
    C = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    N = new Set(['/__development/link', '/__development/link/']);
function R(e) {
    if (T(e))
        return {
            payload: null,
            url: e
        };
    let n = c.Z.safeParseWithQuery(e);
    if (null == n || !C.has(n.hostname) || !(A in n.query) || !N.has(n.pathname)) return null;
    for (let e in n.query) e !== A && delete n.query[e];
    return {
        payload: n.query[A],
        url: s.format(n)
    };
}
