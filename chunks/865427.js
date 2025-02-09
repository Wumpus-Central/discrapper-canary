n.d(t, {
    Ce: () => _,
    Ji: () => d,
    _G: () => E,
    _I: () => p,
    _S: () => m,
    fD: () => h,
    mG: () => y,
    pU: () => f,
    r4: () => A
}),
    n(642549),
    n(47120);
var i = n(973361),
    r = n(729594),
    a = n(544891),
    s = n(358085),
    o = n(591759),
    l = n(908442);
n(981631);
let u = void 0,
    c = '/__development/build_overrides',
    d = (0, s.isAndroid)() ? u.Version.split(' - ')[0] : (0, s.isIOS)() ? u.Version : void 0;
function f(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function _() {
    let e = o.Z.safeParseWithQuery(f(c));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          d && (e.query.version = d),
          a.tn
              .get({
                  url: r.format(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function p(e) {
    if (y(e)) return Promise.resolve(I(e));
    let t = o.Z.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = 'true'),
          d && (t.query.version = d),
          (t.host = window.location.host),
          a.tn
              .get({
                  url: r.format(t),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function h() {
    return -1 !== window.document.cookie.indexOf(''.concat(l.ZF, '='));
}
function m() {
    try {
        var e;
        let t = i.parse(window.document.cookie)[l.ZF];
        if (null == t) return {};
        let n = JSON.parse(atob(t.substring(t.indexOf('.') + 1)));
        return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {};
    } catch (e) {
        return {};
    }
}
let g = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function E(e) {
    return null != e && g.test(e);
}
let v = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function y(e) {
    return null != e && v.test(e);
}
function I(e) {
    let t = e.match(v);
    if (null == t || 2 !== t.length) return null;
    let n = (0, s.getNativePlatform)(),
        i = t[1];
    return {
        targetBuildOverride: {
            ['discord_'.concat(n)]: {
                type: 'branch',
                id: i
            }
        },
        validForUserIds: [],
        expiresAt: 'Mon, 1 Jan 2038 00:00:00 GMT'
    };
}
let T = 's',
    b = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    S = new Set(['/__development/link', '/__development/link/']);
function A(e) {
    if (y(e))
        return {
            payload: null,
            url: e
        };
    let t = o.Z.safeParseWithQuery(e);
    if (null == t || !b.has(t.hostname) || !(T in t.query) || !S.has(t.pathname)) return null;
    for (let e in t.query) e !== T && delete t.query[e];
    return {
        payload: t.query[T],
        url: r.format(t)
    };
}
