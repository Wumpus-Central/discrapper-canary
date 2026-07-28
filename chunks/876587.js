s.d(t, { O: () => p });
var i = s(477900);
s(582128);
var n = s(554146),
    a = s(43105),
    r = s(691540),
    l = s(857250),
    c = s(97483),
    o = s(765178),
    d = s(131607),
    u = s(808247),
    m = s(202541),
    g = s(49999),
    x = s(375708),
    f = s(201682);
function p(e) {
    let { targetElementRef: t, body: s = x.intl.string(x.t.IqPvOn) } = e,
        [p, h] = (0, d.kn)([n.M.PREMIUM_WISHLIST_COACHMARK]);
    return p !== n.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(a.A, {
              targetElementRef: t,
              title: x.intl.string(x.t["1YLUuN"]),
              body: s,
              graphic: { type: "image", src: f.A },
              size: "video",
              alignmentStrategy: "trigger-center",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: x.intl.string(x.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await u.A.addSkuToWishlist(m.pe.TIER_2), h(g.i.TAKE_ACTION);
                          } catch {
                              (0, r.P0)((0, l.o)(x.intl.string(x.t.F8FvUy), c.Ck.FAILURE)),
                                  o.O.announce(x.intl.string(x.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => h(g.i.USER_DISMISS),
          });
}
