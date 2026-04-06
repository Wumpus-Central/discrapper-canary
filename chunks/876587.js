n.d(t, { O: () => g });
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(342494),
    a = n(397927),
    r = n(932001),
    o = n(808247),
    d = n(788868),
    c = n(49999),
    u = n(985018),
    m = n(201682);
let g = (e) => {
    let { targetElementRef: t } = e,
        [n, g] = (0, r.kn)([s.M.PREMIUM_WISHLIST_COACHMARK]);
    return n !== s.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(l.AM, {
              targetElementRef: t,
              title: u.intl.string(u.t["1YLUuN"]),
              body: u.intl.string(u.t.IqPvOn),
              graphic: { type: "image", src: m.A },
              size: "video",
              alignmentStrategy: "edge",
              align: "right",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: u.intl.string(u.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await o.A.addSkuToWishlist(d.pe.TIER_2), g(c.i.TAKE_ACTION);
                          } catch {
                              (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.F8FvUy), a.ToastType.FAILURE)),
                                  a.ORC.announce(u.intl.string(u.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => g(c.i.USER_DISMISS),
          });
};
