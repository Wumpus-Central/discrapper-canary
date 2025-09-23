r.d(t, { Z: () => d }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(802433),
    s = r(680295),
    c = r(165216),
    u = r(241822);
let d = (e) => {
    let { profileEffectId: t, isHovering: r, forCollectedModal: i = !1, isPurchased: d, removeSetHeight: p = !1 } = e,
        f = i ? 250 : 0.1,
        [b, h] = l.useState(!0);
    return (l.useEffect(() => {
        if (!0 !== i) h(!1);
        else {
            let e = setTimeout(() => {
                h(!1);
            }, f);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, i]),
    null != t)
        ? (0, n.jsxs)("div", {
              className: a()(c.previewContainer, {
                  [c.previewContainerAnimation]: i,
                  [c.previewContainerSetHeight]: !p,
              }),
              children: [
                  (0, n.jsx)("img", {
                      src: u,
                      alt: " ",
                      className: i ? c.previewForCollected : c.preview,
                      "aria-hidden": !0,
                  }),
                  !b &&
                      (0, n.jsx)("div", {
                          className: d ? c.purchasedEffect : void 0,
                          children: (0, n.jsx)(s.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: i,
                              restartMethod: o.Q.FromStart,
                              resetOnHover: !0,
                              isHovering: r,
                              introDelay: f,
                              useOpacityOnHover: !1,
                              shopPreview: !0,
                          }),
                      }),
              ],
          })
        : null;
};
