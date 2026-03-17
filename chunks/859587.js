r.d(e, { x: () => o });
var i = r(64700),
    n = r(954571),
    l = r(440938),
    s = r(298072),
    a = r(623373),
    u = r(652215);
function o(t, e) {
    let r = (0, l.uM)(),
        o = (0, s.Q)(e),
        d = i.useRef(!1),
        c = i.useRef(r),
        A = i.useRef(e),
        m = i.useRef(o);
    i.useEffect(() => {
        c.current = r;
    }, [r]),
        i.useEffect(() => {
            A.current = e;
        }, [e]),
        i.useEffect(() => {
            m.current = o;
        }, [o]),
        i.useEffect(() => {
            if (!t) {
                d.current = !1;
                return;
            }
            if (d.current) return;
            let e = setTimeout(() => {
                let t = c.current,
                    e = A.current,
                    r = (0, a.B1)(e);
                n.default.track(u.HAw.SHOP_CARD_HOVERED, {
                    shop_session_id: t?.sessionId,
                    sku_id: r ? (e.variants[m.current]?.skuId ?? e.skuId) : e.skuId,
                    position_in_section: t?.tilePosition,
                    card_id: t?.cardId,
                    card_contents: r ? e.variants.map((t) => t.skuId) : [e.skuId],
                }),
                    (d.current = !0);
            }, 250);
            return () => clearTimeout(e);
        }, [t]);
}
