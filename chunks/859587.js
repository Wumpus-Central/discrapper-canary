var r = n(582128),
    i = n(66455),
    l = n(688810),
    s = n(129230),
    a = n(857512),
    u = n(298072),
    o = n(623373),
    d = n(652215);
n.d(
    t,
    {},
    {
        x: function (e, t) {
            let n = (0, a.uM)(),
                { analyticsLocations: c } = (0, l.Ay)(),
                f = (0, u.Q)(t),
                I = r.useRef(!1),
                v = (0, i.A)(n),
                m = (0, i.A)(t),
                p = (0, i.A)(f),
                g = (0, i.A)(c);
            r.useEffect(() => {
                if (!e) {
                    I.current = !1;
                    return;
                }
                if (I.current) return;
                let t = setTimeout(() => {
                    let e = v.current,
                        t = m.current,
                        n = (0, o.B1)(t);
                    (s.default.track(d.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[p.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: g.current,
                    }),
                        (I.current = !0));
                }, 250);
                return () => clearTimeout(t);
            }, [e, v, m, p, g]);
        },
    },
);
