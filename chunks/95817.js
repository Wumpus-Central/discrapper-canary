t.d(e, { G: () => c });
var s = t(64700),
    n = t(954571),
    r = t(299679),
    o = t(652215);
function c(i) {
    let e = (0, r.Ar)(),
        t = s.useRef(null),
        c = s.useRef(!1),
        l = s.useRef(e);
    s.useEffect(() => {
        l.current = e;
    }, [e]);
    let u = s.useCallback(
        (e) => {
            e
                ? c.current ||
                  (null === t.current &&
                      (t.current = setTimeout(() => {
                          let e = l.current;
                          n.default.track(o.HAw.IMPRESSION_WISHLIST_ITEM, {
                              sku_id: e?.skuId,
                              wishlist_id: e?.wishlistId,
                              wishlist_owner_id: e?.wishlistOwnerId,
                              surface: e?.surface,
                              position_in_section: e?.positionInSection,
                              item_source: e?.itemSource,
                              product_line: e?.productLine,
                              card_id: i,
                              impression_session_id: e?.impressionSessionId,
                              location_stack: e?.analyticsLocations,
                          }),
                              (c.current = !0),
                              (t.current = null);
                      }, 500)))
                : null !== t.current && (clearTimeout(t.current), (t.current = null));
        },
        [i],
    );
    return (
        s.useEffect(
            () => () => {
                null !== t.current && (clearTimeout(t.current), (t.current = null));
            },
            [],
        ),
        { handleVisibilityChange: u }
    );
}
