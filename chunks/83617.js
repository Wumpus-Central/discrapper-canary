"use strict";
n.d(t, { Yk: () => E, _w: () => p, c_: () => f, jJ: () => h });
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
function f(e) {
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
function p(e, t, n) {
    let r,
        i = [],
        a = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (r = "string" == typeof e ? u.A.get(e) : e),
        s()(r, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, r.skuId) && (a.paymentSourceId = t),
        (i = (0, c.pb)(r.id, a).map((e) => e.currency)).length < 1 && (i = [d.Yri.USD]),
        i
    );
}
function h(e, t, n) {
    let r = u.A.get(e);
    return s()(null != r, "plan is undefined"), p(r, n, !1).includes(t);
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
        [u, c] = r.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != i ? { paymentSourceId: i, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        d = (0, l.Y)(a),
        _ = JSON.stringify(a),
        p = r.useRef(a);
    r.useEffect(() => {
        p.current = a;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = p;
                try {
                    e.length > 0 && !o && (await f(i, e));
                } catch (e) {
                    if (10027 !== e.code) throw e;
                }
                c({ paymentSourceId: i, currency: void 0, loaded: !0 });
            })();
        }, [i, _, n, s, d, o]);
    let h = u.paymentSourceId !== i || null == n || !d || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: d,
        priceOptions: u,
        setCurrency: (e) => {
            c({ currency: e });
        },
        currencyLoading: h,
    };
}
