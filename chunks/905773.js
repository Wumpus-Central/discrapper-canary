n.d(t, { A: () => u });
var r = n(64700),
    a = n(17928),
    i = n(158317),
    o = n(123633),
    l = n(624210);
let s = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(818348);
function u(e, t) {
    let n = (0, a.bG)([o.A], () => o.A.currentOrder),
        u = (0, a.bG)([o.A], () => o.A.currentOrderId),
        c = (0, a.bG)([o.A], () => o.A.isCreatingOrder),
        _ = s.useConfig({ location: "payment_modal" }).enabled,
        p = (0, r.useRef)(null),
        C = (0, r.useRef)(""),
        h = (0, r.useRef)(!1),
        E = (0, r.useRef)(!1),
        m = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!_ || null == u || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            var r;
            let a = n ?? (await (0, i.r)(u)),
                o = a?.billing_facet;
            if (o?.payment_source_id === t.paymentSourceId) {
                (p.current = u), (C.current = e);
                return;
            }
            (r = a),
                r?.billing_facet?.payment_gateway !== d.kM.VIRTUAL_CURRENCY &&
                    (await (0, l.iY)({ orderId: u, updates: t }), (p.current = u), (C.current = e));
        }
        (p.current !== u || C.current !== e) && r();
    }, [u, n, t.paymentSourceId, _]),
        (0, r.useEffect)(() => {
            let e = m.current;
            (m.current = u),
                null == u && null != e
                    ? ((E.current = !0), (p.current = null), (C.current = ""), (h.current = !1))
                    : null != u && (E.current = !1);
        }, [u]),
        (0, r.useEffect)(() => {
            if (null != u) {
                (h.current = !1), (E.current = !1);
                return;
            }
            if (
                E.current ||
                !_ ||
                c ||
                h.current ||
                null == e ||
                (null == t.paymentSourceId && null == t.paymentGateway)
            )
                return;
            h.current = !0;
            let n = t.paymentGateway === d.kM.VIRTUAL_CURRENCY;
            (0, l.fS)({
                skuId: e,
                paymentSourceId: n ? void 0 : (t.paymentSourceId ?? void 0),
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [u, c, e, t, _]);
}
