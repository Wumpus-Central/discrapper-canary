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
        A = r.useRef(null),
        v = r.useRef(!1),
        x = r.useRef(f);
    r.useEffect(() => {
        x.current = f;
    }, [f]);
    let C = r.useCallback(() => {
            let r = (0, c.B1)(e);
            (0, a.x)(
                {
                    name: i.ImpressionNames.SHOP_CARD,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        sku_id: r ? (e.variants[x.current]?.skuId ?? e.skuId) : e.skuId,
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
        m = (0, s.K)((e) => {
            e
                ? v.current ||
                  (null === A.current &&
                      (A.current = setTimeout(() => {
                          (C(), (v.current = !0), (A.current = null));
                      }, 1e3)))
                : ((v.current = !1), null !== A.current && (clearTimeout(A.current), (A.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== A.current && (clearTimeout(A.current), (A.current = null));
            },
            [],
        ),
        m
    );
}
