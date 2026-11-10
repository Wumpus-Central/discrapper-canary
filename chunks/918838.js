var r = n(582128),
    i = n(613412),
    s = n(172218),
    a = n(688810),
    l = n(139286),
    u = n(857512),
    o = n(298072),
    d = n(993408),
    c = n(623373),
    I = n(331884);
n.d(
    t,
    {},
    {
        U: function (e) {
            let t = (0, u.uM)(),
                { analyticsLocations: n } = (0, a.Ay)(),
                v = (0, o.Q)(e),
                f = (0, I.o)(),
                p = (0, d.xM)(f),
                m = r.useRef(null),
                g = r.useRef(!1),
                x = r.useRef(v);
            r.useEffect(() => {
                x.current = v;
            }, [v]);
            let h = r.useCallback(() => {
                    let r = (0, c.B1)(e);
                    (0, l.x)(
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
                                discount_source: (0, d.b_)(p),
                            },
                        },
                        !1,
                        !0,
                    );
                }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, p]),
                A = (0, s.K)((e) => {
                    e
                        ? g.current ||
                          (null === m.current &&
                              (m.current = setTimeout(() => {
                                  (h(), (g.current = !0), (m.current = null));
                              }, 1e3)))
                        : ((g.current = !1), null !== m.current && (clearTimeout(m.current), (m.current = null)));
                }, 0.5);
            return (
                r.useEffect(
                    () => () => {
                        null !== m.current && (clearTimeout(m.current), (m.current = null));
                    },
                    [],
                ),
                A
            );
        },
    },
);
