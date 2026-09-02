n.d(t, { U: () => g });
var r = n(582128),
    i = n(562708),
    s = n(172218),
    l = n(688810),
    a = n(139286),
    o = n(440938),
    u = n(298072),
    c = n(993408),
    d = n(623373),
    p = n(331884);
function g(e) {
    let t = (0, o.uM)(),
        { analyticsLocations: n } = (0, l.Ay)(),
        g = (0, u.Q)(e),
        I = (0, p.o)(),
        _ = (0, c.xM)(I),
        f = r.useRef(null),
        C = r.useRef(!1),
        A = r.useRef(g);
    r.useEffect(() => {
        A.current = g;
    }, [g]);
    let m = r.useCallback(() => {
            let r = (0, d.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: r ? (e.variants[A.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, d.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: n,
                        discount_source: (0, c.b_)(_),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, _]),
        E = (0, s.K)((e) => {
            e
                ? C.current ||
                  (null === f.current &&
                      (f.current = setTimeout(() => {
                          m(), (C.current = !0), (f.current = null);
                      }, 1e3)))
                : ((C.current = !1), null !== f.current && (clearTimeout(f.current), (f.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== f.current && (clearTimeout(f.current), (f.current = null));
            },
            [],
        ),
        E
    );
}
