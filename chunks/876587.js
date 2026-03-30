n.d(t, { O: () => c });
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(342494),
    a = n(932001),
    r = n(49999),
    o = n(985018),
    d = n(201682);
let c = (e) => {
    let { targetElementRef: t } = e,
        [n, c] = (0, a.kn)([s.M.PREMIUM_WISHLIST_COACHMARK]);
    return n !== s.M.PREMIUM_WISHLIST_COACHMARK
        ? null
        : (0, i.jsx)(l.AM, {
              targetElementRef: t,
              title: o.intl.string(o.t["1YLUuN"]),
              body: o.intl.string(o.t.IqPvOn),
              graphic: { type: "image", src: d.A },
              size: "video",
              alignmentStrategy: "edge",
              align: "right",
              position: "bottom",
              caretConfig: { align: "end" },
              actions: [{ text: o.intl.string(o.t.moIhI0), onClick: () => c(r.i.TAKE_ACTION) }],
              onRequestClose: () => c(r.i.USER_DISMISS),
          });
};
