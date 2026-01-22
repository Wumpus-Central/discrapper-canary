n.d(t, {
    Yk: () => b,
    _w: () => g,
    c_: () => m,
    jJ: () => E,
}),
    n(896048),
    n(457529);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(73153),
    o = n(73825),
    l = n(160946),
    c = n(97352),
    u = n(927578),
    d = n(652215),
    f = n(788868);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let h = 10027;

function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.oz];
    return null == e || c.A.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.h.wait(async () => {
                  try {
                      await (0, o.jv)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}

function g(e, t, n) {
    let r,
        i = [],
        s = [],
        o = {
            purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT,
        };
    return (
        (r = "string" == typeof e ? c.A.get(e) : e),
        a()(r, "subscription plan not loaded"),
        null != t && c.A.hasPaymentSourceForSKUId(t, r.skuId) && (o.paymentSourceId = t),
        (i = (s = (0, u.pb)(r.id, o)).map((e) => e.currency)).length < 1 && (i = [d.Yri.USD]),
        i
    );
}

function E(e, t, n) {
    let r = c.A.get(e);
    return a()(null != r, "plan is undefined"), g(r, n, !1).includes(t);
}

function b(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: i,
            isGift: a,
            skuIDs: s,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [u, d] = r.useReducer(
            (e, t) => _({}, e, t),
            null != i
                ? {
                      paymentSourceId: i,
                      currency: t,
                      loaded: !1,
                  }
                : {
                      currency: t,
                      loaded: !1,
                  },
        ),
        f = (0, l.Y)(s),
        p = JSON.stringify(s),
        E = r.useRef(s);
    r.useEffect(() => {
        E.current = s;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = E;
                try {
                    e.length > 0 && !o && (await m(i, e));
                } catch (e) {
                    if (e.code !== h) throw e;
                }
                let t = [];
                null != n && null != c.A.get(n) && (t = g(n, i, a)),
                    t.length > 0
                        ? d({
                              paymentSourceId: i,
                              currency: t[0],
                              loaded: !0,
                          })
                        : d({
                              paymentSourceId: i,
                              loaded: !1,
                          });
            })();
        }, [i, p, n, a, f, o]);
    let b = u.paymentSourceId !== i || null == n || !f || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: f,
        priceOptions: u,
        setCurrency: (e) => {
            d({
                currency: e,
            });
        },
        currencyLoading: b,
    };
}
