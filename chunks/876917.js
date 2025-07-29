(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(802433),
    l = n(680295),
    c = n(313305),
    u = n(241822);
let d = 0.1,
    _ = 250,
    f = (e) => {
        let { profileEffectId: t, isHovering: n, forCollectedModal: a = !1, isPurchased: f, removeSetHeight: p = !1 } = e,
            h = a ? _ : d,
            [m, g] = i.useState(!0);
        return (i.useEffect(() => {
            if (!0 !== a) g(!1);
            else {
                let e = setTimeout(() => {
                    g(!1);
                }, h);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [h, a]),
        null != t)
            ? (0, r.jsxs)('div', {
                  className: o()(c.previewContainer, {
                      [c.previewContainerAnimation]: a,
                      [c.previewContainerSetHeight]: !p
                  }),
                  children: [
                      (0, r.jsx)('img', {
                          src: u,
                          alt: ' ',
                          className: a ? c.previewForCollected : c.preview,
                          'aria-hidden': !0
                      }),
                      !m &&
                          (0, r.jsx)('div', {
                              className: f ? c.purchasedEffect : void 0,
                              children: (0, r.jsx)(l.Z, {
                                  profileEffectId: t,
                                  useThumbnail: !0,
                                  autoPlay: a,
                                  restartMethod: s.j.FromStart,
                                  resetOnHover: !0,
                                  isHovering: n,
                                  introDelay: h,
                                  useOpacityOnHover: !1,
                                  shopPreview: !0
                              })
                          })
                  ]
              })
            : null;
    };
