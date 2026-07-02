n.d(t, { O: () => p });
var i = n(627968);
n(64700);
var a = n(554146),
    s = n(43105),
    r = n(691540),
    l = n(857250),
    c = n(97483),
    o = n(765178),
    d = n(131607),
    u = n(808247),
    m = n(202541),
    A = n(49999),
    g = n(375708),
    N = n(201682);
function p(e) {
    let { targetElementRef: t, body: n = g.intl.string(g.t.IqPvOn) } = e,
        [p, f] = (0, d.kn)([a.M.PREMIUM_WISHLIST_COACHMARK]);
    return p !== a.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(s.A, {
              targetElementRef: t,
              title: g.intl.string(g.t["1YLUuN"]),
              body: n,
              graphic: { type: "image", src: N.A },
              size: "video",
              alignmentStrategy: "trigger-center",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: g.intl.string(g.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await u.A.addSkuToWishlist(m.pe.TIER_2), f(A.i.TAKE_ACTION);
                          } catch {
                              (0, r.P0)((0, l.o)(g.intl.string(g.t.F8FvUy), c.Ck.FAILURE)),
                                  o.O.announce(g.intl.string(g.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => f(A.i.USER_DISMISS),
          });
}
