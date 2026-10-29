n.d(t, { x: () => c });
var r = n(582128),
    i = n(66455),
    s = n(688810),
    a = n(174459),
    l = n(440938),
    u = n(298072),
    o = n(623373),
    d = n(652215);
function c(e, t) {
    let n = (0, l.uM)(),
        { analyticsLocations: c } = (0, s.Ay)(),
        I = (0, u.Q)(t),
        f = r.useRef(!1),
        v = (0, i.A)(n),
        p = (0, i.A)(t),
        g = (0, i.A)(I),
        x = (0, i.A)(c);
    r.useEffect(() => {
        if (!e) {
            f.current = !1;
            return;
        }
        if (f.current) return;
        let t = setTimeout(() => {
            let e = v.current,
                t = p.current,
                n = (0, o.B1)(t);
            (a.default.track(d.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: n ? (t.variants[g.current]?.skuId ?? t.skuId) : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                product_sku_ids: (0, o.v8)(t),
                location_stack: x.current,
            }),
                (f.current = !0));
        }, 250);
        return () => clearTimeout(t);
    }, [e, v, p, g, x]);
}
