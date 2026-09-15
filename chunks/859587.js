n.d(t, { x: () => c });
var r = n(582128),
    i = n(66455),
    s = n(688810),
    l = n(174459),
    a = n(440938),
    o = n(298072),
    u = n(623373),
    d = n(652215);
function c(e, t) {
    let n = (0, a.uM)(),
        { analyticsLocations: c } = (0, s.Ay)(),
        I = (0, o.Q)(t),
        f = r.useRef(!1),
        p = (0, i.A)(n),
        g = (0, i.A)(t),
        A = (0, i.A)(I),
        v = (0, i.A)(c);
    r.useEffect(() => {
        if (!e) {
            f.current = !1;
            return;
        }
        if (f.current) return;
        let t = setTimeout(() => {
            let e = p.current,
                t = g.current,
                n = (0, u.B1)(t);
            (l.default.track(d.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: n ? (t.variants[A.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, u.v8)(t),
                location_stack: v.current,
            }),
                (f.current = !0));
        }, 250);
        return () => clearTimeout(t);
    }, [e, p, g, A, v]);
}
