n.d(t, { A: () => d });
var o = n(64700),
    r = n(17928),
    a = n(211287),
    i = n(158317),
    l = n(123633),
    u = n(624210);
let s = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(818348);
function d(e, t) {
    let n = (0, r.bG)([l.A], () => l.A.currentOrder),
        d = (0, r.bG)([l.A], () => l.A.currentOrderId),
        C = (0, r.bG)([l.A], () => l.A.isCreatingOrder),
        E = s.useConfig({ location: "payment_modal" }).enabled,
        p = a.A.useConfig({ location: "payment_modal" }).enabled,
        h = t.paymentGateway === _.kM.VIRTUAL_CURRENCY,
        c = h ? p : E,
        A = (0, o.useRef)(null),
        y = (0, o.useRef)(""),
        I = (0, o.useRef)(!1),
        m = (0, o.useRef)(!1),
        T = (0, o.useRef)(null);
    (0, o.useEffect)(() => {
        if (!E || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function o() {
            var o;
            let r = n ?? (await (0, i.r)(d)),
                a = r?.billing_facet;
            if (a?.payment_source_id === t.paymentSourceId) {
                (A.current = d), (y.current = e);
                return;
            }
            (o = r),
                o?.billing_facet?.payment_gateway !== _.kM.VIRTUAL_CURRENCY &&
                    (await (0, u.iY)({ orderId: d, updates: t }), (A.current = d), (y.current = e));
        }
        (A.current !== d || y.current !== e) && o();
    }, [d, n, t.paymentSourceId, E]),
        (0, o.useEffect)(() => {
            let e = T.current;
            (T.current = d),
                null == d && null != e
                    ? ((m.current = !0), (A.current = null), (y.current = ""), (I.current = !1))
                    : null != d && (m.current = !1);
        }, [d]),
        (0, o.useEffect)(() => {
            if (null != d) {
                (I.current = !1), (m.current = !1);
                return;
            }
            !m.current &&
                (!c ||
                    C ||
                    I.current ||
                    null == e ||
                    (null == t.paymentSourceId && null == t.paymentGateway) ||
                    ((I.current = !0),
                    (0, u.fS)({
                        skuId: e,
                        paymentSourceId: h ? void 0 : (t.paymentSourceId ?? void 0),
                        paymentGateway: t.paymentGateway,
                        loadId: t.loadId,
                    })));
        }, [d, C, e, t, c, h]);
}
