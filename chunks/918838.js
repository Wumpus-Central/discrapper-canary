var r = n(582128),
    i = n(613412),
    l = n(172218),
    s = n(688810),
    a = n(139286),
    u = n(440938),
    o = n(298072),
    d = n(993408),
    c = n(623373),
    f = n(331884);
n.d(
    t,
    {},
    {
        U: function (e) {
            let t = (0, u.uM)(),
                { analyticsLocations: n } = (0, s.Ay)(),
                I = (0, o.Q)(e),
                v = (0, f.o)(),
                m = (0, d.xM)(v),
                p = r.useRef(null),
                g = r.useRef(!1),
                A = r.useRef(I);
            r.useEffect(() => {
                A.current = I;
            }, [I]);
            let E = r.useCallback(() => {
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
                                discount_source: (0, d.b_)(m),
                            },
                        },
                        !1,
                        !0,
                    );
                }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, m]),
                x = (0, l.K)((e) => {
                    e
                        ? g.current ||
                          (null === p.current &&
                              (p.current = setTimeout(() => {
                                  (E(), (g.current = !0), (p.current = null));
                              }, 1e3)))
                        : ((g.current = !1), null !== p.current && (clearTimeout(p.current), (p.current = null)));
                }, 0.5);
            return (
                r.useEffect(
                    () => () => {
                        null !== p.current && (clearTimeout(p.current), (p.current = null));
                    },
                    [],
                ),
                x
            );
        },
    },
);
