n.d(t, { Yk: () => I, _w: () => C, c_: () => h, jJ: () => m });
var i = n(64700),
    r = n(284009),
    l = n.n(r),
    s = n(228366),
    a = n(73825),
    u = n(160946),
    o = n(97352),
    c = n(927578),
    d = n(652215),
    p = n(788868);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...p.oz];
    return null == e || o.A.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.h.wait(async () => {
                  try {
                      await (0, a.jv)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function C(e, t, n) {
    let i,
        r = [],
        s = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? o.A.get(e) : e),
        l()(i, "subscription plan not loaded"),
        null != t && o.A.hasPaymentSourceForSKUId(t, i.skuId) && (s.paymentSourceId = t),
        (r = (0, c.pb)(i.id, s).map((e) => e.currency)).length < 1 && (r = [d.Yri.USD]),
        r
    );
}
function m(e, t, n) {
    let i = o.A.get(e);
    return l()(null != i, "plan is undefined"), C(i, n, !1).includes(t);
}
function I(e) {
    let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: r,
            isGift: l,
            skuIDs: s,
            excludeSubscriptionPlansBySKU: a,
        } = e,
        [o, c] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != r ? { paymentSourceId: r, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
        ),
        d = (0, u.Y)(s),
        p = JSON.stringify(s),
        C = i.useRef(s);
    i.useEffect(() => {
        C.current = s;
    }),
        i.useEffect(() => {
            (async () => {
                let { current: e } = C;
                try {
                    e.length > 0 && !a && (await h(r, e));
                } catch (e) {
                    if (10027 !== e.code) throw e;
                }
                c({ paymentSourceId: r, currency: void 0, loaded: !0 });
            })();
        }, [r, p, n, l, d, a]);
    let m = o.paymentSourceId !== r || null == n || !d || !0 !== o.loaded;
    return {
        hasFetchedSubscriptionPlans: d,
        priceOptions: o,
        setCurrency: (e) => {
            c({ currency: e });
        },
        currencyLoading: m,
    };
}
