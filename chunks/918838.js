n.d(t, { U: () => f });
var r = n(582128),
    i = n(562708),
    s = n(172218),
    l = n(688810),
    a = n(139286),
    o = n(440938),
    u = n(298072),
    d = n(993408),
    c = n(623373),
    I = n(331884);
function f(e) {
    let t = (0, o.uM)(),
        { analyticsLocations: n } = (0, l.Ay)(),
        f = (0, u.Q)(e),
        p = (0, I.o)(),
        g = (0, d.xM)(p),
        v = r.useRef(null),
        x = r.useRef(!1),
        A = r.useRef(f);
    r.useEffect(() => {
        A.current = f;
    }, [f]);
    let m = r.useCallback(() => {
            let r = (0, c.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: r ? (e.variants[A.current]?.skuId ?? e.skuId) : e.skuId,
                        card_id: t?.cardId,
                        shop_session_id: t?.sessionId,
                        position_in_section: t?.tilePosition,
                        product_sku_ids: (0, c.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                        location_stack: n,
                        discount_source: (0, d.b_)(g),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, g]),
        C = (0, s.K)((e) => {
            e
                ? x.current ||
                  (null === v.current &&
                      (v.current = setTimeout(() => {
                          (m(), (x.current = !0), (v.current = null));
                      }, 1e3)))
                : ((x.current = !1), null !== v.current && (clearTimeout(v.current), (v.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [],
        ),
        C
    );
}
