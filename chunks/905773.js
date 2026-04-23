n.d(t, { A: () => c });
var r = n(64700),
    a = n(17928),
    i = n(211287),
    o = n(158317),
    l = n(123633),
    s = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = n(818348);
function c(e, t) {
    let n = (0, a.bG)([l.A], () => l.A.currentOrder),
        c = (0, a.bG)([l.A], () => l.A.currentOrderId),
        _ = (0, a.bG)([l.A], () => l.A.isCreatingOrder),
        p = d.useConfig({ location: "payment_modal" }).enabled,
        C = i.A.useConfig({ location: "payment_modal" }).enabled,
        h = t.paymentGateway === u.kM.VIRTUAL_CURRENCY,
        E = h ? C : p,
        m = (0, r.useRef)(null),
        A = (0, r.useRef)(""),
        I = (0, r.useRef)(!1),
        T = (0, r.useRef)(!1),
        y = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!p || null == c || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            var r;
            let a = n ?? (await (0, o.r)(c)),
                i = a?.billing_facet;
            if (i?.payment_source_id === t.paymentSourceId) {
                (m.current = c), (A.current = e);
                return;
            }
            (r = a),
                r?.billing_facet?.payment_gateway !== u.kM.VIRTUAL_CURRENCY &&
                    (await (0, s.iY)({ orderId: c, updates: t }), (m.current = c), (A.current = e));
        }
        (m.current !== c || A.current !== e) && r();
    }, [c, n, t.paymentSourceId, p]),
        (0, r.useEffect)(() => {
            let e = y.current;
            (y.current = c),
                null == c && null != e
                    ? ((T.current = !0), (m.current = null), (A.current = ""), (I.current = !1))
                    : null != c && (T.current = !1);
        }, [c]),
        (0, r.useEffect)(() => {
            if (null != c) {
                (I.current = !1), (T.current = !1);
                return;
            }
            !T.current &&
                (!E ||
                    _ ||
                    I.current ||
                    null == e ||
                    (null == t.paymentSourceId && null == t.paymentGateway) ||
                    ((I.current = !0),
                    (0, s.fS)({
                        skuId: e,
                        paymentSourceId: h ? void 0 : (t.paymentSourceId ?? void 0),
                        paymentGateway: t.paymentGateway,
                        loadId: t.loadId,
                    })));
        }, [c, _, e, t, E, h]);
}
