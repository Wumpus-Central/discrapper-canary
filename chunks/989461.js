n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(594832),
    s = n(996353),
    o = n(968975),
    l = n(524380),
    c = n(518477);
function u(e) {
    let { user: t, onOpenProfile: n } = e,
        u = i.useCallback(() => {
            null == n || n({ tabSection: c.RP.WISHLIST });
        }, [n]),
        {
            displayedWishlistItems: d,
            defaultWishlistId: f,
            title: p,
        } = (0, s.aO)({
            user: t,
            numItems: s.h,
            source: a.mQ.POPOUT,
            location: "User Profile Popout",
        });
    return null == d || 0 === d.length
        ? null
        : (0, r.jsx)(o.A, {
              profileOwner: t,
              wishlistItems: d,
              wishlistId: f,
              onClick: u,
              cardSize: l.Y.SMALL,
              title: p,
          });
}
