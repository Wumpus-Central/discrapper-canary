s.d(t, { O: () => g });
var a = s(627968);
s(64700);
var r = s(554146),
    i = s(43105),
    n = s(691540),
    l = s(857250),
    o = s(97483),
    c = s(765178),
    d = s(932001),
    m = s(808247),
    u = s(788868),
    _ = s(49999),
    x = s(985018),
    p = s(201682);
let g = (e) => {
    let { targetElementRef: t } = e,
        [s, g] = (0, d.kn)([r.M.PREMIUM_WISHLIST_COACHMARK]);
    return s !== r.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, a.jsx)(i.A, {
              targetElementRef: t,
              title: x.intl.string(x.t["1YLUuN"]),
              body: x.intl.string(x.t.IqPvOn),
              graphic: { type: "image", src: p.A },
              size: "video",
              alignmentStrategy: "edge",
              align: "right",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: x.intl.string(x.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await m.A.addSkuToWishlist(u.pe.TIER_2), g(_.i.TAKE_ACTION);
                          } catch {
                              (0, n.P0)((0, l.o)(x.intl.string(x.t.F8FvUy), o.Ck.FAILURE)),
                                  c.O.announce(x.intl.string(x.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => g(_.i.USER_DISMISS),
          });
};
