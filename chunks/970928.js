"use strict";
n.d(t, { RG: () => R, Di: () => y, uD: () => C, Y: () => v }), n(323874), n(14289), n(35956);
var i = n(284009),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(735438),
    l = n.n(o),
    u = n(17928);
let c = {},
    d = {};
function _(e) {
    let { assets: t } = e,
        n = { ...c };
    for (let e in t) {
        let i = t[e];
        (n[e] = 2), (d[e] = { assets: l().keyBy(i, "name") ?? {}, lastUpdated: Date.now() });
    }
    c = n;
}
class f extends u.Ay.Store {
    static displayName = "ApplicationAssetsStore";
    getApplicationAssetFetchState(e) {
        return c[e] ?? 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(c)
                .filter((e) => {
                    let [, t] = e;
                    return 1 === t;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                }),
        ];
    }
    getApplicationAssets(e) {
        return d[e];
    }
}
let h = new f(a.h, {
    APPLICATION_ASSETS_FETCH: function (e) {
        let { applicationId: t } = e;
        c = { ...c, [t]: 1 };
    },
    APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
        let { applicationId: t } = e;
        c = { ...c, [t]: 2 };
    },
    APPLICATION_ASSETS_UPDATE: function (e) {
        let { applicationId: t, assets: n } = e;
        null != n ? (d[t] = { assets: l().keyBy(n, "name") ?? {}, lastUpdated: Date.now() }) : delete d[t];
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: _,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: _,
});
var p = n(626584),
    E = n(776231),
    m = n(652215);
let g = "https://i.scdn.co/image/",
    A = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    I = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    T = {
        [m.fg2.SPOTIFY]: { deserialize: (e) => `${g}${encodeURIComponent(e)}`, serialize: (e) => e.split(g)[1] },
        [m.fg2.TWITCH]: {
            deserialize: (e, t) => {
                let n, i, r;
                return (
                    (n = encodeURIComponent(e)),
                    (i = t[0]),
                    (r = t[1]),
                    `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n}-${i}x${r}.jpg`
                );
            },
            serialize: (e) => {
                let t = e.match(A);
                return null != t ? t[1] : null;
            },
        },
        [m.fg2.YOUTUBE]: {
            deserialize: (e) => {
                let t;
                return (t = encodeURIComponent(e)), `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`;
            },
            serialize: (e) => {
                let t = e.match(I);
                return null != t ? t[1] : null;
            },
        },
        mp: {
            deserialize: (e) => {
                r()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                let t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT),
                    n = e.toLowerCase().endsWith(".gif"),
                    i = e.toLowerCase().endsWith(".webp"),
                    s = e.toLowerCase().endsWith(".avif");
                return (
                    n && t.searchParams.set("format", "webp"),
                    (n || i || s) && t.searchParams.set("animated", "true"),
                    t.toString()
                );
            },
            serialize: (e) => e,
        },
    },
    S = new Map();
async function N(e) {
    let { body: t } = await s.Bo.get({ url: m.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), h.getApplicationAssets(e);
}
function y(e, t) {
    let n = T[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function C(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, i] = t.split(":");
        return e === m.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new p.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : T[m.fg2.TWITCH].deserialize(i, n)
            : Object.prototype.hasOwnProperty.call(T, e)
              ? T[e].deserialize(i)
              : void 0;
    }
    if (null == e || null == t) return;
    let r = Array.isArray(n) ? Math.max(...n) : n,
        a = "number" == typeof r ? `?size=${(0, E.kr)(r)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${i}${a}`
        : `${(0, s.TP)()}/applications/${e}/app-assets/${t}.${i}${a}`;
}
async function v(e) {
    var t;
    let n,
        i = await (null == (n = h.getApplicationAssets(e)) || ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? N(e)
            : Promise.resolve(n));
    return i?.assets;
}
async function O(e, t) {
    let n = t.filter((e) => null != e && null == S.get(e));
    if (0 === n.length) return;
    let { body: i } = await s.Bo.post({
        url: m.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of i) S.set(e, t);
}
async function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let i = [],
        r = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if (
        (r.length > 0 && (await O(e, r)),
        (function (e, t) {
            let n = 0;
            if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
                for (let i = 0; i < e.length; i++) {
                    let r = e[i];
                    if (null == r) continue;
                    let s = S.get(r);
                    null != s && ((t[i] = y("mp", s)), n++);
                }
            return n === e.length;
        })(t, i))
    )
        return a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), i;
    let s = await v(e);
    return (a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: s }),
    (function (e, t, n, i) {
        let r = !1;
        for (let s = 0; s < e.length; s++) {
            let a = e[s];
            if (null == a || null != t[s]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
            if (!o) {
                if (null == i || i <= 0) {
                    t[s] = null;
                    continue;
                }
                r = !0;
            }
            t[s] = o.id;
        }
        return r;
    })(t, i, s, n))
        ? N(e).then(() => R(e, t, n - 1))
        : (a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), i);
}
