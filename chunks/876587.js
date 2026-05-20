s.d(t, { O: () => g });
var i = s(627968);
s(64700);
var l = s(554146),
    n = s(43105),
    a = s(691540),
    r = s(857250),
    c = s(97483),
    o = s(765178),
    d = s(131607),
    u = s(808247),
    m = s(788868),
    x = s(49999),
    p = s(375708),
    h = s(201682);
let g = (e) => {
    let { targetElementRef: t, body: s = p.intl.string(p.t.IqPvOn) } = e,
        [g, j] = (0, d.kn)([l.M.PREMIUM_WISHLIST_COACHMARK]);
    return g !== l.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(n.A, {
              targetElementRef: t,
              title: p.intl.string(p.t["1YLUuN"]),
              body: s,
              graphic: { type: "image", src: h.A },
              size: "video",
              alignmentStrategy: "edge",
              align: "right",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: p.intl.string(p.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await u.A.addSkuToWishlist(m.pe.TIER_2), j(x.i.TAKE_ACTION);
                          } catch {
                              (0, a.P0)((0, r.o)(p.intl.string(p.t.F8FvUy), c.Ck.FAILURE)),
                                  o.O.announce(p.intl.string(p.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => j(x.i.USER_DISMISS),
          });
};
