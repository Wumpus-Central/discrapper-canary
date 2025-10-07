n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(802433),
    s = n(680295),
    c = n(803580),
    u = n(241822);
let d = (e) => {
    let { skuId: t, isHighlighted: n, forCollectedModal: l = !1, isPurchased: d, removeSetHeight: p = !1 } = e,
        f = l ? 250 : 0.1,
        [h, g] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== l) g(!1);
        else {
            let e = setTimeout(() => {
                g(!1);
            }, f);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, l]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(c.previewContainer, {
                  [c.previewContainerAnimation]: l,
                  [c.previewContainerSetHeight]: !p,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: u,
                      alt: " ",
                      className: l ? c.previewForCollected : c.preview,
                      "aria-hidden": !0,
                  }),
                  !h &&
                      (0, r.jsx)("div", {
                          className: d ? c.purchasedEffect : void 0,
                          children: (0, r.jsx)(s.Z, {
                              skuId: t,
                              useThumbnail: !0,
                              autoPlay: l,
                              restartMethod: o.Q.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              introDelay: f,
                              useOpacityOnHover: !1,
                              shopPreview: !0,
                          }),
                      }),
              ],
          });
};
