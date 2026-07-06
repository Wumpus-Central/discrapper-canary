"use strict";
n.d(t, { G: () => o });
var i = n(64700),
    r = n(174459),
    s = n(299679),
    a = n(652215);
function o(e) {
    let t = (0, s.Ar)(),
        n = i.useRef(null),
        o = i.useRef(!1),
        l = i.useRef(t);
    i.useEffect(() => {
        l.current = t;
    }, [t]);
    let u = i.useCallback(
        (t) => {
            t
                ? o.current ||
                  (null === n.current &&
                      (n.current = setTimeout(() => {
                          let t = l.current;
                          r.default.track(a.HAw.IMPRESSION_WISHLIST_ITEM, {
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
                              (o.current = !0),
                              (n.current = null);
                      }, 500)))
                : null !== n.current && (clearTimeout(n.current), (n.current = null));
        },
        [e],
    );
    return (
        i.useEffect(
            () => () => {
                null !== n.current && (clearTimeout(n.current), (n.current = null));
            },
            [],
        ),
        { handleVisibilityChange: u }
    );
}
