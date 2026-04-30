"use strict";
n.d(t, { Yk: () => E, _w: () => h, c_: () => f, jJ: () => p });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(228366),
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
function h(e, t, n) {
    let i,
        r = [],
        a = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? u.A.get(e) : e),
        s()(i, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t),
        (r = (0, c.pb)(i.id, a).map((e) => e.currency)).length < 1 && (r = [d.Yri.USD]),
        r
    );
}
function p(e, t, n) {
    let i = u.A.get(e);
    return s()(null != i, "plan is undefined"), h(i, n, !1).includes(t);
}
function E(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: r,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [u, c] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != r ? { paymentSourceId: r, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        d = (0, l.Y)(a),
        _ = JSON.stringify(a),
        h = i.useRef(a);
    i.useEffect(() => {
        h.current = a;
    }),
        i.useEffect(() => {
            (async () => {
                let { current: e } = h;
                try {
                    e.length > 0 && !o && (await f(r, e));
                } catch (e) {
                    if (10027 !== e.code) throw e;
                }
                c({ paymentSourceId: r, currency: void 0, loaded: !0 });
            })();
        }, [r, _, n, s, d, o]);
    let p = u.paymentSourceId !== r || null == n || !d || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: d,
        priceOptions: u,
        setCurrency: (e) => {
            c({ currency: e });
        },
        currencyLoading: p,
    };
}
