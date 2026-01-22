let r;
n.d(t, {
    A: () => R,
}),
    n(65821),
    n(896048);
var i,
    a = n(311907),
    s = n(73153),
    o = n(773669);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e) {
    if (0 === e.length) throw Error("No user IDs provided");
    return e.length > 1 ? [...e].join(",") : e[0];
}
let p = {},
    _ = {},
    h = {},
    m = {};

function g() {
    h = {};
}

function E(e) {
    var t;
    let { applicationId: n, userIds: r } = e,
        i = f(r);
    h = d(c({}, h), {
        [n]: d(c({}, null != (t = h[n]) ? t : {}), {
            [i]: {
                state: "loading",
            },
        }),
    });
}

function b(e) {
    var t;
    let { skus: n, skusToRecommendationReasons: r, userIds: i, application: a, numItemsRequested: s } = e,
        o = f(i);
    h = d(c({}, h), {
        [a.id]: d(c({}, null != (t = h[a.id]) ? t : {}), {
            [o]: {
                state: "success",
                data: {
                    skus: n,
                    skusToRecommendationReasons: r,
                    numItemsRequested: s,
                },
            },
        }),
    });
}

function y(e) {
    var t;
    let { applicationId: n, userIds: r } = e,
        i = f(r);
    if (null != h[n] && null != h[n][i] && "success" === h[n][i].state) return !1;
    h = d(c({}, h), {
        [n]: d(c({}, null != (t = h[n]) ? t : {}), {
            [i]: {
                state: "error",
            },
        }),
    });
}

function O(e) {
    let { guildId: t } = e,
        n = _[t];
    (_[t] = d(c({}, n), {
        state: "loading",
    })),
        (_ = c({}, _));
}

function A(e) {
    let { guildId: t, storefront: n } = e;
    (_[t] = {
        storefront: n,
        state: "fetched",
        fetchedAt: Date.now(),
    }),
        (_ = c({}, _));
}

function v(e) {
    let { guildId: t, storefront: n } = e,
        r = _[t];
    (null == r ? void 0 : r.storefront) != null
        ? (_[t] = d(c({}, r), {
              storefront: d(c({}, r.storefront), {
                  assets: c({}, r.storefront.assets, n.assets),
              }),
          }))
        : (_[t] = {
              storefront: n,
              state: "partially-fetched",
              fetchedAt: null,
          }),
        (_ = c({}, _));
}

function S(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = _[t];
        (null == e ? void 0 : e.state) === "loading" && (null == e ? void 0 : e.storefront) != null
            ? (_[t] = d(c({}, e), {
                  state: "fetched",
              }))
            : delete _[t];
    } else
        _[t] = {
            storefront: null,
            state: "error",
            fetchedAt: Date.now(),
        };
    _ = c({}, _);
}

function I(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (p[t] = {
        activePage: n,
        activeSkuId: r,
    }),
        (p = c({}, p));
}

function T(e) {
    let { guildId: t, announcement: n } = e;
    (m[t] = n), (m = c({}, m));
}

function C() {
    if (r === o.default.locale) return !1;
    (r = o.default.locale), (p = {}), (_ = {}), (h = {});
}
class N extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(o.default), this.syncWith([o.default], C), (r = o.default.locale);
    }
    getStorefrontData(e) {
        return _[e];
    }
    getStorefrontState(e) {
        return p[e];
    }
    recommendationsByApplicationsAndUsers(e, t) {
        var n;
        if (null != t && 0 !== t.length) return null == (n = h[e]) ? void 0 : n[f(t)];
    }
    getAnnouncement(e) {
        return m[e];
    }
}
l(N, "displayName", "SocialLayerStorefrontStore");
let R = new N(s.h, {
    LOGOUT: g,
    SOCIAL_LAYER_STOREFRONT_LOAD: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: A,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: v,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: S,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: I,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: y,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: E,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: T,
});
