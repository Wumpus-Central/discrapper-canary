n.r(t),
    n.d(t, {
        fetchAssetIds: () => O,
        getAssetFromImageURL: () => T,
        getAssetIds: () => D,
        getAssetImage: () => S,
        getAssets: () => A
    }),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(430449),
    l = n(710845),
    u = n(134432),
    c = n(981631);
let d = 'mp',
    f = 3600000,
    _ = 'https://i.scdn.co/image/',
    p = (e, t, n) => 'https://static-cdn.jtvnw.net/previews-ttv/live_user_'.concat(e, '-').concat(t, 'x').concat(n, '.jpg'),
    h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    m = (e) => 'https://i.ytimg.com/vi/'.concat(e, '/hqdefault_live.jpg'),
    g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    E = {
        [c.ABu.SPOTIFY]: {
            deserialize: (e) => ''.concat(_).concat(encodeURIComponent(e)),
            serialize: (e) => e.split(_)[1]
        },
        [c.ABu.TWITCH]: {
            deserialize: (e, t) => p(encodeURIComponent(e), t[0], t[1]),
            serialize: (e) => {
                let t = e.match(h);
                return null != t ? t[1] : null;
            }
        },
        [c.ABu.YOUTUBE]: {
            deserialize: (e) => m(encodeURIComponent(e)),
            serialize: (e) => {
                let t = e.match(g);
                return null != t ? t[1] : null;
            }
        },
        [d]: {
            deserialize: (e) => (r()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, 'MEDIA_PROXY_ENDPOINT not configured'), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
            serialize: (e) => e
        }
    },
    v = {};
function y(e) {
    return Date.now() - e > f;
}
async function I(e) {
    let { body: t } = await a.tn.get({
        url: c.ANM.APPLICATION_ASSETS(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        s.Z.dispatch({
            type: 'APPLICATION_ASSETS_UPDATE',
            applicationId: e,
            assets: t
        }),
        o.Z.getApplicationAssets(e)
    );
}
function b(e) {
    let t = o.Z.getApplicationAssets(e);
    return null == t || y(t.lastUpdated) ? I(e) : Promise.resolve(t);
}
function T(e, t) {
    let n = E[e].serialize(t);
    return n ? ''.concat(e, ':').concat(n.toString()) : null;
}
function S(e, t, n) {
    if (null != t && t.includes(':')) {
        let [e, i] = t.split(':');
        if (e === c.ABu.TWITCH) {
            if (null == n || 'number' == typeof n) {
                new l.Z('ApplicationAssetUtils').warn('getAssetImage: size must === [number, number] for Twitch');
                return;
            }
            return E[c.ABu.TWITCH].deserialize(i, n);
        }
        return Object.prototype.hasOwnProperty.call(E, e) ? E[e].deserialize(i) : void 0;
    }
    if (null == e || null == t) return;
    let i = Array.isArray(n) ? Math.max(...n) : n,
        r = 'number' == typeof i ? '?size='.concat((0, u.oO)(i)) : '';
    return null != window.GLOBAL_ENV.CDN_HOST
        ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/app-assets/').concat(e, '/').concat(t, '.png').concat(r)
        : ''
              .concat((0, a.K0)(), '/applications/')
              .concat(e, '/app-assets/')
              .concat(t, '.png')
              .concat(r);
}
async function A(e) {
    let t = await b(e);
    return null == t ? void 0 : t.assets;
}
async function N(e, t) {
    let n = t.filter((e) => null != e && !Object.prototype.hasOwnProperty.call(v, e) && null == v[e]);
    if (0 === n.length) return;
    let { body: i } = await a.tn.post({
        url: c.ANM.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    for (let { url: e, external_asset_path: t } of i) v[e] = t;
}
function C(e, t) {
    let n = 0;
    if (e.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:'))).length > 0)
        for (let i = 0; i < e.length; i++) {
            let r = e[i];
            if (null == r) continue;
            let a = Object.prototype.hasOwnProperty.call(v, r) ? v[r] : void 0;
            null != a && ((t[i] = T(d, a)), n++);
        }
    return n === e.length;
}
function R(e, t, n, i) {
    let r = !1;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        if (null == s || null != t[a]) continue;
        let o = Object.prototype.hasOwnProperty.call(n, s) && n[s];
        if (!o) {
            if (null == i || i <= 0) {
                t[a] = null;
                continue;
            }
            r = !0;
        }
        t[a] = o.id;
    }
    return r;
}
async function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    s.Z.dispatch({
        type: 'APPLICATION_ASSETS_FETCH',
        applicationId: e
    });
    let i = [],
        r = t.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:')));
    if ((r.length > 0 && (await N(e, r)), C(t, i)))
        return (
            s.Z.dispatch({
                type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
                applicationId: e
            }),
            i
        );
    let a = await A(e);
    return (s.Z.dispatch({
        type: 'APPLICATION_ASSETS_UPDATE',
        applicationId: e,
        assets: a
    }),
    R(t, i, a, n))
        ? I(e).then(() => O(e, t, n - 1))
        : (s.Z.dispatch({
              type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
              applicationId: e
          }),
          i);
}
function D(e, t) {
    var n;
    let i = [];
    if (C(t, i)) return i;
    let r = null === (n = o.Z.getApplicationAssets(e)) || void 0 === n ? void 0 : n.assets;
    return null == r || R(t, i, r), i;
}
