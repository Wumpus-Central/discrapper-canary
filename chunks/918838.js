n.d(t, { U: () => I });
var r = n(582128),
    i = n(131937),
    l = n(172218),
    s = n(688810),
    a = n(139286),
    u = n(440938),
    o = n(298072),
    d = n(993408),
    c = n(623373),
    f = n(331884);
function I(e) {
    let t = (0, u.uM)(),
        { analyticsLocations: n } = (0, s.Ay)(),
        I = (0, o.Q)(e),
        v = (0, f.o)(),
        p = (0, d.xM)(v),
        m = r.useRef(null),
        A = r.useRef(!1),
        g = r.useRef(I);
    r.useEffect(() => {
        g.current = I;
    }, [I]);
    let E = r.useCallback(() => {
            let r = (0, c.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: r ? (e.variants[g.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, c.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: n,
                        discount_source: (0, d.b_)(p),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, p]),
        x = (0, l.K)((e) => {
            e
                ? A.current ||
                  (null === m.current &&
                      (m.current = setTimeout(() => {
                          (E(), (A.current = !0), (m.current = null));
                      }, 1e3)))
                : ((A.current = !1), null !== m.current && (clearTimeout(m.current), (m.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            [],
        ),
        x
    );
}
