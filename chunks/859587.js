r.d(t, { x: () => d });
var n = r(64700),
    l = r(66455),
    i = r(688810),
    s = r(954571),
    a = r(440938),
    o = r(298072),
    u = r(623373),
    c = r(652215);
function d(e, t) {
    let r = (0, a.uM)(),
        { analyticsLocations: d } = (0, i.Ay)(),
        p = (0, o.Q)(t),
        k = n.useRef(!1),
        C = (0, l.A)(r),
        m = (0, l.A)(t),
        x = (0, l.A)(p),
        g = (0, l.A)(d);
    n.useEffect(() => {
        if (!e) {
            k.current = !1;
            return;
        }
        if (k.current) return;
        let t = setTimeout(() => {
            let e = C.current,
                t = m.current,
                r = (0, u.B1)(t);
            s.default.track(c.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: r ? (t.variants[x.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, u.v8)(t),
                location_stack: g.current,
            }),
                (k.current = !0);
        }, 250);
        return () => clearTimeout(t);
    }, [e, C, m, x, g]);
}
