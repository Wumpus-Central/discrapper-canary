(r.d(t, { Z: () => d }), r(388685));
var n = r(255367),
    a = r(73800),
    l = r(120356),
    i = r.n(l),
    o = r(802433),
    s = r(680295),
    c = r(313305),
    u = r(241822);
let d = (e) => {
    let { profileEffectId: t, isHovering: r, forCollectedModal: l = !1, isPurchased: d, removeSetHeight: p = !1 } = e,
        b = l ? 250 : 0.1,
        [h, f] = a.useState(!0);
    return (a.useEffect(() => {
        if (!0 !== l) f(!1);
        else {
            let e = setTimeout(() => {
                f(!1);
            }, b);
            return () => {
                clearTimeout(e);
            };
        }
    }, [b, l]),
    null != t)
        ? (0, n.jsxs)('div', {
              className: i()(c.previewContainer, {
                  [c.previewContainerAnimation]: l,
                  [c.previewContainerSetHeight]: !p
              }),
              children: [
                  (0, n.jsx)('img', {
                      src: u,
                      alt: ' ',
                      className: l ? c.previewForCollected : c.preview,
                      'aria-hidden': !0
                  }),
                  !h &&
                      (0, n.jsx)('div', {
                          className: d ? c.purchasedEffect : void 0,
                          children: (0, n.jsx)(s.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: l,
                              restartMethod: o.j.FromStart,
                              resetOnHover: !0,
                              isHovering: r,
                              introDelay: b,
                              useOpacityOnHover: !1,
                              shopPreview: !0
                          })
                      })
              ]
          })
        : null;
};
