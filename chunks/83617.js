"use strict";
n.d(t, { Yk: () => g, _w: () => h, c_: () => p, jJ: () => m });
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(73153),
    o = n(73825),
    l = n(160946),
    u = n(97352),
    c = n(927578),
    d = n(652215),
    _ = n(788868);
let f = 10027;
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [..._.oz];
    return null == e || u.A.hasPaymentSourceForSKUIds(e, t)
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
function h(e, t, n) {
    let r,
        i = [],
        s = [],
        o = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (r = "string" == typeof e ? u.A.get(e) : e),
        a()(r, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, r.skuId) && (o.paymentSourceId = t),
        (i = (s = (0, c.pb)(r.id, o)).map((e) => e.currency)).length < 1 && (i = [d.Yri.USD]),
        i
    );
}
function m(e, t, n) {
    let r = u.A.get(e);
    return a()(null != r, "plan is undefined"), h(r, n, !1).includes(t);
}
function g(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: i,
            isGift: a,
            skuIDs: s,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [c, d] = r.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != i ? { paymentSourceId: i, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        _ = (0, l.Y)(s),
        m = JSON.stringify(s),
        g = r.useRef(s);
    r.useEffect(() => {
        g.current = s;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = g;
                try {
                    e.length > 0 && !o && (await p(i, e));
                } catch (e) {
                    if (e.code !== f) throw e;
                }
                let t = [];
                null != n && null != u.A.get(n) && (t = h(n, i, a)),
                    t.length > 0
                        ? d({ paymentSourceId: i, currency: t[0], loaded: !0 })
                        : d({ paymentSourceId: i, loaded: !1 });
            })();
        }, [i, m, n, a, _, o]);
    let E = c.paymentSourceId !== i || null == n || !_ || !0 !== c.loaded;
    return {
        hasFetchedSubscriptionPlans: _,
        priceOptions: c,
        setCurrency: (e) => {
            d({ currency: e });
        },
        currencyLoading: E,
    };
}
