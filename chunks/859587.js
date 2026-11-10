var r = n(582128),
    i = n(66455),
    s = n(688810),
    a = n(129230),
    l = n(857512),
    u = n(298072),
    o = n(623373),
    d = n(652215);
n.d(
    t,
    {},
    {
        x: function (e, t) {
            let n = (0, l.uM)(),
                { analyticsLocations: c } = (0, s.Ay)(),
                I = (0, u.Q)(t),
                v = r.useRef(!1),
                f = (0, i.A)(n),
                p = (0, i.A)(t),
                m = (0, i.A)(I),
                g = (0, i.A)(c);
            r.useEffect(() => {
                if (!e) {
                    v.current = !1;
                    return;
                }
                if (v.current) return;
                let t = setTimeout(() => {
                    let e = f.current,
                        t = p.current,
                        n = (0, o.B1)(t);
                    (a.default.track(d.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[m.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: g.current,
                    }),
                        (v.current = !0));
                }, 250);
                return () => clearTimeout(t);
            }, [e, f, p, m, g]);
        },
    },
);
