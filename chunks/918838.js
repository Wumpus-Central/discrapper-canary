n.d(t, { U: () => f });
var r = n(582128),
    i = n(562708),
    s = n(172218),
    a = n(688810),
    l = n(139286),
    u = n(440938),
    o = n(947893),
    d = n(993408),
    c = n(623373),
    I = n(331884);
function f(e) {
    let t = (0, u.uM)(),
        { analyticsLocations: n } = (0, a.Ay)(),
        f = (0, o.Q)(e),
        v = (0, I.o)(),
        p = (0, d.xM)(v),
        g = r.useRef(null),
        x = r.useRef(!1),
        A = r.useRef(f);
    r.useEffect(() => {
        A.current = f;
    }, [f]);
    let m = r.useCallback(() => {
            let r = (0, c.B1)(e);
            (0, l.x)(
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
                        discount_source: (0, d.b_)(p),
                    },
                },
                !1,
                !0,
            );
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, p]),
        _ = (0, s.K)((e) => {
            e
                ? x.current ||
                  (null === g.current &&
                      (g.current = setTimeout(() => {
                          (m(), (x.current = !0), (g.current = null));
                      }, 1e3)))
                : ((x.current = !1), null !== g.current && (clearTimeout(g.current), (g.current = null)));
        }, 0.5);
    return (
        r.useEffect(
            () => () => {
                null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [],
        ),
        _
    );
}
