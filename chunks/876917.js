var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(802433),
    c = r(680295),
    d = r(537616),
    f = r(241822);
let p = 0.1,
    h = 250,
    _ = (e) => {
        let { profileEffectId: n, isHovering: r, forCollectedModal: i = !1, isPurchased: s, removeSetHeight: _ = !1 } = e,
            m = i ? h : p,
            [g, E] = o.useState(!0);
        return (o.useEffect(() => {
            if (!0 !== i) E(!1);
            else {
                let e = setTimeout(() => {
                    E(!1);
                }, m);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [m, i]),
        null != n)
            ? (0, a.jsxs)('div', {
                  className: l()(d.previewContainer, {
                      [d.previewContainerAnimation]: i,
                      [d.previewContainerSetHeight]: !_
                  }),
                  children: [
                      (0, a.jsx)('img', {
                          src: f,
                          alt: ' ',
                          className: i ? d.previewForCollected : d.preview,
                          'aria-hidden': !0
                      }),
                      !g &&
                          (0, a.jsx)('div', {
                              className: s ? d.purchasedEffect : void 0,
                              children: (0, a.jsx)(c.Z, {
                                  profileEffectId: n,
                                  useThumbnail: !0,
                                  autoPlay: i,
                                  restartMethod: u.j.FromStart,
                                  resetOnHover: !0,
                                  isHovering: r,
                                  introDelay: m,
                                  useOpacityOnHover: !1,
                                  shopPreview: !0
                              })
                          })
                  ]
              })
            : null;
    };
n.Z = _;
