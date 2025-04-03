n.d(t, {
    Ce: () => _,
    Ji: () => d,
    _G: () => E,
    _I: () => p,
    _S: () => m,
    fD: () => h,
    mG: () => y,
    pU: () => f,
    r4: () => T
}),
    n(301563),
    n(866573),
    n(642549),
    n(787622),
    n(474991),
    n(398202),
    n(47120);
var r = n(973361),
    i = n(729594),
    o = n(544891),
    a = n(358085),
    s = n(591759),
    l = n(908442);
n(981631);
let c = void 0,
    u = '/__development/build_overrides',
    d = (0, a.isAndroid)() ? c.Version.split(' - ')[0] : (0, a.isIOS)() ? c.Version : void 0;
function f(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function _() {
    let e = s.Z.safeParseWithQuery(f(u));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          d && (e.query.version = d),
          o.tn
              .get({
                  url: i.format(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function p(e) {
    if (y(e)) return Promise.resolve(v(e));
    let t = s.Z.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = 'true'),
          d && (t.query.version = d),
          (t.host = window.location.host),
          o.tn
              .get({
                  url: i.format(t),
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
        let t = r.parse(window.document.cookie)[l.ZF];
        if (null == t) return {};
        return null != (e = JSON.parse(atob(t.substring(t.indexOf('.') + 1))).$meta.experiments) ? e : {};
    } catch (e) {
        return {};
    }
}
let g = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function E(e) {
    return null != e && g.test(e);
}
let b = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function y(e) {
    return null != e && b.test(e);
}
function v(e) {
    let t = e.match(b);
    if (null == t || 2 !== t.length) return null;
    let n = (0, a.getNativePlatform)(),
        r = t[1];
    return {
        targetBuildOverride: {
            ['discord_'.concat(n)]: {
                type: 'branch',
                id: r
            }
        },
        validForUserIds: [],
        expiresAt: 'Mon, 1 Jan 2038 00:00:00 GMT'
    };
}
let O = 's',
    I = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    S = new Set(['/__development/link', '/__development/link/']);
function T(e) {
    if (y(e))
        return {
            payload: null,
            url: e
        };
    let t = s.Z.safeParseWithQuery(e);
    if (null == t || !I.has(t.hostname) || !(O in t.query) || !S.has(t.pathname)) return null;
    for (let e in t.query) e !== O && delete t.query[e];
    return {
        payload: t.query[O],
        url: i.format(t)
    };
}
