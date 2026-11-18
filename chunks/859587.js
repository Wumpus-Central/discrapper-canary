var r = n(582128),
    i = n(66455),
    s = n(688810),
    a = n(129230),
    l = n(857512),
    u = n(298072),
    o = n(623373),
    c = n(652215);
n.d(
    t,
    {},
    {
        x: function (e, t) {
            let n = (0, l.uM)(),
                { analyticsLocations: d } = (0, s.Ay)(),
                I = (0, u.Q)(t),
                p = r.useRef(!1),
                f = (0, i.A)(n),
                m = (0, i.A)(t),
                v = (0, i.A)(I),
                g = (0, i.A)(d);
            r.useEffect(() => {
                if (!e) {
                    p.current = !1;
                    return;
                }
                if (p.current) return;
                let t = setTimeout(() => {
                    let e = f.current,
                        t = m.current,
                        n = (0, o.B1)(t);
                    (a.default.track(c.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[v.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: g.current,
                    }),
                        (p.current = !0));
                }, 250);
                return () => clearTimeout(t);
            }, [e, f, m, v, g]);
        },
    },
);
