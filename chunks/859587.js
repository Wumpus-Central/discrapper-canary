r.d(t, { x: () => d });
var i = r(64700),
    n = r(66455),
    l = r(688810),
    s = r(954571),
    a = r(440938),
    u = r(298072),
    c = r(623373),
    o = r(652215);
function d(e, t) {
    let r = (0, a.uM)(),
        { analyticsLocations: d } = (0, l.Ay)(),
        k = (0, u.Q)(t),
        p = i.useRef(!1),
        C = (0, n.A)(r),
        m = (0, n.A)(t),
        x = (0, n.A)(k),
        I = (0, n.A)(d);
    i.useEffect(() => {
        if (!e) {
            p.current = !1;
            return;
        }
        if (p.current) return;
        let t = setTimeout(() => {
            let e = C.current,
                t = m.current,
                r = (0, c.B1)(t);
            s.default.track(o.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: r ? (t.variants[x.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, c.v8)(t),
                location_stack: I.current,
            }),
                (p.current = !0);
        }, 250);
        return () => clearTimeout(t);
    }, [e, C, m, x, I]);
}
