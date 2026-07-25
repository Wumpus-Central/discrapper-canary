"use strict";
n.d(t, { G: () => l });
var i = n(64700),
    r = n(174459),
    a = n(299679),
    s = n(652215);
function l(e) {
    let t = (0, a.Ar)(),
        n = i.useRef(null),
        l = i.useRef(!1),
        o = i.useRef(t);
    i.useEffect(() => {
        o.current = t;
    }, [t]);
    let d = i.useCallback(
        (t) => {
            t
                ? l.current ||
                  (null === n.current &&
                      (n.current = setTimeout(() => {
                          let t = o.current;
                          r.default.track(s.HAw.IMPRESSION_WISHLIST_ITEM, {
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
        i.useEffect(
            () => () => {
                null !== n.current && (clearTimeout(n.current), (n.current = null));
            },
            [],
        ),
        { handleVisibilityChange: d }
    );
}
