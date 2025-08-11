r.d(t, { Z: () => d }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(802433),
    s = r(680295),
    c = r(313305),
    u = r(241822);
let d = (e) => {
    let { profileEffectId: t, isHovering: r, forCollectedModal: a = !1, isPurchased: d, removeSetHeight: p = !1 } = e,
        g = a ? 250 : 0.1,
        [f, b] = l.useState(!0);
    return (l.useEffect(() => {
        if (!0 !== a) b(!1);
        else {
            let e = setTimeout(() => {
                b(!1);
            }, g);
            return () => {
                clearTimeout(e);
            };
        }
    }, [g, a]),
    null != t)
        ? (0, n.jsxs)("div", {
              className: i()(c.previewContainer, {
                  [c.previewContainerAnimation]: a,
                  [c.previewContainerSetHeight]: !p,
              }),
              children: [
                  (0, n.jsx)("img", {
                      src: u,
                      alt: " ",
                      className: a ? c.previewForCollected : c.preview,
                      "aria-hidden": !0,
                  }),
                  !f &&
                      (0, n.jsx)("div", {
                          className: d ? c.purchasedEffect : void 0,
                          children: (0, n.jsx)(s.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: a,
                              restartMethod: o.j.FromStart,
                              resetOnHover: !0,
                              isHovering: r,
                              introDelay: g,
                              useOpacityOnHover: !1,
                              shopPreview: !0,
                          }),
                      }),
              ],
          })
        : null;
};
