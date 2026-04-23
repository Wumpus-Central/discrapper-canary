r.d(t, { U: () => d });
var i = r(64700),
    n = r(110259),
    l = r(172218),
    s = r(688810),
    a = r(139286),
    u = r(440938),
    c = r(298072),
    o = r(623373);
function d(e) {
    let t = (0, u.uM)(),
        { analyticsLocations: r } = (0, s.Ay)(),
        d = (0, c.Q)(e),
        k = i.useRef(null),
        p = i.useRef(!1),
        C = i.useRef(d);
    i.useEffect(() => {
        C.current = d;
    }, [d]);
    let m = i.useCallback(() => {
            let i = (0, o.B1)(e);
            (0, a.x)(
                {
                    name: n.ImpressionNames.SHOP_CARD,
                    type: n.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: i ? (e.variants[C.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, o.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: r,
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
        x = (0, l.K)((e) => {
            e
                ? p.current ||
                  (null === k.current &&
                      (k.current = setTimeout(() => {
                          m(), (p.current = !0), (k.current = null);
                      }, 1e3)))
                : ((p.current = !1), null !== k.current && (clearTimeout(k.current), (k.current = null)));
        }, 0.5);
    return (
        i.useEffect(
            () => () => {
                null !== k.current && (clearTimeout(k.current), (k.current = null));
            },
            [],
        ),
        x
    );
}
