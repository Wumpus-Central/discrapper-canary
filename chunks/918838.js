r.d(t, { U: () => g });
var n = r(582128),
    i = r(562708),
    s = r(172218),
    l = r(688810),
    a = r(139286),
    o = r(440938),
    u = r(298072),
    c = r(993408),
    d = r(623373),
    p = r(331884);
function g(e) {
    let t = (0, o.uM)(),
        { analyticsLocations: r } = (0, l.Ay)(),
        g = (0, u.Q)(e),
        f = (0, p.o)(),
        I = (0, c.xM)(f),
        _ = n.useRef(null),
        A = n.useRef(!1),
        C = n.useRef(g);
    n.useEffect(() => {
        C.current = g;
    }, [g]);
    let m = n.useCallback(() => {
            let n = (0, d.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: n ? (e.variants[C.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, d.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: r,
                        discount_source: (0, c.b_)(I),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r, I]),
        v = (0, s.K)((e) => {
            e
                ? A.current ||
                  (null === _.current &&
                      (_.current = setTimeout(() => {
                          m(), (A.current = !0), (_.current = null);
                      }, 1e3)))
                : ((A.current = !1), null !== _.current && (clearTimeout(_.current), (_.current = null)));
        }, 0.5);
    return (
        n.useEffect(
            () => () => {
                null !== _.current && (clearTimeout(_.current), (_.current = null));
            },
            [],
        ),
        v
    );
}
