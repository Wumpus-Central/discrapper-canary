var r = n(582128),
    i = n(613412),
    l = n(172218),
    a = n(688810),
    s = n(139286),
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
                f = (0, o.Q)(e),
                p = (0, I.o)(),
                g = (0, c.xM)(p),
                m = r.useRef(null),
                v = r.useRef(!1),
                x = r.useRef(f);
            r.useEffect(() => {
                x.current = f;
            }, [f]);
            let C = r.useCallback(() => {
                    let r = (0, d.B1)(e);
                    (0, s.x)(
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
                                discount_source: (0, c.b_)(g),
                            },
                        },
                        !1,
                        !0,
                    );
                }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, g]),
                _ = (0, l.K)((e) => {
                    e
                        ? v.current ||
                          (null === m.current &&
                              (m.current = setTimeout(() => {
                                  (C(), (v.current = !0), (m.current = null));
                              }, 1e3)))
                        : ((v.current = !1), null !== m.current && (clearTimeout(m.current), (m.current = null)));
                }, 0.5);
            return (
                r.useEffect(
                    () => () => {
                        null !== m.current && (clearTimeout(m.current), (m.current = null));
                    },
                    [],
                ),
                _
            );
        },
    },
);
