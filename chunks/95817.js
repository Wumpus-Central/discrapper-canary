n.d(t, { G: () => l });
var r = n(64700),
    i = n(174459),
    s = n(299679),
    c = n(652215);
function l(e) {
    let t = (0, s.Ar)(),
        n = r.useRef(null),
        l = r.useRef(!1),
        o = r.useRef(t);
    r.useEffect(() => {
        o.current = t;
    }, [t]);
    let u = r.useCallback(
        (t) => {
            t
                ? l.current ||
                  (null === n.current &&
                      (n.current = setTimeout(() => {
                          let t = o.current;
                          i.default.track(c.HAw.IMPRESSION_WISHLIST_ITEM, {
                              sku_id: t?.skuId,
                              wishlist_id: t?.wishlistId,
                              wishlist_owner_id: t?.wishlistOwnerId,
                              surface: t?.surface,
                              position_in_section: t?.positionInSection,
                              item_source: t?.itemSource,
                              product_line: t?.productLine,
                              card_id: e,
                              impression_session_id: t?.impressionSessionId,
                              location_stack: t?.analyticsLocations,
                          }),
                              (l.current = !0),
                              (n.current = null);
                      }, 500)))
                : null !== n.current && (clearTimeout(n.current), (n.current = null));
        },
        [e],
    );
    return (
        r.useEffect(
            () => () => {
                null !== n.current && (clearTimeout(n.current), (n.current = null));
            },
            [],
        ),
        { handleVisibilityChange: u }
    );
}
ityChange: d;
}}
