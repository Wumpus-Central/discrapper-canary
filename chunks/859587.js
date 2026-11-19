var r = n(582128),
    i = n(66455),
    l = n(688810),
    a = n(129230),
    s = n(857512),
    u = n(298072),
    o = n(623373),
    c = n(652215);
n.d(
    t,
    {},
    {
        x: function (e, t) {
            let n = (0, s.uM)(),
                { analyticsLocations: d } = (0, l.Ay)(),
                I = (0, u.Q)(t),
                f = r.useRef(!1),
                p = (0, i.A)(n),
                g = (0, i.A)(t),
                m = (0, i.A)(I),
                v = (0, i.A)(d);
            r.useEffect(() => {
                if (!e) {
                    f.current = !1;
                    return;
                }
                if (f.current) return;
                let t = setTimeout(() => {
                    let e = p.current,
                        t = g.current,
                        n = (0, o.B1)(t);
                    (a.default.track(c.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[m.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: v.current,
                    }),
                        (f.current = !0));
                }, 250);
                return () => clearTimeout(t);
            }, [e, p, g, m, v]);
        },
    },
);
