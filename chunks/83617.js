"use strict";
n.d(t, { Yk: () => E, _w: () => h, c_: () => p, jJ: () => m });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(73153),
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
              a.h.wait(async () => {
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
        a = [],
        o = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (r = "string" == typeof e ? u.A.get(e) : e),
        s()(r, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, r.skuId) && (o.paymentSourceId = t),
        (i = (a = (0, c.pb)(r.id, o)).map((e) => e.currency)).length < 1 && (i = [d.Yri.USD]),
        i
    );
}
function m(e, t, n) {
    let r = u.A.get(e);
    return s()(null != r, "plan is undefined"), h(r, n, !1).includes(t);
}
function E(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: i,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [c, d] = r.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != i ? { paymentSourceId: i, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        _ = (0, l.Y)(a),
        m = JSON.stringify(a),
        E = r.useRef(a);
    r.useEffect(() => {
        E.current = a;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = E;
                try {
                    e.length > 0 && !o && (await p(i, e));
                } catch (e) {
                    if (e.code !== f) throw e;
                }
                let t = [];
                null != n && null != u.A.get(n) && (t = h(n, i, s)),
                    t.length > 0
                        ? d({ paymentSourceId: i, currency: t[0], loaded: !0 })
                        : d({ paymentSourceId: i, loaded: !1 });
            })();
        }, [i, m, n, s, _, o]);
    let g = c.paymentSourceId !== i || null == n || !_ || !0 !== c.loaded;
    return {
        hasFetchedSubscriptionPlans: _,
        priceOptions: c,
        setCurrency: (e) => {
            d({ currency: e });
        },
        currencyLoading: g,
    };
}
