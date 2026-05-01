r.d(t, { Yk: () => S, _w: () => y, c_: () => p, jJ: () => _ });
var i = r(64700),
    n = r(284009),
    s = r.n(n),
    a = r(228366),
    o = r(73825),
    c = r(160946),
    u = r(97352),
    l = r(927578),
    d = r(652215),
    h = r(788868);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...h.oz];
    return null == e || u.A.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, r) => {
              a.h.wait(async () => {
                  try {
                      await (0, o.jv)(t), e();
                  } catch (e) {
                      r(e);
                  }
              });
          });
}
function y(e, t, r) {
    let i,
        n = [],
        a = { purchaseType: r ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? u.A.get(e) : e),
        s()(i, "subscription plan not loaded"),
        null != t && u.A.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t),
        (n = (0, l.pb)(i.id, a).map((e) => e.currency)).length < 1 && (n = [d.Yri.USD]),
        n
    );
}
function _(e, t, r) {
    let i = u.A.get(e);
    return s()(null != i, "plan is undefined"), y(i, r, !1).includes(t);
}
function S(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: r,
            paymentSourceId: n,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: o,
        } = e,
        [u, l] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != n ? { paymentSourceId: n, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        d = (0, c.Y)(a),
        h = JSON.stringify(a),
        y = i.useRef(a);
    i.useEffect(() => {
        y.current = a;
    }),
        i.useEffect(() => {
            (async () => {
                let { current: e } = y;
                try {
                    e.length > 0 && !o && (await p(n, e));
                } catch (e) {
                    if (10027 !== e.code) throw e;
                }
                l({ paymentSourceId: n, currency: void 0, loaded: !0 });
            })();
        }, [n, h, r, s, d, o]);
    let _ = u.paymentSourceId !== n || null == r || !d || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: d,
        priceOptions: u,
        setCurrency: (e) => {
            l({ currency: e });
        },
        currencyLoading: _,
    };
}
