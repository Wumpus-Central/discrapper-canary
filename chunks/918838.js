var r = n(582128),
    i = n(613412),
    s = n(172218),
    a = n(688810),
    l = n(139286),
    u = n(857512),
    o = n(298072),
    c = n(993408),
    d = n(623373),
    I = n(331884);
n.d(
    t,
    {},
    {
        U: function (e) {
            let t = (0, u.uM)(),
                { analyticsLocations: n } = (0, a.Ay)(),
                p = (0, o.Q)(e),
                f = (0, I.o)(),
                m = (0, c.xM)(f),
                v = r.useRef(null),
                g = r.useRef(!1),
                x = r.useRef(p);
            r.useEffect(() => {
                x.current = p;
            }, [p]);
            let C = r.useCallback(() => {
                    let r = (0, d.B1)(e);
                    (0, l.x)(
                        {
                            name: i.ImpressionNames.SHOP_CARD,
                            type: i.ImpressionTypes.VIEW,
                            properties: {
                                sku_id: r ? (e.variants[x.current]?.skuId ?? e.skuId) : e.skuId,
                                card_id: t?.cardId,
                                shop_session_id: t?.sessionId,
                                position_in_section: t?.tilePosition,
                                product_sku_ids: (0, d.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                location_stack: n,
                                discount_source: (0, c.b_)(m),
                            },
                        },
                        !1,
                        !0,
                    );
                }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, m]),
                _ = (0, s.K)((e) => {
                    e
                        ? g.current ||
                          (null === v.current &&
                              (v.current = setTimeout(() => {
                                  (C(), (g.current = !0), (v.current = null));
                              }, 1e3)))
                        : ((g.current = !1), null !== v.current && (clearTimeout(v.current), (v.current = null)));
                }, 0.5);
            return (
                r.useEffect(
                    () => () => {
                        null !== v.current && (clearTimeout(v.current), (v.current = null));
                    },
                    [],
                ),
                _
            );
        },
    },
);
