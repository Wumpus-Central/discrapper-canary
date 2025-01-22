r.r(n),
    r.d(n, {
        fetchAssetIds: function () {
            return k;
        },
        getAssetFromImageURL: function () {
            return D;
        },
        getAssetIds: function () {
            return U;
        },
        getAssetImage: function () {
            return x;
        },
        getAssets: function () {
            return L;
        }
    });
var i = r(315314);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(512722),
    d = r.n(c),
    f = r(544891),
    p = r(570140),
    h = r(430449),
    _ = r(710845),
    m = r(134432),
    g = r(981631);
let E = 'mp',
    v = 3600000,
    y = 'https://i.scdn.co/image/',
    b = (e, n, r) => 'https://static-cdn.jtvnw.net/previews-ttv/live_user_'.concat(e, '-').concat(n, 'x').concat(r, '.jpg'),
    I = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    T = (e) => 'https://i.ytimg.com/vi/'.concat(e, '/hqdefault_live.jpg'),
    S = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    A = {
        [g.ABu.SPOTIFY]: {
            deserialize: (e) => ''.concat(y).concat(encodeURIComponent(e)),
            serialize: (e) => e.split(y)[1]
        },
        [g.ABu.TWITCH]: {
            deserialize: (e, n) => b(encodeURIComponent(e), n[0], n[1]),
            serialize: (e) => {
                let n = e.match(I);
                return null != n ? n[1] : null;
            }
        },
        [g.ABu.YOUTUBE]: {
            deserialize: (e) => T(encodeURIComponent(e)),
            serialize: (e) => {
                let n = e.match(S);
                return null != n ? n[1] : null;
            }
        },
        [E]: {
            deserialize: (e) => (d()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, 'MEDIA_PROXY_ENDPOINT not configured'), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
            serialize: (e) => e
        }
    },
    C = {};
function N(e) {
    return Date.now() - e > v;
}
async function R(e) {
    let { body: n } = await f.tn.get({
        url: g.ANM.APPLICATION_ASSETS(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        p.Z.dispatch({
            type: 'APPLICATION_ASSETS_UPDATE',
            applicationId: e,
            assets: n
        }),
        h.Z.getApplicationAssets(e)
    );
}
function O(e) {
    let n = h.Z.getApplicationAssets(e);
    return null == n || N(n.lastUpdated) ? R(e) : Promise.resolve(n);
}
function D(e, n) {
    let r = A[e].serialize(n);
    return r ? ''.concat(e, ':').concat(r.toString()) : null;
}
function x(e, n, r) {
    if (null != n && n.includes(':')) {
        let [e, i] = n.split(':');
        if (e === g.ABu.TWITCH) {
            if (null == r || 'number' == typeof r) {
                new _.Z('ApplicationAssetUtils').warn('getAssetImage: size must === [number, number] for Twitch');
                return;
            }
            return A[g.ABu.TWITCH].deserialize(i, r);
        }
        return Object.prototype.hasOwnProperty.call(A, e) ? A[e].deserialize(i) : void 0;
    }
    if (null == e || null == n) return;
    let i = Array.isArray(r) ? Math.max(...r) : r,
        a = 'number' == typeof i ? '?size='.concat((0, m.oO)(i)) : '';
    return null != window.GLOBAL_ENV.CDN_HOST
        ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/app-assets/').concat(e, '/').concat(n, '.png').concat(a)
        : ''
              .concat((0, f.K0)(), '/applications/')
              .concat(e, '/app-assets/')
              .concat(n, '.png')
              .concat(a);
}
async function L(e) {
    let n = await O(e);
    return null == n ? void 0 : n.assets;
}
async function w(e, n) {
    let r = n.filter((e) => null != e && !Object.prototype.hasOwnProperty.call(C, e) && null == C[e]);
    if (0 === r.length) return;
    let { body: i } = await f.tn.post({
        url: g.ANM.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: r },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    for (let { url: e, external_asset_path: n } of i) C[e] = n;
}
function P(e, n) {
    let r = 0;
    if (e.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:'))).length > 0)
        for (let i = 0; i < e.length; i++) {
            let a = e[i];
            if (null == a) continue;
            let o = Object.prototype.hasOwnProperty.call(C, a) ? C[a] : void 0;
            null != o && ((n[i] = D(E, o)), r++);
        }
    return r === e.length;
}
function M(e, n, r, i) {
    let a = !1;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        if (null == s || null != n[o]) continue;
        let l = Object.prototype.hasOwnProperty.call(r, s) && r[s];
        if (!l) {
            if (null == i || i <= 0) {
                n[o] = null;
                continue;
            }
            a = !0;
        }
        n[o] = l.id;
    }
    return a;
}
async function k(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    p.Z.dispatch({
        type: 'APPLICATION_ASSETS_FETCH',
        applicationId: e
    });
    let i = [],
        a = n.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:')));
    if ((a.length > 0 && (await w(e, a)), P(n, i)))
        return (
            p.Z.dispatch({
                type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
                applicationId: e
            }),
            i
        );
    let o = await L(e);
    return (p.Z.dispatch({
        type: 'APPLICATION_ASSETS_UPDATE',
        applicationId: e,
        assets: o
    }),
    M(n, i, o, r))
        ? R(e).then(() => k(e, n, r - 1))
        : (p.Z.dispatch({
              type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
              applicationId: e
          }),
          i);
}
function U(e, n) {
    var r;
    let i = [];
    if (P(n, i)) return i;
    let a = null === (r = h.Z.getApplicationAssets(e)) || void 0 === r ? void 0 : r.assets;
    return null == a ? i : (M(n, i, a), i);
}
