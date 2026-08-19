"use strict";
n.d(t, { RG: () => y, Di: () => C, uD: () => O, Y: () => R }), n(323874), n(14289), n(35956);
var i = n(284009),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(435558),
    o = n.n(l),
    d = n(17928);
let c = {},
    u = {};
function _(e) {
    let { assets: t } = e,
        n = { ...c };
    for (let e in t) {
        let i = t[e];
        (n[e] = 2), (u[e] = { assets: o().keyBy(i, "name") ?? {}, lastUpdated: Date.now() });
    }
    c = n;
}
class E extends d.Ay.Store {
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
        return u[e];
    }
}
let A = new E(s.h, {
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
        null != n ? (u[t] = { assets: o().keyBy(n, "name") ?? {}, lastUpdated: Date.now() }) : delete u[t];
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: _,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: _,
});
var h = n(626584),
    I = n(776231),
    f = n(652215);
let p = "https://i.scdn.co/image/",
    T = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    m = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    g = {
        [f.fg2.SPOTIFY]: { deserialize: (e) => `${p}${encodeURIComponent(e)}`, serialize: (e) => e.split(p)[1] },
        [f.fg2.TWITCH]: {
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
                let t = e.match(T);
                return null != t ? t[1] : null;
            },
        },
        [f.fg2.YOUTUBE]: {
            deserialize: (e) => {
                let t;
                return (t = encodeURIComponent(e)), `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`;
            },
            serialize: (e) => {
                let t = e.match(m);
                return null != t ? t[1] : null;
            },
        },
        mp: {
            deserialize: (e) => {
                let t;
                r()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                try {
                    t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT);
                } catch {
                    new h.A("ApplicationAssetUtils").warn(`getAssetImage: invalid media proxy asset path: ${e}`);
                    return;
                }
                let n = e.toLowerCase().endsWith(".gif"),
                    i = e.toLowerCase().endsWith(".webp"),
                    a = e.toLowerCase().endsWith(".avif");
                return (
                    n && t.searchParams.set("format", "webp"),
                    (n || i || a) && t.searchParams.set("animated", "true"),
                    t.toString()
                );
            },
            serialize: (e) => e,
        },
    },
    S = new Map();
async function N(e) {
    let { body: t } = await a.Bo.get({ url: f.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return s.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), A.getApplicationAssets(e);
}
function C(e, t) {
    let n = g[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function O(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, i] = t.split(":");
        return e === f.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new h.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : g[f.fg2.TWITCH].deserialize(i, n)
            : Object.prototype.hasOwnProperty.call(g, e)
              ? g[e].deserialize(i)
              : void 0;
    }
    if (null == e || null == t) return;
    let r = Array.isArray(n) ? Math.max(...n) : n,
        s = "number" == typeof r ? `?size=${(0, I.kr)(r)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${i}${s}`
        : `${(0, a.TP)()}/applications/${e}/app-assets/${t}.${i}${s}`;
}
async function R(e) {
    var t;
    let n,
        i = await (null == (n = A.getApplicationAssets(e)) || ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? N(e)
            : Promise.resolve(n));
    return i?.assets;
}
async function L(e, t) {
    let n = t.filter((e) => null != e && null == S.get(e));
    if (0 === n.length) return;
    let { body: i } = await a.Bo.post({
        url: f.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of i) S.set(e, t);
}
async function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let i = [],
        r = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if (
        (r.length > 0 && (await L(e, r)),
        (function (e, t) {
            let n = 0;
            if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
                for (let i = 0; i < e.length; i++) {
                    let r = e[i];
                    if (null == r) continue;
                    let a = S.get(r);
                    null != a && ((t[i] = C("mp", a)), n++);
                }
            return n === e.length;
        })(t, i))
    )
        return s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), i;
    let a = await R(e);
    return (s.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: a }),
    (function (e, t, n, i) {
        let r = !1;
        for (let a = 0; a < e.length; a++) {
            let s = e[a];
            if (null == s || null != t[a]) continue;
            let l = Object.prototype.hasOwnProperty.call(n, s) && n[s];
            if (!l) {
                if (null == i || i <= 0) {
                    t[a] = null;
                    continue;
                }
                r = !0;
            }
            t[a] = l.id;
        }
        return r;
    })(t, i, a, n))
        ? N(e).then(() => y(e, t, n - 1))
        : (s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), i);
}
