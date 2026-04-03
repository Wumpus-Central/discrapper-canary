r.d(t, { U: () => d });
var n = r(64700),
    l = r(110259),
    i = r(172218),
    s = r(688810),
    a = r(139286),
    u = r(440938),
    o = r(298072),
    c = r(623373);
function d(e) {
    let t = (0, u.uM)(),
        { analyticsLocations: r } = (0, s.Ay)(),
        d = (0, o.Q)(e),
        m = n.useRef(null),
        h = n.useRef(!1),
        p = n.useRef(d);
    n.useEffect(() => {
        p.current = d;
    }, [d]);
    let f = n.useCallback(() => {
            let n = (0, c.B1)(e);
            (0, a.x)(
                {
                    name: l.ImpressionNames.SHOP_CARD,
                    type: l.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: n ? (e.variants[p.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, c.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: r,
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
        x = (0, i.K)((e) => {
            e
                ? h.current ||
                  (null === m.current &&
                      (m.current = setTimeout(() => {
                          f(), (h.current = !0), (m.current = null);
                      }, 1e3)))
                : ((h.current = !1), null !== m.current && (clearTimeout(m.current), (m.current = null)));
        }, 0.5);
    return (
        n.useEffect(
            () => () => {
                null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            [],
        ),
        x
    );
}
