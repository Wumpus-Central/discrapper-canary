var r = n(582128),
    i = n(66455),
    s = n(688810),
    l = n(129230),
    a = n(440938),
    u = n(298072),
    o = n(623373),
    d = n(652215);
n.d(
    t,
    {},
    {
        x: function (e, t) {
            let n = (0, a.uM)(),
                { analyticsLocations: c } = (0, s.Ay)(),
                f = (0, u.Q)(t),
                I = r.useRef(!1),
                v = (0, i.A)(n),
                p = (0, i.A)(t),
                m = (0, i.A)(f),
                A = (0, i.A)(c);
            r.useEffect(() => {
                if (!e) {
                    I.current = !1;
                    return;
                }
                if (I.current) return;
                let t = setTimeout(() => {
                    let e = v.current,
                        t = p.current,
                        n = (0, o.B1)(t);
                    (l.default.track(d.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[m.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: A.current,
                    }),
                        (I.current = !0));
                }, 250);
                return () => clearTimeout(t);
            }, [e, v, p, m, A]);
        },
    },
);
