"use strict";
n.d(t, { O: () => E });
var i = n(627968);
n(64700);
var r = n(554146),
    s = n(43105),
    a = n(691540),
    o = n(857250),
    l = n(97483),
    u = n(765178),
    c = n(131607),
    d = n(808247),
    _ = n(788868),
    h = n(49999),
    f = n(375708),
    p = n(201682);
let E = (e) => {
    let { targetElementRef: t, body: n = f.intl.string(f.t.IqPvOn) } = e,
        [E, m] = (0, c.kn)([r.M.PREMIUM_WISHLIST_COACHMARK]);
    return E !== r.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(s.A, {
              targetElementRef: t,
              title: f.intl.string(f.t["1YLUuN"]),
              body: n,
              graphic: { type: "image", src: p.A },
              size: "video",
              alignmentStrategy: "edge",
              align: "right",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [
                  {
                      text: f.intl.string(f.t["8DkMEQ"]),
                      onClick: async () => {
                          try {
                              await d.A.addSkuToWishlist(_.pe.TIER_2), m(h.i.TAKE_ACTION);
                          } catch {
                              (0, a.P0)((0, o.o)(f.intl.string(f.t.F8FvUy), l.Ck.FAILURE)),
                                  u.O.announce(f.intl.string(f.t.F8FvUy));
                          }
                      },
                  },
              ],
              onRequestClose: () => m(h.i.USER_DISMISS),
          });
};
