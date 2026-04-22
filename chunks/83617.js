"use strict";
n.d(t, { Yk: () => p, _w: () => E, c_: () => f, jJ: () => h });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(73153),
    o = n(73825),
    l = n(160946),
    u = n(97352),
    d = n(927578),
    c = n(652215),
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
function E(e, t, n) {
    let r,
        i = [],
        a = { purchaseType: n ? c.lid.GIFT : c.lid.DEFAULT };
    return (
        (r = "string" == typeof e ? u.A.get(e) : e),
        s()(r, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, r.skuId) && (a.paymentSourceId = t),
        (i = (0, d.pb)(r.id, a).map((e) => e.currency)).length < 1 && (i = [c.Yri.USD]),
        i
    );
}
function h(e, t, n) {
    let r = u.A.get(e);
    return s()(null != r, "plan is undefined"), E(r, n, !1).includes(t);
}
function p(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: i,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [u, d] = r.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != i ? { paymentSourceId: i, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        c = (0, l.Y)(a),
        _ = JSON.stringify(a),
        E = r.useRef(a);
    r.useEffect(() => {
        E.current = a;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = E;
                try {
                    e.length > 0 && !o && (await f(i, e));
                } catch (e) {
                    if (10027 !== e.code) throw e;
                }
                d({ paymentSourceId: i, currency: void 0, loaded: !0 });
            })();
        }, [i, _, n, s, c, o]);
    let h = u.paymentSourceId !== i || null == n || !c || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: c,
        priceOptions: u,
        setCurrency: (e) => {
            d({ currency: e });
        },
        currencyLoading: h,
    };
}
