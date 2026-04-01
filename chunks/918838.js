r.d(t, { U: () => c });
var n = r(64700),
    l = r(110259),
    i = r(172218),
    s = r(688810),
    a = r(139286),
    u = r(440938),
    o = r(623373);
function c(e) {
    let t = (0, u.uM)(),
        { analyticsLocations: r } = (0, s.Ay)(),
        c = n.useRef(null),
        d = n.useRef(!1),
        m = n.useCallback(() => {
            (0, a.x)(
                {
                    name: l.ImpressionNames.SHOP_CARD,
                    type: l.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: e.skuId,
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
        h = (0, i.K)((e) => {
            e
                ? d.current ||
                  (null === c.current &&
                      (c.current = setTimeout(() => {
                          m(), (d.current = !0), (c.current = null);
                      }, 1e3)))
                : ((d.current = !1), null !== c.current && (clearTimeout(c.current), (c.current = null)));
        }, 0.5);
    return (
        n.useEffect(
            () => () => {
                null !== c.current && (clearTimeout(c.current), (c.current = null));
            },
            [],
        ),
        h
    );
}
