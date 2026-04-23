t.d(i, { G: () => s });
var r = t(64700),
    a = t(954571),
    n = t(299679),
    o = t(652215);
function s(e) {
    let i = (0, n.Ar)(),
        t = r.useRef(null),
        s = r.useRef(!1),
        l = r.useRef(i);
    r.useEffect(() => {
        l.current = i;
    }, [i]);
    let c = r.useCallback(
        (i) => {
            i
                ? s.current ||
                  (null === t.current &&
                      (t.current = setTimeout(() => {
                          let i = l.current;
                          a.default.track(o.HAw.IMPRESSION_WISHLIST_ITEM, {
                              sku_id: i?.skuId,
                              wishlist_id: i?.wishlistId,
                              wishlist_owner_id: i?.wishlistOwnerId,
                              surface: i?.surface,
                              position_in_section: i?.positionInSection,
                              item_source: i?.itemSource,
                              product_line: i?.productLine,
                              card_id: e,
                              impression_session_id: i?.impressionSessionId,
                              location_stack: i?.analyticsLocations,
                          }),
                              (s.current = !0),
                              (t.current = null);
                      }, 500)))
                : null !== t.current && (clearTimeout(t.current), (t.current = null));
        },
        [e],
    );
    return (
        r.useEffect(
            () => () => {
                null !== t.current && (clearTimeout(t.current), (t.current = null));
            },
            [],
        ),
        { handleVisibilityChange: c }
    );
}
