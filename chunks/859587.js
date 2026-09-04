r.d(t, { x: () => d });
var n = r(582128),
    i = r(66455),
    s = r(688810),
    l = r(174459),
    a = r(440938),
    o = r(298072),
    u = r(623373),
    c = r(652215);
function d(e, t) {
    let r = (0, a.uM)(),
        { analyticsLocations: d } = (0, s.Ay)(),
        p = (0, o.Q)(t),
        g = n.useRef(!1),
        f = (0, i.A)(r),
        I = (0, i.A)(t),
        _ = (0, i.A)(p),
        A = (0, i.A)(d);
    n.useEffect(() => {
        if (!e) {
            g.current = !1;
            return;
        }
        if (g.current) return;
        let t = setTimeout(() => {
            let e = f.current,
                t = I.current,
                r = (0, u.B1)(t);
            l.default.track(c.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: r ? (t.variants[_.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, u.v8)(t),
                location_stack: A.current,
            }),
                (g.current = !0);
        }, 250);
        return () => clearTimeout(t);
    }, [e, f, I, _, A]);
}
