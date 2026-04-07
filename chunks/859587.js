r.d(t, { x: () => o });
var n = r(64700),
    l = r(954571),
    i = r(440938),
    s = r(298072),
    a = r(623373),
    u = r(652215);
function o(e, t) {
    let r = (0, i.uM)(),
        o = (0, s.Q)(t),
        c = n.useRef(!1),
        d = n.useRef(r),
        m = n.useRef(t),
        h = n.useRef(o);
    n.useEffect(() => {
        d.current = r;
    }, [r]),
        n.useEffect(() => {
            m.current = t;
        }, [t]),
        n.useEffect(() => {
            h.current = o;
        }, [o]),
        n.useEffect(() => {
            if (!e) {
                c.current = !1;
                return;
            }
            if (c.current) return;
            let t = setTimeout(() => {
                let e = d.current,
                    t = m.current,
                    r = (0, a.B1)(t);
                l.default.track(u.HAw.SHOP_CARD_HOVERED, {
                    shop_session_id: e?.sessionId,
                    sku_id: r ? (t.variants[h.current]?.skuId ?? t.skuId) : t.skuId,
                    position_in_section: e?.tilePosition,
                    card_id: e?.cardId,
                    card_contents: (0, a.v8)(t),
                }),
                    (c.current = !0);
            }, 250);
            return () => clearTimeout(t);
        }, [e]);
}
