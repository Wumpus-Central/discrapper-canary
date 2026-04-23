n.d(t, { RG: () => b, Di: () => v, uD: () => M, Y: () => S }), n(323874), n(14289), n(35956);
var r = n(284009),
    i = n.n(r),
    a = n(636537),
    l = n(228366),
    o = n(735438),
    s = n.n(o),
    u = n(17928);
let d = {},
    c = {};
function h(e) {
    let { assets: t } = e,
        n = { ...d };
    for (let e in t) {
        let r = t[e];
        (n[e] = 2), (c[e] = { assets: s().keyBy(r, "name") ?? {}, lastUpdated: Date.now() });
    }
    d = n;
}
class y extends u.Ay.Store {
    static displayName = "ApplicationAssetsStore";
    getApplicationAssetFetchState(e) {
        return d[e] ?? 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(d)
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
        return c[e];
    }
}
let p = new y(l.h, {
    APPLICATION_ASSETS_FETCH: function (e) {
        let { applicationId: t } = e;
        d = { ...d, [t]: 1 };
    },
    APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
        let { applicationId: t } = e;
        d = { ...d, [t]: 2 };
    },
    APPLICATION_ASSETS_UPDATE: function (e) {
        let { applicationId: t, assets: n } = e;
        null != n ? (c[t] = { assets: s().keyBy(n, "name") ?? {}, lastUpdated: Date.now() }) : delete c[t];
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: h,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: h,
});
var f = n(626584),
    m = n(776231),
    _ = n(652215);
let E = "https://i.scdn.co/image/",
    C = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    A = {
        [_.fg2.SPOTIFY]: { deserialize: (e) => `${E}${encodeURIComponent(e)}`, serialize: (e) => e.split(E)[1] },
        [_.fg2.TWITCH]: {
            deserialize: (e, t) => {
                let n, r, i;
                return (
                    (n = encodeURIComponent(e)),
                    (r = t[0]),
                    (i = t[1]),
                    `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n}-${r}x${i}.jpg`
                );
            },
            serialize: (e) => {
                let t = e.match(C);
                return null != t ? t[1] : null;
            },
        },
        [_.fg2.YOUTUBE]: {
            deserialize: (e) => {
                let t;
                return (t = encodeURIComponent(e)), `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`;
            },
            serialize: (e) => {
                let t = e.match(g);
                return null != t ? t[1] : null;
            },
        },
        mp: {
            deserialize: (e) => {
                i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                let t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT),
                    n = e.toLowerCase().endsWith(".gif"),
                    r = e.toLowerCase().endsWith(".webp"),
                    a = e.toLowerCase().endsWith(".avif");
                return (
                    n && t.searchParams.set("format", "webp"),
                    (n || r || a) && t.searchParams.set("animated", "true"),
                    t.toString()
                );
            },
            serialize: (e) => e,
        },
    },
    w = new Map();
async function k(e) {
    let { body: t } = await a.Bo.get({ url: _.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return l.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), p.getApplicationAssets(e);
}
function v(e, t) {
    let n = A[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function M(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, r] = t.split(":");
        return e === _.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new f.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : A[_.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(A, e)
              ? A[e].deserialize(r)
              : void 0;
    }
    if (null == e || null == t) return;
    let i = Array.isArray(n) ? Math.max(...n) : n,
        l = "number" == typeof i ? `?size=${(0, m.kr)(i)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${l}`
        : `${(0, a.TP)()}/applications/${e}/app-assets/${t}.${r}${l}`;
}
async function S(e) {
    var t;
    let n,
        r = await (null == (n = p.getApplicationAssets(e)) || ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? k(e)
            : Promise.resolve(n));
    return r?.assets;
}
async function I(e, t) {
    let n = t.filter((e) => null != e && null == w.get(e));
    if (0 === n.length) return;
    let { body: r } = await a.Bo.post({
        url: _.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of r) w.set(e, t);
}
async function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    l.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let r = [],
        i = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if (
        (i.length > 0 && (await I(e, i)),
        (function (e, t) {
            let n = 0;
            if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if (null == i) continue;
                    let a = w.get(i);
                    null != a && ((t[r] = v("mp", a)), n++);
                }
            return n === e.length;
        })(t, r))
    )
        return l.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r;
    let a = await S(e);
    return (l.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: a }),
    (function (e, t, n, r) {
        let i = !1;
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (null == l || null != t[a]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, l) && n[l];
            if (!o) {
                if (null == r || r <= 0) {
                    t[a] = null;
                    continue;
                }
                i = !0;
            }
            t[a] = o.id;
        }
        return i;
    })(t, r, a, n))
        ? k(e).then(() => b(e, t, n - 1))
        : (l.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r);
}
