n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(802433),
    l = n(680295),
    u = n(537616),
    c = n(241822);
let d = 0.1,
    f = 250,
    _ = (e) => {
        let { profileEffectId: t, isHovering: n, forCollectedModal: a = !1, isPurchased: _, removeSetHeight: p = !1 } = e,
            h = a ? f : d,
            [m, g] = r.useState(!0);
        return (r.useEffect(() => {
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
            ? (0, i.jsxs)('div', {
                  className: s()(u.previewContainer, {
                      [u.previewContainerAnimation]: a,
                      [u.previewContainerSetHeight]: !p
                  }),
                  children: [
                      (0, i.jsx)('img', {
                          src: c,
                          alt: ' ',
                          className: a ? u.previewForCollected : u.preview,
                          'aria-hidden': !0
                      }),
                      !m &&
                          (0, i.jsx)('div', {
                              className: _ ? u.purchasedEffect : void 0,
                              children: (0, i.jsx)(l.Z, {
                                  profileEffectId: t,
                                  useThumbnail: !0,
                                  autoPlay: a,
                                  restartMethod: o.j.FromStart,
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
