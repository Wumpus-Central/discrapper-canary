n.d(t, {
    JI: () => g,
    QB: () => E,
    S5: () => v,
    VD: () => O,
    W6: () => b,
    b: () => y,
    bf: () => A,
    ct: () => S,
});
var r = n(562465),
    i = n(73153),
    a = n(10716);
n(587895);
var s = n(976860),
    o = n(67480);
n(328968);
var l = n(147964),
    c = n(371794),
    u = n(652215);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e) {
    let t = {
        application_id: e,
    };
    return (0, c.aP)({
        url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: t,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => (
            i.h.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body.map((e) =>
                    _(f({}, e), {
                        published: !0,
                    }),
                ),
            }),
            e.body
        ),
    );
}

function E(e) {
    let t = o.A.get(e),
        n =
            null != t &&
            (l.A.inTestModeForApplication(t.applicationId) || a.A.inDevModeForApplication(t.applicationId));
    return (
        i.h.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: e,
        }),
        (0, c.aP)({
            url: n ? u.Rsh.STORE_LISTINGS_SKU(e) : u.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: !1,
        })
            .then((e) => {
                n
                    ? i.h.dispatch({
                          type: "STORE_LISTINGS_FETCH_SUCCESS",
                          storeListings: e.body,
                      })
                    : i.h.dispatch({
                          type: "STORE_LISTING_FETCH_SUCCESS",
                          storeListing: e.body,
                      });
            })
            .catch(() => {
                i.h.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: e,
                });
            })
    );
}

function b(e) {
    return (0, c.aP)({
        url: u.Rsh.STORE_LISTING(e),
        rejectWithError: !1,
    }).then((e) => {
        i.h.dispatch({
            type: "STORE_LISTING_FETCH_SUCCESS",
            storeListing: e.body,
        });
    });
}

function y(e) {
    return (0, c.aP)({
        url: u.Rsh.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
        rejectWithError: !1,
    }).then((e) => {
        i.h.dispatch({
            type: "STORE_LISTING_FETCH_SUCCESS",
            storeListing: e.body,
        });
    });
}

function O() {
    i.h.dispatch({
        type: "APPLICATION_STORE_MATURE_AGREE",
    });
}

function A() {
    (0, s.pX)(u.BVt.APPLICATION_STORE);
}

function v(e) {
    return r.Bo.post({
        url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}

function S(e, t) {
    let n = (0, c.vy)(e, t),
        { pathname: r } = n,
        i = h(n, ["pathname"]);
    (0, s.pX)(r, i);
}
