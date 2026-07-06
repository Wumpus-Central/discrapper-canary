s.d(t, { O: () => h });
var i = s(627968);
s(64700);
var n = s(554146),
    a = s(43105),
    l = s(691540),
    r = s(857250),
    c = s(97483),
    o = s(765178),
    d = s(131607),
    u = s(808247),
    m = s(202541),
    g = s(49999),
    x = s(375708),
    p = s(201682);
function h(e) {
    let { targetElementRef: t, body: s = x.intl.string(x.t.IqPvOn) } = e,
        [h, f] = (0, d.kn)([n.M.PREMIUM_WISHLIST_COACHMARK]);
    return h !== n.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(a.A, {
              targetElementRef: t,
              title: x.intl.string(x.t["1YLUuN"]),
              body: s,
              graphic: { type: "image", src: p.A },
              size: "video",
              alignmentStrategy: "trigger-center",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: x.intl.string(x.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await u.A.addSkuToWishlist(m.pe.TIER_2), f(g.i.TAKE_ACTION);
                          } catch {
                              (0, l.P0)((0, r.o)(x.intl.string(x.t.F8FvUy), c.Ck.FAILURE)),
                                  o.O.announce(x.intl.string(x.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => f(g.i.USER_DISMISS),
          });
}
